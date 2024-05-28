using Microsoft.AspNetCore.Mvc;
using ProiectII.BusinessModels.Models;
using ProjectII.DataAccess.Sqlite;

namespace ProjectII.Controllers
{
    [Route("Users")]
    [ApiController]
    public class UserController : Controller
    {

        private readonly CFRContext CFRcontext;

        public UserController(CFRContext CFRcontext)
        {
            this.CFRcontext = CFRcontext ?? throw new ArgumentNullException(nameof(CFRcontext));
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAll()
        {
            return Ok(CFRcontext.Users.ToList());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Train>> GetUser(int id)
        {
            User user = CFRcontext.Users.Find(id);
            if (user == null)
                return NotFound();
            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            CFRcontext.Users.Add(user);
            await CFRcontext.SaveChangesAsync();

            return CreatedAtAction(nameof(AddUser), user, new
            {
                id = user.Id,
                email = user.Email,
                username = user.UserName,
                password = user.Password
            });
        }

        [HttpPut("{request.id}")]
        public async Task<ActionResult<List<Train>>> UpdateUser(User user)
        {
            User userUpdate = CFRcontext.Users.Find(user.Id);

            if (userUpdate == null)
            {
                return NotFound();
            }

            userUpdate.UserName = user.UserName;
            userUpdate.Password = user.Password;
            userUpdate.Email = user.Email;

            await CFRcontext.SaveChangesAsync();

            return Ok(userUpdate);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Train>> Delete(int id)
        {
            foreach (var user in CFRcontext.Users)
            {
                if (user.Id == id)
                    CFRcontext.Users.Remove(user);
            }

            await CFRcontext.SaveChangesAsync();
            return Ok();
        }
    }
}
