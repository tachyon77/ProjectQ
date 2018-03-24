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
        Task<IEnumerable<QuestionPreview>> GetAllForUser(ApplicationUser user);
        Task<IEnumerable<Question>> GetAllAskedBy(ApplicationUser user);
        Task<Question> GetByIdAsync(int id);
        bool QuestionExists(int id);
    }
}
