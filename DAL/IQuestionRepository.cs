using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IQuestionRepository
    {
        Task AddAsync(Question question);
        Task UpdateAsync(Question question);
        Task<IEnumerable<UserSpecificQuestionView>> GetAllForUserAsync(int userId);
        Task<IEnumerable<Question>> GetAllAskedByAsync(int userId);
        Task<Question> FindAsync(int id);
        bool QuestionExists(int id);
    }
}
