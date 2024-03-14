using Fonlow.AspNetCore.Identity;
using Fonlow.AspNetCore.Identity.EntityFrameworkCore;
using Fonlow.EntityFrameworkCore.Abstract;
using Fonlow.WebApp.Accounts;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Fonlow.AuthDbCreator
{
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
		/// <param name="config"></param>
		/// <param name="connectDatabase"></param>
		public AuthDb(IConfiguration config, IDbEngineDbContext dbEngineDbContext)
		{
			appConfig = config;
			this.dbEngineDbContext= dbEngineDbContext;
			var IdentitySeedingSection = appConfig.GetSection("IdentitySeeding");
			identitySeeding = new IdentitySeeding();
			IdentitySeedingSection.Bind(identitySeeding);
			var appSettings = appConfig.GetSection("appSettings");
			//dbEngine = appSettings.GetValue<string>("dbEngine");
			if (IdentitySeedingSection != null)
			{
				roleNames = identitySeeding.Roles;
			}

			basicConnectionString = appConfig.GetConnectionString("IdentityConnection");

			this.options = GetOptions();
		}

		public AuthDb(string dbEngine, string connectionString, string[] roleNames, IDbEngineDbContext dbEngineDbContext)
		{
			this.basicConnectionString = connectionString;
			this.roleNames = roleNames;
			this.dbEngineDbContext = dbEngineDbContext;
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
