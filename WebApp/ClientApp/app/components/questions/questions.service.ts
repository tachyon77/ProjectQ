import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export interface User {
    FirstName: string;
    LastName: string;
}

export interface Question {
    title: string;
    description: string;
    id: number;
    offeredPrice: number;
    OriginDate: Date;
    User: User;
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

    getById(id: number) {
        return this.http.get(this.baseUrl + 'api/Questions/' + id)
            .map(response => {
                return response.json();
            });
    }

    add(question: Question) {
        return this.http.post(this.baseUrl + 'api/Questions', question)
            .map(response => { });
    }

}