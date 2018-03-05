import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { QuestionPreview } from '../questions.service'

@Component({
    selector: 'question-card',
    templateUrl: './questioncard.component.html',
    styleUrls: ['./questioncard.component.css']
})
export class QuestionCardComponent {
    private _questionPreview: QuestionPreview;

    @Input()
    set questionPreview(question: QuestionPreview) {
        this._questionPreview = question;
    }

    get questionPreview() {
        return this._questionPreview;
    }

    constructor() {
    }

}


