using Fonlow.AspNetCore.Identity;
using Fonlow.AspNetCore.Identity.EntityFrameworkCore;
using Fonlow.EntityFrameworkCore.Abstract;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Fonlow.AuthDbCreator
{
	/// <summary>
	/// Establish ASP.NET Core Identity database, optionally with some seeding for predefined roles and predefined users.
	/// </summary>
	public class AuthDb
	{
		readonly DbContextOptions<ApplicationDbContext> options;

		string[] roleNames = [];

		readonly IConfiguration appConfig;
		readonly IdentitySeeding identitySeeding;

		string basicConnectionString;
		readonly IDbEngineDbContext dbEngineDbContext;

		/// <summary>
		/// Connect to database and get DB options
		/// </summary>
		/// <param name="config">It should contain a connection string named after "IdentityConnection"</param>
		/// <param name="dbEngineDbContext">For specific DB engine</param>
		public AuthDb(IConfiguration config, IDbEngineDbContext dbEngineDbContext)
		{
			appConfig = config;
			basicConnectionString = appConfig.GetConnectionString("IdentityConnection");
			this.dbEngineDbContext= dbEngineDbContext;

			var IdentitySeedingSection = appConfig.GetSection("IdentitySeeding");
			identitySeeding = new IdentitySeeding();
			IdentitySeedingSection.Bind(identitySeeding);
			if (IdentitySeedingSection != null)
			{
				roleNames = identitySeeding.Roles;
			}

			this.options = GetOptions();
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="config"></param>
		/// <param name="connectionString"></param>
		/// <param name="dbEngineDbContext"></param>
		public AuthDb(IConfiguration config, string connectionString, IDbEngineDbContext dbEngineDbContext)
		{
			appConfig = config;
			this.basicConnectionString = connectionString;
			this.dbEngineDbContext = dbEngineDbContext;

			var IdentitySeedingSection = appConfig.GetSection("IdentitySeeding");
			identitySeeding = new IdentitySeeding();
			IdentitySeedingSection.Bind(identitySeeding);
			if (IdentitySeedingSection != null)
			{
				roleNames = identitySeeding.Roles;
			}


			this.options = GetOptions();
		}

		/// <summary>
		/// Make initial connection and get DbContextOptions.
		/// </summary>
		/// <returns></returns>
		public DbContextOptions<ApplicationDbContext> GetOptions()
		{
			var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
			Console.WriteLine($"Ready to create {dbEngineDbContext.DbEngineName} db with {basicConnectionString} ...");
			dbEngineDbContext.ConnectDatabase(optionsBuilder, basicConnectionString);
			return optionsBuilder.Options;
		}

		public async Task DropAndCreate()
		{
			using ApplicationDbContext context = new(options);
			if (await context.Database.EnsureDeletedAsync())
			{
				Console.WriteLine("Old db is deleted.");
			}

			await context.Database.EnsureCreatedAsync();
			Console.WriteLine(String.Format("Database is initialized, created,  or altered through connection string: {0}", context.Database.GetDbConnection().ConnectionString));
		}

		/// <summary>
		/// Seed the DB with predefined roles and some initial users. Both sets of info are declared in config.
		/// </summary>
		/// <returns></returns>
		public async Task SeedDb()
		{
			using ApplicationDbContext context = new(options);
			using var roleStore = new ApplicationRoleStore(context);
			using RoleManager<ApplicationIdentityRole> roleManager = new(roleStore, null, new UpperInvariantLookupNormalizer(), null, null);
			if (!roleManager.Roles.Any())
			{
				Console.WriteLine("Creating roles...");
				var results = roleNames.Select(async d =>
				{
					IdentityResult r = await roleManager.CreateAsync(new ApplicationIdentityRole(d));
					Console.WriteLine(r.Succeeded ? String.Format("Role {0} created.", d)
						: String.Join("; ", r.Errors));
					return r;
				}
				).Select(t=>t.Result).ToArray();
			}

			if (identitySeeding?.Users?.Length > 0)
			{
				Console.WriteLine("Now App seed the database using ASP .NET Web security and relevant providers for some users...");

				using var userStore = new ApplicationUserStore(context);
				ApplicationUserManager userManager = new(userStore, null, new PasswordHasher<ApplicationUser>(), null, null,
					new UpperInvariantLookupNormalizer(), // Web API will by default inject this one, so I had better use it, SearchByEmail looks up normalizedEmail.
					null, null, null);
				foreach (var item in identitySeeding.Users)
				{
					await userManager.CreateUser(item.Username, item.Email, item.FullName, item.Password, item.Role);
					Console.WriteLine($"Added user {item.Username} as {item.Role}");
				}
			}
		}

	}

}
