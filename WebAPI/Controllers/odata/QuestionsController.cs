using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.OData;
using ProjectQ.Model;


namespace ProjectQ.WebAPI.Controllers.Odata
{
    public class QuestionsController : ODataController
    {
        private ProjectQEntities db = new ProjectQEntities();

        [EnableQuery]
        public IQueryable<Question> Get()
        {
            return db.Questions;
        }
        [EnableQuery]
        public SingleResult<Question> Get([FromODataUri] int key)
        {
            IQueryable<Question> result = db.Questions.Where(p => p.Id == key);
            return SingleResult.Create(result);
        }

        public async Task<IHttpActionResult> Post(Question Question)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.Questions.Add(Question);
            await db.SaveChangesAsync();
            return Created(Question);
        }

        public async Task<IHttpActionResult> Patch([FromODataUri] int key, Delta<Question> Question)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var entity = await db.Questions.FindAsync(key);
            if (entity == null)
            {
                return NotFound();
            }
            Question.Patch(entity);
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuestionExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return Updated(entity);
        }
        public async Task<IHttpActionResult> Put([FromODataUri] int key, Question update)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (key != update.Id)
            {
                return BadRequest();
            }
            db.Entry(update).State = EntityState.Modified;
            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuestionExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return Updated(update);
        }

        public async Task<IHttpActionResult> Delete([FromODataUri] int key)
        {
            var Question = await db.Questions.FindAsync(key);
            if (Question == null)
            {
                return NotFound();
            }
            db.Questions.Remove(Question);
            await db.SaveChangesAsync();
            return StatusCode(HttpStatusCode.NoContent);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool QuestionExists(int key)
        {
            return db.Questions.Any(e => e.Id == key);
        }
    }
}
