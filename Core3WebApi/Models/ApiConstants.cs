using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace Fonlow.DemoApp
{
	public static class ApiConstants
	{
		public const string DefaultAuthenticationScheme = JwtBearerDefaults.AuthenticationScheme;
	}
}
