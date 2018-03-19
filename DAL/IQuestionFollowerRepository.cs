using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IQuestionFollowerRepository
    {
        Task AddQuestionFollowerAsync(QuestionFollower questionFollower);
        Task UpdateQuestionFollowerAsync(QuestionFollower questionFollower);
    }
}
