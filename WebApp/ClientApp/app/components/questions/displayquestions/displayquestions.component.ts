import { Component, Inject } from '@angular/core';
import { QuestionService, QuestionPreview } from '../questions.service'

@Component({
    selector: 'display-questions',
    templateUrl: './displayquestions.component.html',
    styleUrls: ['./displayquestions.component.css'],
})
export class DisplayQuestionsComponent {
    public questions: QuestionPreview[];

    constructor(
        private questionService: QuestionService) {
        this.questionService.get().subscribe(result => {
            this.questions = result as QuestionPreview[];
        }, error => console.error(error));
    }
}


