import { Component, Inject, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AnswerService, Answer } from '../answers.service'

@Component({
    selector: 'add-answer-form',
    templateUrl: '/addanswerform.component.html',
})
export class AddAnswerFormComponent {
    form: FormGroup;
    private _questionId: number;

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
                this.router.navigate(['/home']);
            });
    }
}