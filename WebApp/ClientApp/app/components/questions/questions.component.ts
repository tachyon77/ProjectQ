import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'questions-list',
    templateUrl: './questions.component.html'
})
export class QuestionsComponent {
    public questions: Question[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/Questions').subscribe(result => {
            this.questions = result.json() as Question[];
        }, error => console.error(error));
    }
}

interface Question {
    title: string;
    description: string;
}
