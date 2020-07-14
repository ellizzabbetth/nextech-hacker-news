using System;
using Xunit;
using hacker_news;
using Microsoft.AspNetCore.Mvc.Testing;
using System.Net.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.AspNetCore.Hosting;
using System.Net;
using System.Threading.Tasks;
using test_hacker_news;

namespace test
{
public class ApiIntegrationTest
{

[Fact]
public async Task Test_Get_All()
{

    using (var client = new TestClientProvider().Client)
    {
        var response = await client.GetAsync("/api/hackernews");

        response.EnsureSuccessStatusCode();
        // response.StatusCode.Should().Be(HttpStatusCode.OK);
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }
}
}}
