using System;
using Xunit;
using System.Linq;


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

		[Fact]
		public void TestGet()
		{
			//var task = authorizedClient.GetStringAsync(new Uri(baseUri, "api/Heroes"));
			//var text = task.Result;
			//var array = JArray.Parse(text);
			var array = api.Get().ToArray();
			Assert.NotEmpty(array);
		}

		[Fact]
		public void TestPost()
		{
			var hero = api.Post("Abc");
			Assert.Equal("Abc", hero.Name);
		}

		[Fact]
		public void TestPostWithQuery()
		{
			var hero = api.PostWithQuery("Xyz");
			Assert.Equal("Xyz", hero.Name);
		}

		[Fact]
		public void TestSearch()
		{
			var heroes = api.Search("Torna");
			Assert.Single(heroes);
			Assert.Equal("Tornado", heroes[0].Name);
		}

	}
}
