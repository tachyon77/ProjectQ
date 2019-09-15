using System;
using Xunit;
using ProjectQ.DAL.Graph;
using ProjectQ.DAL;

namespace DAL.XUnitTests
{
	public class UnitTest1
	{
		[Fact]
		async public void Test1()
		{
			IGraphQueries cosmos = new CosmosGraph();

			await cosmos.FindRelatedQuestionsAsync(1);

		}
	}
}
