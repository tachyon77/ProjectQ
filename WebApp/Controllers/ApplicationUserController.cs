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
    [Route("api/applicationuser")]
    public class ApplicationUserController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IQuestionFollowerManager _questionFollowerManager;


        /// <summary>
        /// 
        /// </summary>
        /// <param name="questionFollowerManager"></param>
        /// <param name="userManager"></param>
        public ApplicationUserController(
            IQuestionFollowerManager questionFollowerManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _questionFollowerManager = questionFollowerManager;
            _userManager = userManager;
        }

        [HttpGet("me")]
        async public Task<IActionResult> GetMe()
        {
            var user = await _userManager.GetUserAsync(User);

            return Ok(user);
        }


    }
}