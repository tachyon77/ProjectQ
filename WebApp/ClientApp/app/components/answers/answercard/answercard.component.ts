import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnswerService, Answer, UserSpecificAnswerView } from '../answers.service'
import { AnswerRating, AnswerRatingService } from '../../../services/answerrating.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { IdentityService, User } from '../../../services/identity.service'


@Component({
    selector: 'answer-card',
    templateUrl: './answercard.component.html',
    styleUrls: ['./answercard.component.css'],
})

export class AnswerCardComponent {
    answerContent: SafeHtml;
    private _answerView: UserSpecificAnswerView;
    public isUpdateAnswerVisible: boolean;
    @Output() answerDeleted = new EventEmitter();
    public rating: boolean[];
    private _loggedInUser: User;

    get isAsker() {
        return this.loggedInUser && this.answerView &&
            this.answerView.answer.user.id === this.loggedInUser.id;
    }

    @Input()
    set loggedInUser(user: User) {
        this._loggedInUser = user;
    }

    get loggedInUser() {
        return this._loggedInUser;
    }

    get answerView() {
        return this._answerView;
    }

    @Input()
    set answerView(answerView: UserSpecificAnswerView) {
        this._answerView = answerView;
        this.answerContent =
            this.sanitizer.bypassSecurityTrustHtml(answerView.answer.redactedHtmlContent);

        if (answerView.rating == null) {
            this.rating[0] = true;
        }
        else {
            this.rating[answerView.rating.rating] = true;
        }
    }

    rate(score: number) {

        for (var i = 0; i < 6; i++) {
            this.rating[i] = false;
        }
        this.rating[score] = true;

        var answerRating = new AnswerRating();
        answerRating.answerId = this.answerView.answer.id;
        answerRating.rating = score;
        this.answerRatingService.postRating(answerRating)
            .subscribe((result) => { });
    }

    constructor(
        private answerService: AnswerService,
        private answerRatingService: AnswerRatingService,
        private sanitizer: DomSanitizer
    ) {
        this.isUpdateAnswerVisible = false;
        this.rating = [false, false, false, false, false, false];
    }

    OnEditClick() {
        this.isUpdateAnswerVisible = true;
    }

    OnDeleteClick() {
        this.answerView.answer.isDeleted = !this.answerView.answer.isDeleted;
        this.answerService.delete(this.answerView.answer.id)
            .subscribe(() => {
                //this.answerDeleted.emit(this.answer);
            });
    }

    onAnswerUpdated(answer: Answer) {
        this.answerView.answer = answer;
        this.answerContent =
            this.sanitizer.bypassSecurityTrustHtml(answer.redactedHtmlContent);
        this.isUpdateAnswerVisible = false;
    }

    onUpdateCancelled() {
        this.isUpdateAnswerVisible = false;
    }
}


