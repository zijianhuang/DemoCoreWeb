namespace DemoApp.Accounts
{
    /// <summary>
    /// Roles used in operation contracts and the RoleProvider in ASP .NET
    /// </summary>
    /// <remarks>string constants preferred rather than enum since RoleId is assigned by the DB.</remarks>
    public static class RoleConstants
    {
        /// <summary>
        /// System administrator
        /// </summary>
        public const string Admin = "admin";

        public const string Manager = "manager";

		public const string Staff = "staff";

		public const string Customer = "customer";

		public const string API = "api";

        public const string InternalBusinessAdmins = Admin + "," + Manager;

        public const string InternalRoles = Admin + "," + Manager + "," + Staff;
    }
}
