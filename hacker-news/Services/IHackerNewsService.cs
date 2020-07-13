using System.Collections.Generic;
using System.Threading.Tasks;
using hacker_news.Models;

namespace hacker_news.Services
{
    public interface IHackerNewsService
    {
                Task<List<Story>> GetNewStoriesAsync();
    }
}