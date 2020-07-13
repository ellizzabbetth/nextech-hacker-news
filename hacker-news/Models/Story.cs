using System.ComponentModel;
using Newtonsoft.Json;


namespace hacker_news.Models
{
    public class Story
    {
         public string Title { get; set; }

        public string By { get; set; }
        [JsonProperty(DefaultValueHandling = DefaultValueHandling.Populate)]
        [DefaultValue("")]
        public string Url { get; set; }  
    }
}