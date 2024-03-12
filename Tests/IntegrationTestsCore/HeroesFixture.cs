using Fonlow.Testing;
using System;

namespace IntegrationTests
{
	public class HeroesFixture : DefaultHttpClientWithUsername
	{
		public HeroesFixture()
		{
			Api = new DemoWebApi.Controllers.Client.Heroes(AuthorizedClient);
		}

		public DemoWebApi.Controllers.Client.Heroes Api { get; private set; }
	}


}
