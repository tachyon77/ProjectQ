using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IEducationRepository
    {
        IEnumerable<Education> GetAllForUser(string id);
        Task<Education> FindEducationAsync(int educationId);
        Task AddEducationAsync(string id, Education educaiton);
        Task UpdateEducationAsync(Education educaiton);
    }
}
