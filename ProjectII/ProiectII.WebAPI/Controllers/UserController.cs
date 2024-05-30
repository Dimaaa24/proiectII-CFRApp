using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public async Task<ActionResult<User>> AddUser(User user)
        {
            // Check if email or username already exists
            var existingUserByEmail = await CFRcontext.Users.FirstOrDefaultAsync(u => u.Email == user.Email);
            var existingUserByUsername = await CFRcontext.Users.FirstOrDefaultAsync(u => u.UserName == user.UserName);

            if (existingUserByEmail != null)
            {
                return Conflict(new { message = "Email is already taken." });
            }

            if (existingUserByUsername != null)
            {
                return Conflict(new { message = "Username is already taken." });
            }

            CFRcontext.Users.Add(user);
            await CFRcontext.SaveChangesAsync();

            return CreatedAtAction(nameof(AddUser), new { id = user.Id }, user);
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
