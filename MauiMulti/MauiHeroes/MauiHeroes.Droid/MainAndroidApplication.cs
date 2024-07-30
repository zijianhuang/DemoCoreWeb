using Android.App;
using Android.Runtime;

namespace MauiHeroes.Droid
{
	[Application]
	public class MainAndroidApplication : MauiApplication
	{
		public MainAndroidApplication(IntPtr handle, JniHandleOwnership ownership)
			: base(handle, ownership)
		{
			Console.WriteLine("MainAndroidApplication created");
		}

		protected override MauiApp CreateMauiApp() => MauiAndroidProgram.CreateMauiApp();
	}
}
