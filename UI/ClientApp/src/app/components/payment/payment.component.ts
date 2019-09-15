import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AnswerPaymentService } from '../../services/answer-payment.service';
import { AnswerPayment } from '../../models/AnswerPayment';

import { StripeService, Elements, Element as StripeElement, ElementsOptions, TokenResult } from "ngx-stripe";
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '../../services/answers.service';
import { Answer } from '../../models/Answer';


@Component({
    selector: 'payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

    elements: Elements;
    card: StripeElement;
    private _answer: Answer | undefined;

    // optional parameters
    elementsOptions: ElementsOptions = {
        locale: 'en'
    };

    stripeForm: FormGroup;
    private paramsSubscription: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        private answerService: AnswerService,
        private fb: FormBuilder,
        private stripeService: StripeService,
        private answerPaymentService: AnswerPaymentService) { }

    ngOnInit() {
        this.paramsSubscription =
            this.activatedRoute.params.subscribe(
                (params: any) => {
                    let answerId = Number(params['id']);
                    this.loadAnswer(answerId);
                }
            );
        this.stripeForm = this.fb.group({
            name: ['', [Validators.required]]
        });
        this.stripeService.elements(this.elementsOptions)
            .subscribe(elements => {
                this.elements = elements;
                // Only mount the element the first time
                if (!this.card) {
                    this.card = this.elements.create('card', {
                        style: {
                            base: {
                                color: '#32325d',
                                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                                fontSmoothing: 'antialiased',
                                fontSize: '16px',
                                '::placeholder': {
                                    color: '#aab7c4'
                                }
                            },
                            invalid: {
                                color: '#fa755a',
                                iconColor: '#fa755a'
                            }
                        }
                    });
                    this.card.mount('#card-element');
                }
            });

    }

    loadAnswer(id: number) {
        this.answerService.getById(id).subscribe(
            (answer: Answer) => {
                this._answer = answer;
            },
            error => console.error(error)
        );
    }

    processPayment(token: any) {
        let answerPayment = new AnswerPayment();
        answerPayment.amount = this._answer.price;
        answerPayment.answerId = this._answer.id;
        answerPayment.paymentTypeId = 1; // TODO: remove hard coding

        answerPayment!.token = token.id;
        this.answerPaymentService.postPayment(answerPayment!)
            .subscribe(
                paymentStatus => {
                    if (paymentStatus.isSuccessful) {
                        this.answerService.purchase(this._answer!.id!)
                            .subscribe(() => {
                                alert("Purchase successful. You can view purchased answers in your profile page.");
                            });
                    }
                },
                error => {
                    console.log('credit payment error ' + error);
                }
            );
    }

    buy() {
        const name = this.stripeForm.get('name').value;
        this.stripeService
            .createToken(this.card, { name })
            .subscribe(result => {
                if (result.token) {
                    // Use the token to create a charge or a customer
                    // https://stripe.com/docs/charges
                    console.log(result.token);
                    this.processPayment(result.token);
                } else if (result.error) {
                    // Error creating the token
                    console.log(result.error.message);
                }
            });
    }
}
