import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AnswerService, Answer } from '../answers.service'
import { RedactorService } from '../../../services/redactor.service'

@Component({
    selector: 'add-answer',
    templateUrl: './addanswer.component.html',
    styleUrls:['./addanswer.component.css'],
})
export class AddAnswerComponent {
    form: FormGroup;
    private _questionId: number;
    private answerHtml: string;
    @Output() answerAdded = new EventEmitter();

    @Input()
    set questionId(questionId: number) {
        this._questionId = questionId;
    }

    onContentChange(content: string) {
        this.answerHtml = content;
    }

    constructor(
        private formBuilder: FormBuilder,
        private answerService: AnswerService,
        private redactorService: RedactorService,
        private router: Router) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            text: this.formBuilder.control('', Validators.compose([Validators.required])),            
        });
    }


    onSubmit() {
        let answer: Answer = new Answer();
        answer.questionId = this._questionId;
        answer.htmlContent = this.answerHtml;
        answer.redactedHtmlContent = this.redactorService.getRedactedHtml(this.answerHtml);

        this.answerService.add(answer)
            .subscribe(() => {
                this.answerAdded.emit(answer);
            });
    }
}