import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AnswerService, Answer } from '../answers.service'

@Component({
    selector: 'update-answer',
    templateUrl: './updateanswer.component.html',
    styleUrls:['./updateanswer.component.css'],
})
export class UpdateAnswerComponent {

    private _answer: Answer;
    private _curContent: string;

    @Output() answerUpdated = new EventEmitter();

    @Input()
    set answer(answer: Answer) {
        this._answer = answer;
        this._curContent = answer.text;
    }

    get curContent() {
        return this._curContent;
    }

    get answer() {
        return this._answer;
    }

    onContentChange(content: string) {
        this.answer.text = content;
    }

    constructor(
        private answerService: AnswerService) { }

    ngOnInit() {

    }

    onSubmit() {
        this.answerService.update(this.answer)
            .subscribe(() => {
                console.log("emitting updated answer " + this.answer.id);
                this.answerUpdated.emit(this.answer);
            });
    }
}