using DemoWebApi.Controllers.Client;
using Fonlow.Heroes.VM;

namespace Fonlow.Heroes.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class HeroDetailPage : ContentPage
    {
        public HeroDetailPage(long heroId)
        {
            InitializeComponent();
            BindingContext = ClientApiSingleton.Instance.HeroesApi.GetHero(heroId);
        }

        Hero Model
        {
            get
            {
                return BindingContext as Hero;
            }
        }

        private async void Save_Clicked(object sender, EventArgs e)
        {
            await ClientApiSingleton.Instance.HeroesApi.PutAsync(Model);
        }
    }
}