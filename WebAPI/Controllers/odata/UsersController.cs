using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.OData;
using System.Web.OData.Routing;
using ProjectQ.Model;

namespace ProjectQ.WebAPI.Controllers.Odata
{
    public class UsersController : ODataController
    {
        private ProjectQEntities db = new ProjectQEntities();

        // GET: odata/Users
        [EnableQuery]
        public IQueryable<User> Get()
        {
            return db.Users;
        }

        // GET: odata/Users(5)
        [EnableQuery]
        public SingleResult<User> Get([FromODataUri] int key)
        {
            return SingleResult.Create(db.Users.Where(user => user.Id == key));
        }

        // POST: odata/Users
        public async Task<IHttpActionResult> Post(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Users.Add(user);
            await db.SaveChangesAsync();

            return Created(user);
        }

        // DELETE: odata/Users(5)
        public async Task<IHttpActionResult> Delete([FromODataUri] int key)
        {
            User user = await db.Users.FindAsync(key);
            if (user == null)
            {
                return NotFound();
            }

            db.Users.Remove(user);
            await db.SaveChangesAsync();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/Users(5)/Answers
        [EnableQuery]
        public IQueryable<Answer> GetAnswers([FromODataUri] int key)
        {
            return db.Users.Where(m => m.Id == key).SelectMany(m => m.Answers);
        }

        // GET: odata/Users(5)/Questions
        [EnableQuery]
        public IQueryable<Question> GetQuestions([FromODataUri] int key)
        {
            return db.Users.Where(m => m.Id == key).SelectMany(m => m.Questions);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int key)
        {
            return db.Users.Count(e => e.Id == key) > 0;
        }
    }
}
