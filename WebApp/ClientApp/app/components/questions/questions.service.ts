import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../services/identity.service'
import 'rxjs/add/operator/map';


export interface Question {
    title: string;
    description: string;
    id: number;
    isDeleted: boolean;
    offeredPrice: number;
    OriginDate: Date;
    user: User;
}

@Injectable()
export class QuestionService {
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string)
    { }

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

    update(question: Question) {
        return this.http
            .put(this.baseUrl + 'api/Questions/' + question.id, question)
            .map(response => { });
    }

}