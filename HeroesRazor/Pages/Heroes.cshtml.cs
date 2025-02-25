using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Net.Http;

namespace HeroesRazor.Pages
{
	public class HeroesModel : PageModel
	{
		public List<DemoWebApi.Controllers.Client.Hero> heroes;
		public DemoWebApi.Controllers.Client.Hero? selectedHero;
		public string? newHeroName;
		readonly DemoWebApi.Controllers.Client.Heroes heroesApi;

		public HeroesModel(IHttpClientFactory httpClientFactory)
		{
			heroesApi = new DemoWebApi.Controllers.Client.Heroes(httpClientFactory.CreateClient("heroesApi"), new System.Text.Json.JsonSerializerOptions(System.Text.Json.JsonSerializerDefaults.Web));
		}

		public async Task OnGet()
		{
			heroes = new List<DemoWebApi.Controllers.Client.Hero>(await heroesApi.GetHeroesAsync());
		}

		public async Task Add(string name)
		{
			if (string.IsNullOrEmpty(name))
			{
				return;
			}

			name = name.Trim();
			var newHero = await heroesApi.PostAsync(name);
			this.selectedHero = null;
			heroes.Add(newHero);

		}

		public async Task AddAndClear()
		{
			await Add(newHeroName);
			newHeroName = null;

		}

		public async Task Delete(DemoWebApi.Controllers.Client.Hero hero)
		{
			await heroesApi.DeleteAsync(hero.Id);
			heroes.Remove(hero);
			if (selectedHero == hero)
			{
				selectedHero = null;
			}
		}

	}

}
