import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { AnswerRating } from '../models/AnswerRating';
import { Answer } from '../models/Answer';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export interface AnswerForm {
    price: number;
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

    private answersUrl = 'api/answers';  // URL to web api

    getForQuestion(questionId: number): Observable<UserSpecificAnswerView[]> {
        return this.http.get<UserSpecificAnswerView[]>(
            'api/Answers/ForQuestion/' + questionId
        ).pipe(
            tap(answers => console.log(`fetched answers`)),
            catchError(this.handleError('getForQuestion', []))
        );
    }


    getById(id: number): Observable<Answer>{
        return this.http.get<Answer>(
            'api/Answers/' + id
        ).pipe(
            tap(_ => console.log(`fetched answer by id`)),
            catchError(this.handleError<Answer>(`get by id answer`))
        );
    }

    /** POST: add a new Answer to the server */
    add(answer: Answer): Observable<Answer> {
        return this.http.post<Answer>(this.answersUrl, answer, httpOptions).pipe(
            tap((answer: Answer) => console.log(`added answer`)),
            catchError(this.handleError<Answer>('add answer'))
        );
    }


    purchase(answerId: number): Observable<number> {
        return this.http.post<number>('api/PurchasedAnswers', answerId, httpOptions).pipe(
            tap((answerId: number) => console.log(`purchased answer`)),
            catchError(this.handleError<number>('purchases answer'))
        );
    }


    update(answer: Answer): Observable<any> {
        return this.http.put(
            'api/Answers/' + answer.id,
            answer, httpOptions
        ).pipe(
            tap(_ => console.log(`updated answer id=${answer.id}`)),
            catchError(this.handleError<any>('update answer'))
        );
    }


    // Delete is needed separate from udpate because,
    // when deleting answer, protected content is not loaded
    // as it was not in edit mode yet.
    delete(answerId: number) {

        return this.http.put(
            'api/Answers/delete/' + answerId,
            null, httpOptions
        ).pipe(
            tap(_ => console.log(`deleted answer id=${answerId}`)),
            catchError(this.handleError<any>('delete answer'))
        );
    }

    unDelete(answerId: number) {
        return this.http.put(
            'api/Answers/undelete/' + answerId, // TODO: not implemented yet.
            null, httpOptions
        ).pipe(
            tap(_ => console.log(`deleted answer id=${answerId}`)),
            catchError(this.handleError<any>('delete answer'))
        );
    }

    /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
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