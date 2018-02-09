import { Component, Inject } from '@angular/core';
import { QuestionService, Question } from '../questions.service'

@Component({
    selector: 'display-questions',
    templateUrl: './displayquestions.component.html',
    styleUrls: ['./displayquestions.component.css'],
})
export class DisplayQuestionsComponent {
    public questions: Question[];

    constructor(
        private questionService: QuestionService) {
        this.questionService.get().subscribe(result => {
            this.questions = result as Question[];
        }, error => console.error(error));
    }
}


