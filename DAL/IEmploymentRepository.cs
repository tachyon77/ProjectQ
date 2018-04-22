﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IEmploymentRepository
    {
        IEnumerable<Employment> GetAllForUser(string id);
        Task<Employment> FindEmploymentAsync(int employmentId);
        Task AddEmploymentAsync(string id, Employment employment);
        Task UpdateEmploymentAsync(Employment employment);
    }
}
