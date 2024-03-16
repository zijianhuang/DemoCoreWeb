using System.Runtime.Serialization;

namespace Fonlow.AspNetCore.Identity
{
	[DataContract]
	public class UsernameModel
	{
		[DataMember]
		public string Username { get; set; }
		[DataMember]
		public string Password { get; set; }
	}

	[DataContract]
	public class UserInitModel : UsernameModel
	{
		[DataMember]
		public string FullName { get; set; }
		[DataMember]
		public string Email { get; set; }
		[DataMember]
		public string Role { get; set; }
	}

	[DataContract]
	public class IdentitySeeding
	{
		[DataMember]
		public string[] Roles { get; set; }

		[DataMember]
		public UserInitModel[] Users { get; set; }
	}
}
