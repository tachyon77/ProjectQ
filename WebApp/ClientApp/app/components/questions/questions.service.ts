import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export interface User {
    firstName: string;
    lastName: string;
}

export interface Question {
    title: string;
    description: string;
    id: number;
    offeredPrice: number;
    OriginDate: Date;
    user: User;
}

@Injectable()
export class QuestionService {
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string) { }

    get() {      
        return this.http.get(this.baseUrl + 'api/Questions')
            .map(response => {
                return response;
            });
    }

    getById(id: number) {
        return this.http.get(this.baseUrl + 'api/Questions/' + id)
            .map(response => {
                return response;
            });
    }

    add(question: Question) {
        return this.http.post(this.baseUrl + 'api/Questions', question)
            .map(response => { });
    }

}