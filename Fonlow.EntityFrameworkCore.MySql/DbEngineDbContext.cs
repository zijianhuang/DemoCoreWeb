﻿using Microsoft.EntityFrameworkCore;

namespace Fonlow.EntityFrameworkCore.MySql
{
	public class DbEngineDbContext : Fonlow.EntityFrameworkCore.Abstract.IDbEngineDbContext
	{
		public string DbEngineName => "MySql";

		public void ConnectDatabase(DbContextOptionsBuilder dcob, string connectionString)
		{
			dcob.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
		}
	}
}
