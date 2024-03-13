using Fonlow.AuthDbCreator;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Threading.Tasks;

namespace AuthDbCreator
{
	/// <summary>
	/// Create database AppAuth for development.
	/// When running "AuthDbCreator.exe dbEngine connectionString", it will create Sqlite database.
	/// Without arguments, this will create a database according to connection string in appsettings.json.
	/// </summary>
	class Program
	{
		static async Task Main(string[] args)
		{
			AuthDb authDb;
			IConfigurationRoot config = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
			if (args.Length == 0)//for internal development
			{
				Console.WriteLine("Create database with connection string in appsetings.json ...");
				authDb = new AuthDb(config, ConnectDatabase);
				await authDb.DropAndCreate();
			}
			else
			{
				var dbEngine = args[0];
				var connectionString = args[1];
				var roleNames = args[2].Split(',');
				Console.WriteLine("Create database with arguments ...");
				authDb = new AuthDb(dbEngine, connectionString, roleNames, ConnectDatabase);
				await authDb.DropAndCreate();
			}

			await authDb.SeedDb();
			Console.WriteLine("Done.");
		}

		static void ConnectDatabase(DbContextOptionsBuilder dcob, string dbEngine, string connectionString)
		{
			switch (dbEngine)
			{
				case "sqlite":
					dcob.UseSqlite(connectionString);
					break;
				case "mysql":
					dcob.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
					break;
				default:
					throw new ArgumentException("Must define dbEngine like sqlite or mysql");
			}
		}
	}

}
