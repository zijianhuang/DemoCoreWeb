using System;
using Xunit;


namespace IntegrationTests
{
	public class HeroesFixture : Fonlow.Testing.DefaultHttpClient
	{
		public HeroesFixture()
		{
			HttpClient.BaseAddress = BaseUri;
			Api = new DemoWebApi.Controllers.Client.Heroes(HttpClient);
		}

		public DemoWebApi.Controllers.Client.Heroes Api { get; private set; }
	}


	[Collection("ServiceLaunch")]
	public partial class HeroesApiIntegration : IClassFixture<HeroesFixture>
	{
		public HeroesApiIntegration(HeroesFixture fixture)
		{
			api = fixture.Api;
		}

		DemoWebApi.Controllers.Client.Heroes api;

	}
}
