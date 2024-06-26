import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../models/User';

export class Education {
    id!: number;
    school!: string;
    concentration!: string;
    secondaryConcentration!: string
    degreeType!: string;
    graduationYear!: number;
}

export class Employment {
    id!: number;
    position!: string;
    company!: string;
    start!: Date;
    end: Date | undefined;
    isCurrent!: boolean;
}

export class Credentials {
    public educations: Education[] = [];
    public employments: Employment[] = [];
}


@Injectable()
export class ApplicationUserService {

    constructor(private http: HttpClient) {
    }

    getProfile(id: number | undefined): Observable<User> {
        var url = 'api/profile';

        if (id) {
            url = url + "/" + id;
        }
        return this.http.get<User>(url)
            .pipe(
                tap(_ => console.log(``)),
                catchError(this.handleError<User>('get'))
            );
    }

    getCredentials(id: number | undefined): Observable<Credentials> {
        var url = 'api/credentials';
        if (id) {
            url = url + '/' + id;
        }
        return this.http.get<Credentials>(url)
            .pipe(
                tap(_ => console.log(`received credential`)),
                catchError(this.handleError<Credentials>('get'))
            );
    }

  updatePictureUrl(user: User): Observable<any> {
    return this.http.put('api/profile/pictureurl', user)
      .pipe(
        tap(_ => console.log(`updated profule info`)),
        catchError(this.handleError('update credential'))
      );
  }

    updateUser(user: User): Observable<any> {
        return this.http.put('api/profile', user)
            .pipe(
                tap(_ => console.log(`updated profule info`)),
                catchError(this.handleError('update credential'))
            );
    }

    addEducaion(education: Education): Observable<any> {
        return this.http.post('api/credentials/educations', education)
            .pipe(
                tap(_ => console.log(`added education`)),
                catchError(this.handleError('add education'))
            );
    }

    updateEducaion(education: Education): Observable<any>  {
        return this.http.put('api/credentials/educations', education)
            .pipe(
                tap(_ => console.log(``)),
                catchError(this.handleError('update edu'))
            );
    }

    addEmployment(employment: Employment): Observable<any>  {
        return this.http.post('api/credentials/employments', employment)
            .pipe(
                tap(_ => console.log(``)),
                catchError(this.handleError('add empl'))
            );
    }

    updateEmployment(employment: Employment): Observable<any>  {
        return this.http.put('api/credentials/employments', employment)
            .pipe(
                tap(_ => console.log(``)),
                catchError(this.handleError('update employ'))
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
