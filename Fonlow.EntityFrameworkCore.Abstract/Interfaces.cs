using Microsoft.EntityFrameworkCore;

namespace Fonlow.EntityFrameworkCore.Abstract
{
	/// <summary>
	/// For DB engine specific connection, so the main EF logic is neutural to DB engines.
	/// </summary>
	public interface IDbEngineDbContext
	{
		string DbEngineName { get; }
		void ConnectDatabase(DbContextOptionsBuilder dcob, string connectionString);
	}
}
