import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AnswerDraft } from '../models/AnswerDraft';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AnswerDraftService {
    constructor(
        private http: HttpClient) {
    }

    getForQuestion(questionId: number): Observable<AnswerDraft> {
        return this.http.get<AnswerDraft>(
            'api/AnswerDrafts/ForQuestion/' + questionId
        ).pipe(
            tap(answers => console.log(`fetched draft`)),
            catchError(this.handleError<AnswerDraft>('getForQuestion'))
        );
    }

    getById(draftId: number): Observable<AnswerDraft>  {
        return this.http.get<AnswerDraft>(
            'api/AnswerDrafts/' + draftId
        ).pipe(
            tap(answers => console.log(`fetched draft`)),
            catchError(this.handleError<AnswerDraft>('get by id'))
        );
    }

    update(draft: AnswerDraft): Observable<any> {
        return this.http.put(
            'api/AnswerDrafts/' + draft.id,
            draft
        ).pipe(
            tap(answers => console.log(`updated draft`)),
            catchError(this.handleError('update draft'))
        );
    }

    delete(draftId: number): Observable<any> {
        return this.http.put(
            'api/AnswerDrafts/delete/' + draftId,
            null
        ).pipe(
            tap(answers => console.log(`deleted draft`)),
            catchError(this.handleError('delete draft'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
