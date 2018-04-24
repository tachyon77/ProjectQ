using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IQuestionFollowerRepository
    {
        Task AddFollowerAsync(QuestionFollower questionFollower);
        Task RemoveFollowerAsync(int questionId, int userId);
        HashSet<int> GetFollowersForQuestion(int questionId);

    }
}
