using System.Collections.Generic;

namespace ProjectQ.Model
{
    public class AnswerDetail
    {
        public AspNetUser Answerer { get; set; }
        public Answer Answer { get; set; }
        public AnswerRating Rating { get; set; }
    }
}
