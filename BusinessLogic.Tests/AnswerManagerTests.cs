using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using Moq;
using ProjectQ.DAL;
using ProjectQ.Model;
using ProjectQ.BusinessLogic.Services;

namespace ProjectQ.BusinessLogic.Tests
{
    [TestFixture]
    public class AnswerManagerTests
    {
        private Mock<IAnswerRepository> _mockAnswerRepo;
        private Mock<IQuestionRepository> _mockQuestionRepo;
        private Mock<IUserRepository> _mockUserRepo;
        private Mock<IUnitOfWork> _mockUoW;
        private IAnswerManager _sut;
        private Mock<INotificationSender> _mockNS;

        [SetUp]
        public void Setup()
        {
            _mockQuestionRepo = new Mock<IQuestionRepository>();
            _mockAnswerRepo = new Mock<IAnswerRepository>();
            _mockUserRepo = new Mock<IUserRepository>();
            _mockNS = new Mock<INotificationSender>();

            _mockUoW = new Mock<IUnitOfWork>();

            _mockUoW
                .Setup(x => x.QuestionRepository)
                .Returns(_mockQuestionRepo.Object);

            _mockUoW
                .Setup(x => x.AnswerRepository)
                .Returns(_mockAnswerRepo.Object);

            _mockUoW
                .Setup(x => x.SaveAsync())
                .Returns(Task.CompletedTask);

            _sut = new AnswerManager(_mockUoW.Object, _mockNS.Object);
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
                async () => await _sut.AddAsync(answer, "tachyon77@gmail.com"));
        }

        [Test]
        public void ShouldAddAnswer()
        {
            var answer = new Mock<Answer>().Object;

            _mockQuestionRepo
                .Setup(x => x.QuestionExists(answer.QuestionId))
                .Returns(true);

            _mockAnswerRepo
                .Setup(x => x.AddAsync(answer))
                .Returns(Task.CompletedTask);

            _mockUserRepo
                .Setup(x => x.GetByEmail("tachyon77@gmail.com"))
                .Returns(new ApplicationUser());

            var r = _sut.AddAsync(answer, "tachyon77@gmail.com")
                .Result;

            _mockAnswerRepo.Verify(x => x.AddAsync(answer), Times.Once);
            _mockUoW.Verify(x => x.SaveAsync(), Times.Once);
        }

        [Test]
        public void ShouldReturnAnswersForAQuestion()
        {
            var answers = new List<AnswerDetail>();
            answers.Add(new Mock<AnswerDetail>().Object);

            var expected = Task
                .FromResult<IEnumerable<AnswerDetail>>
                (answers);
            _mockAnswerRepo
                .Setup(x => x.GetForQuestionAndUserAsyc(1, ""))
                .Returns(expected);

            
            var actual = _sut.GetForQuestionAndUserAsync(1, "").Result;

            Assert.That(expected.Result, Is.EqualTo(actual));
        }
    }
}
