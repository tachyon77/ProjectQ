import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../questions.service'

@Component({
    selector: 'question-card',
    templateUrl: './questioncard.component.html',
    styleUrls: ['./questioncard.component.css']
})
export class QuestionCardComponent {
    private _question: Question;

    @Input()
    set question(question: Question) {
        this._question = question;
    }

    constructor() {
    }

}


