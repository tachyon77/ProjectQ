using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using Microsoft.EntityFrameworkCore;

namespace ProjectQ.DAL.EntityFramework
{
    public class EducationRepository : IEducationRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public EducationRepository(ProjectQEntities context)
        {
            _context = context;
        }

        IEnumerable<Education> IEducationRepository.GetAllForUser(
            ApplicationUser user)
        {
            return _context.Educations.Where(x=>x.UserId.Equals(user.Id));
        }
    }
}
