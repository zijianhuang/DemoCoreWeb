using System.Linq;
using Xunit;


namespace IntegrationTests
{
	public partial class HeroesApiIntegration 
	{

		[Fact]
		public async void TestGet()
		{
			//var task = authorizedClient.GetStringAsync(new Uri(baseUri, "api/Heroes"));
			//var text = task.Result;
			//var array = JArray.Parse(text);
			var array = await api.GetAsync();
			Assert.NotEmpty(array);
		}

		[Fact]
		public async void TestPost()
		{
			var hero = await api.PostAsync("Abc");
			Assert.Equal("Abc", hero.Name);
		}

		[Fact]
		public async void TestPostWithQuery()
		{
			var hero = await api.PostWithQueryAsync("Xyz");
			Assert.Equal("Xyz", hero.Name);
		}

		[Fact]
		public async void TestSearch()
		{
			var heroes = await api.SearchAsync("Torna");
			Assert.Single(heroes);
			Assert.Equal("Tornado", heroes[0].Name);
		}

	}
}
