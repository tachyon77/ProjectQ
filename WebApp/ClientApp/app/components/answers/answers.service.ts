import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export interface User {
    FirstName: string;
    LastName: string;
}

export interface Answer {
    Id: number;
    QuestionId: number;
    OriginDate: Date;
    text: string;
    UserId: number;
    User: User;
}

@Injectable()
export class AnswerService {
    constructor(
        private http: Http,
        @Inject('BASE_URL') private baseUrl: string,
        @Inject('ACCESS_TOKEN') private accessToken: string) { }

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