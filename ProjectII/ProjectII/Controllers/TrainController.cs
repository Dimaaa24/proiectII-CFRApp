using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using ProjectII.Data;

namespace ProjectII.Controllers
{
    [Route("Trains")]
    [ApiController]
    public class TrainController : ControllerBase
    {
        private readonly DataContext context;

        public TrainController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Train>>> GetAll()
        {
            return Ok(context.Trains.ToList());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Train>> GetTrain(int id)
        {
            Train train = context.Trains.Find(id);
            if (train == null)
                return NotFound();
            return Ok(train);
        }

        [HttpPost]
        public async Task<ActionResult<List<Train>>> AddTrain(Train train)
        {
            context.Trains.Add(train);
            await context.SaveChangesAsync();

            return CreatedAtAction(nameof(AddTrain), train, new
            {
                id = train.Id,
                name = train.Name,
                number = train.Number
            });
        }

        [HttpPut("{request.id}")]
        public async Task<ActionResult<List<Train>>> UpdateTrain(Train request)
        {
            Train train = context.Trains.Find(request.Id);

            if (train == null)
            {
                return NotFound();
            }

            train.Name = request.Name;
            train.Number = request.Number;

            await context.SaveChangesAsync();

            return Ok(train);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Train>> Delete(int id)
        {
            foreach (var train in  context.Trains)
            {
                if (train.Id == id)
                    context.Trains.Remove(train);
            }

            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
