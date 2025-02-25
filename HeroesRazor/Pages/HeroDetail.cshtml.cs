using Microsoft.AspNetCore.Mvc.RazorPages;

namespace HeroesRazor.Pages
{
	public class HeroDetailModel : PageModel
	{
		public HeroDetailModel(IHttpClientFactory httpClientFactory)
		{
			heroesApi = new DemoWebApi.Controllers.Client.Heroes(httpClientFactory.CreateClient("heroesApi"), new System.Text.Json.JsonSerializerOptions(System.Text.Json.JsonSerializerDefaults.Web));
		}

		//[Parameter]
		public long Id { get; set; }
		public DemoWebApi.Controllers.Client.Hero? Hero { get; private set; }
		readonly DemoWebApi.Controllers.Client.Heroes heroesApi;

		public async Task OnGet(long id)
		{
			Id= id;
			Hero = await heroesApi.GetHeroAsync(id);
		}

		public async Task Save()
		{
			await heroesApi.PutAsync(Hero);
		}
	}
}
