using Fonlow.AspNetCore.Identity;
using Fonlow.WebApp.Accounts;
using Fonlow.WebApp.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace PoemsApp.Controllers
{
	[ApiExplorerSettings(IgnoreApi = true)]
	[Route("token")]
	public class AuthController : ControllerBase
	{
		public ApplicationUserManager UserManager
		{
			get; private set;
		}

		readonly IAuthSettings authSettings;
		readonly SymmetricSecurityKey symmetricSecurityKey;

		public AuthController(ApplicationUserManager userManager, SymmetricSecurityKey symmetricSecurityKey, IAuthSettings authSettings)
		{
			UserManager = userManager;
			this.authSettings = authSettings;
			this.symmetricSecurityKey= symmetricSecurityKey;
		}

		/// <summary>
		/// Token expiration in 24 hours, however, in DEBUG build, 5 minutes plus default 5 minutes ClockSkew. https://stackoverflow.com/questions/47754556/is-there-a-minimum-expiration-time-for-jwtsecuritytoken However, keep-live connection is still working after the token expires. 
		/// The user login also return a unique Id for the connection: connectionId. The client should store this, to refresh token later.
		/// </summary>
		/// <param name="model"></param>
		/// <param name="screenSize"></param>
		/// <param name="viewport"></param>
		/// <param name="pixelRatio"></param>
		/// <returns></returns>
		[AllowAnonymous]
		[Consumes("application/x-www-form-urlencoded")]
		[HttpPost]
		public async Task<ActionResult<TokenResponseModel>> Authenticate([FromForm] UsernameModel model,
			[FromHeader(Name = "x-screen")] string screenSize, [FromHeader(Name = "x-viewport")] string viewport, [FromHeader(Name = "x-pixelRatio")] string pixelRatio)
		{
			ApplicationUser user = await UserManager.FindByNameAsync(model.Username);
			if (user == null)
			{
				return Unauthorized(new { message = "Username or password is invalid" });
			}

			bool passwordIsCorrect = await UserManager.CheckPasswordAsync(user, model.Password);
			if (!passwordIsCorrect)
			{
				return Unauthorized(new { message = "Username or password is incorrect" });
			}

			//todo: In the future, I can use https://github.com/mycsharp/HttpUserAgentParser to get browser and OS, and let the other service to do statistics.
			var connectionId = Guid.NewGuid();
			return await GenerateJwtToken(user, model.Username, connectionId);
		}

		/// <summary>
		/// 
		/// </summary>
		/// <param name="refreshToken"></param>
		/// <param name="username"></param>
		/// <param name="connectionId"></param>
		/// <returns></returns>
		[AllowAnonymous]
		[HttpGet("tokenByRefreshToken")]
		public async Task<ActionResult<TokenResponseModel>> GetTokenWithRefreshToken([FromHeader] string refreshToken, [FromHeader] string username, [FromHeader] Guid connectionId)
		{
			ApplicationUser user = await UserManager.FindByNameAsync(username);
			if (user == null)
			{
				return BadRequest(new { message = "Username or password is invalid" });
			}

			var tokenHelper = new TokensHelper(UserManager, authSettings.TokenProviderName);
			var tokenTextExisting = await tokenHelper.MatchToken(user, authSettings.TokenProviderName, "RefreshToken", refreshToken, connectionId);
			if (!tokenTextExisting)
			{
				return StatusCode(406, new { message = "Invalid to retrieve token through refreshToken" });
			}

			return await GenerateJwtToken(user, username, connectionId); //the old refresh token is removed
		}

		/// <summary>
		/// Generate token and refreshToken.
		/// </summary>
		/// <param name="user"></param>
		/// <param name="username"></param>
		/// <param name="connectionId">connection of existing user login from a device.</param>
		/// <returns></returns>
		async Task<ActionResult<TokenResponseModel>> GenerateJwtToken(ApplicationUser user, string username, Guid connectionId)
		{
			IList<string> roles = await UserManager.GetRolesAsync(user);
			List<Claim> claims = roles.Select(d => new Claim(ClaimTypes.Role, d)).ToList();
			claims.Add(new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName));

#if DEBUG
			TimeSpan span = TimeSpan.FromMinutes(5);
#else
			TimeSpan span = TimeSpan.FromHours(24);
#endif
			DateTimeOffset expires = DateTimeOffset.UtcNow.Add(span);
			JwtSecurityToken token = new JwtSecurityToken(
				issuer: authSettings.Issuer,
				audience: authSettings.Audience,
				expires: expires.UtcDateTime,
				claims: claims,
				signingCredentials: new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256)
				);

			string accessToken = new JwtSecurityTokenHandler().WriteToken(token);

			const string tokenName = "RefreshToken";
			//await UserManager.RemoveAuthenticationTokenAsync(user, Constants.AppCodeName, tokenName);
			var refreshToken = await UserManager.GenerateUserTokenAsync(user, authSettings.TokenProviderName, tokenName);
			//await UserManager.SetAuthenticationTokenAsync(user, Constants.AppCodeName, tokenName, refreshToken);
			var tokenHelper = new TokensHelper(UserManager, authSettings.TokenProviderName);
			await tokenHelper.UpsertToken(user, authSettings.TokenProviderName, tokenName, refreshToken, connectionId);

			return new TokenResponseModel()
			{
				AccessToken = accessToken,
				TokenType = "Bearer",
				Username = username,
				ExpiresIn = Convert.ToInt32(span.TotalSeconds),
				Expires = expires.UtcDateTime.ToString("yyyy-MM-ddTHH:mm:ssZ"),
				RefreshToken = refreshToken,
				ConnectionId = connectionId,
			};
			//The token contains roles info as shown at https://jwt.io/

		}
	}

	public class TokensHelper
	{
		public TokensHelper(ApplicationUserManager userManager, string tokenProviderName)
		{
			this.userManager = userManager;
			this.tokenProviderName = tokenProviderName;
		}

		readonly ApplicationUserManager userManager;

		readonly string tokenProviderName;
		/// <summary>
		/// Add or update a toke of an existing connection.
		/// </summary>
		/// <param name="user"></param>
		/// <param name="loginProvider"></param>
		/// <param name="tokenName"></param>
		/// <param name="newTokenValue"></param>
		/// <param name="connectionId"></param>
		/// <returns></returns>
		public async Task<IdentityResult> UpsertToken(ApplicationUser user, string loginProvider, string tokenName, string newTokenValue, Guid connectionId)
		{
			CustomToken customToken = new CustomToken
			{
				TokenValue = newTokenValue,
				ConnectionId = connectionId,
				Stamp = DateTimeOffset.Now,
			};

			string tokensText = await userManager.GetAuthenticationTokenAsync(user, loginProvider, tokenName);
			if (String.IsNullOrEmpty(tokensText))
			{
				tokensText = "[]";
			}

			var customTokens = System.Text.Json.JsonSerializer.Deserialize<CustomToken[]>(tokensText);
			var tokenList = new List<CustomToken>(customTokens);

			var idx = tokenList.FindIndex(d => d.ConnectionId == connectionId); //remove the token of current connection from a browser tab
			if (idx >= 0)
			{
				tokenList.RemoveAt(idx);
			}

#if DEBUG
			DateTimeOffset tooOldDate = DateTimeOffset.Now.AddHours(-1);
#else
			DateTimeOffset tooOldDate = DateTimeOffset.Now.AddDays(-90);
#endif
			// Remove too old tokens
			var tooOldTokens = tokenList.Where(d => d.Stamp < tooOldDate).ToArray();
			if (tooOldTokens.Length > 0)
			{
				foreach (var item in tooOldTokens)
				{
					tokenList.Remove(item);
				}
			}

			tokenList.Add(customToken);
			string newTokensText = System.Text.Json.JsonSerializer.Serialize<CustomToken[]>(tokenList.ToArray());
			await userManager.RemoveAuthenticationTokenAsync(user, tokenProviderName, tokenName); // need to remove it first, otherwise, Set won't work.
			return await userManager.SetAuthenticationTokenAsync(user, tokenProviderName, tokenName, newTokensText);
		}

		public async Task<bool> MatchToken(ApplicationUser user, string loginProvider, string tokenName, string tokenValue, Guid connectionId)
		{
			string tokensText = await userManager.GetAuthenticationTokenAsync(user, loginProvider, tokenName);
			var customTokens = System.Text.Json.JsonSerializer.Deserialize<CustomToken[]>(tokensText);
			var tokenList = new List<CustomToken>(customTokens);
			var idx = tokenList.FindIndex(d => d.ConnectionId == connectionId && d.TokenValue == tokenValue);
			return idx >= 0;
		}
	}

}
