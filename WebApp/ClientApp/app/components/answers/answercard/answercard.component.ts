import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnswerService, AnswerDetail } from '../answers.service'
import { AnswerRating, AnswerRatingService } from '../../../services/answerrating.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
    selector: 'answer-card',
    templateUrl: './answercard.component.html',
    styleUrls: ['./answercard.component.css'],
})

export class AnswerCardComponent {
    answerContent: SafeHtml;
    private _answerDetail: AnswerDetail;
    public isUpdateAnswerVisible: boolean;
    @Output() answerDeleted = new EventEmitter();
    public rating: boolean[];


    @Input()
    set answerDetail(answerDetail: AnswerDetail) {
        this._answerDetail = answerDetail;
        this.answerContent =
            this.sanitizer.bypassSecurityTrustHtml(answerDetail.answer.text);

        if (answerDetail.rating == null) {
            this.rating[0] = true;
        }
        else {
            this.rating[answerDetail.rating.rating] = true;
        }

    }

    rate(score: number) {
        console.log("Rated: " + score);

        for (var i = 0; i < 6; i++) {
            this.rating[i] = false;
        }
        this.rating[score] = true;

        var answerRating = new AnswerRating();
        answerRating.answerId = this._answerDetail.answer.id;
        answerRating.rating = score;
        this.answerRatingService.postRating(answerRating)
            .subscribe((result) => { });
    }

    get answerDetail() {
        return this._answerDetail; 
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
        this._answerDetail.answer.isDeleted = !this._answerDetail.answer.isDeleted;
        this.answerService.update(this._answerDetail.answer)
            .subscribe(() => {
                //this.answerDeleted.emit(this.answer);
            });
    }

    onAnswerUpdated(answerDetail: AnswerDetail) {
        console.log("updating answer: " + answerDetail.answer.id);
        this._answerDetail = answerDetail;
        this.isUpdateAnswerVisible = false;
    }
}


