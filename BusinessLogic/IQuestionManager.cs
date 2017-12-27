using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IQuestionManager
    {
        void PostQuestion(Question question);
    }
}
