import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { QuestionPreview } from '../questions.service'
import { AnswerService, Answer } from '../../answers/answers.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
    selector: 'question-card',
    templateUrl: './questioncard.component.html',
    styleUrls: ['./questioncard.component.css']
})
export class QuestionCardComponent {
    previewAnswerContent: SafeHtml;
    private _questionPreview: QuestionPreview;

    @Input()
    set questionPreview(question: QuestionPreview) {
        this._questionPreview = question;
        if (this._questionPreview.answerCount > 0) {
            this.previewAnswerContent =
                this.sanitizer.bypassSecurityTrustHtml(
                    this._questionPreview.previewAnswer.text.substring(0, 200));
        }
    }

    get questionPreview() {
        return this._questionPreview;
    }

    constructor(private sanitizer: DomSanitizer) {
    }

}


