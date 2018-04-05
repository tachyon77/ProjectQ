using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IUserProfileManager
    {
        Task<UserProfile> GetById(string id);
    }
}
