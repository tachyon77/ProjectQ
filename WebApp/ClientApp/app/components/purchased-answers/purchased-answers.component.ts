import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchasedAnswerService, PurchasedAnswer } from '../../services/purchased-answers.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
    selector: 'purchased-answers',
    templateUrl: './purchased-answers.component.html',
    styleUrls: ['./purchased-answers.component.css']
})

export class PurchasedAnswersComponent implements OnInit {

    purchasedAnswers: PurchasedAnswer[];

    private paramsSubscription: any;

    ngOnInit() {
        this.paramsSubscription =
            this.activatedRoute.params
            .subscribe(params => {
                //this.profileUserId = params['id'];
                
            });
    }


    constructor(
        private activatedRoute: ActivatedRoute,
        private purchasedAnswerService: PurchasedAnswerService,
        private sanitizer: DomSanitizer,
    ) {
        this.loadPurchasedAnswers();
    }

    loadPurchasedAnswers() {
        this.purchasedAnswerService.get().subscribe(
            response => {
                this.purchasedAnswers = response as PurchasedAnswer[];
            }
        );
    }
}
