using Microsoft.Extensions.Logging;

namespace MauiHeroes
{
	public static class MauiProgramExtensions
	{
		public static MauiAppBuilder UseSharedMauiApp(this MauiAppBuilder builder)
		{
			builder
				.UseMauiApp<Fonlow.Heroes.App>()
				.ConfigureFonts(fonts =>
				{
					fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
					fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
				});

#if DEBUG
			builder.Logging.AddDebug();
#endif

			return builder;
		}
	}
}
