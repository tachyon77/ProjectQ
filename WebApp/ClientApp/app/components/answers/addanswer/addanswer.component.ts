import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AnswerService, Answer } from '../answers.service'

@Component({
    selector: 'add-answer',
    templateUrl: './addanswer.component.html',
    styleUrls:['./addanswer.component.css'],
})
export class AddAnswerComponent {
    form: FormGroup;
    private _questionId: number;
    private answerText: string;
    @Output() answerAdded = new EventEmitter();

    @Input()
    set questionId(questionId: number) {
        this._questionId = questionId;
    }

    onContentChange(content: string) {
        this.answerText = content;
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


    onSubmit() {
        let answer: Answer = new Answer();
        answer.questionId = this._questionId;
        answer.text = this.answerText;

        this.answerService.add(answer)
            .subscribe(() => {
                this.answerAdded.emit(answer);
            });
    }
}