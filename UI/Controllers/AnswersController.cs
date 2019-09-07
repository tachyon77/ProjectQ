using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;
using ProjectQ.BusinessLogic;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;

namespace FrontEnd.Controllers
{
    [Produces("application/json")]
    [Route("api/Answers")]
    public class AnswersController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IAnswerManager _answerManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="AnswerManager"></param>
        public AnswersController(
            IAnswerManager AnswerManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _answerManager = AnswerManager;
            _userManager = userManager;
        }
        // GET: api/Answers
        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<Answer> GetAnswers()
        {
            throw new NotImplementedException();
        }

        [HttpGet("ForQuestion/{questionId}")]
        [AllowAnonymous]
        public async Task<IEnumerable<UserSpecificAnswerView>>
            GetForQuestionAndUser([FromRoute] int questionId)
        {
            return await _answerManager.GetForQuestionAndUserAsync(
                questionId, (await _userManager.GetUserAsync(User))?.UserId);
        }


        // GET: api/Answers/5
        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetAnswer([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Answer = await _answerManager.FindAsync(id);

            if (Answer == null)
            {
                return NotFound();
            }

            return Ok(Answer);
        }


        // POST: api/Answers
        [HttpPost]
        public async Task<IActionResult> PostAnswer([FromBody] Answer Answer)
        {           
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _answerManager.AddAsync(
                Answer,
                (await _userManager.GetUserAsync(User)).UserId);

            return CreatedAtAction("GetAnswer", new { id = Answer.Id }, Answer);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Update(long id, [FromBody] Answer updated)
        {
            if (updated == null || updated.Id != id)
            {
                return BadRequest();
            }
            await _answerManager.UpdateAsync(
                (await _userManager.GetUserAsync(User)).UserId, updated);

            return new NoContentResult();
        }

        [HttpPut("delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _answerManager.DeleteAsync(
                (await _userManager.GetUserAsync(User)).UserId, id);

            return new NoContentResult();
        }

        private bool AnswerExists(int id)
        {
            return _answerManager.AnswerExists(id);
        }
    }
}