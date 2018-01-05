﻿import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export interface Answer {
    QuestionId: number;
    text: string;
}

@Injectable()
export class AnswerService {
    constructor(
        private http: Http,
        @Inject('BASE_URL') private baseUrl: string) { }

    getForQuestion(questionId: number) {
        console.log('question id = ' + questionId);
        return this.http.get(
            this.baseUrl + 'api/Answers/ForQuestion/' + questionId
            ).map(response => {
                return response.json();
            });
    }

    add(answer: Answer) {
        return this.http.post(this.baseUrl + 'api/Answers', answer)
            .map(response => { });
    }
}