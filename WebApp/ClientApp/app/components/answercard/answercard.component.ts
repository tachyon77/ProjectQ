﻿import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { AnswerService, UserSpecificAnswerView } from '../../services/answers.service'

import { Answer } from '../../models/Answer';
import { User } from '../../models/User';
import { AnswerRating } from '../../models/AnswerRating';
import { AnswerPaymentResult, AnswerPayment } from '../../models/AnswerPayment';

import { AnswerRatingService } from '../../services/answerrating.service'
import { IdentityService } from '../../services/identity.service'
import { BsModalRef, BsModalService } from 'ngx-bootstrap';


@Component({
    selector: 'answer-card',
    templateUrl: './answercard.component.html',
    styleUrls: ['./answercard.component.css'],
})

export class AnswerCardComponent {
    private _answerView: UserSpecificAnswerView | undefined;
    public isUpdateAnswerVisible: boolean;
    @Output() answerDeleted = new EventEmitter();
    public rating: boolean[];
    private _loggedInUser: User | undefined;
    answerPayment: AnswerPayment | undefined;
    showPaymentForm: boolean = false;
    creditPayModal: BsModalRef | undefined;
    isPaymentVisible: boolean = false;

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
            this.answerPayment = new AnswerPayment();
            let ans = this._answerView.answer
            this.answerPayment.amount = ans.price;
            this.answerPayment.answerId = ans.id;
            this.answerPayment.paymentTypeId = 1; // TODO: remove hard coding

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
        private modalService: BsModalService,
    ) {
        this.isUpdateAnswerVisible = false;
        this.rating = [false, false, false, false, false, false];
    }

    OnChargeProcessed(isSuccessful: boolean) {
         if (isSuccessful) {                
            this.answerService.purchase(this.answerView!.answer!.id!)
                .subscribe(() => {
                    alert("Purchase successful. You can view purchased answers in your profile page.");
                    this.showPaymentForm = false;
                });
        }
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

    onOpenCreditPay(template: TemplateRef<any>) {
        this.creditPayModal = this.modalService.show(
            template, { }
        );
    }

    onAnswerUpdated(answer: Answer) {
        // non null assertion: Guaraded by ngIf
        this.answerView!.answer = answer;
        this.isUpdateAnswerVisible = false;
    }

    onUpdateCancelled() {
        this.isUpdateAnswerVisible = false;
    }
}


