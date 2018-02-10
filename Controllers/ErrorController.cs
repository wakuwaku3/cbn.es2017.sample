using cbn.es2017.sample.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace cbn.es2017.sample.Controllers
{
    public class ErrorController : Controller
    {
        public IActionResult Index()
        {
            return View(new Models.ErrorViewModel
            {
                RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier
            });
        }
    }
}