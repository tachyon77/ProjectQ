import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface Notification {
    id: number;
    EventDescription: string;
    OriginData: Date;
    Link: string;
}

@Injectable()
export class NotificationService {

    constructor(private http: HttpClient) {
    }

    getUnseen(): Observable<Notification[]> {
        return this.http.get<Notification[]>('api/notifications/unseen')
            .pipe(
                tap(n => console.log(`fetched notifs`)),
                catchError(this.handleError('get unseen', []))
            );
    }

    markAsSeen(id: number): Observable<any> {
        return this.http.post('api/notifications/markseen', id)
            .pipe(
                tap(n => console.log(`marked notif seen`)),
                catchError(this.handleError('mark seen'))
            );
    }

    markAllAsSeen(): Observable<any> {
        return this.http.post('api/notifications/markallseen', null)
            .pipe(
                tap(n => console.log(`marked all notifs seen`)),
                catchError(this.handleError('mark all seen'))
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