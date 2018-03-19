using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IQuestionFollowerManager
    {
        Task FollowAsync( ApplicationUser user, int questionId );
        Task UnfollowAsync(ApplicationUser user, int questionId );
    }
}
