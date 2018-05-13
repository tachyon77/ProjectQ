import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './identity.service'
import { AnswerRating } from './answerrating.service'

import 'rxjs/add/operator/map';

export class Answer {
    id: number;
    isDeleted: boolean;
    questionId: number;
    originDate: Date;
    isProtected: boolean;
    redactedHtmlContent: string; // To be used in general
    user: User;
    protectedAnswerContent: ProtectedAnswerContent;
    // To be used by author for ediring or for users with permission.
}

export class ProtectedAnswerContent {
    id: number;
    htmlContent: string;
}

export interface UserSpecificAnswerView {
    answer: Answer;
    rating: AnswerRating;
    averageRating: number;
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

    /*
    getProtectedContent(answerId: number) {
        return this.http.get(
            'api/Answers/Protected/' + answerId
        ).map(response => {
            return response;
        });
    }
    */

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

    // Delete is needed separate from udpate because,
    // when deleting answer, protected content is not loaded
    // as it was not in edit mode yet.
    delete(answerId: number) {
        return this.http.put(
            'api/Answers/delete/' + answerId,
            null
        ).map(response => { });
    }
}