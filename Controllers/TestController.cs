using Microsoft.AspNetCore.Mvc;

namespace cbn.es2017.sample.Controllers
{
    public class TestController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public string Get()
        {
            return "success!";
        }
    }
}