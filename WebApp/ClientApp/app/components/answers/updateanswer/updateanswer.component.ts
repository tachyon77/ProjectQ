import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { AnswerService, Answer, ProtectedAnswerContent } from '../answers.service'
import { AnswerDraftService, AnswerDraft } from '../../../services/answer-drafts.service'
import { RedactorService } from '../../../services/redactor.service'

@Component({
    selector: 'update-answer',
    templateUrl: './updateanswer.component.html',
    styleUrls:['./updateanswer.component.css'],
})
export class UpdateAnswerComponent {

    private _answer: Answer;
    private _draft: AnswerDraft;

    // We need this to save the original content in case we want to cancel update and revert back
    private _curProtectedContent: string;

    @Output() answerUpdated = new EventEmitter();
    @Output() updateCancelled = new EventEmitter();

    constructor(
        private answerService: AnswerService,
        private answerDraftService: AnswerDraftService,
        private redactorService: RedactorService,
    ) { }

    get curProtectedContent() {
        return this._curProtectedContent;
    }

    get answer() {
        return this._answer;
    }

    get draft() {
        return this._draft;
    }

    @Input()
    set answer(answer: Answer) {
        this._answer = answer;
        
        // There will always be a draft if there is an answer.
        this.answerDraftService.getForQuestion(answer.questionId).subscribe(
            json => {
                this._draft = json as AnswerDraft;
                this._curProtectedContent = this._draft.htmlContent;
            },
            error => console.error(error)
        );    
    }

    onContentChange(content: string) {
        this.draft.htmlContent = content;
    }

    onSubmit() {

        this.answer.protectedAnswerContent = new ProtectedAnswerContent();
        this.answer.protectedAnswerContent.htmlContent = this.draft.htmlContent;
        this.answer.redactedHtmlContent =
            this.redactorService.getRedactedHtml(this.draft.htmlContent);

        this.answerService.update(this.answer)
            .subscribe(() => {
                this.answerUpdated.emit(this.answer);
            });
    }

    onSaveDraft() {
        this.answerDraftService.update(this._draft)
            .subscribe(() => {});
    }

    onCancel() {
        this.answer.protectedAnswerContent.htmlContent = this._curProtectedContent;
        this.updateCancelled.emit();
    }
}