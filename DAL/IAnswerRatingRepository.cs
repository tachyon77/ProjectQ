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
        Task<AnswerRating> GetByAnswerAndUserAsync(int answerId, int userId);
        Task<AnswerRating> FindAsync(int id);
    }
}
