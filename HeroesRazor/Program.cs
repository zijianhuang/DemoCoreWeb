using Fonlow.IntegralExtensions;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

//builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
builder.Services.AddHttpClient("Core3WebAPI", client =>
{
	client.BaseAddress = new Uri("http://localhost:5000");
});

builder.Services.AddHttpClient<DemoWebApi.Controllers.Client.Heroes>(heroesApiClient =>
{
	heroesApiClient.BaseAddress = new Uri("http://localhost:5000");
});

builder.Services.AddScoped<JsonSerializerOptions>(sp =>
{
	var options = new JsonSerializerOptions
	{
		PropertyNameCaseInsensitive = true,
	};

	options.Converters.Add(new Int64JsonConverter()); //Hero.Id is long, 64-bit, exceeding 53-bit precision of JS number

	return options;
})
.AddHttpClient("heroesApi", c=>{
	c.BaseAddress = new Uri("http://localhost:5000/");
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
	app.UseExceptionHandler("/Error");
	// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
	app.UseHsts();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.MapStaticAssets();
app.MapRazorPages()
   .WithStaticAssets();

app.Run();
