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
        private INotificationRepository _notificationRepository;

        public UnitOfWork(ProjectQEntities context)
        {
            _context = context;
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
