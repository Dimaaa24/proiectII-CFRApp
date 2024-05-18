using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace ProjectII.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TrainController : ControllerBase
    {
        private static List<Train> trains = new List<Train>
            {
                new Train {
                    Id = 1,
                    Name = "IBG",
                    Number = 779
                },
                new Train {
                    Id = 2,
                    Name = "IBH",
                    Number = 552
                }
            };
        [HttpGet]
        public async Task<ActionResult<List<Train>>> Get()
        {
            return Ok(trains);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Train>> Get(int id)
        {
            var train = trains.Find(h => h.Id == id);
            if (train == null)
                return BadRequest("Train not found.");
            return Ok(train);
        }

        [HttpPost]
        public async Task<ActionResult<List<Train>>> AddTrain(Train train)
        {
            trains.Add(train);
            return Ok(trains);
        }

        [HttpPut]
        public async Task<ActionResult<List<Train>>> UpdateTrain(Train request)
        {
            var train = trains.Find(h => h.Id == request.Id);
            if (train == null)
                return BadRequest("Train not found.");

            train.Name = request.Name;
            train.Number = request.Number;
            
            return Ok(trains);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Train>> Delete(int id)
        {
            var train = trains.Find(h => h.Id == id);
            if (train == null)
                return BadRequest("Train not found.");

            trains.Remove(train);
            return Ok(trains);
        }
    }
}
