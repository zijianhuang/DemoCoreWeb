using Microsoft.EntityFrameworkCore;

namespace Fonlow.EntityFrameworkCore.Sqlite
{
	public class SqliteDbEngineDbContext : Fonlow.EntityFrameworkCore.Abstract.IDbEngineDbContext
	{
		public string DbEngineName => "Sqlite";

		public void ConnectDatabase(DbContextOptionsBuilder dcob, string connectionString)
		{
			dcob.UseSqlite(connectionString);
		}
	}
}
