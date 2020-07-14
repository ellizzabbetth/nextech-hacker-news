using System;
using System.Net.Http;
using hacker_news;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;

namespace test_hacker_news
{
    public class TestClientProvider : IDisposable
{
    private TestServer server;
    public HttpClient Client { get; private set; }
    // instance of test server
     public TestClientProvider()
    {
        var server = new TestServer(new WebHostBuilder().UseStartup<Startup>());
 
        Client =  server.CreateClient();
    }

        public void Dispose()
        {
            server?.Dispose();
            Client?.Dispose();
        }
    }
}