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
    [Route("api/imagestore")]
    public class ImageStoreController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IBlobManager _blobManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="blobManager"></param>
        public ImageStoreController(
            IBlobManager blobManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _blobManager = blobManager;
            _userManager = userManager;
        }

        // GET: api/imagestore/test.jpg
        [HttpGet("{name}")]
        async public Task<IActionResult> Get([FromRoute] string name)
        {
            return File((await _blobManager.FindAsync("images", name)).ToArray(), "image/jpeg");
        }
    }
}