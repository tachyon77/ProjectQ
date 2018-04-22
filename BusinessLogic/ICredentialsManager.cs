using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface ICredentialsManager
    {
        Credentials GetForUser(string id);
        Task AddEducationAsync(string id, Education education);
        Task UpdateEducationAsync(string userId, Education education);
        Task AddEmploymentAsync(string id, Employment employment);
        Task UpdateEmploymentAsync(string userId, Employment employment);
    }
}
