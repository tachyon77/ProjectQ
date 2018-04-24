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
        public IActionResult GetCredentials(int userId)
        {
            Credentials credentials = _credentialsManager.GetForUser(userId);
            return Ok(credentials);
        }

        [HttpPost("educations")]
        async public Task<IActionResult> AddEducation([FromBody] Education education)
        {
            await _credentialsManager.AddEducationAsync(
               (await _userManager.GetUserAsync(User)).UserId, education);
            return new NoContentResult();
        }

        [HttpPut("educations")]
        async public Task<IActionResult> UpdateEducation([FromBody] Education education)
        {
            await _credentialsManager.UpdateEducationAsync(
                (await _userManager.GetUserAsync(User)).UserId, education);
            return new NoContentResult();
        }

        [HttpPost("employments")]
        async public Task<IActionResult> AddEmployment([FromBody] Employment employment)
        {
            await _credentialsManager.AddEmploymentAsync(
                (await _userManager.GetUserAsync(User)).UserId, employment);
            return new NoContentResult();
        }

        [HttpPut("employments")]
        async public Task<IActionResult> UpdateEmployment([FromBody] Employment employment)
        {
            var appUser = await _userManager.GetUserAsync(User);
            await _credentialsManager.UpdateEmploymentAsync(
                (await _userManager.GetUserAsync(User)).UserId, employment);
            return new NoContentResult();
        }
    }
}