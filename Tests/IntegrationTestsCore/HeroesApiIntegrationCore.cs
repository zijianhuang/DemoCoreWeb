using System;
using Xunit;


namespace IntegrationTests
{
	public class HeroesFixture : Fonlow.Testing.DefaultHttpClient
	{
		public HeroesFixture()
		{
			Api = new DemoWebApi.Controllers.Client.Heroes(HttpClient, BaseUri);
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
