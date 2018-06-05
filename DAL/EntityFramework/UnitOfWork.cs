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
        private IQuestionViewRepository _questionViewRepository;
        private IQuestionTopicRepository _questionTopicRepository;
        private IAnswerRepository _answerRepository;
        private IAnswerPaymentRepository _answerPaymentRepository;
        private IPurchasedAnswerRepository _purchasedAnswerRepository;
        private IAnswerDraftRepository _answerDraftRepository;
        private IAnswerRatingRepository _answerRatingRepository;
        private INotificationRepository _notificationRepository;
        private IQuestionFollowerRepository _questionFollowerRepository;
        private IUserRepository _userRepository;
        private IEmploymentRepository _employmentRepository;
        private IEducationRepository _educationRepository;

        public UnitOfWork(ProjectQEntities context)
        {
            _context = context;
        }

        IUserRepository IUnitOfWork.UserRepository
        {
            get
            {
                if (_userRepository == null)
                {
                    _userRepository =
                        new UserRepository(_context);
                }
                return _userRepository;
            }
        }

        IEducationRepository IUnitOfWork.EducationRepository
        {
            get
            {
                if (_educationRepository == null)
                {
                    _educationRepository =
                        new EducationRepository(_context);
                }
                return _educationRepository;
            }
        }

        IEmploymentRepository IUnitOfWork.EmploymentRepository
        {
            get
            {
                if (_employmentRepository == null)
                {
                    _employmentRepository =
                        new EmploymentRepository(_context);
                }
                return _employmentRepository;
            }
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

        IQuestionTopicRepository IUnitOfWork.QuestionTopicRepository
        {
            get
            {
                if (_questionTopicRepository == null)
                {
                    _questionTopicRepository = new QuestionTopicRepository(_context);
                }
                return _questionTopicRepository;
            }
        }

        IQuestionViewRepository IUnitOfWork.QuestionViewRepository
        {
            get
            {
                if (_questionViewRepository == null)
                {
                    _questionViewRepository = new QuestionViewRepository(_context);
                }
                return _questionViewRepository;
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

        IAnswerPaymentRepository IUnitOfWork.AnswerPaymentRepository
        {
            get
            {
                if (_answerPaymentRepository == null)
                {
                    _answerPaymentRepository = new AnswerPaymentRepository(_context);
                }
                return _answerPaymentRepository;
            }
        }

        IPurchasedAnswerRepository IUnitOfWork.PurchasedAnswerRepository
        {
            get
            {
                if (_purchasedAnswerRepository == null)
                {
                    _purchasedAnswerRepository = new PurchasedAnswerRepository(_context);
                }
                return _purchasedAnswerRepository;
            }
        }

        IAnswerDraftRepository IUnitOfWork.AnswerDraftRepository
        {
            get
            {
                if (_answerDraftRepository == null)
                {
                    _answerDraftRepository = new AnswerDraftRepository(_context);
                }
                return _answerDraftRepository;
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
