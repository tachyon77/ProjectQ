import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";

import { AnswerPayment } from '../../models/AnswerPayment';
import { AnswerPaymentService } from '../../services/answer-payment.service';

export interface PaymentForm {
    name: string;
}

@Component({
    selector: 'card-pay',
    templateUrl: './card-pay.component.html',
    styleUrls: ['./card-pay.component.css']
})
export class CardPayComponent implements OnInit {
    elements: Elements | undefined;
    card: StripeElement | undefined;
    private _answerPayment: AnswerPayment | undefined;


    // optional parameters
    elementsOptions: ElementsOptions = {
        locale: 'en'
    };

    stripeTest: FormGroup | undefined;

    @Input()
    set answerPayment(ap: AnswerPayment | undefined) {
        if (ap) {
            this._answerPayment = ap;
        } 
    }

    get answerPayment(): AnswerPayment | undefined {
        return this._answerPayment;
    }

    @Output() chargeProcessed = new EventEmitter<boolean>();
    @Output() cancelled = new EventEmitter();

    constructor(
        private fb: FormBuilder,
        private answerPaymentService: AnswerPaymentService,
        private stripeService: StripeService) { }

    ngOnInit() {
        this.stripeTest = this.fb.group({
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
                                iconColor: '#666EE8',
                                color: '#31325F',
                                lineHeight: '40px',
                                fontWeight: 300,
                                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                                fontSize: '18px',
                                '::placeholder': {
                                    color: '#CFD7E0'
                                }
                            }
                        }
                    });
                    this.card.mount('#card-element');
                }
            });
    }

    onCancel() {
        this.cancelled.emit();
    }

    buy(form: PaymentForm) {
        const name = form.name;
        this.stripeService
            .createToken(this.card!, { name })
            .subscribe(result => {
                if (result.token) {
                    // Use the token to create a charge or a customer
                    // https://stripe.com/docs/charges
                    console.log(result.token);

                    // non-null assertion guarded by ngIf
                    this.answerPayment!.token = result.token.id;
                    this.answerPaymentService.postPayment(this.answerPayment!)
                        .subscribe(
                        paymentStatus => {
                            this.chargeProcessed.emit(paymentStatus.isSuccessful);                               
                            },
                        error => {
                            this.chargeProcessed.emit(false);
                            }
                        );

                } else if (result.error) {
                    // Error creating the token
                    console.log(result.error.message);
                }
            });
    }
}
