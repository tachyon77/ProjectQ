import { Component, Input } from '@angular/core';
import { AnswerService, Answer } from '../answers.service'

@Component({
    selector: 'answer-card',
    templateUrl: './answercard.component.html',
    styleUrls: ['./answercard.component.css'],
})

export class AnswerCardComponent {
    public _answer: Answer;

    @Input()
    set answer(answer: Answer) {
        this._answer = answer;
    }

    constructor() {
    }
}


