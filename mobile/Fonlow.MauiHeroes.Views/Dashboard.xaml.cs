using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Maui.Controls.Xaml;
using Fonlow.Heroes.VM;
using Microsoft.Maui.Controls;
using Microsoft.Maui;

namespace Fonlow.Heroes.Views
{
	[XamlCompilation(XamlCompilationOptions.Compile)]
	public partial class Dashboard : ContentView
	{
		public Dashboard ()
		{
			InitializeComponent ();

        }

        HeroesVM Model
        {
            get
            {
                return BindingContext as HeroesVM;
            }
        }


        async void HeroesListView_ItemSelected(object sender, SelectedItemChangedEventArgs e)
        {
            await Navigation.PushAsync(new HeroDetailPage(Model.Selected.Id));
        }
    }
}