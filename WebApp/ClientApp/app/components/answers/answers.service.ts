﻿import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export interface Answer {
    Id: number;
    QuestionId: number;
    text: string;
    UserId: number;
}

@Injectable()
export class AnswerService {
    constructor(
        private http: Http,
        @Inject('BASE_URL') private baseUrl: string) { }

    getForQuestion(questionId: number) {
        return this.http.get(
            this.baseUrl + 'api/Answers/ForQuestion/' + questionId
            ).map(response => {
                return response.json();
            });
    }

    getById(answerId: number) {
        return this.http.get(
            this.baseUrl + 'api/Answers/' + answerId
        ).map(response => {
            return response.json();
        });
    }

    add(answer: Answer) {
        return this.http.post(this.baseUrl + 'api/Answers', answer)
            .map(response => { });
    }
}