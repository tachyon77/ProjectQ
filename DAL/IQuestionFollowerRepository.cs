using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IQuestionFollowerRepository
    {
        Task AddFollowerAsync(QuestionFollower questionFollower);
        Task RemoveFollowerAsync(int questionId, ApplicationUser follower);
    }
}
