using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;
using ProjectQ.BusinessLogic;
using Microsoft.AspNetCore.Identity;
using System.IO;

namespace WebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/upload")]
    public class FileUploadController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        public FileUploadController(
            UserManager<ApplicationUser> userManager
            )
        {
            _userManager = userManager;
        }

        [HttpPost]
        public void Upload()
        {
            var formFile = Request.Form.Files[0];

            // full path to file in temp location
            var filePath = Path.GetTempFileName();

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                formFile.CopyTo(stream);
            }
        }
    }
}