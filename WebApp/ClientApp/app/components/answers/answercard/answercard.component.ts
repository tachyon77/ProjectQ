import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnswerService, Answer } from '../answers.service'
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

    @Input()
    set answer(answer: Answer) {
        this._answer = answer;
        this.answerContent =
            this.sanitizer.bypassSecurityTrustHtml(answer.text);
    }

    get answer() {
        return this._answer; 
    }

    constructor(
        private answerService: AnswerService,
        private sanitizer: DomSanitizer
    ) {
        this.isUpdateAnswerVisible = false;
    }

    OnEditClick() {
        this.isUpdateAnswerVisible = true;
    }

    OnDeleteClick() {
        this.answer.isDeleted = true;
        this.answerService.update(this.answer)
            .subscribe(() => {
                console.log("deleting answer " + this.answer.id);
                this.answerDeleted.emit(this.answer);
            });
    }

    onAnswerUpdated(answer: Answer) {
        console.log("updating answer: " + answer.id);
        this.answer = answer;
        this.isUpdateAnswerVisible = false;
    }
}


