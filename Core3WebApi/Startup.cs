using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Fonlow.DateOnlyExtensions;

namespace Core3WebApi
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddMvc(
				options =>
				{
#if DEBUG
					options.Conventions.Add(new Fonlow.CodeDom.Web.ApiExplorerVisibilityEnabledConvention());//To make ApiExplorer be visible to WebApiClientGen
#endif
				}
			).AddNewtonsoftJson(
				options =>
				{
					options.SerializerSettings.Converters.Add(new DateOnlyJsonConverter());
					options.SerializerSettings.Converters.Add(new DateOnlyNullableJsonConverter());
					options.SerializerSettings.Converters.Add(new DateTimeOffsetJsonConverter());
					options.SerializerSettings.Converters.Add(new DateTimeOffsetNullableJsonConverter());
					options.SerializerSettings.Converters.Add(new DateTimeJsonConverter());
					options.SerializerSettings.Converters.Add(new DateTimeNullableJsonConverter());
				}
			);

			services.AddControllers();
			services.AddCors();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			//		app.UseHttpsRedirection();

			app.UseRouting();
			app.UseCors(builder => builder.AllowAnyOrigin()
				.AllowAnyHeader().AllowAnyMethod()
				);

			app.UseAuthorization();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});
		}
	}
}
