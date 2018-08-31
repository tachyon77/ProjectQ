using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;
using ProjectQ.BusinessLogic;
using Microsoft.AspNetCore.Identity;
using System.IO;

namespace FrontEnd.Controllers
{
    [Route("api/imagestore")]
    public class ImageStoreController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IBlobManager _blobManager;
        private readonly string ImageContainer = "images";
        private readonly string ContentType = "image/jpeg";

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
            return File((await _blobManager.FindAsync(ImageContainer, name)).ToArray(), ContentType);
        }

        // POST: api/imagestore/test.jpg {Form data}
        [HttpPost]
        [Produces("application/json")]
        async public Task<IActionResult> Post()
        {
            var formFile = Request.Form.Files?.FirstOrDefault();
            if (formFile == null)
            {
                return BadRequest();
            }

            var fileDataMemoryStream = new MemoryStream();
            await formFile.CopyToAsync(fileDataMemoryStream);
            return Ok(await _blobManager.AddAsync(ImageContainer, formFile.FileName, fileDataMemoryStream));
        }
    }
}