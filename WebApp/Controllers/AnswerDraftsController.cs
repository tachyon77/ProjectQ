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
    [Route("api/AnswerDrafts")]
    public class AnswerDraftsController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IAnswerDraftManager _draftManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="AnswerManager"></param>
        public AnswerDraftsController(
            IAnswerDraftManager answerDraftManager,
            UserManager<ApplicationUser> userManager
            )
        {
            _draftManager = answerDraftManager;
            _userManager = userManager;
        }
        // GET: api/AnswerDrafts
        [HttpGet]
        public IEnumerable<Answer> GetAnswerDrafts()
        {
            throw new NotImplementedException();
        }

        [HttpGet("ForQuestion/{questionId}")]
        public async Task<AnswerDraft> 
            GetForQuestion([FromRoute] int questionId)
        {
            var userId = (await _userManager.GetUserAsync(User)).UserId;
            return await _draftManager.GetForQuestionAndUserAsync(
                questionId, userId);
        }


        // GET: api/AnswerDrafts/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAnswerDraft([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var draft = await _draftManager.FindAsync(id);

            if (draft == null)
            {
                return NotFound();
            }

            return Ok(draft);
        }

        // GET: api/AnswerDrafts/5/Protected
        [HttpGet("{id}/Protected")]
        public async Task<IActionResult> GetProtectedAnswer([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = (await _userManager.GetUserAsync(User)).UserId;
            var protectedAnswer = await _draftManager.FindProtectedAsync(userId, id);

            if (protectedAnswer == null)
            {
                return NotFound();
            }

            return Ok(protectedAnswer);
        }

        // POST: api/AnswerDrafts
        [HttpPost]
        public async Task<IActionResult> PostAnswerDraft([FromBody] AnswerDraft draft)
        {           
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _draftManager.AddAsync(
                draft,
                (await _userManager.GetUserAsync(User)).UserId);

            return CreatedAtAction("GetAnswer", new { id = draft.Id }, draft);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> Update(long id, [FromBody] AnswerDraft updated)
        {
            if (updated == null || updated.Id != id)
            {
                return BadRequest();
            }
            await _draftManager.UpdateAsync(
                (await _userManager.GetUserAsync(User)).UserId, updated);

            return new NoContentResult();
        }

        [HttpPut("delete/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _draftManager.DeleteAsync(
                (await _userManager.GetUserAsync(User)).UserId, id);

            return new NoContentResult();
        }

        private bool DraftExists(int id)
        {
            return _draftManager.AnswerDraftExists(id);
        }
    }
}