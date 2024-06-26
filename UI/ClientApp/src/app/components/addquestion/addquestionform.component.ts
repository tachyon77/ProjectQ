﻿import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Question } from '../../models/Question';
import { QuestionService } from '../../services/questions.service'

@Component({
    selector: 'add-question-form',
    templateUrl: './addquestionform.component.html',
    styleUrls: ['./addquestionform.component.css'],
})
export class AddQuestionFormComponent {
    form: FormGroup | undefined;
    description: string = "";
    updatedDescription: string = "";

    constructor(
        private formBuilder: FormBuilder,
        private questionService: QuestionService,
        private router: Router) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
            isAnonymous: this.formBuilder.control(false),
            offeredPrice: this.formBuilder.control(0, Validators.compose([
                Validators.pattern('[0-9]+'),
            ])),
        });
    }

    onDescriptionChanged(newDesc: string) {
        this.updatedDescription = newDesc;
    }

    onSubmit(question: Question) {
        question.description = this.updatedDescription;
        this.questionService.add(question)
            .subscribe(() => {
                this.router.navigate(['/home']); // TODO: go to the question instead
            });
    }
}