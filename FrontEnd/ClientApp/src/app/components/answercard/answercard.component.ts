import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { AnswerService, UserSpecificAnswerView } from '../../services/answers.service'

import { Answer } from '../../models/Answer';
import { User } from '../../models/User';
import { AnswerRating } from '../../models/AnswerRating';
import { AnswerPayment } from '../../models/AnswerPayment';

import { AnswerRatingService } from '../../services/answerrating.service'
import { AnswerPaymentService } from '../../services/answer-payment.service';
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
        private answerPaymentService: AnswerPaymentService,
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

    onOpenCreditPay() {
        var handler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_DAraSvJLJBImk4lRam9CiLq8',
            image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
            locale: 'auto',
            token: (token) => {
                let ans = this._answerView.answer;
                let answerPayment = new AnswerPayment();
                answerPayment.amount = ans.price;
                answerPayment.answerId = ans.id;
                answerPayment.paymentTypeId = 1; // TODO: remove hard coding

                answerPayment!.token = token.id;
                this.answerPaymentService.postPayment(answerPayment!)
                    .subscribe(
                        paymentStatus => {
                            if (paymentStatus.isSuccessful) {
                                this.answerService.purchase(this.answerView!.answer!.id!)
                                    .subscribe(() => {
                                        alert("Purchase successful. You can view purchased answers in your profile page.");
                                        this.showPaymentForm = false;
                                    });
                            }
                        },
                        error => {
                            console.log('credit payment error ' + error);
                        }
                    );
            },
            zipCode: true

        });

        handler.open({
            name: 'Sharedmem',
            description: 'Purchase Answer',
            amount: this.answerView!.answer!.price * 100,
        });
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


