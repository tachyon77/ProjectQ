﻿import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { AnswerService, Answer, ProtectedAnswerContent } from '../../services/answers.service'
import { AnswerDraftService, AnswerDraft } from '../../services/answer-drafts.service'
import { RedactorService } from '../../services/redactor.service'
import { ReadableDatePipe } from '../../pipes/readable-date.pipe';

// Input: answer id
// Output: Answer updated event, Update canelled event.

@Component({
    selector: 'answer-editor-inline',
    templateUrl: './answer-editor-inline.component.html',
    styleUrls: ['./answer-editor-inline.component.css'],
})
export class AnswerEditorInlineComponent{

    @Output() answerUpdated = new EventEmitter();
    @Output() updateCancelled = new EventEmitter();

    @Input()
    set answerId(id: number) {
        this.answerService.getById(id).subscribe(
            json => {
                this._answer = json as Answer;

                // There will always be a draft if there is an answer.
                this.answerDraftService.getForQuestion(this.answer.questionId).subscribe(
                    json => {
                        this._draft = json as AnswerDraft;
                        this._curProtectedContent = this._draft.htmlContent;

                        this.scheduleDraftStatusUpdater();
                    },
                    error => console.error(error)
                );
            },
            error => console.error(error)
        );
    }

    private _answer: Answer;
    private _answerId: number;
    private _draft: AnswerDraft;
    lastSaved: Date;
    draftUpdate: string;
    dateFilter = new ReadableDatePipe();
    // We need this to save the original content in case we want to cancel update and revert back
    private _curProtectedContent: string;

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

    scheduleDraftStatusUpdater() {
        setInterval(
            () => {
                if (this.lastSaved) {
                    this.draftUpdate =
                        "Draft saved "
                        + this.dateFilter.transform(this.lastSaved);
                }
            },
            15000
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
            .subscribe(() => {
                this.lastSaved = new Date();
                this.draftUpdate = "Draft saved " + this.dateFilter.transform(this.lastSaved);
            });
    }

    onCancel() {
        //this.answer.protectedAnswerContent.htmlContent = this._curProtectedContent;
        this.updateCancelled.emit();
    }
}