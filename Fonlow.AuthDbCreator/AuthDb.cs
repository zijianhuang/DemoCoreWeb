using Fonlow.WebApp.Security;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Fonlow.AuthDbCreator
{
	public class AuthDb
	{
		public string DbNamePrefix { get; init; }

		public string DbInstanceSuffix { get; init; }

		public string DbNameInInitialConnectionString { get; init; }

		public string DbName => String.IsNullOrEmpty(DbInstanceSuffix) ? $"{DbNamePrefix}Auth" : $"{DbNamePrefix}Auth_{DbInstanceSuffix}";

		public string SqliteDbPath { get; }

		readonly string sqliteDbPath;

		readonly DbContextOptions<ApplicationDbContext> options;

		string[] roleNames = [];

		public AuthDb(string sqliteDbPath)
		{
			this.sqliteDbPath = sqliteDbPath;
			this.options = GetOptions();
		}

		public DbContextOptions<ApplicationDbContext> GetOptions()
		{
			DbContextOptionsBuilder<ApplicationDbContext> optionsBuilder = null;
			IConfigurationRoot config = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
			var webAppSecurity = config.GetSection("WebAppSecurity");
			if (webAppSecurity != null)
			{
				roleNames = webAppSecurity.GetSection("Roles").Get<string[]>();
			}

			if (!String.IsNullOrEmpty(sqliteDbPath))
			{
				Console.WriteLine($"Ready to create {sqliteDbPath} ...");
				optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>().UseSqlite($"Data Source={sqliteDbPath}");
			}
			else
			{
				string basicConnectionString = config.GetConnectionString("IdentityConnection");
				string newConnectionString = String.IsNullOrEmpty(DbNameInInitialConnectionString) ?
					basicConnectionString :
					basicConnectionString.Replace(DbNameInInitialConnectionString, DbName.ToLower(), StringComparison.CurrentCultureIgnoreCase);
				optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>().UseMySql(newConnectionString, ServerVersion.AutoDetect(basicConnectionString));
			}

			var options = optionsBuilder.Options;
			return options;
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

		public async Task UserManagerDoes(Func<ApplicationUserManager, Task> userManagerAction)
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

			Console.WriteLine("Now App seed the database using ASP .NET Web security and relevant providers...");

			using var userStore = new ApplicationUserStore(context);
			ApplicationUserManager userManager = new(userStore, null, new PasswordHasher<ApplicationUser>(), null, null,
				new UpperInvariantLookupNormalizer(), // Web API will by default inject this one, so I have better to use it, SearchByEmail looks up normalizedEmail.
				null, null, null);
			await userManagerAction(userManager);
		}

	}

}
