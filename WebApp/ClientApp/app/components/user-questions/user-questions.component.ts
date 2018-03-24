import { Component, Input } from '@angular/core';
import { ApplicationUser, ApplicationUserService } from
    '../../services/application-user.service'
import { Question, QuestionService } from
    '../../components/questions/questions.service';

@Component({
    selector: 'user-questions',
    templateUrl: './user-questions.component.html',
    styleUrls: ['./user-questions.component.css']
})

export class UserQuestionsComponent {

    private _user: ApplicationUser;
    private _questions: Question[];

    @Input()
    set user(user: ApplicationUser) {
        this._user = user;
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
