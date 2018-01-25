import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AnswerService, Answer } from '../answers.service'

@Component({
    selector: 'update-answer',
    templateUrl: './updateanswer.component.html',
    styleUrls:['./updateanswer.component.css'],
})
export class UpdateAnswerComponent {
    form: FormGroup;
    private _answer: Answer;
    @Output() answerUpdated = new EventEmitter();

    @Input()
    set answer(answer: Answer) {
        this._answer = answer;
    }

    get answer() {
        return this._answer;
    }

    constructor(
        private formBuilder: FormBuilder,
        private answerService: AnswerService,
        private router: Router) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            text: this.formBuilder.control(this.answer.text,
                Validators.compose([Validators.required])),            
        });
    }

    onSubmit(answer: Answer) {
        answer.id = this.answer.id;
        this.answerService.update(answer)
            .subscribe(() => {
                console.log("emitting answer " + answer.text);
                this.answerUpdated.emit(answer);
            });
    }
}