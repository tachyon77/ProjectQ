import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './identity.service';

import 'rxjs/add/operator/map';

export class AnswerDraft {
    id: number;
    isDeleted: boolean;
    questionId: number;
    originDate: Date;
    htmlContent: string;
    user: User;
}


@Injectable()
export class AnswerDraftService {
    constructor(
        private http: HttpClient) {
    }

    getForQuestion(questionId: number) {
        return this.http.get(
            'api/AnswerDrafts/ForQuestion/' + questionId
            ).map(response => {
                return response;
            });
    }

    getById(draftId: number) {
        return this.http.get(
            'api/AnswerDrafts/' + draftId
        ).map(response => {
            return response;
        });
    }

    update(draft: AnswerDraft) {
        return this.http.put(
            'api/AnswerDrafts/' + draft.id,
            draft
        ).map(response => { });
    }

    delete(draftId: number) {
        return this.http.put(
            'api/AnswerDrafts/delete/' + draftId,
            null
        ).map(response => { });
    }
}