using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;
using ProjectQ.BusinessLogic;
using Microsoft.AspNetCore.Identity;

namespace WebApp.Controllers
{
    [Produces("application/json")]
    [Route("api/AnswerRatings")]
    public class AnswerRatingsController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IAnswerRatingManager _answerRatingManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="AnswerManager"></param>
        public AnswerRatingsController(
            IAnswerRatingManager answerRatingManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _answerRatingManager = answerRatingManager;
            _userManager = userManager;
        }

        // GET: api/AnswerRatings/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAnswerRating([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var answerRating = await _answerRatingManager.FindAsync(id);

            if (answerRating == null)
            {
                return NotFound();
            }

            return Ok(answerRating);
        }

        // POST: api/AnswerRatings
        [HttpPost]
        public async Task<IActionResult> PostAnswerRating(
            [FromBody] AnswerRating answerRating)
        {           
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _userManager.GetUserAsync(User);

            await _answerRatingManager
                .AddOrUpdateAsync(answerRating, (await _userManager.GetUserAsync(User)).UserId);

            return CreatedAtAction(
                "GetAnswerRating", new { id = answerRating.Id }, answerRating);
        }
    }
}