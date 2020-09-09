using System;
using Xunit;


namespace IntegrationTests
{
	public class ValuesFixture : Fonlow.Testing.DefaultHttpClient
	{
		public ValuesFixture()
		{
			HttpClient.BaseAddress = BaseUri;
			Api = new DemoWebApi.Controllers.Client.Values(HttpClient);
		}

		public DemoWebApi.Controllers.Client.Values Api { get; private set; }
	}


	[Collection("ServiceLaunch")]
	public partial class ValuesApiIntegration : IClassFixture<ValuesFixture>
	{
		public ValuesApiIntegration(ValuesFixture fixture)
		{
			api = fixture.Api;
		}

		DemoWebApi.Controllers.Client.Values api;

	}
}
