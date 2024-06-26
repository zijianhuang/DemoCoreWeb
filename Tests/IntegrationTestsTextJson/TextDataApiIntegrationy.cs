﻿using System;
using Xunit;

namespace IntegrationTests
{
	[Collection(TestConstants.LaunchWebApiAndInit)]
	public partial class TextDataApiIntegration : IClassFixture<TextDataFixture>
	{
		public TextDataApiIntegration(TextDataFixture fixture)
		{
			api = fixture.Api;
		}

		readonly DemoWebApi.Controllers.Client.TextData api;

		[Fact]
		public void TestAthletheSearch()
		{
			string s = api.AthletheSearch(32, 0, null, null, null);
			Assert.Equal("320", s);
		}

		[Fact]
		public void TestAthletheSearch2()
		{
			string s = api.AthletheSearch(32, 0, null, null, "Search");
			Assert.Equal("320Search", s);
		}

		[Fact]
		public void TestAthletheSearch3()
		{
			string s = api.AthletheSearch(32, 0, null, "Sort", "Search");
			Assert.Equal("320SortSearch", s);
		}

		[Fact]
		public void TestAthletheSearch4()
		{
			string s = api.AthletheSearch(32, 0, "Order", "Sort", "Search");
			Assert.Equal("320OrderSortSearch", s);
		}

		[Fact]
		public void TestAthletheSearch5()
		{
			string s = api.AthletheSearch(32, 0, "Order", null, "Search");
			Assert.Equal("320OrderSearch", s);
		}

		[Fact]
		public void TestAthletheSearch6()
		{
			string s = api.AthletheSearch(32, 0, "Order", "", "Search");
			Assert.Equal("320OrderSearch", s);
		}

		[Fact]
		public void TestGetABCDE()
		{
			Assert.Equal("ABCDE", api.GetABCDE());
		}

		[Fact]
		public void TestGetEmptyString()
		{
			Assert.Equal(String.Empty, api.GetEmptyString());
		}

		[Fact]
		public void TestGetNullString()
		{
			Assert.Null(api.GetNullString());
		}


	}
}
