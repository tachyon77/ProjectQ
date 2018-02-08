using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IUserRepository
    {
        Task AddAsync(ApplicationUser user);
        bool UserExists(string email);
        ApplicationUser GetByEmail(string email);
    }
}
