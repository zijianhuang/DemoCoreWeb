using Microsoft.EntityFrameworkCore;

namespace Fonlow.EntityFrameworkCore.Abstract
{
	/// <summary>
	/// For DB engine specific connection, so the main EF logic is neutral to DB engines. Application codes provide
	/// DbContextOptionsBuilder for the implementation to initialize with a specific DB engine driver/lib.
	/// </summary>
	public interface IDbEngineDbContext
	{
		string DbEngineName { get; }
		void ConnectDatabase(DbContextOptionsBuilder dcob, string connectionString);
	}
}
