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

builder.Services.AddScoped<JsonSerializerOptions>(sp =>
{
    var options = new JsonSerializerOptions
    {
        PropertyNameCaseInsensitive = true,
    };

    options.Converters.Add(new BigIntegerJsonConverter());
    options.Converters.Add(new Int64JsonConverter());
    options.Converters.Add(new UInt64JsonConverter());
    options.Converters.Add(new Int128JsonConverter());
    options.Converters.Add(new UInt128JsonConverter());

    options.NumberHandling = System.Text.Json.Serialization.JsonNumberHandling.AllowReadingFromString; // for the sake of UInt128

    //Needed by .NET Framework clients, JavaScript clients and any naughty client, since System.Text.Json is a bit less fault tolerant than Newtonsoft.Json
    options.Converters.Add(new Fonlow.Text.Json.DateOnlyExtensions.DateOnlyJsonConverter());
    options.Converters.Add(new Fonlow.Text.Json.DateOnlyExtensions.DateTimeJsonConverter());
    options.Converters.Add(new Fonlow.Text.Json.DateOnlyExtensions.DateTimeOffsetJsonConverter());

    return options;
});

await builder.Build().RunAsync();
