import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';
import { Question } from '../models/Question';
import { Answer } from '../models/Answer';


import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


export interface UserSpecificQuestionPreview {
    isFollowing: boolean;
    question: Question;
    previewAnswer: Answer;
}

@Injectable()
export class QuestionService {

    constructor(private http: HttpClient) {
    }

    private questionsUrl = 'api/Questions';  // URL to web api

    getAllAskedByMe(): Observable<Question[]> {
        return this.http.get<Question[]>(this.questionsUrl + '/my')
            .pipe(
                tap(heroes => console.log(`fetched my questions`)),
                catchError(this.handleError('getAllAskedByMe', []))
            );
    }

    get(): Observable<UserSpecificQuestionPreview[]> {
        return this.http.get<UserSpecificQuestionPreview[]>(this.questionsUrl)
            .pipe(
                tap(_ => console.log(`fetched all questions`)),
                catchError(this.handleError('get', []))
            );
    }

    getById(id: number): Observable<Question> {
        return this.http.get<Question>('api/questions/' + id)
            .pipe(
                tap(heroes => console.log(`fetched a question`)),
                catchError(this.handleError<Question>('getById'))
            );
    }

    /** POST: add a new hero to the server */
    add(question: Question): Observable<Question> {
        return this.http.post<Question>(this.questionsUrl, question, httpOptions).pipe(
            tap((question: Question) => console.log(`added question`)),
            catchError(this.handleError<Question>('add'))
        );
    }

    /** PUT: update the hero on the server */
    update(question: Question): Observable<any> {
        return this.http.put(this.questionsUrl, question, httpOptions).pipe(
            tap(_ => console.log(`updated question id=${question.id}`)),
            catchError(this.handleError<any>('update question'))
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
