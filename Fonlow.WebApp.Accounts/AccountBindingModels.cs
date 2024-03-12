using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace Fonlow.WebApp.Accounts
{
	// Models used as parameters to AccountController actions.

	[DataContract]
    public class AddExternalLoginBindingModel
    {
        [Required]
        [Display(Name = "External access token")]
        [DataMember]
        public string ExternalAccessToken { get; set; }
    }

    [DataContract]
    public class ChangePasswordBindingModel
    {
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Current password")]
        [DataMember]
        public string OldPassword { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "New password")]
        [DataMember]
        public string NewPassword { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm new password")]
        [Compare("NewPassword", ErrorMessage = "The new password and confirmation password do not match.")]
        [DataMember]
        public string ConfirmPassword { get; set; }
    }

    [DataContract]
    public class RegisterBindingModel
    {
        [Required]
        [Display(Name = "User")]
        [DataMember]
        public string UserName { get; set; }

        [Display(Name = "Full name")]
        [DataMember]
        public string FullName { get; set; }

        [Display(Name = "Email")]
        [DataMember]
        public string Email { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        [DataMember]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        [DataMember]
        public string ConfirmPassword { get; set; }
    }

    [DataContract]
    public class RegisterExternalBindingModel
    {
        [Required]
        [Display(Name = "Email")]
        [DataMember]
        public string Email { get; set; }
    }

    [DataContract]
    public class RemoveLoginBindingModel
    {
        [Required]
        [Display(Name = "Login provider")]
        [DataMember]
        public string LoginProvider { get; set; }

        [Required]
        [Display(Name = "Provider key")]
        [DataMember]
        public string ProviderKey { get; set; }
    }

    [DataContract]
    public class SetPasswordBindingModel
    {
        [Required]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "New password")]
        [DataMember]
        public string NewPassword { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm new password")]
        [Compare("NewPassword", ErrorMessage = "The new password and confirmation password do not match.")]
        [DataMember]
        public string ConfirmPassword { get; set; }
    }

    [DataContract]
    public class SetUserPasswordBindingModel : SetPasswordBindingModel
    {
        [DataMember]
        public string UserId { get; set; }
    }
}