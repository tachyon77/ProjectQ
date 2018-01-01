import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { QuestionService, Question } from '../questions.service'

@Component({
    selector: 'add-question-form',
    templateUrl: '/addquestionform.component.html',
})
export class AddQuestionFormComponent {
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private questionService: QuestionService,
        private router: Router) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            Title: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
            Description: this.formBuilder.control(''),
        });
    }


    onSubmit(question: Question) {
        this.questionService.add(question)
            .subscribe(() => {
                this.router.navigate(['/display-questions']);
            });
    }
}