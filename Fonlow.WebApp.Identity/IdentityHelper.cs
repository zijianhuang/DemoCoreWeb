using Fonlow.AspNetCore.Identity;
using Fonlow.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Fonlow.WebApp.Accounts
{
	/// <summary>
	/// Common functions with ApplicationDbContext.
	/// </summary>
	public class IdentityHelper
	{
		public IdentityHelper(DbContextOptions<ApplicationDbContext> options)
		{
			this.options = options;
		}
		DbContextOptions<ApplicationDbContext> options;

		//public bool IsManagerOrAdmin(System.Security.Principal.IPrincipal user)
		//{
		//	return user.IsInRole(RoleConstants.Admin)
		//		|| user.IsInRole(RoleConstants.Editor);
		//}

		//public bool IsAdmin(System.Security.Principal.IPrincipal user)
		//{
		//	return user.IsInRole(RoleConstants.Admin);
		//}

		//public bool IsInternalUser(System.Security.Principal.IPrincipal user)
		//{
		//	return user.IsInRole(RoleConstants.Admin) || user.IsInRole(RoleConstants.Editor);
		//}

		public string GetFullName(string loginName)
		{
			using ApplicationDbContext context = new(options);
			ApplicationUser u = context.Users.SingleOrDefault(d => d.UserName == loginName);
			return u?.FullName;
		}

		public Guid GetId(string loginName)
		{
			using ApplicationDbContext context = new(options);
			ApplicationUser u = context.Users.SingleOrDefault(d => d.UserName == loginName);
			return u.Id;
		}

		public string GetUserName(string fullName)
		{
			using ApplicationDbContext context = new(options);
			ApplicationUser u = context.Users.SingleOrDefault(d => d.FullName == fullName);
			return u?.UserName;
		}

		public string GetEmailAddress(string fullName)
		{
			using ApplicationDbContext context = new(options);
			ApplicationUser u = context.Users.SingleOrDefault(d => d.FullName == fullName);
			return u?.Email;
		}

		public string GetEmailAddressByUserName(string fullName)
		{
			using ApplicationDbContext context = new(options);
			ApplicationUser u = context.Users.SingleOrDefault(d => d.UserName == fullName);
			return u?.Email;
		}
	}
}