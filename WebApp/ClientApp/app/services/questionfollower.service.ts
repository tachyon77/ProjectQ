import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class QuestionFollowerService {

    constructor(private http: HttpClient) {
    }

    follow(questionId: number) {
        console.log('following question')
        console.log(questionId);
        return this.http.post('api/questionfollowers/follow', questionId)
            .map(response => {
                return response;
            });
    }

}