using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectQ.Model;
using ProjectQ.BusinessLogic;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;

namespace FrontEnd.Controllers
{
    [Produces("application/json")]
    [Route("api/search")]
    public class SearchController : Controller
    {
        private readonly UserManager<ApplicationUser> _aspUserManager;
        private readonly ISearchManager _searchManager;

        /// <summary>
        /// Dependency Injector Constructor.
        /// </summary>
        /// <param name="unitOfWork"></param>
        /// <param name="searchManager"></param>
        public SearchController(
            ISearchManager searchManager,
            UserManager<ApplicationUser> aspUserManager
            )
        {
            _searchManager = searchManager;
            _aspUserManager = aspUserManager;
        }

        // GET: api/search?searchPhrase=abcd
        [HttpGet]
        async public Task<IEnumerable<SearchResult>> Search(string searchPhrase)
        {
            return await _searchManager.SearchAsync(searchPhrase);
        }      
    }
}