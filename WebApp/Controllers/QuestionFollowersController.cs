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
    [Route("api/QuestionFollowers")]
    public class QuestionFollowersController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IQuestionFollowerManager _questionFollowerManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="questionManager"></param>
        public QuestionFollowersController(
            IQuestionFollowerManager questionFollowerManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _questionFollowerManager = questionFollowerManager;
            _userManager = userManager;
        }


        // POST: api/QuestionFollowers
        [HttpPost("follow")]
        public async Task<IActionResult> Follow([FromBody] int questionId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _questionFollowerManager.
                FollowAsync(
                    await _userManager.GetUserAsync(User), 
                    questionId
                );

            return CreatedAtRoute("", null, null);
        }

    }
}