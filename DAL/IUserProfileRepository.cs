﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IUserRepository
    {
        Task<User> FindAsync(int id);
        Task UpdateNameAsync(int id, string name);
        Task UpdateIntroductionAsync(int id, string introduction);
    }
}
