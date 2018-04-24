using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IEmploymentRepository
    {
        IEnumerable<Employment> GetAllForUser(int id);
        Task<Employment> FindAsync(int employmentId);
        Task AddAsync(int userId, Employment employment);
        Task UpdateAsync(Employment employment);
    }
}
