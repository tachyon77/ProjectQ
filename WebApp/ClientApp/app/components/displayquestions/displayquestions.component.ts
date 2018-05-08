import { Component, Inject } from '@angular/core';
import { QuestionService, UserSpecificQuestionPreview } from '../../services/questions.service'

@Component({
    selector: 'display-questions',
    templateUrl: './displayquestions.component.html',
    styleUrls: ['./displayquestions.component.css'],
})
export class DisplayQuestionsComponent {
    public questionViews: UserSpecificQuestionPreview[];

    constructor(
        private questionService: QuestionService) {
        this.questionService.get().subscribe(result => {
            this.questionViews = result as UserSpecificQuestionPreview[];
        }, error => console.error(error));
    }
}


