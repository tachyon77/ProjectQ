import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../services/identity.service'
import { AnswerRating } from '../../services/answerrating.service'

import 'rxjs/add/operator/map';

export class Answer {
    id: number;
    isDeleted: boolean;
    questionId: number;
    originDate: Date;
    htmlContent: string;
    redactedHtmlContent: string;
    user: User;
}

export interface UserSpecificAnswerView {
    answer: Answer;
    rating: AnswerRating;
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