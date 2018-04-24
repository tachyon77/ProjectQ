using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IUserManager
    {
        Task<User> AddAsync(string name);
        Task<User> FindAsync(int id);
        User FindByUniqueName(string uniqueName);
        Task UpdateNameAsync(int id, string name);
        Task UpdateIntroductionAsync(int id, string introduction);
    }
}
