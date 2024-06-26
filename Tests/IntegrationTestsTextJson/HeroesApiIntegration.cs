﻿using Fonlow.Net.Http;
using System.Net;
using Xunit;
using System.Threading.Tasks;

namespace IntegrationTests
{
	[Collection(TestConstants.LaunchWebApiAndInit)]
	public partial class HeroesApiIntegration : IClassFixture<HeroesFixture>
	{
		public HeroesApiIntegration(HeroesFixture fixture)
		{
			api = fixture.Api;
		}

		readonly DemoWebApi.Controllers.Client.Heroes api;


		[Fact]
		public async Task TestGetAsyncHeroes()
		{
			DemoWebApi.Controllers.Client.Hero[] array = await api.GetAsyncHeroesAsync();
			Assert.NotEmpty(array);
		}

		[Fact]
		public void TestGetHeroes()
		{
			DemoWebApi.Controllers.Client.Hero[] array = api.GetHeroes();
			Assert.NotEmpty(array);
		}

		[Fact]
		public void TestGetHeroNotExists()
		{
			DemoWebApi.Controllers.Client.Hero h = api.GetHero(99999);
			//Console.WriteLine(h.Name); //No compiler warning here, since the lib is generated.
			Assert.Null(h);

			DemoWebApi.Controllers.Client.Hero h2 = GetNullHero();
			//Console.WriteLine(h2.Name); //no compiler warning here either.
			//DoSomethingWithHero(h2);
		}

		[Fact]
		public void TestPost()
		{
			DemoWebApi.Controllers.Client.Hero hero = api.Post("Abc");
			Assert.Equal("Abc", hero.Name);
		}

		[Fact]
		public void TestPostWithNull()
		{
			WebApiRequestException ex = Assert.Throws<WebApiRequestException>(() => api.Post(null));
			Assert.Equal(HttpStatusCode.BadRequest, ex.StatusCode);
		}

		[Fact]
		public void TestPostWithQuery()
		{
			DemoWebApi.Controllers.Client.Hero hero = api.PostWithQuery("Xyz");
			Assert.Equal("Xyz", hero.Name);
		}

		[return: System.Diagnostics.CodeAnalysis.MaybeNullAttribute()]
		DemoWebApi.Controllers.Client.Hero GetNullHero()
		{
			return null;
		}

		//void DoSomethingWithHero([System.Diagnostics.CodeAnalysis.NotNull()] DemoWebApi.Controllers.Client.Hero hero)
		//{
		//	System.Console.WriteLine(hero.Name);
		//}
	}
}
