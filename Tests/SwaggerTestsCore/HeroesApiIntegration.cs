using Fonlow.SwaggerDemo.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace IntegrationTests
{
	public class HeroesFixture : Fonlow.Testing.DefaultHttpClient
	{
		public HeroesFixture()
		{
			Api = new HeroesClient(BaseUri.ToString(), HttpClient);
		}

		public HeroesClient Api { get; private set; }
	}

	[Collection("ServiceLaunch")]
	public partial class HeroesApiIntegration : IClassFixture<HeroesFixture>
	{
		public HeroesApiIntegration(HeroesFixture fixture)
		{
			api = fixture.Api;
		}

		HeroesClient api;

		[Fact]
		public async void TestGet()
		{
			//var task = authorizedClient.GetStringAsync(new Uri(baseUri, "api/Heroes"));
			//var text = task.Result;
			//var array = JArray.Parse(text);
			var array = await api.HeroesGetAsync();
			Assert.NotEmpty(array);
		}

		[Fact]
		public async void TestPost()
		{
			var hero = await api.HeroesPostAsync("Abc");
			Assert.Equal("Abc", hero.Name);
		}

		[Fact]
		public async void TestPostWithQuery()
		{
			var hero = await api.QAsync("Xyz");
			Assert.Equal("Xyz", hero.Name);
		}

		[Fact]
		public async void TestSearch()
		{
			var heroes = await api.SearchAsync("Torna");
			Assert.Single(heroes);
			Assert.Equal("Tornado", heroes.ToArray()[0].Name);
		}

	}
}
