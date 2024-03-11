namespace DemoApp.Accounts
{
	public class DemoAccountHelper
	{

		public bool IsManagerOrAdmin(System.Security.Principal.IPrincipal user)
		{
			return user.IsInRole(RoleConstants.Admin)
				|| user.IsInRole(RoleConstants.Manager);
		}

		public bool IsAdmin(System.Security.Principal.IPrincipal user)
		{
			return user.IsInRole(RoleConstants.Admin);
		}

		public bool IsInternalUser(System.Security.Principal.IPrincipal user)
		{
			return IsManagerOrAdmin(user) || user.IsInRole(RoleConstants.Staff);
		}
	}
}
