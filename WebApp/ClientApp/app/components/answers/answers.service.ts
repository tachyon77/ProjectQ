import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export interface Answer {
    text: string;
}

@Injectable()
export class AnswerService {
    constructor(
        private http: Http,
        @Inject('BASE_URL') private baseUrl: string) { }

    getForQuestion(questionId: number) {
        return this.http.get(
            this.baseUrl + 'api/Answers/ForQuestion/' + questionId
            ).map(response => {
                return response.json();
            });
    }
}