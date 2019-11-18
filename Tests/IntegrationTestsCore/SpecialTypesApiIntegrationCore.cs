using System;
using Xunit;


namespace IntegrationTests
{
	public class SpecialTypesFixture : Fonlow.Testing.DefaultHttpClient
	{
		public SpecialTypesFixture()
		{
			Api = new DemoCoreWeb.Controllers.Client.SpecialTypes(HttpClient, BaseUri);
		}

		public DemoCoreWeb.Controllers.Client.SpecialTypes Api { get; private set; }
	}


	[Collection("ServiceLaunch")]
	public partial class SpecialTypesApiIntegration : IClassFixture<SpecialTypesFixture>
	{
		public SpecialTypesApiIntegration(SpecialTypesFixture fixture)
		{
			api = fixture.Api;
		}

        DemoCoreWeb.Controllers.Client.SpecialTypes api;

        [Fact]
        public void TestGetAnonymousDynamic()
        {
            var d = api.GetAnonymousDynamic();
            Assert.Equal("12345", d["id"].ToString());
            Assert.Equal("Something", d["name"].ToString());
        }

        [Fact]
        public void TestGetAnonymousObject()
        {
            var d = api.GetAnonymousObject();
            Assert.Equal("12345", d["id"].ToString());
            Assert.Equal("Something", d["name"].ToString());
        }

        [Fact]
        public void TestPostAnonymousObject()
        {
            var d = new Newtonsoft.Json.Linq.JObject();
            d["Id"] = "12345";
            d["Name"] = "Something";
            var r = api.PostAnonymousObject(d);
            Assert.Equal("123451", r["Id"].ToString());
            Assert.Equal("Something1", r["Name"].ToString());

        }

    }
}
