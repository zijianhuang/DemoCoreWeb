using Fonlow.Testing;
using System;

namespace IntegrationTests
{
	public class ValuesFixture : DefaultHttpClient
	{
		public ValuesFixture()
		{
			Api = new DemoWebApi.Controllers.Client.Values(HttpClient);
		}

		public DemoWebApi.Controllers.Client.Values Api { get; private set; }
	}

}
