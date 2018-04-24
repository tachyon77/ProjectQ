import { Component, Input } from '@angular/core';
import { ApplicationUserService } from '../../services/application-user.service'
import { Question, QuestionService } from
    '../../components/questions/questions.service';
import { User } from '../../services/identity.service';

@Component({
    selector: 'user-questions',
    templateUrl: './user-questions.component.html',
    styleUrls: ['./user-questions.component.css']
})

export class UserQuestionsComponent {

    private _user: User;
    private _questions: Question[];

    @Input()
    set user(u: User) {
        this._user = u;
    }

    get user() {
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
