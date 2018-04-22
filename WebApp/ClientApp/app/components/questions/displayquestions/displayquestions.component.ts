import { Component, Inject } from '@angular/core';
import { QuestionService, UserSpecificQuestionView } from '../questions.service'

@Component({
    selector: 'display-questions',
    templateUrl: './displayquestions.component.html',
    styleUrls: ['./displayquestions.component.css'],
})
export class DisplayQuestionsComponent {
    public questionViews: UserSpecificQuestionView[];

    constructor(
        private questionService: QuestionService) {
        this.questionService.get().subscribe(result => {
            this.questionViews = result as UserSpecificQuestionView[];
        }, error => console.error(error));
    }
}


