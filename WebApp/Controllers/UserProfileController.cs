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
    [Route("api/profile")]
    public class UserProfileController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IUserProfileManager _userProfileManager;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="userManager"></param>
        public UserProfileController(
            UserManager<ApplicationUser> userManager,
            IUserProfileManager userProfileManager
            )
        {
            _userManager = userManager;
            _userProfileManager = userProfileManager;
        }

        [HttpGet("me")]
        async public Task<IActionResult> GetMe()
        {
            var appUser = await _userManager.GetUserAsync(User);

            var userProfile = new UserProfile()
            {
                Name = appUser.FirstName
            };

            return Ok(userProfile);
        }

        [HttpGet("{id}")]
        async public Task<IActionResult> GetUserInfo(string id)
        {
            var user = await _userProfileManager.GetById(id);

            return Ok(user);
        }


    }
}