using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IUserProfileRepository
    {
        Task<UserProfile> GetByIdAsync(string id);
        Task UpdateNameAsync(string id, string name);
        Task UpdateIntroductionAsync(string id, string introduction);

    }
}
