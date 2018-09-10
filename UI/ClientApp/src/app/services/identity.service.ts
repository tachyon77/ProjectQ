import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../models/User';

export class LoginCredential {
    Email!: string;
    Password!: string;
}

export class RegistrationForm {
    Email!: string;
    Password!: string;
    ConfirmEmailCode!: string;
}



@Injectable()
export class IdentityService {

    constructor(private http: HttpClient) {
    }

    register(regForm: RegistrationForm): Observable<any> {
        return this.http.post('api/Account/Register', regForm)
            .pipe(
                tap(_ => console.log(``)),
                catchError(this.handleError('register'))
            );
    }

    confirmRegistration(regForm: RegistrationForm): Observable<any> {
        return this.http.post('api/Account/Confirm', regForm)
            .pipe(
                tap(_ => console.log(``)),
                catchError(this.handleError('register'))
            );
    }

    login(credential: LoginCredential): Observable<User> {
        return this.http.post<User>('api/Account', credential)
            .pipe(
                tap(_ => console.log(``)),
                catchError(this.handleError<User>('login'))
            );
    }

    logout(): Observable<any> {
        return this.http.post('api/account/logout', null)
            .pipe(
                tap(_ => console.log(``)),
                catchError(this.handleError('logout'))
            );
    }

    getLoggedInUser(): Observable<User> {
        return this.http.get<User>('api/account/user')
            .pipe(
                tap(_ => console.log(`logged in`)),
                catchError(this.handleError<User>('get logged in user'))
            );
    }

    refreshCSRFToken(): Observable<any> {
        return this.http.get('api/Account/refreshtoken')
            .pipe(
                tap(_ => console.log(``)),
                catchError(this.handleError('refresh CSRF token'))
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
