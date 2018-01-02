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
        private Mock<IAnswerRepository> _mockRepo;
        private Mock<IUnitOfWork> _mockUoW;

        [SetUp]
        public void Setup()
        {
            _mockRepo = new Mock<IAnswerRepository>();
            _mockUoW = new Mock<IUnitOfWork>();

            _mockUoW
                .Setup(x => x.AnswerRepository)
                .Returns(_mockRepo.Object);
        }

        [Test]
        public void ShouldReturnAnswersForAQuestion()
        {
            var answers = new List<Answer>();
            answers.Add(new Mock<Answer>().Object);

            var expected = Task
                .FromResult<IEnumerable<Answer>>
                (answers);
            _mockRepo
                .Setup(x => x.GetForQuestion(1))
                .Returns(expected);

            IAnswerManager a = new AnswerManager(_mockUoW.Object);
            var actual = a.GetForQuestion(1).Result;

            Assert.That(expected.Result, Is.EqualTo(actual));
        }
    }
}
