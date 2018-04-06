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

        [HttpGet("")]
        async public Task<IActionResult> GetCredentials()
        {
            var appUser = await _userManager.GetUserAsync(User);

            var credentials = _credentialsManager.GetForUser(appUser);

            return Ok(credentials);
        }

    }
}