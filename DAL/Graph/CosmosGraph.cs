using System;
using System.Collections.Generic;
using System.Text;
using ProjectQ.Model;
using Gremlin.Net.Driver;
using Newtonsoft.Json;
using Gremlin.Net.Structure.IO.GraphSON;
using System.Threading.Tasks;

namespace ProjectQ.DAL.Graph
{
    public class CosmosGraph : IGraphQueries
    {
        private static string hostname = "projectq.gremlin.cosmosdb.azure.com";
        private static int port = 443;
        private static string authKey = "vk8kUfNfB12YkoHer3mwDiHGpkOcCG4zsXTFMNYQhtZLbbtKNKxZ9JnfrdBLAnryTtPGLyoT2ttwkFUlnqCs4Q==";
        private static string database = "questions";
        private static string collection = "graph";

        private static GremlinServer _server;
        private static GremlinClient _client;

        public CosmosGraph()
        {
            _server = new GremlinServer(
                hostname, port, enableSsl: true,
                username: "/dbs/" + database + "/colls/" + collection,
                password: authKey);

            _client = new GremlinClient(
                _server, new GraphSON2Reader(), 
                new GraphSON2Writer(), 
                GremlinClient.GraphSON2MimeType);

        }

        async Task<IEnumerable<Question>> IGraphQueries.FindRelatedQuestionsAsync(int questionId)
        {
            string query = "";
            
            var result = await _client.SubmitAsync<dynamic>(query);

            foreach (var item in result)
            {
                // The vertex results are formed as Dictionaries with a nested dictionary for their properties
                string output = JsonConvert.SerializeObject(item);
                Console.WriteLine(String.Format("\tResult:\n\t{0}", output));
            }
            

            throw new NotImplementedException();
        }

    }
}
