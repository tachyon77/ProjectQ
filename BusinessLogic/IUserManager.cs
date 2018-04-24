using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IUserManager
    {
        Task<User> FindAsync(int id);
        Task UpdateNameAsync(int id, string name);
        Task UpdateIntroductionAsync(int id, string introduction);
    }
}
