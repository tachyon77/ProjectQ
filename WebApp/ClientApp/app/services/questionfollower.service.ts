import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class QuestionFollowerService {

    constructor(private http: HttpClient) {
    }

    follow(questionId: number): Observable<any> {
        return this.http.post('api/questionfollowers/follow', questionId)
            .pipe(
                tap(heroes => console.log(`followed`)),
                catchError(this.handleError('follow'))
            );
    }

    unfollow(questionId: number) {
        return this.http.post('api/questionfollowers/unfollow', questionId)
            .pipe(
                tap(heroes => console.log(`unfollowed`)),
                catchError(this.handleError('unfollow'))
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