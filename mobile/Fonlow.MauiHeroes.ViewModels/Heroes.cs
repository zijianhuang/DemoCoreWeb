﻿using DemoWebApi.Controllers.Client;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Windows.Input;
using Microsoft.Maui.Controls;

namespace Fonlow.Heroes.VM
{
	public class HeroesVM : INotifyPropertyChanged
	{
		public HeroesVM()
		{
			//       DeleteCommand = new Command<long>(DeleteHero);
			DeleteCommand = new Command<long>(DeleteHero);
			SearchCommand = new Command<string>(Search);
		}

		readonly HttpClient httpClient;
		public void Load(IEnumerable<Hero> items)
		{
			Items = new ObservableCollection<Hero>(items);
			NotifyPropertyChanged("Items");
			NotifyPropertyChanged("Count");
		}

		public event PropertyChangedEventHandler PropertyChanged;

		public ObservableCollection<Hero> Items { get; private set; }

		public IEnumerable<Hero> Top4
		{
			get
			{
				if (Items == null)
				{
					return null;
				}

				return Items.Take(4);
			}
		}

		Hero selected;
		public Hero Selected
		{
			get { return selected; }
			set
			{
				selected = value;
				NotifyPropertyChanged("Selected");
				NotifyPropertyChanged("AllowEdit");
			}
		}

		public int Count
		{
			get
			{
				if (Items == null)
				{
					return 0;
				}

				return Items.Count;
			}
		}

		public void NotifyPropertyChanged([System.Runtime.CompilerServices.CallerMemberName] string propertyName = "")
		{
			PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
		}

		public ICommand DeleteCommand { get; private set; }

		public ICommand SearchCommand { get; private set; }

		async void DeleteHero(long id)
		{
			var first = Items.FirstOrDefault(d => d.Id == id);
			if (first != null)
			{
				if (first.Id == Selected?.Id)
				{
					Selected = null;
				}

				await ClientApiSingleton.Instance.HeroesApi.DeleteAsync(id);
				Items.Remove(first);
				NotifyPropertyChanged("Items");
				NotifyPropertyChanged("Count");
			}

		}

		public bool AllowEdit
		{
			get
			{
				return Selected != null;
			}
		}

		async void Search(string keyword)
		{
			var r = await ClientApiSingleton.Instance.HeroesApi.SearchAsync(keyword); 
			Items = new ObservableCollection<Hero>(r);
			NotifyPropertyChanged("Items");
			NotifyPropertyChanged("Count");
		}

	}
}
