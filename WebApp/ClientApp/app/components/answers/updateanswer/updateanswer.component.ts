import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { AnswerService, Answer, ProtectedAnswerContent } from '../answers.service'
import { RedactorService } from '../../../services/redactor.service'

@Component({
    selector: 'update-answer',
    templateUrl: './updateanswer.component.html',
    styleUrls:['./updateanswer.component.css'],
})
export class UpdateAnswerComponent {

    private _answer: Answer;
    private _curProtectedContent: string;

    @Output() answerUpdated = new EventEmitter();
    @Output() updateCancelled = new EventEmitter();

    @Input()
    set answer(answer: Answer) {
        this._answer = answer;
        //Fill in the protected content from backend at this stage.
        this.answerService.getProtectedContent(answer.id)
            .subscribe(result => {
                this._answer.protectedAnswerContent = result as ProtectedAnswerContent;
                this._curProtectedContent = this._answer.protectedAnswerContent.htmlContent;
            }, error => console.error(error));
    }

    get curProtectedContent() {
        return this._curProtectedContent;
    }

    get answer() {
        return this._answer;
    }

    onContentChange(content: string) {
        this.answer.protectedAnswerContent.htmlContent = content;
    }

    constructor(
        private answerService: AnswerService,
        private redactorService: RedactorService,
    ) { }

    ngOnInit() {

    }

    onSubmit() {
        this.answer.redactedHtmlContent =
            this.redactorService.getRedactedHtml(this.answer.protectedAnswerContent.htmlContent);
        this.answerService.update(this.answer)
            .subscribe(() => {
                this.answerUpdated.emit(this.answer);
            });
    }

    onCancel() {
        this.answer.protectedAnswerContent.htmlContent = this._curProtectedContent;
        this.updateCancelled.emit();
    }
}