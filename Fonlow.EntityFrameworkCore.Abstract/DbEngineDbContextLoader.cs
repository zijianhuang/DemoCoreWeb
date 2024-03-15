using Fonlow.EntityFrameworkCore.Abstract;
using System.Diagnostics;
using System.Reflection;

namespace Fonlow.EntityFrameworkCore
{
	/// <summary>
	/// Load implementation of IDbEngineDbContext from an assembly.
	/// </summary>
	public sealed class DbEngineDbContextLoader
	{
		/// <summary>
		/// Load assembly file with a type implementing IDbEngineDbContext, and return the type as IDbEngineDbContext.
		/// This is to be used in console apps or desktop apps or the startup codes of ASP.NET.
		/// </summary>
		/// <param name="assemblyFilePath"></param>
		/// <returns></returns>
		/// <exception cref="ArgumentException"></exception>
		public static IDbEngineDbContext CreateDbEngineDbContextFromAssemblyFile(string assemblyFilePath)
		{
			Assembly assembly;
			try
			{
				var dir = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);
				var absolutePath = Path.Combine(dir, assemblyFilePath);
				assembly = LoadAssemblyFile(absolutePath);
			}
			catch (Exception e)
			{
				Trace.TraceWarning(String.Format("When loading plugin {0}, ArgumentException: {1}", assemblyFilePath, e.Message));
				throw;
			}

			return CreateDbEngineDbContextFromAssembly(assembly);
		}

		/// <summary>
		/// This is to be used in a caller which is loaded through reflection, for example, a controller in ASP.NET.
		/// </summary>
		/// <param name="assemblyName"></param>
		/// <returns></returns>
		public static IDbEngineDbContext CreateDbEngineDbContextFromAssemblyName(string assemblyName)
		{
			Assembly assembly;
			try
			{
				assembly = Assembly.Load(assemblyName);
			}
			catch (Exception e)
			{
				Trace.TraceWarning(String.Format("When loading plugin {0}, ArgumentException: {1}", assemblyName, e.Message));
				throw;
			}

			return CreateDbEngineDbContextFromAssembly(assembly);
		}

		public static IDbEngineDbContext CreateDbEngineDbContextFromAssembly(Assembly assembly)
		{
			IDbEngineDbContext dbEngineDbContext = null;
			try
			{
				foreach (Type type in assembly.GetTypes())
				{
					if (type.IsClass && type.GetInterface("Fonlow.EntityFrameworkCore.Abstract.IDbEngineDbContext") == typeof(IDbEngineDbContext))
					{
						dbEngineDbContext = (IDbEngineDbContext)Activator.CreateInstance(type);
						break;
					}
				}

				if (dbEngineDbContext == null)
				{
					throw new ArgumentException($"Cannot find derived class of IDbEngineDbContext from {assembly.FullName}");
				}

				return dbEngineDbContext;

			}
			catch (ReflectionTypeLoadException e)
			{
				foreach (Exception ex in e.LoaderExceptions)
				{
					Trace.TraceWarning(String.Format("When loading plugin {0}, GetTypes errors occur: {1}", assembly.FullName, ex.Message));
				}
			}
			catch (TargetInvocationException e)
			{
				Trace.TraceWarning(String.Format("When loading plugin {0}, GetTypes errors occur: {1}", assembly.FullName, e.Message + "~~" + e.InnerException.Message));
			}

			return null;
		}

		static Assembly LoadAssemblyFile(string assemblyFilePath)
		{
			try
			{
				return Assembly.LoadFile(assemblyFilePath);
			}
			catch (Exception ex) when (ex is System.IO.FileLoadException || ex is BadImageFormatException || ex is System.IO.FileNotFoundException || ex is ArgumentException)
			{
				var msg = String.Format("When loading {0}, errors occur: {1}", assemblyFilePath, ex.Message);
				Console.WriteLine(msg);
				Trace.TraceWarning(msg);
				return null;
			}
		}
	}
}
