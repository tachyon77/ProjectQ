import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ReqInvite } from '../models/RequestInvite';

@Injectable()
export class RequestInviteService {

    constructor(private http: HttpClient) {
    }

    requestInvitation(req: ReqInvite): Observable<any> {
        return this.http.post('api/InvitationRequests', req)
            .pipe(
                tap(_ => console.log(`requested invitation`)),
                catchError(this.handleError('request invitation'))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            //console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}