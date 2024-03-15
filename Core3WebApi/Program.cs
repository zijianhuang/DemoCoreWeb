using Fonlow.AspNetCore.Identity;
using Fonlow.AspNetCore.Identity.EntityFrameworkCore;
using Fonlow.DateOnlyExtensions;
using Fonlow.EntityFrameworkCore;
using Fonlow.WebApp.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.IO;

System.Reflection.Assembly appAssembly = System.Reflection.Assembly.GetExecutingAssembly();
string dirOfAppAssembly = System.IO.Path.GetDirectoryName(appAssembly.Location);
IConfigurationRoot config = new ConfigurationBuilder().AddJsonFile(System.IO.Path.Combine(dirOfAppAssembly, "appsettings.json")).Build();
var appSettings = config.GetSection("appSettings");
var environment = appSettings.GetValue<string>("environment");
var dbEngineDbContextPlugins = appSettings.GetSection("dbEngineDbContextPlugins").Get<string[]>();
var identityConnectionString = config.GetConnectionString("IdentityConnection");
IAuthSetupSecrets authSetupSettings = null;
IAuthSettings authSettings = null;
if (environment == "test")
{
	var authSetupSettingsSection = config.GetSection("AuthSetupSettings");
	var authSetupSettingsObject = new AuthSetupSettings();
	authSetupSettingsSection.Bind(authSetupSettingsObject);
	authSetupSettings = authSetupSettingsObject;
	authSettings = authSetupSettingsObject;
}
else
{
	// fill authSetupSettings with data from a secured storage
}

if (authSetupSettings == null || string.IsNullOrEmpty(authSetupSettings.SymmetricSecurityKeyString))
{
	throw new ArgumentException("Need SymmetricSecurityKeyString"); // or throw whatever app specific exception
}

string webRootPath = "./";
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
Console.WriteLine($"Start at contentRootPath: {builder.Environment.ContentRootPath}; WebRootPath: {builder.Environment.WebRootPath}");

var issuerSigningKey = new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(authSetupSettings.SymmetricSecurityKeyString));
builder.Services.AddSingleton(issuerSigningKey);

builder.Services.AddSingleton(authSettings);

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
		ValidAudience = authSettings.Audience,
		ValidIssuer = authSettings.Issuer,
		IssuerSigningKey = issuerSigningKey,
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
	var dbEngineDbContext = DbEngineDbContextLoader.CreateDbEngineDbContextFromAssemblyFile(dbEngineDbContextPlugins[0] + ".dll");
	//var dbEngineDbContext = DbEngineDbContextLoader.CreateDbEngineDbContextFromAssemblyName(dbEngineDbContextPlugins[0]);
	if (dbEngineDbContext == null)
	{
		Console.Error.WriteLine("No dbEngineDbContext");
		throw new ArgumentException("Need dbEngineDbContextPlugin");
	}

	dbEngineDbContext.ConnectDatabase(dcob, identityConnectionString);
	Console.WriteLine($"DB Engine: {dbEngineDbContext.DbEngineName}");
});

//For usage not with DI
//DbContextOptionsBuilder<ApplicationDbContext> dcobApplication = new();
//ConfigApplicationDbContext(dcobApplication);

builder.Services.AddIdentity<ApplicationUser, ApplicationIdentityRole>()
				.AddEntityFrameworkStores<ApplicationDbContext>()
				.AddUserManager<ApplicationUserManager>()
				.AddDefaultTokenProviders()
				.AddTokenProvider(authSettings.TokenProviderName, typeof(DataProtectorTokenProvider<ApplicationUser>)); //thanks to https://stackoverflow.com/questions/53659247/using-aspnetusertokens-table-to-store-refresh-token-in-asp-net-core-web-api;


var app = builder.Build();

// Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment()) //ASPNETCORE_ENVIRONMENT=Development in web.config
{
	app.UseDeveloperExceptionPage();
}
else
{
//	//Only release build support https redirection.
//#if RELEASE
//	if (useHttps) // for locally running app, no need to have https.
//	{
//		app.UseHttpsRedirection();
//		app.UseHsts();//https://learn.microsoft.com/en-us/aspnet/core/security/enforcing-ssl?view=aspnetcore-6.0
//	}
//#endif
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

static void ConnectDatabase(DbContextOptionsBuilder dcob, string dbEngine, string connectionString)
{
	switch (dbEngine)
	{
		case "sqlite":
			dcob.UseSqlite(connectionString);
			break;
		case "mysql":
			dcob.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
			break;
		default:
			throw new ArgumentException("Must define dbEngine like sqlite or mysql");
	}
}