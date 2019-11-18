using System;
using Xunit;

namespace IntegrationTests
{
	public class EntitiesFixture : Fonlow.Testing.DefaultHttpClient
    {
        public EntitiesFixture()
        {
            Api = new DemoWebApi.Controllers.Client.Entities(HttpClient, BaseUri);
        }

        public DemoWebApi.Controllers.Client.Entities Api { get; private set; }
    }


	[Collection("ServiceLaunch")]
    public partial class EntitiesApiIntegration : IClassFixture<EntitiesFixture>
    {
        public EntitiesApiIntegration(EntitiesFixture fixture)
        {
            api = fixture.Api;
        }

        DemoWebApi.Controllers.Client.Entities api;

    }
}
