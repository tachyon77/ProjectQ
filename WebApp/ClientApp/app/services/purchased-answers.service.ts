import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

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