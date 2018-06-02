import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Question } from '../models/Question';
import { QuestionTopic } from '../models/QuestionTopic';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class QuestionTopicService {

    constructor(private http: HttpClient) {
    }

    private apiUrlRoot = 'api/QuestionTopics';


    /** POST: add a new hero to the server */
    add(questionId: number, topicId: number): Observable<any> {
        let questionTopic = new QuestionTopic();
        questionTopic.questionId = questionId;
        questionTopic.topicId = topicId;

        return this.http.post(this.apiUrlRoot, questionTopic, httpOptions).pipe(
            tap(_ => console.log(`added question topic`)),
            catchError(this.handleError<any>('add question topic'))
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