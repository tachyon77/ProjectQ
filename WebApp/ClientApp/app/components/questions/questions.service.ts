import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../services/identity.service'
import { Answer } from '../answers/answers.service'
import 'rxjs/add/operator/map';


export interface Question {
    title: string;
    description: string;
    id: number;
    isDeleted: boolean;
    offeredPrice: number;
    originDate: Date;
    user: User;
    answers: Answer[];
}

export interface UserSpecificQuestionPreview {
    isFollowing: boolean;
    question: Question;
    previewAnswer: Answer;
}

@Injectable()
export class QuestionService {

    constructor(private http: HttpClient) {
    }

    getAllAskedByMe() {
        return this.http.get('api/questions/my')
            .map(response => {
                return response;
            });
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