﻿import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


export class User {
    firstName: string;
    lastName: string;
}

export interface Answer {
    Id: number;
    QuestionId: number;
    OriginDate: Date;
    text: string;
    UserId: number;
    user: User;
}

@Injectable()
export class AnswerService {
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string) {
    }

    getForQuestion(questionId: number) {
        return this.http.get(
            this.baseUrl + 'api/Answers/ForQuestion/' + questionId
            ).map(response => {
                return response;
            });
    }

    getById(answerId: number) {
        return this.http.get(
            this.baseUrl + 'api/Answers/' + answerId
        ).map(response => {
            return response;
        });
    }

    add(answer: Answer) {
        return this.http.post(
            this.baseUrl + 'api/Answers',
            answer          
        ).map(response => { });
    }
}