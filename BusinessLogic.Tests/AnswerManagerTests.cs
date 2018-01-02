using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using Moq;
using ProjectQ.DAL;
using ProjectQ.Model;

namespace ProjectQ.BusinessLogic.Tests
{
    [TestFixture]
    public class AnswerManagerTests
    {
        [Test]
        public void ShouldReturnAnswersForAQuestion()
        {
            var mockRepo = new Mock<IAnswerRepository>();
            var mockUoW = new Mock<IUnitOfWork>();

            var answers = new List<Answer>();
            answers.Add(new Mock<Answer>().Object);

            mockUoW
                .Setup(x => x.AnswerRepository)
                .Returns(mockRepo.Object);

            var expected = Task
                .FromResult<IEnumerable<Answer>>
                (answers);
            mockRepo
                .Setup(x => x.GetForQuestion(1))
                .Returns(expected);

            IAnswerManager a = new AnswerManager(mockUoW.Object);
            var actual = a.GetForQuestion(1).Result;

            Assert.That(expected.Result, Is.EquivalentTo(actual));
        }
    }
}
