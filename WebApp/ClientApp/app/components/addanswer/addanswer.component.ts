﻿import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';

import { AnswerService, Answer, ProtectedAnswerContent } from '../../services/answers.service'
import { AnswerDraftService, AnswerDraft } from '../../services/answer-drafts.service'
import { RedactorService } from '../../services/redactor.service'
import { ReadableDatePipe } from '../../pipes/readable-date.pipe';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

interface AnswerForm {
    price: number;
}

@Component({
    selector: 'add-answer',
    templateUrl: './addanswer.component.html',
    styleUrls:['./addanswer.component.css'],
})
export class AddAnswerComponent {
    private _draft: AnswerDraft = new AnswerDraft();
    private _answer: Answer = new Answer();
    initialContent: string;
    lastSaved: Date;
    draftUpdate: string;
    dateFilter = new ReadableDatePipe();
    form: FormGroup;

    @Output() answerAdded = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder,
        private answerService: AnswerService,
        private answerDraftService: AnswerDraftService,
        private redactorService: RedactorService) {
    }


    get draft() {
        return this._draft;
    }

    @Input()
    set questionId(questionId: number) {
        this._draft.questionId = questionId;
        this._answer.questionId = questionId;

        this.answerDraftService.getForQuestion(questionId).subscribe(
            json => {
                if (json) {
                    console.log("json is not null, " + json);
                    let draft = json as AnswerDraft;
                    this._draft = draft;
                    this.initialContent = draft.htmlContent;
                } else {
                    this.initialContent = "";
                }

            },
            error => console.error(error)
        ); 
    }

    onContentChange(content: string) {
        this.draft.htmlContent = content;
    }

    ngOnInit() {

        this.form = this.formBuilder.group({
            price: this.formBuilder.control(0, Validators.compose([
                Validators.pattern('[0-9]+'),
            ])),
        });

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

    onSubmit(form: AnswerForm) {
        this._answer.protectedAnswerContent = new ProtectedAnswerContent();

        this._answer.protectedAnswerContent.htmlContent = this._draft.htmlContent;
        this._answer.redactedHtmlContent = this.redactorService.getRedactedHtml(this._draft.htmlContent);

        this.answerService.add(this._answer)
            .subscribe(() => {
                this.answerAdded.emit(this._answer);
            });
    }

    onSaveDraft() {
        
        this.answerDraftService.update(this._draft)
            .subscribe(() => {
                this.lastSaved = new Date();
                this.draftUpdate = "Draft saved " + this.dateFilter.transform(this.lastSaved);
            });
    }
}