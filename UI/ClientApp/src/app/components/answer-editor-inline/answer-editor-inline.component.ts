import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';

import { AnswerDraft } from '../../models/AnswerDraft';
import { Answer, ProtectedAnswerContent } from '../../models/Answer';
import { AnswerService, AnswerForm } from '../../services/answers.service'
import { AnswerDraftService } from '../../services/answer-drafts.service'
import { RedactorService } from '../../services/redactor.service'
import { ReadableDatePipe } from '../../pipes/readable-date.pipe';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';



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
            (answer: Answer) => {
                this._answer = answer;

                // There will always be a draft if there is an answer.
                this.answerDraftService.getForQuestion(answer.questionId!).subscribe(
                    json => {
                        this._draft = json as AnswerDraft;
                        this._curProtectedContent = this._draft.htmlContent;

                        this.initForm();
                        this.scheduleDraftStatusUpdater();
                    },
                    error => console.error(error)
                );
            },
            error => console.error(error)
        );
    }

    private _answer: Answer | undefined;
    private _answerId: number | undefined;
    private _draft: AnswerDraft | undefined;
    lastSaved: Date | undefined;
    draftUpdate: string = "";
    dateFilter = new ReadableDatePipe();
    // We need this to save the original content in case we want to cancel update and revert back
    private _curProtectedContent: string = "";
    form: FormGroup | undefined;

    constructor(
        private formBuilder: FormBuilder,
        private answerService: AnswerService,
        private answerDraftService: AnswerDraftService,
        private redactorService: RedactorService,
    ) {
        this._answer = new Answer();
    }

    get curProtectedContent() {
        return this._curProtectedContent;
    }

    get answer() {
        return this._answer;
    }

    get draft() {
        return this._draft;
    }

    initForm() {
        this.form = this.formBuilder.group({
            // non null assertion : only called after draft it successfully loaded
            price: this.formBuilder.control(this.draft!.price, Validators.compose([
                Validators.pattern('[0-9]+'),
            ])),
        });
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
        this.draft!.htmlContent = content;
    }

    onSubmit(form: AnswerForm) {
        this.answer!.price = form.price;
        this.answer!.protectedAnswerContent = new ProtectedAnswerContent();
        // form only loaded when draft is loaded
        this.answer!.protectedAnswerContent!.htmlContent = this.draft!.htmlContent;
        this.answer!.redactedHtmlContent =
            this.redactorService.getRedactedHtml(this.draft!.htmlContent);

        this.answerService.update(this.answer!)
            .subscribe(() => {
                this.answerUpdated.emit(this.answer);
            });
    }

    onSaveDraft(form: AnswerForm) {
        // callable only after draft is loaded
        this._draft!.price = form.price;
        this.answerDraftService.update(this._draft!)
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