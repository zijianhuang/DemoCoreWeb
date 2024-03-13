using Fonlow.AspNetCore.Identity;
using Fonlow.AspNetCore.Identity.EntityFrameworkCore;
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

		string dbEngine;
		string basicConnectionString;

		public AuthDb(IConfiguration config)
		{
			appConfig = config;
			var IdentitySeedingSection = appConfig.GetSection("IdentitySeeding");
			identitySeeding = new IdentitySeeding();
			IdentitySeedingSection.Bind(identitySeeding);
			var appSettings = appConfig.GetSection("appSettings");
			dbEngine = appSettings.GetValue<string>("dbEngine");
			if (IdentitySeedingSection != null)
			{
				roleNames = identitySeeding.Roles;
			}

			basicConnectionString = appConfig.GetConnectionString("IdentityConnection");

			this.options = GetOptions();
		}

		public AuthDb(string dbEngine, string connectionString, string[] roleNames)
		{
			this.dbEngine = dbEngine;
			this.basicConnectionString = connectionString;
			this.roleNames = roleNames;
			this.options = GetOptions();
		}

		public DbContextOptions<ApplicationDbContext> GetOptions()
		{
			var optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
			Console.WriteLine($"Ready to create {dbEngine} db with {basicConnectionString} ...");
			ConnectToDatabase(optionsBuilder);
			return optionsBuilder.Options;
		}

		void ConnectToDatabase(DbContextOptionsBuilder<ApplicationDbContext> dcob)
		{
			switch (dbEngine)
			{
				case "sqlite":
					dcob.UseSqlite(basicConnectionString);
					break;
				case "mysql":
					dcob.UseMySql(basicConnectionString, ServerVersion.AutoDetect(basicConnectionString)); 
					break;
				default:
					throw new ArgumentException("Must define dbEngine like sqlite or mysql");
			}
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

		public async Task SeedDb()
		{
			using ApplicationDbContext context = new(options);
			using var roleStore = new ApplicationRoleStore(context);
			using RoleManager<ApplicationIdentityRole> roleManager = new(roleStore, null, new UpperInvariantLookupNormalizer(), null, null);
			if (!roleManager.Roles.Any())
			{
				Console.WriteLine("Creating roles...");
				Task<IdentityResult>[] results = roleNames.Select(async d =>
				{
					IdentityResult r = await roleManager.CreateAsync(new ApplicationIdentityRole(d));
					Console.WriteLine(r.Succeeded ? String.Format("Role {0} created.", d)
						: String.Join("; ", r.Errors));
					return r;
				}
				).ToArray();
			}

			Console.ReadLine();

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
