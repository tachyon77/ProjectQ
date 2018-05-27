import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Question } from '../models/Question';

export interface PurchasedAnswerView {
    purchasedAnswer: PurchasedAnswer;
    question: Question;
}

export interface PurchasedAnswer {
    id: number;
    userId: number;
    answerId: number;
    purchaseDate: Date;
    htmlContent: string;
}

@Injectable()
export class PurchasedAnswerService {
    constructor(
        private http: HttpClient) {
    }

    get(): Observable<PurchasedAnswerView[]> {
        return this.http.get<PurchasedAnswerView[]>(
            'api/PurchasedAnswers'
        ).pipe(
            tap(p => console.log(``)),
            catchError(this.handleError('get', []))
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