using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL.EntityFramework
{
    /// <summary>
    /// Implements Entity Framework based implementation of IUnitOfWork
    /// </summary>
    public class UnitOfWork: IUnitOfWork
    {
        private readonly ProjectQEntities _context;
        private IQuestionRepository _questionRepository;
        private IAnswerRepository _answerRepository;
        private IAnswerRatingRepository _answerRatingRepository;
        private INotificationRepository _notificationRepository;
        private IQuestionFollowerRepository _questionFollowerRepository;

        public UnitOfWork(ProjectQEntities context)
        {
            _context = context;
        }

        IQuestionFollowerRepository IUnitOfWork.QuestionFollowerRepository
        {
            get
            {
                if (_questionFollowerRepository == null)
                {
                    _questionFollowerRepository = 
                        new QuestionFollowerRepository(_context);
                }
                return _questionFollowerRepository;
            }
        }

        IQuestionRepository IUnitOfWork.QuestionRepository
        {
            get
            {
                if (_questionRepository == null)
                {
                    _questionRepository = new QuestionRepository(_context);                 
                }
                return _questionRepository;
            }
        }

        IAnswerRepository IUnitOfWork.AnswerRepository
        {
            get
            {
                if (_answerRepository == null)
                {
                    _answerRepository = new AnswerRepository(_context);
                }
                return _answerRepository;
            }
        }

        IAnswerRatingRepository IUnitOfWork.AnswerRatingRepository
        {
            get
            {
                if (_answerRatingRepository == null)
                {
                    _answerRatingRepository = new AnswerRatingRepository(_context);
                }
                return _answerRatingRepository;
            }
        }

        INotificationRepository IUnitOfWork.NotificationRepository
        {
            get
            {
                if (_notificationRepository == null)
                {
                    _notificationRepository = new NotificationRepository(_context);
                }
                return _notificationRepository;
            }
        }

        async Task IUnitOfWork.SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
