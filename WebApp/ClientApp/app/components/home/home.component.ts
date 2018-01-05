import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { QuestionService, Question } from '../questions/questions.service'

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public questions: Question[];

    constructor(
        private questionService: QuestionService,
        http: Http) {
        this.questionService.get().subscribe(result => {
            this.questions = result as Question[];
        }, error => console.error(error));
    }
}


