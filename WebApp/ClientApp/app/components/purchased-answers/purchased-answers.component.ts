import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedactorService } from '../../services/redactor.service';
import { PurchasedAnswerService, PurchasedAnswer, PurchasedAnswerView } from '../../services/purchased-answers.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
    selector: 'purchased-answers',
    templateUrl: './purchased-answers.component.html',
    styleUrls: ['./purchased-answers.component.css']
})

export class PurchasedAnswersComponent {

    purchasedAnswerViews: PurchasedAnswerView[] | undefined;

    constructor(
        private activatedRoute: ActivatedRoute,
        private purchasedAnswerService: PurchasedAnswerService,
        private sanitizer: DomSanitizer,
        private redactorService: RedactorService,
    ) {
        this.loadPurchasedAnswers();
    }

    loadPurchasedAnswers() {
        this.purchasedAnswerService.get().subscribe(
            (response: PurchasedAnswerView[]) => {
                this.purchasedAnswerViews = response;
            }
        );
    }

    removeRedactionMarkers(html: string) {
        return this.redactorService.getRedactionMarkersFreeHtml(html);
    }
}
