using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using DemoWebApi.Controllers.Client;


namespace HeroesRazor.Pages
{
	public class DashboardModel : PageModel
	{
		public Hero[] Heroes { get; set; }

		public DashboardModel(IHttpClientFactory httpClientFactory)
		{
			heroesApi = new DemoWebApi.Controllers.Client.Heroes(httpClientFactory.CreateClient("heroesApi"), new System.Text.Json.JsonSerializerOptions(System.Text.Json.JsonSerializerDefaults.Web));
		}

		readonly DemoWebApi.Controllers.Client.Heroes heroesApi;

		public async Task OnGet()
		{
			Heroes = await heroesApi.GetAsyncHeroesAsync();
		}
	}
}
