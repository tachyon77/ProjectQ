import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnswerService, UserSpecificAnswerView } from '../../services/answers.service'

import { Answer } from '../../models/Answer';
import { User } from '../../models/User';
import { AnswerRating } from '../../models/AnswerRating';

import { AnswerRatingService } from '../../services/answerrating.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { IdentityService } from '../../services/identity.service'


@Component({
    selector: 'answer-card',
    templateUrl: './answercard.component.html',
    styleUrls: ['./answercard.component.css'],
})

export class AnswerCardComponent {
    answerContent: SafeHtml | undefined;
    private _answerView: UserSpecificAnswerView | undefined;
    public isUpdateAnswerVisible: boolean;
    @Output() answerDeleted = new EventEmitter();
    public rating: boolean[];
    private _loggedInUser: User | undefined;

    get isAuthor() {
        return this.loggedInUser
            && this.answerView
            && this.answerView.answer
            && this.answerView.answer.user
            && this.answerView.answer.user.id === this.loggedInUser.id;
    }

    @Input()
    set loggedInUser(user: User | undefined) {
        this._loggedInUser = user;
    }

    // Any propoerty that can't be initialized in constrctr needs to include undefined
    get loggedInUser(): (User | undefined) {
        return this._loggedInUser;
    }

    get answerView(): (UserSpecificAnswerView | undefined) {
        return this._answerView;
    }

    @Input()
    set answerView(answerView: UserSpecificAnswerView | undefined) {
        if (answerView) {
            this._answerView = answerView;
            this.answerContent =
                this.sanitizer.bypassSecurityTrustHtml(answerView.answer.redactedHtmlContent);

            if (answerView.rating == null) {
                this.rating[0] = true;
            }
            else {
                this.rating[answerView.rating!.rating!] = true;
            }
        }
    }

    rate(score: number) {

        for (var i = 0; i < 6; i++) {
            this.rating[i] = false;
        }
        this.rating[score] = true;

        var answerRating = new AnswerRating();
        // This method is guarded by an ngIf that guarantees answerView to be defined.
        answerRating.answerId = this.answerView!.answer.id;
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
        // non null assertion: Guaraded by ngIf
        this.answerService.delete(this.answerView!.answer!.id!)
            .subscribe(() => {
                //this.answerDeleted.emit(this.answer);
            });
    }

    OnPurchaseClick() {
        // non null assertion: Guaraded by ngIf
        this.answerService.purchase(this.answerView!.answer!.id!)
            .subscribe(() => {
                alert("Purchase successful");
            });
    }

    onAnswerUpdated(answer: Answer) {
        // non null assertion: Guaraded by ngIf
        this.answerView!.answer = answer;
        this.answerContent =
            this.sanitizer.bypassSecurityTrustHtml(answer.redactedHtmlContent);
        this.isUpdateAnswerVisible = false;
    }

    onUpdateCancelled() {
        this.isUpdateAnswerVisible = false;
    }
}


