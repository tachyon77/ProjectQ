using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectQ.Model
{
    public class QuestionPreview
    {
        public Question Question { get; set; }
        public int AnswerCount { get; set; }
        public Answer PreviewAnswer { get; set; }
    }
}
