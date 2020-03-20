using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Core3WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class StatisticsController : ControllerBase
    {
        [HttpGet("distribution")]
        public async Task<dynamic> GetDistribution()
        {
            return new
            {
                Id = 12345,
                Name = "Something",
            };

        }
    }
}