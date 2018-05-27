import { Component, Input } from '@angular/core';

import { User } from '../../models/User';
import { Question } from '../../models/Question';
import { ApplicationUserService } from '../../services/application-user.service'
import { QuestionService } from '../../services/questions.service';

@Component({
    selector: 'user-questions',
    templateUrl: './user-questions.component.html',
    styleUrls: ['./user-questions.component.css']
})

export class UserQuestionsComponent {

    private _user: User | undefined;
    private _questions: Question[] | undefined;

    @Input()
    set user(u: User | undefined) {
        this._user = u;
    }

    get user(): (User | undefined) {
        return this._user;
    }

    get questions() {
        return this._questions;
    }

    constructor(
        private questionService: QuestionService
    ) {
        this.questionService.getAllAskedByMe().subscribe(
            response => {
                this._questions = response as Question[];
            }
        );
    }
}
