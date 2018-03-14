import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AspNetUser } from '../../services/identity.service'
import 'rxjs/add/operator/map';

export class Answer {
    id: number;
    isDeleted: boolean;
    QuestionId: number;
    OriginDate: Date;
    text: string;
    aspNetUser: AspNetUser;
}

export class AnswerDetail {
    answer: Answer;
    answerer: AspNetUser;
}

@Injectable()
export class AnswerService {
    constructor(
        private http: HttpClient) {
    }

    getForQuestion(questionId: number) {
        return this.http.get(
            'api/Answers/ForQuestion/' + questionId
            ).map(response => {
                return response;
            });
    }

    getById(answerId: number) {
        return this.http.get(
            'api/Answers/' + answerId
        ).map(response => {
            return response;
        });
    }

    add(answer: Answer) {
        return this.http.post(
            'api/Answers',
            answer          
        ).map(response => { });
    }

    update(answer: Answer) {
        return this.http.put(
            'api/Answers/' + answer.id,
            answer
        ).map(response => { });
    }
}