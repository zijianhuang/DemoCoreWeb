using Fonlow.DateOnlyExtensions;
using Fonlow.Testing;
using System;

namespace IntegrationTests
{
	public class SuperDemoFixture : DefaultHttpClientWithUsername
	{
		public SuperDemoFixture()
		{
			var jsonSerializerSettings = new Newtonsoft.Json.JsonSerializerSettings()
			{
				NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore,
			};

			jsonSerializerSettings.Converters.Add(new DateOnlyJsonConverter());
			jsonSerializerSettings.Converters.Add(new DateOnlyNullableJsonConverter());

			Api = new DemoWebApi.Controllers.Client.SuperDemo(AuthorizedClient, jsonSerializerSettings);
		}

		public DemoWebApi.Controllers.Client.SuperDemo Api { get; private set; }
	}
}
