using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Text;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IAnswerRatingManager
    {
        // Client should not need to know if rating entry already exists or not.
        Task<int> AddOrUpdateAsync(AnswerRating answerRating, int userId);
        Task<AnswerRating> FindAsync(int id);
    }
}
