using System.Collections.Generic;
using System.Threading.Tasks;
using hacker_news.Models;
using hacker_news.Repository;
using Microsoft.Extensions.Caching.Memory;
using System;

using System.Net.Http;
using System.Text.Json;
using System.Text.Json.Serialization;


using Newtonsoft.Json;
using Microsoft.Extensions.Options;

using System.Linq;

using Microsoft.AspNetCore.Mvc;


namespace hacker_news.Services
{
  public class HackerNewsService : IHackerNewsService
    {   
        private readonly IMemoryCache _cache;
        private readonly IHackerNewsRepository _repository;


        public HackerNewsService(
            IHackerNewsRepository repository,
            IMemoryCache cache)
        {
            _cache = cache;
            _repository = repository;
        }
        

   
    private async Task<Story> GetStoryAsync(int storyId)
    {
    
        return await _cache.GetOrCreateAsync<Story>(
            storyId, // storyId is cache key
            async cacheEntry =>
            {
                Story story = new Story();

                var response = await _repository.GetStoryByIdAsync(storyId);
                if (response.IsSuccessStatusCode)
                {
                    var storyResponse = response.Content.ReadAsStringAsync().Result;
                    story = JsonConvert.DeserializeObject<Story>(storyResponse);
                }

                return story;
            });
    }
    public async Task<List<Story>> GetNewStoriesAsync()
    {
        
        List<Story> stories = new List<Story>();

        var response = await _repository.GetNewStoriesAsync();
        if (response.IsSuccessStatusCode)
        {
            var storiesResponse = response.Content.ReadAsStringAsync().Result;
            var bestIds = JsonConvert.DeserializeObject<List<int>>(storiesResponse);

            var tasks = bestIds.Select(GetStoryAsync);
            stories = (await Task.WhenAll(tasks)).ToList();
        } 
        return stories;
    }

  
    }
}