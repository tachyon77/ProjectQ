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
        private Mock<IAnswerRepository> _mockAnswerRepo;       
        private Mock<IUnitOfWork> _mockUoW;
        private IAnswerManager _sut;

        [SetUp]
        public void Setup()
        {
            _mockAnswerRepo = new Mock<IAnswerRepository>();
            _mockUoW = new Mock<IUnitOfWork>();

            _mockUoW
                .Setup(x => x.AnswerRepository)
                .Returns(_mockAnswerRepo.Object);

            _sut = new AnswerManager(_mockUoW.Object);
        }
        
        [Test]
        public void ShouldThrowExceptionForAddAnswerWithInvalidQuestionId()
        {
            var answer = new Mock<Answer>().Object;

            var mockQuestionRepo = new Mock<IQuestionRepository>();
            mockQuestionRepo
                .Setup(x => x.QuestionExists(answer.QuestionId))
                .Returns(false);

            _mockUoW
                .Setup(x => x.QuestionRepository)
                .Returns(mockQuestionRepo.Object);

            Assert.ThrowsAsync<Exception>(
                async () => await _sut.Add(answer));
        }

        [Test]
        public void ShouldAddAnswer()
        {
            var answer = new Mock<Answer>().Object;

            var mockQuestionRepo = new Mock<IQuestionRepository>();
            mockQuestionRepo
                .Setup(x => x.QuestionExists(answer.QuestionId))
                .Returns(true);

            _mockUoW
                .Setup(x => x.QuestionRepository)
                .Returns(mockQuestionRepo.Object);

            _sut.Add(answer);

            _mockAnswerRepo.Verify(x => x.Add(answer), Times.Once);
            _mockUoW.Verify(x => x.SaveAsync(), Times.Once);
        }

        [Test]
        public void ShouldReturnAnswersForAQuestion()
        {
            var answers = new List<Answer>();
            answers.Add(new Mock<Answer>().Object);

            var expected = Task
                .FromResult<IEnumerable<Answer>>
                (answers);
            _mockAnswerRepo
                .Setup(x => x.GetForQuestion(1))
                .Returns(expected);

            
            var actual = _sut.GetForQuestion(1).Result;

            Assert.That(expected.Result, Is.EqualTo(actual));
        }
    }
}
