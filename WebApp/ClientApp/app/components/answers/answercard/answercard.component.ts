import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnswerService, Answer } from '../answers.service'
import { AnswerRating, AnswerRatingService } from '../../../services/answerrating.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
    selector: 'answer-card',
    templateUrl: './answercard.component.html',
    styleUrls: ['./answercard.component.css'],
})

export class AnswerCardComponent {
    answerContent: SafeHtml;
    private _answer: Answer;
    public isUpdateAnswerVisible: boolean;
    @Output() answerDeleted = new EventEmitter();
    public rating: boolean[];


    @Input()
    set answer(answer: Answer) {
        this._answer = answer;
        this.answerContent =
            this.sanitizer.bypassSecurityTrustHtml(answer.text);
    }

    rate(score: number) {
        console.log("Rated: " + score+1);

        for (var i = 0; i < 6; i++) {
            this.rating[i] = false;
        }
        this.rating[score] = true;

        var answerRating = new AnswerRating();
        answerRating.AnswerId = this._answer.id;
        answerRating.Rating = score;
        this.answerRatingService.postRating(answerRating)
            .subscribe((result) => { });
    }

    get answer() {
        return this._answer; 
    }

    constructor(
        private answerService: AnswerService,
        private answerRatingService: AnswerRatingService,
        private sanitizer: DomSanitizer
    ) {
        this.isUpdateAnswerVisible = false;
        this.rating = [false, false, false, false, false, true];
    }

    OnEditClick() {
        this.isUpdateAnswerVisible = true;
    }

    OnDeleteClick() {
        this.answer.isDeleted = !this.answer.isDeleted;
        this.answerService.update(this.answer)
            .subscribe(() => {
                //this.answerDeleted.emit(this.answer);
            });
    }

    onAnswerUpdated(answer: Answer) {
        console.log("updating answer: " + answer.id);
        this.answer = answer;
        this.isUpdateAnswerVisible = false;
    }
}


