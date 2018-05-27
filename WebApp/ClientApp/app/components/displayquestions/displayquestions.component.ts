import { Component, Inject } from '@angular/core';
import { QuestionService, UserSpecificQuestionPreview } from '../../services/questions.service'

@Component({
    selector: 'display-questions',
    templateUrl: './displayquestions.component.html',
    styleUrls: ['./displayquestions.component.css'],
})
export class DisplayQuestionsComponent {
    questionViews: UserSpecificQuestionPreview[] | undefined;

    constructor(
        private questionService: QuestionService) {
        this.questionService.get().subscribe(
            (result: UserSpecificQuestionPreview[]) => {
                this.questionViews = result;
            },
            (error:string) => console.error(error)
        );
    }
}


