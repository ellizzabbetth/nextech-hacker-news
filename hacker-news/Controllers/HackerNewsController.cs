using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hacker_news.Models;
using hacker_news.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace hacker_news.Controllers
{
    [Route("api/[controller]")] 
    public class HackerNewsController : Controller
    {
        private readonly IHackerNewsService _hackerNewsService;
        ILogger _logger;
        public HackerNewsController(IHackerNewsService hackerNewsService, ILoggerFactory loggerFactory)
        {
            _hackerNewsService = hackerNewsService;
            _logger = loggerFactory.CreateLogger(nameof(HackerNewsController));
        }   

        // GET api/hackernews
        [HttpGet]
        public async Task<ActionResult> NewStories()
        {
            try
            {
                var newStories = await _hackerNewsService.GetNewStoriesAsync();
                return Ok(newStories);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest(new ApiResponse { Status = false, ErrorMessage = $"Could not load hacker news feed" });
            }
        }
    }
}