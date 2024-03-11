using Fonlow.WebApp.Security;
using System;
using System.Threading.Tasks;
using Fonlow.AuthDbCreator;
using DemoApp.Accounts;

namespace AuthDbCreator
{
	/// <summary>
	/// Create database AppAuth for development.
	/// When running "AuthDbCreator.exe filePath", it will create Sqlite database.
	/// Without arguments, this will create a database according to connection string in appsettings.json.
	/// </summary>
	class Program
	{
		static async Task Main(string[] args)
		{
			AuthDb authDb;
			if (args.Length == 0)//for internal development
			{
				Console.WriteLine("Create MySQL database with connection string in appsetings.json ...");
				authDb = new AuthDb(null);
				await new AuthDb(null).DropAndCreate();
			}
			else
			{
				var filePath = args[0];
				authDb = new AuthDb(filePath);
				await authDb.DropAndCreate();
			}

			await authDb.UserManagerDoes(async (userManager) =>
			{
				await userManager.CreateUser("admin", "someone@somewhere.com.au", null, "Pppppp*8", RoleConstants.Admin);
			});
		}
	}

}
