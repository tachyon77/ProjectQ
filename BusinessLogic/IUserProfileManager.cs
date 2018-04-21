using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IUserProfileManager
    {
        Task<UserProfile> GetById(string id);
        Task UpdateNameAsync(string id, string name);
        Task UpdateIntroductionAsync(string id, string introduction);
        Task AddEducationAsync(string id, Education education);
        Task AddEmploymentAsync(string id, Employment employment);
    }
}
