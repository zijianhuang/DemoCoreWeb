namespace Fonlow.Heroes.VM
{
    /// <summary>
    /// For reusing HttpClient to Heroes API, as recommended at https://learn.microsoft.com/en-us/dotnet/maui/data-cloud/rest. No disposal.
    /// </summary>
    public sealed class ClientApiSingleton
    {
        private static readonly Lazy<ClientApiSingleton> lazy =
            new Lazy<ClientApiSingleton>(() => new ClientApiSingleton());

        public static ClientApiSingleton Instance { get { return lazy.Value; } }

        private ClientApiSingleton()
        {
            var httpClient = new HttpClient();
            httpClient.BaseAddress = new Uri("https://fonlow.org");
            HeroesApi = new DemoWebApi.Controllers.Client.Heroes(httpClient, new System.Text.Json.JsonSerializerOptions()
            {
                DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingDefault,
                PropertyNameCaseInsensitive = true,
                NumberHandling = System.Text.Json.Serialization.JsonNumberHandling.AllowReadingFromString, // newtonsoft.json along with converters may return long and int128 as string
            });
        }

        public DemoWebApi.Controllers.Client.Heroes HeroesApi { get; private set; }
    }

}
