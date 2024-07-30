namespace MauiHeroes.Droid
{
	public static class MauiAndroidProgram
	{
		public static MauiApp CreateMauiApp()
		{
			var builder = MauiApp.CreateBuilder();

			builder
				.UseSharedMauiApp();

			return builder.Build();
		}
	}
}
