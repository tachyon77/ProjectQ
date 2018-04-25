using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IUserManager
    {
        Task<User> AddAsync(string name);
        Task<User> FindAsync(int id);
        User FindByUniqueName(string uniqueName);
        Task UpdateAsync(int id, User updated);
    }
}
