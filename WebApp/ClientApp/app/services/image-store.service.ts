import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ResponseType } from '@angular/http';


@Injectable()
export class ImageStoreService {
    constructor(
        private http: HttpClient) {
    }

    private apiRootUrl = 'api/imagestore';  // URL to web api

    /** POST: add a new Answer to the server */
    upload(fd: FormData): Observable<any> {
        console.log(fd);
        return this.http.post<any>(this.apiRootUrl, fd).pipe(
            tap(p => console.log(`uploaded file ${p}`)),
            catchError(this.handleError<any>('upload File'))
        );
    }

    get(name: string): Observable<any> {
        return this.http.get(this.apiRootUrl + "/" + name, { responseType: 'blob' }).pipe(
            tap(_ => console.log(`fetching image`)),
            catchError(this.handleError('image fetch'))
        );;
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