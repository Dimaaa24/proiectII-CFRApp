using Microsoft.AspNetCore.Mvc;
using ProiectII.BusinessModels.Models;
using ProjectII.DataAccess.Sqlite;

namespace ProiectII.WebAPI.Controllers
{
    public class RouteController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
       
        private readonly CFRContext cfrContext;

        public RouteController(CFRContext cfrContext)
        {
            this.cfrContext = cfrContext;
        }

    }
}
