using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Maui.Controls.Xaml;
using Microsoft.Maui.Controls;
using Microsoft.Maui;

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

            heroesVM.Load(Fonlow.Heroes.VM.HeroesFunctions.LoadHeroes());
            BindingContext = heroesVM;
        }
    }
}