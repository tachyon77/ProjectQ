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
        Task AddAsync(User user);
        Task<User> FindAsync(int id);
        User FindByUniqueName(string uniqueName);
        Task UpdateAsync(int id, User updated);
    }
}
