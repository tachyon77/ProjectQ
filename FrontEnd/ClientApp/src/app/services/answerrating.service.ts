import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { AnswerRating } from '../models/AnswerRating';

@Injectable()
export class AnswerRatingService {

    constructor(private http: HttpClient) {
    }

    postRating(answerRating: AnswerRating): Observable<AnswerRating> {
        return this.http.post<AnswerRating>('api/answerratings', answerRating)
            .pipe(
                tap(_ => console.log(``)),
                catchError(this.handleError<any>(''))
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
