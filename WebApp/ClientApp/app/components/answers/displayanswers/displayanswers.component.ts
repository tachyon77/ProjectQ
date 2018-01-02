import { Component, Inject, Input, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AnswerService, Answer } from '../answers.service'

@Component({
    selector: 'display-answers',
    templateUrl: './displayanswers.component.html'
})

export class DisplayAnswersComponent {
    public answers: Answer[];
    private _questionId: number;

    @Input()
    set questionId(questionId: number) {
        this._questionId = questionId;
    }

    constructor(
        private answerService: AnswerService,
        http: Http) {
        this.answerService.getForQuestion(1).subscribe(result => {
            this.answers = result as Answer[];
        }, error => console.error(error));
    }
}


