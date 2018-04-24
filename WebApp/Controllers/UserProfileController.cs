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
    public class UserController : Controller
    {
        private readonly UserManager<ApplicationUser> _aspUserManager;
        private readonly IUserManager _userManager;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="userManager"></param>
        public UserController(
            UserManager<ApplicationUser> aspUserManager,
            IUserManager userManager
            )
        {
            _aspUserManager = aspUserManager;
            _userManager = userManager;
        }

        [HttpGet("me")]
        async public Task<IActionResult> GetMe()
        {
            var aspUser = await _aspUserManager.GetUserAsync(User);
            var user = await _userManager.FindAsync(aspUser.UserId);
            return Ok(user);
        }

        [HttpGet("{id}")]
        async public Task<IActionResult> GetUserInfo(int userId)
        {
            var user = await _userManager.FindAsync(userId);
            return Ok(user);
        }

        [HttpPut("name")]
        async public Task<IActionResult> UpdateName([FromBody] string name)
        {
            var aspUser = await _aspUserManager.GetUserAsync(User);
            var user = await _userManager.FindAsync(aspUser.UserId);
            await _userManager.UpdateNameAsync(user.Id, name);
            return new NoContentResult();
        }

        [HttpPut("introduction")]
        async public Task<IActionResult> UpdateIntroduction([FromBody] string introduction)
        {
            var aspUser = await _aspUserManager.GetUserAsync(User);
            var user = await _userManager.FindAsync(aspUser.UserId);
            await _userManager.UpdateIntroductionAsync(user.Id, introduction);
            return new NoContentResult();
        }
    }
}