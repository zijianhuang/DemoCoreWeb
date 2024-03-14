using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using Fonlow.EntityFrameworkCore.Abstract;

namespace Fonlow.EntityFrameworkCore
{
	public sealed class DbEngineDbContextLoader
	{
		public static IDbEngineDbContext CreateDbEngineDbContextFromAssembly(string assemblyName)
		{
			Assembly assembly;
			try
			{
				assembly = Assembly.Load(assemblyName);
				Trace.TraceInformation("Assembly {0} is loaded for type {1}.", assemblyName, "ICommand");
			}
			catch (System.IO.FileLoadException e)
			{
				Trace.TraceWarning(String.Format("When loading plugin {0}, FileLoadException: {1}", assemblyName, e.Message));
				return null;
			}
			catch (BadImageFormatException e)
			{
				Trace.TraceWarning(String.Format("When loading plugin {0}, BadImageFormatException: {1}", assemblyName, e.Message));
				//when file is a win32 dll.
				return null;
			}
			catch (System.IO.FileNotFoundException e)
			{
				Trace.TraceWarning(String.Format("When loading plugin {0}, FileNotFoundException: {1}", assemblyName, e.Message));
				return null;
			}
			catch (ArgumentException e)
			{
				Trace.TraceWarning(String.Format("When loading plugin {0}, ArgumentException: {1}", assemblyName, e.Message));
				return null;
			}

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
					throw new ArgumentException($"Cannot find derived class of ControllersTsClientApiGenBase from {assemblyName}");
				}

				return dbEngineDbContext;

			}
			catch (ReflectionTypeLoadException e)
			{
				foreach (Exception ex in e.LoaderExceptions)
				{
					Trace.TraceWarning(String.Format("When loading plugin {0}, GetTypes errors occur: {1}", assemblyName, ex.Message));
				}
			}
			catch (TargetInvocationException e)
			{
				Trace.TraceWarning(String.Format("When loading plugin {0}, GetTypes errors occur: {1}", assemblyName, e.Message + "~~" + e.InnerException.Message));
			}

			return null;
		}
	}
}
