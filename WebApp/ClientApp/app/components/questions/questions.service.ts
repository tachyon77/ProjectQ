import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AspNetUser } from '../../services/identity.service'
import { Answer } from '../answers/answers.service'
import 'rxjs/add/operator/map';


export interface Question {
    title: string;
    description: string;
    id: number;
    isDeleted: boolean;
    offeredPrice: number;
    OriginDate: Date;
    aspNetUser: AspNetUser;
}

export interface QuestionPreview {
    Question: Question;
    AnswerCount: number;
    PreviewAnswer: Answer;
}

@Injectable()
export class QuestionService {

    constructor(private http: HttpClient) {
    }

    get() {
        return this.http.get('api/Questions')
            .map(response => {
                return response;
            });
    }

    getById(id: number) {
        return this.http.get('api/Questions/' + id)
            .map(response => {
                return response;
            });
    }

    add(question: Question) {
        return this.http.post('api/Questions', question)
            .map(response => { });
    }

    update(question: Question) {
        return this.http
            .put('api/Questions/' + question.id, question)
            .map(response => { });
    }

}