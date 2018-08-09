using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;


namespace IntegrationTests
{
	public class ValuesFixture : IDisposable
	{
		public ValuesFixture()
		{
			var baseUri = new Uri("http://localhost:5000/");

			httpClient = new System.Net.Http.HttpClient();
			//httpClient.DefaultRequestHeaders
			//  .Accept
			//  .Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));//.net core has different behavior as described at https://github.com/zijianhuang/webapiclientgen/issues/26

			Api = new CoreWebApi.Controllers.Client.Values(httpClient, baseUri);
		}

		public CoreWebApi.Controllers.Client.Values Api { get; private set; }

		System.Net.Http.HttpClient httpClient;

		#region IDisposable pattern
		bool disposed;

		public void Dispose()
		{
			Dispose(true);
			GC.SuppressFinalize(this);
		}

		protected virtual void Dispose(bool disposing)
		{
			if (!disposed)
			{
				if (disposing)
				{
					httpClient.Dispose();
				}

				disposed = true;
			}
		}
		#endregion
	}


	public class ValuesApiIntegration : IClassFixture<ValuesFixture>
	{
		public ValuesApiIntegration(ValuesFixture fixture)
		{
			api = fixture.Api;
		}

		CoreWebApi.Controllers.Client.Values api;


		[Fact]
		public async Task TestGetWithId()
		{
			Assert.Equal("value3", await api.GetAsync(3));
		}


		[Fact]
		public async Task TestGenerateTemplate()
		{
			Assert.Equal("ABC", await api.GenerateTemplateAsync("abc"));
		}

		[Fact]
		public async Task TestPostTuple()
		{
			Assert.Equal("Abc", await api.PostTuple3Async(new Tuple<string, string, int>("Abc", "eft", 3)));
		}

		[Fact]
		public async Task TestPostTupleVariant()
		{
			Assert.Equal("EFG", await api.PostTuple3VariantAsync(new Tuple<string, string, int>("EFG", "eft", 3)));
		}


	}
}
