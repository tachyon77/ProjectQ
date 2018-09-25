using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;
using ProjectQ.DAL;

namespace ProjectQ.BusinessLogic
{
    public class SearchManager : ISearchManager
    {
        #region Private Members
        private IUnitOfWork _unitOfWork;
        #endregion

        #region Public Members

        public SearchManager(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

		async Task<IEnumerable<SearchResult>> ISearchManager.SearchAsync(string searchPhrase)
		{
			throw new NotImplementedException();
		}


		#endregion
	}
}
