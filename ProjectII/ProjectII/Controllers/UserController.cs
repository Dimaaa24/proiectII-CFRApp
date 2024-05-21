using Microsoft.AspNetCore.Mvc;
using ProjectII.Data;

namespace ProjectII.Controllers
{
    [Route("Users")]
    [ApiController]
    public class UserController : Controller
    {

        private readonly DataContext context;

        public UserController(DataContext context)
        {
            this.context = context;
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            context.Users.Add(user);
            await context.SaveChangesAsync();

            return CreatedAtAction(nameof(AddUser), user, new
            {
                id = user.Id,
                email = user.Email,
                username = user.UserName,
                password = user.Password
            });
        }
    }
}
