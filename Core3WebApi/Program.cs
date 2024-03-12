using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Fonlow.DateOnlyExtensions;
using Fonlow.WebApp.Security;
using System.IO;

System.Reflection.Assembly appAssembly = System.Reflection.Assembly.GetExecutingAssembly();
string dirOfAppAssembly = System.IO.Path.GetDirectoryName(appAssembly.Location);
IConfigurationRoot config = new ConfigurationBuilder().AddJsonFile(System.IO.Path.Combine(dirOfAppAssembly, "appsettings.json")).Build();
var appSettings = config.GetSection("appSettings");
string webRootPath = "./";
bool useSqlite = false;
string dataDirectory = "./DemoApp_Data";


// WebRootPath is to tell the Web server where to look for files to serve.
// ContentRootPath is to tell the Web service code where to look for data.
// On Windows, ContentRootPath is the starting folder of the app assembly, and on MacOS, it is the user profile folder like //Users/MyName.
// Thus on MacOS, the App_Data folder should be under the user profile folder.
var options = new WebApplicationOptions
{
	WebRootPath = webRootPath,
	Args = args,
};


var builder = WebApplication.CreateBuilder(options);
builder.Configuration.AddConfiguration(config);

builder.Services.AddControllers(configure =>
{
#if DEBUG
	configure.Conventions.Add(new Fonlow.CodeDom.Web.ApiExplorerVisibilityEnabledConvention());//To make ApiExplorer be visible to WebApiClientGen
#endif
	//configure.Filters.Add(new ValidateModelAttribute());

}).AddNewtonsoftJson(options =>
{
	options.SerializerSettings.Converters.Add(new DateOnlyJsonConverter());
	options.SerializerSettings.Converters.Add(new DateOnlyNullableJsonConverter());
	options.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore; //So when controller will ignore null fileds when returing data
});

builder.Services.AddAuthentication(
options =>
{
	options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
	options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
	options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}
).AddJwtBearer(options =>
{
	options.SaveToken = true;
	options.RequireHttpsMetadata = false;
	options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters()
	{
		ValidateIssuer = false,
		ValidateAudience = false,
		ValidAudience = "http://fonlow.com/demoapp",
		ValidIssuer = "http://fonlow.com/demoapp",
		IssuerSigningKey = Fonlow.DemoApp.ApiConstants.SymmetricSecurityKey
	}; // Thanks to https://dotnetdetail.net/asp-net-core-3-0-web-api-token-based-authentication-example-using-jwt-in-vs2019/
});

builder.Services.AddCors(options => options.AddPolicy("All", builder =>
{
	builder.AllowAnyMethod()
		   .AllowAnyOrigin()
		   .AllowAnyHeader()
		   ;
}));

builder.Services.AddDbContext<ApplicationDbContext>(dcob =>
{
	ConfigApplicationDbContext(dcob);
});

//For usage not with DI
DbContextOptionsBuilder<ApplicationDbContext> dcobApplication = new();
ConfigApplicationDbContext(dcobApplication);

builder.Services.AddIdentity<ApplicationUser, ApplicationIdentityRole>()
				.AddEntityFrameworkStores<ApplicationDbContext>()
				.AddUserManager<ApplicationUserManager>()
				.AddDefaultTokenProviders()
				.AddTokenProvider(DemoApp.Accounts.DemoApConstants.AppCodeName, typeof(DataProtectorTokenProvider<ApplicationUser>)); //thanks to https://stackoverflow.com/questions/53659247/using-aspnetusertokens-table-to-store-refresh-token-in-asp-net-core-web-api;


var app = builder.Build();

// Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment()) //ASPNETCORE_ENVIRONMENT=Development in web.config
{
	app.UseDeveloperExceptionPage();
}
else
{
	//Only release build support https redirection.
#if RELEASE
	if (useHttps) // for locally running app, no need to have https.
	{
		app.UseHttpsRedirection();
		app.UseHsts();//https://learn.microsoft.com/en-us/aspnet/core/security/enforcing-ssl?view=aspnetcore-6.0
	}
#endif
}
app.UseAuthentication();
app.UseAuthorization();
app.UseCors("All");


app.MapControllers();

if (args.Length > 1)
{
	app.Urls.Add(builder.Environment.WebRootPath);
}

app.UseStaticFiles(); //This may cause IIS rewrite rule to fail during login. So, not to use IIS Rewrite rule.
					  //and using rewrit in middleware is not worthy, https://learn.microsoft.com/en-us/aspnet/core/fundamentals/url-rewriting?view=aspnetcore-6.0

app.Run();
Console.WriteLine("Run Done.");

void ConfigApplicationDbContext(DbContextOptionsBuilder dcob)
{
	if (useSqlite)
	{
		var dbFilePath = Path.Combine(builder.Environment.ContentRootPath, dataDirectory, "auth.db");
		dcob.UseSqlite($"Data Source={dbFilePath}");
	}
	else
	{
		string identityConnectionString = builder.Configuration.GetConnectionString("IdentityConnection");
		dcob.UseMySql(identityConnectionString, ServerVersion.AutoDetect(identityConnectionString));
	}
}