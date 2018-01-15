import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AnswerService, Answer } from '../answers.service'

@Component({
    selector: 'answer-editor',
    templateUrl: '/answereditor.component.html',
    styleUrls:['/answereditor.component.css'],
})
export class AnswerEditorComponent {
    form: FormGroup;
    private _questionId: number;
    @Output() answerAdded = new EventEmitter();

    @Input()
    set questionId(questionId: number) {
        this._questionId = questionId;
    }

    constructor(
        private formBuilder: FormBuilder,
        private answerService: AnswerService,
        private router: Router) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            text: this.formBuilder.control('', Validators.compose([Validators.required])),            
        });
    }


    onSubmit(answer: Answer) {
        answer.QuestionId = this._questionId;
        this.answerService.add(answer)
            .subscribe(() => {
                this.answerAdded.emit(answer);
            });
    }
}