using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IGraphQueries
    {
        Task<IEnumerable<Question>> FindRelatedQuestionsAsync(int questionId);
    }
}
