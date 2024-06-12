using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Maui.Controls;
using Microsoft.Maui;
using Fonlow.Heroes.VM;

namespace Fonlow.Heroes.Views
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
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
