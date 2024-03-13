using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fonlow.WebApp.Identity
{
	public class IdentitySettings
	{
		public string[] Roles { get; set; }
	}

	/// <summary>
	/// For auth secrets that exists in app codes during startup. And the info needs to be stored in a secured storage in production.
	/// </summary>
	public interface IAuthSetupSecrets
	{
		/// <summary>
		/// Used for generating bearer token. The key has to be constant, and can not be random like Guid.New(), otherwise if the server is restarted, 
		/// the existing authenticated clients will become unauthorized. In a real world, the constant string has better to be stored through a secured mechanism.
		/// Follow the guidelines on https://learn.microsoft.com/en-us/aspnet/core/fundamentals/configuration/#security-and-user-secrets
		/// and https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets,
		/// and https://learn.microsoft.com/en-us/aspnet/core/security/key-vault-configuration
		/// and work with the IT admin.
		/// </summary>
		string SymmetricSecurityKeyString { get; }
	}

	/// <summary>
	/// For auth info across app code stacks during operations.
	/// </summary>
	public interface IAuthSettings{
		string TokenProviderName { get; }
		string Audience { get; }
		string Issuer { get; }
		string SymmetricSecurityKeyString { get; }
	}

	/// <summary>
	/// For testing and apps that does not require rigid security mechanism.
	/// </summary>
	public class AuthSetupSettings : IAuthSetupSecrets, IAuthSettings
	{
		public string TokenProviderName { get; set; }

		/// <summary>
		/// In production environment, this should be from a secured storage.
		/// </summary>
		public string SymmetricSecurityKeyString { get; set; }

		public string Issuer { get; set; }

		public string Audience { get; set; }
	}
}
