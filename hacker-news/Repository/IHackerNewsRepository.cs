using System.Net.Http;
using System.Threading.Tasks;

namespace hacker_news.Repository
{
    public interface IHackerNewsRepository
    {
        Task<HttpResponseMessage> GetNewStoriesAsync();
        Task<HttpResponseMessage> GetStoryByIdAsync(int id);
    
    }
}