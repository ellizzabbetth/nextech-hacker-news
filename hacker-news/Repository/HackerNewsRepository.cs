using System.Net.Http;
using System.Threading.Tasks;

namespace hacker_news.Repository
{
     public class HackerNewsRepository: IHackerNewsRepository
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public HackerNewsRepository(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<HttpResponseMessage> GetNewStoriesAsync()
        {
            var client =  _httpClientFactory.CreateClient();
            return await client.GetAsync("https://hacker-news.firebaseio.com/v0/newstories.json");
        }

        

        public async Task<HttpResponseMessage> GetStoryByIdAsync(int id)
        {            
            var client =  _httpClientFactory.CreateClient();
            return await client.GetAsync(string.Format("https://hacker-news.firebaseio.com/v0/item/{0}.json", id));
        }

    }
}