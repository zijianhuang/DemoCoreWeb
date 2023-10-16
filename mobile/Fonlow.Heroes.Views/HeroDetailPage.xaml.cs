using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Maui.Controls.Xaml;
using DemoWebApi.Controllers.Client;
using Microsoft.Maui.Controls;
using Microsoft.Maui;

namespace Fonlow.Heroes.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class HeroDetailPage : ContentPage
    {
        public HeroDetailPage(long heroId)
        {
            InitializeComponent();
            BindingContext = VM.HeroesFunctions.LoadHero(heroId);
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
            await VM.HeroesFunctions.SaveAsync(Model);
        }
    }
}