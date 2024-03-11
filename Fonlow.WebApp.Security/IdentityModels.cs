using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace Fonlow.WebApp.Security
{
	public class ApplicationIdentityRole : IdentityRole<Guid>
	{
		public ApplicationIdentityRole()
		{
			Id = Guid.NewGuid();
		}

		public ApplicationIdentityRole(string roleName) : this()
		{
			Name = roleName;
		}
	}

	public class ApplicationUser : IdentityUser<Guid>, ITrackableEntity
	{
		/// <summary>
		/// Full name of the user. And this could be used as a filter or logical foreight key with a user.
		/// </summary>
		[MaxLength(128)]
		public string FullName { get; set; }

		DateTime createdUtc;

		public DateTime CreatedUtc
		{
			get { return createdUtc; }
			set
			{
				if (value.Kind != DateTimeKind.Utc)
				{
					createdUtc = DateTime.SpecifyKind(value, DateTimeKind.Utc);
				}
				else
				{
					createdUtc = value;
				}
			}
		}

		DateTime modifiedUtc;

		public DateTime ModifiedUtc
		{
			get { return modifiedUtc; }
			set
			{
				if (value.Kind != DateTimeKind.Utc)
				{
					modifiedUtc = DateTime.SpecifyKind(value, DateTimeKind.Utc);
				}
				else
				{
					modifiedUtc = value;
				}
			}
		}
	}

	/// <summary>
	/// Give EF context a hint to update time stamps when SaveChanges().
	/// </summary>
	public interface ITrackableEntity
	{
		DateTime CreatedUtc { get; set; }

		DateTime ModifiedUtc { get; set; }
	}
}