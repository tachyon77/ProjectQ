using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    /// <summary>
    /// 1. Ask question
    /// 2. Set price
    /// 3. Set deadline
    /// 4. Set minimum qualification
    /// 5. Set specific list of people
    /// 6. Specify privacy
    /// 7. Specify ownership
    /// 8. Specify block list
    /// 9. Accept answer
    /// 10. Pay
    /// </summary>
    public interface IQuestionManager
    {
        Task AddAsync(Question question, string userId);
        Task UpdateAsync(Question question, string userId);
        Task<IEnumerable<QuestionPreview>> GetAllForUser(ApplicationUser user);
        Task<IEnumerable<Question>> GetAllAskedBy(ApplicationUser user);
        Task<Question> GetByIdAsync(int id);
        bool QuestionExists(int id);
    }
}
