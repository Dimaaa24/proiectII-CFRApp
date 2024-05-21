using Microsoft.AspNetCore.Mvc;
using ProiectII.Business.Models;

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

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser(User user)
        {
            CFRContext.Users.Add(user);
            await CFRContext.SaveChangesAsync();

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
