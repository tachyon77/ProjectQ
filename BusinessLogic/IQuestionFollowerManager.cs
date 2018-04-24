using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IQuestionFollowerManager
    {
        Task FollowAsync(int userId, int questionId );
        Task UnfollowAsync(int userId, int questionId );
    }
}
