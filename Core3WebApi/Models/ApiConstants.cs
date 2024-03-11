using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace Fonlow.DemoApp
{
	public static class ApiConstants
	{
		public const string DefaultAuthenticationScheme = JwtBearerDefaults.AuthenticationScheme;

		/// <summary>
		/// Used for generating bearer token. The key has to be constant, and can not be random like Guid.New(), otherwise if the server is restarted, 
		/// the existing authenticated clients will become unauthorized. In a real world, the constant string has better to be stored through a secured mechanism.
		/// </summary>
		public static readonly SymmetricSecurityKey SymmetricSecurityKey = new(System.Text.Encoding.UTF8.GetBytes("Fonlow.com.Poems.auForWebPosDotNetCoreBearerTokenCreation"));
	}
}
