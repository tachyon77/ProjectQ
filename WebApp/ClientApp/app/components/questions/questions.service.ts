import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export interface Question {
    title: string;
    description: string;
}

@Injectable()
export class QuestionService {
    constructor(
        private http: Http,
        @Inject('BASE_URL') private baseUrl: string) { }

    get() {      
        return this.http.get(this.baseUrl + 'api/Questions')
            .map(response => {
                return response.json();
            });
    }

    add(question: Question) {
        return this.http.post('questions', question)
            .map(response => { });
    }

}