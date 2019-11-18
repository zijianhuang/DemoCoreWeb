using System;
using Xunit;

namespace IntegrationTests
{
	public class TupleFixture : Fonlow.Testing.DefaultHttpClient
	{
        public TupleFixture()
        {
			Api = new DemoWebApi.Controllers.Client.Tuple(HttpClient, BaseUri);
        }

        public DemoWebApi.Controllers.Client.Tuple Api { get; private set; }
    }

	[Collection("ServiceLaunch")]
	public partial class TupleApiIntegration : IClassFixture<TupleFixture>
    {
        public TupleApiIntegration(TupleFixture fixture)
        {
            api = fixture.Api;
        }

        DemoWebApi.Controllers.Client.Tuple api;

    }
}
