﻿using System;
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
