using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    /// <summary>
    /// Register user
    /// </summary>
    public interface IUserManager
    {
        Task AddAsync(User user);
        bool UserExists(string email);
    }
}
