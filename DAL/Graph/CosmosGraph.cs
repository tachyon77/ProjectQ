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

		public DateTime now;

        public CosmosGraph()
        {
			now = DateTime.Now;

            _server = new GremlinServer(
                hostname, port, enableSsl: true,
                username: "/dbs/" + database + "/colls/" + collection,
                password: authKey);

            _client = new GremlinClient(
                _server, new GraphSON2Reader(), 
                new GraphSON2Writer(), 
                GremlinClient.GraphSON2MimeType);

        }

		public DateTime When()
		{
			return now;
		}

        async public void HelloWorld(int questionId)
        {
			Dictionary<string, string> gremlinQueries = new Dictionary<string, string>
			{
				{ "Cleanup",        "g.V().drop()" },
				{ "AddVertex 1",    "g.addV('person').property('id', 'Mahbub').property('firstName', 'Mahbub').property('age', 38)" },
				{ "AddVertex 2",    "g.addV('person').property('id', 'mary').property('firstName', 'Mary').property('lastName', 'Andersen').property('age', 39)" },
				{ "AddVertex 3",    "g.addV('person').property('id', 'ben').property('firstName', 'Ben').property('lastName', 'Miller')" },
				{ "AddVertex 4",    "g.addV('person').property('id', 'robin').property('firstName', 'Robin').property('lastName', 'Wakefield')" },
				{ "AddEdge 1",      "g.V('thomas').addE('knows').to(g.V('mary'))" },
				{ "AddEdge 2",      "g.V('thomas').addE('knows').to(g.V('ben'))" },
				{ "AddEdge 3",      "g.V('ben').addE('knows').to(g.V('robin'))" },
				{ "UpdateVertex",   "g.V('thomas').property('age', 44)" },
				{ "CountVertices",  "g.V().count()" },
				{ "Filter Range",   "g.V().hasLabel('person').has('age', gt(40))" },
				{ "Project",        "g.V().hasLabel('person').values('firstName')" },
				{ "Sort",           "g.V().hasLabel('person').order().by('firstName', decr)" },
				{ "Traverse",       "g.V('thomas').out('knows').hasLabel('person')" },
				{ "Traverse 2x",    "g.V('thomas').out('knows').hasLabel('person').out('knows').hasLabel('person')" },
				{ "Loop",           "g.V('thomas').repeat(out()).until(has('id', 'robin')).path()" },
				{ "DropEdge",       "g.V('thomas').outE('knows').where(inV().has('id', 'mary')).drop()" },
				{ "CountEdges",     "g.E().count()" },
				{ "DropVertex",     "g.V('thomas').drop()" },
			};

			string query = gremlinQueries["Cleanup"];
            
            var result = await _client.SubmitAsync<dynamic>(query);

            foreach (var item in result)
            {
                // The vertex results are formed as Dictionaries with a nested dictionary for their properties
                string output = JsonConvert.SerializeObject(item);
                Console.WriteLine(String.Format("\tResult:\n\t{0}", output));
            }
        }

		async Task<IEnumerable<Question>> IGraphQueries.FindRelatedQuestionsAsync(int questionId)
		{
			throw new NotImplementedException();
		}
	}
}
