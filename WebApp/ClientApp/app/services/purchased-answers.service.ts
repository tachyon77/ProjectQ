import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from './questions.service';
import 'rxjs/add/operator/map';

export class PurchasedAnswerView {
    purchasedAnswer: PurchasedAnswer;
    question: Question;
}

export class PurchasedAnswer {
    id: number;
    userId: number;
    answerId: number;
    purchaseDate: Date;
    htmlContent: string;
}

@Injectable()
export class PurchasedAnswerService {
    constructor(
        private http: HttpClient) {
    }

    get() {
        return this.http.get(
            'api/PurchasedAnswers'
        ).map(
            response => {
                return response;
            }
        );
    }
}