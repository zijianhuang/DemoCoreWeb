﻿using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace DemoWebApi.Models
{
	// Models used as parameters to AccountController actions.

	[JsonObject]
	public class AddExternalLoginBindingModel
	{
		[Required]
		[Display(Name = "External access token")]
		public string ExternalAccessToken { get; set; }
	}

	[JsonObject]
	public class ChangePasswordBindingModel
	{
		[JsonProperty(PropertyName ="OldPwd")]
		[System.Text.Json.Serialization.JsonPropertyName("oldPwd")]
		[System.Text.Json.Serialization.JsonRequired]
		[Required]
		[DataType(DataType.Password)]
		[Display(Name = "Current password")]
		public string OldPassword { get; set; }

		[JsonProperty(Required = Required.Always)]
		[System.Text.Json.Serialization.JsonRequired]
		[Required]
		[StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
		[DataType(DataType.Password)]
		[Display(Name = "New password")]
		public string NewPassword { get; set; }

		[DataType(DataType.Password)]
		[Display(Name = "Confirm new password")]
		[Compare("NewPassword", ErrorMessage = "The new password and confirmation password do not match.")]
		public string ConfirmPassword { get; set; }
	}

	[JsonObject]
	public class RegisterBindingModel
	{
		[Required, EmailAddress]
		[Display(Name = "Email")]
		public string Email { get; set; }

		[Required]
		[StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
		[DataType(DataType.Password)]
		[Display(Name = "Password")]
		public string Password { get; set; }

		[DataType(DataType.Password)]
		[Display(Name = "Confirm password")]
		[Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
		public string ConfirmPassword { get; set; }
	}

	[JsonObject]
	public class RegisterExternalBindingModel
	{
		[Required, EmailAddress]
		[Display(Name = "Email")]
		public string Email { get; set; }
	}

	[JsonObject]
	public class RemoveLoginBindingModel
	{
		[Required]
		[Display(Name = "Login provider")]
		public string LoginProvider { get; set; }

		[Required]
		[Display(Name = "Provider key")]
		public string ProviderKey { get; set; }
	}

	[JsonObject]
	public class SetPasswordBindingModel
	{
		[Required]
		[StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 6)]
		[DataType(DataType.Password)]
		[Display(Name = "New password")]
		public string NewPassword { get; set; }

		[DataType(DataType.Password)]
		[Display(Name = "Confirm new password")]
		[Compare("NewPassword", ErrorMessage = "The new password and confirmation password do not match.")]
		public string ConfirmPassword { get; set; }
	}
}
