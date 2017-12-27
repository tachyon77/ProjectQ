﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectQ.Model;

namespace ProjectQ.DAL
{
    public interface IQuestionRepository
    {
        Task AddQuestion(Question question);
    }

    public class QuestionRepository : IQuestionRepository
    {
        #region Private Members
        private ProjectQEntities db = new ProjectQEntities();
        #endregion
        async Task IQuestionRepository.AddQuestion(Question question)
        {
            db.Questions.Add(question);
            await db.SaveChangesAsync();
        }
    }
}
