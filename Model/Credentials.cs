using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectQ.Model
{
    public class Credentials
    {
        public IEnumerable<Education> Educations { get; set; }
        public IEnumerable<Employment> Employments { get; set; }
    }
}
