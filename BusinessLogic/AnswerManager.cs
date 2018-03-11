﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.DAL;
using ProjectQ.Model;
using ProjectQ.BusinessLogic.Services;

namespace ProjectQ.BusinessLogic
{
    public class AnswerManager : IAnswerManager
    {
        #region Private Members
        private IUnitOfWork _unitOfWork;
        private INotificationSender _notificationSender;
        #endregion

        #region Public Members

        public AnswerManager(
            IUnitOfWork unitOfWork,
            INotificationSender notificationSender)
        {
            _unitOfWork = unitOfWork;
            _notificationSender = notificationSender;
        }

        async Task<int> IAnswerManager.AddAsync(Answer answer, string userId)
        {
            if (!_unitOfWork.QuestionRepository
                .QuestionExists(answer.QuestionId))
                throw new Exception("Question does not exist.");

            var question = await 
                _unitOfWork
                .QuestionRepository.GetByIdAsync(answer.QuestionId);

            answer.AspNetUserId = userId;
            answer.OriginDate = DateTime.UtcNow;

            await _unitOfWork.AnswerRepository.AddAsync(answer);

            var notificationLength = question.Title.Length > 26 ? 25 : question.Title.Length;
            var notification =
                new Notification()
                {
                    IsSeen = false,
                    OriginDate = answer.OriginDate,
                    AspNetUserId = question.AspNetUserId,

                    EventDescription =
                        "New answer for \"" 
                        + question.Title.Substring(0, notificationLength) 
                        + " ...\"",
                    Link = "/question-detail/" + question.Id
                };

            await _unitOfWork.NotificationRepository.AddAsync(notification);

            await _unitOfWork.SaveAsync();

            await _notificationSender.SendAsync(
                new List<string>() { question.AspNetUserId }, 
                notification);

            return answer.Id;
        }

        async Task IAnswerManager.UpdateAsync(Answer answer)
        {
            await _unitOfWork.AnswerRepository
                .UpdateAsync(answer);
            await _unitOfWork.SaveAsync();
        }

        async Task<IEnumerable<Answer>> IAnswerManager.GetForQuestionAsync(int questionId)
        {
            return await _unitOfWork
                .AnswerRepository
                .GetForQuestionAsyc(questionId);
        }

        Task<Answer> IAnswerManager.GetById(int id)
        {
            return _unitOfWork.AnswerRepository.GetById(id);
        }

        bool IAnswerManager.AnswerExists(int id)
        {
            return _unitOfWork.AnswerRepository.AnswerExists(id);
        }

        #endregion
    }
}
