import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class AnswerRating {
    id: number;
    answerId: number;
    originData: Date;
    lastUpdated: Date;
    rating: number;
}

@Injectable()
export class AnswerRatingService {

    constructor(private http: HttpClient) {
    }

    postRating(answerRating: AnswerRating) {
        console.log('posting answer rating:')
        console.log(answerRating);
        return this.http.post('api/answerratings', answerRating)
            .map(response => {
                return response;
            });
    }

}