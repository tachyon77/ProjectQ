using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic
{
    public interface IPurchaseAnswerManager
    {
        // This is to be called after payment/credit card transaction is successful
        Task<int> PurchaseAsync(int answerId, int userId, decimal price);
    }
}
