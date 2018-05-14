using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.Serialization;
namespace CoreNG.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }


		//The scarfolding codes of Core NG put this class nested inside the controller. However, such nested data class is generally not a good practice.
		[DataContract]
		public class WeatherForecast
		{
			[DataMember]
			public string DateFormatted { get; set; }
			[DataMember]
			public int TemperatureC { get; set; }
			[DataMember]
			public string Summary { get; set; }

			[DataMember]
			public int TemperatureF
			{
				get
				{
					return 32 + (int)(TemperatureC / 0.5556);
				}
			}
		}
	}

}
