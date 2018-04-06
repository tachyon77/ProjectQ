using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface ICredentialsManager
    {
        Credentials GetForUser(ApplicationUser user);
    }
}
