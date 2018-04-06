using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using Microsoft.EntityFrameworkCore;

namespace ProjectQ.DAL.EntityFramework
{
    public class EmploymentRepository : IEmploymentRepository
    {
        #region Private Members
        private ProjectQEntities _context;
        #endregion

        public EmploymentRepository(ProjectQEntities context)
        {
            _context = context;
        }

        IEnumerable<Employment> IEmploymentRepository.GetAllForUser(
            string id)
        {
            return _context.Employments.Where(x=>x.AspNetUserId.Equals(id));
        }
    }
}
