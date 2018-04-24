using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface ICredentialsManager
    {
        Credentials GetForUser(int userId);
        Task AddEducationAsync(int userId, Education education);
        Task UpdateEducationAsync(int userId, Education education);
        Task AddEmploymentAsync(int userIf, Employment employment);
        Task UpdateEmploymentAsync(int userId, Employment employment);
    }
}
