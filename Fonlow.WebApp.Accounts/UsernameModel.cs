using System.Runtime.Serialization;

namespace Fonlow.WebApp.Accounts
{
	/// <summary>
	/// https://www.ietf.org/rfc/rfc6749.txt
	/// </summary>
	/// <remarks>The controller has better to be using AddNewtonsoftJson to horner DataMemberAttribute. .NET Core apparently like JsonPropertyNameAttribute more.</remarks>
	[DataContract]
	public class TokenResponseModel
	{
		[DataMember(Name = "access_token", IsRequired = true)]
		public string AccessToken { get; set; }

		[DataMember(Name = "token_type", IsRequired = true)]
		public string TokenType { get; set; }

		[DataMember(Name = "expires_in", IsRequired = true)]
		public int ExpiresIn { get; set; }

		[DataMember(Name = "username", IsRequired = true)]
		public string Username { get; set; }

		//[DataMember(Name = "issued", IsRequired = true)]
		//public string Issued { get; set; }

		[DataMember(Name = "expires", IsRequired = true)]
		public string Expires { get; set; }

		[DataMember(Name = "refresh_token")]
		public string RefreshToken { get; set; }

		[DataMember(Name = "api_key")]
		public ApiKey ApiKey { get; set; }

		[DataMember(Name = "connection_id")]
		public Guid ConnectionId { get; set; }
	}

	[DataContract]
	public class CustomToken
	{
		[DataMember]
		public string TokenValue { get; set; }

		[DataMember]
		public Guid ConnectionId { get; set; }

		[DataMember]
		public DateTimeOffset Stamp { get; set; }
	}
}
