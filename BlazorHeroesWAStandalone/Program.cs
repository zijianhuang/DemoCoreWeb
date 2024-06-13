using BlazorHeroesWAStandalone;
using Fonlow.IntegralExtensions;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using System.Text.Json;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });
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
});

await builder.Build().RunAsync();

