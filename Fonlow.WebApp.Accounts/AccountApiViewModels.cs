using System.Runtime.Serialization;

namespace Fonlow.WebApp.Accounts
{
	// Models returned by AccountController actions.

	[DataContract]
	public class ExternalLoginViewModel
	{
		[DataMember]
		public string Name { get; set; }

		[DataMember]
		public string Url { get; set; }

		[DataMember]
		public string State { get; set; }
	}

	[DataContract]
	public class ManageInfoViewModel
	{
		[DataMember]
		public string LocalLoginProvider { get; set; }

		[DataMember]
		public string Email { get; set; }

		[DataMember]
		public IEnumerable<UserLoginInfoViewModel> Logins { get; set; }

		[DataMember]
		public IEnumerable<ExternalLoginViewModel> ExternalLoginProviders { get; set; }
	}

	[DataContract]
	public class UserInfoViewModel
	{
		[DataMember(IsRequired = true)]
		public Guid Id { get; set; }

		[DataMember(IsRequired = true)]
		public string UserName { get; set; }

		[DataMember]
		public string FullName { get; set; }

		[DataMember]
		public string Email { get; set; }

		[DataMember]
		public bool HasRegistered { get; set; }

		[DataMember]
		public string LoginProvider { get; set; }

		[DataMember]
		public IReadOnlyCollection<string> Roles { get; set; }

		[DataMember]
		public DateTime CreatedUtc { get; set; }
	}

	[DataContract]
	public class UserLoginInfoViewModel
	{
		[DataMember]
		public string LoginProvider { get; set; }

		[DataMember]
		public string ProviderKey { get; set; }
	}

	[DataContract]
	public class ResetPasswordViewModel
	{
		[DataMember]
		public string Email { get; set; }

		[DataMember]
		public string Password { get; set; }

		[DataMember]
		public string ConfirmPassword { get; set; }

		[DataMember]
		public string Code { get; set; }
	}

	[DataContract]
	public class ApiKey
	{
		[DataMember]
		public string Key { get; set; }

		/// <summary>
		/// Tell the client about expiration
		/// </summary>
		[DataMember]
		public DateTimeOffset ExpiryTime { get; set; }
	}
}
