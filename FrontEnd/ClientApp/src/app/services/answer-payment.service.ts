import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { AnswerPayment, AnswerPaymentResult } from '../models/AnswerPayment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AnswerPaymentService {
    constructor(
        private http: HttpClient) {
    }

    private apiUrlRoot = 'api/AnswerPayments';

    postPayment(answerPayment: AnswerPayment): Observable<AnswerPaymentResult> {
        console.log("posting payment");
        return this.http.post<AnswerPaymentResult>(this.apiUrlRoot, answerPayment, httpOptions).pipe(
            tap(_ => console.log(`posted payment`)),
            catchError(this.handleError<AnswerPaymentResult>('post payment'))
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
