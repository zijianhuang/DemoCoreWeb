using Fonlow.Heroes.VM;

namespace Fonlow.Heroes.Views
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class MainTabbedPage : TabbedPage
	{
		public MainTabbedPage ()
		{
			InitializeComponent();
		}

		protected override void OnAppearing()
		{
			LoadHeroes();
			base.OnAppearing();
		}

		void LoadHeroes()
		{
			var heroesVM = new VM.HeroesVM();

			heroesVM.Load(ClientApiSingleton.Instance.HeroesApi.GetHeroes());
			BindingContext = heroesVM;
		}
	}
}