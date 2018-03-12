using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IAnswerRatingRepository
    {
        Task AddAsync(AnswerRating answerRating);
        Task UpdateAsync(AnswerRating answerRating);
        Task<AnswerRating> GetByAnswerAndUser(int answerId, string userId);
        Task<AnswerRating> GetByIdAsync(int id);
    }
}
