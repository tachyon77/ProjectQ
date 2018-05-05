import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './identity.service';

import 'rxjs/add/operator/map';

export class AnswerDraft {
    id: number;
    isDeleted: boolean;
    questionId: number;
    originDate: Date;
    redactedHtmlContent: string; // To be used in general
    user: User;
    protectedAnswerContent: ProtectedAnswerContent;
    // To be used by author for editing or for users with permission.
}

export class ProtectedAnswerContent {
    id: number;
    htmlContent: string;
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

    getProtectedContent(draftId: number) {
        return this.http.get(
            'api/AnswerDrafts/' + + draftId + '/Protected/' 
        ).map(response => {
            return response;
        });
    }

    add(draft: AnswerDraft) {
        return this.http.post(
            'api/AnswerDrafts',
            draft          
        ).map(response => { });
    }

    update(draft: AnswerDraft) {
        return this.http.put(
            'api/AnswerDrafts/' + draft.id,
            draft
        ).map(response => { });
    }

    // Delete requires a separate method from udpate because,
    // when deleting answer, protected content is not loaded
    // as it was not in edit mode yet.
    delete(draftId: number) {
        return this.http.put(
            'api/AnswerDrafts/delete/' + draftId,
            null
        ).map(response => { });
    }
}