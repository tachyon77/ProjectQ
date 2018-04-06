using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;
using ProjectQ.BusinessLogic;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;

namespace WebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/credentials")]
    public class CredentialsController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ICredentialsManager _credentialsManager;
        

        /// <summary>
        /// 
        /// </summary>
        /// <param name="userManager"></param>
        /// <param name="credentialsManager"></param>
        public CredentialsController(
            UserManager<ApplicationUser> userManager,
            ICredentialsManager credentialsManager
            )
        {
            _userManager = userManager;
            _credentialsManager = credentialsManager;
        }

        [HttpGet("{id}")]
        public IActionResult GetCredentials(string id)
        {
            Credentials credentials = _credentialsManager.GetForUser(id);

            return Ok(credentials);
        }

    }
}