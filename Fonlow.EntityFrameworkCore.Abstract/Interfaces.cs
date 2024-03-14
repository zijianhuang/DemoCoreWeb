using Microsoft.EntityFrameworkCore;

namespace Fonlow.EntityFrameworkCore.Abstract
{
	public interface IDbEngineDbContext
	{
		string DbEngineName { get; }
		void ConnectDatabase(DbContextOptionsBuilder dcob, string connectionString);
	}
}
