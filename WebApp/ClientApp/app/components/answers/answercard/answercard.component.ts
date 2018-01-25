import { Component, Input } from '@angular/core';
import { AnswerService, Answer } from '../answers.service'

@Component({
    selector: 'answer-card',
    templateUrl: './answercard.component.html',
    styleUrls: ['./answercard.component.css'],
})

export class AnswerCardComponent {
    private _answer: Answer;
    public isUpdateAnswerVisible: boolean;

    @Input()
    set answer(answer: Answer) {
        this._answer = answer;
    }

    get answer() {
        return this._answer;
    }

    constructor() {
        this.isUpdateAnswerVisible = false;
    }

    OnEditClick() {
        this.isUpdateAnswerVisible = true;
    }

    onAnswerUpdated(answer: Answer) {
        console.log("updating answer: " + answer.text);
        this.answer = answer;
        this.isUpdateAnswerVisible = false;
    }
}


