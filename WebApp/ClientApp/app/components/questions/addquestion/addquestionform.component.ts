import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { QuestionService, Question } from '../questions.service'

@Component({
    selector: 'add-question-form',
    templateUrl: './addquestionform.component.html',
    styleUrls: ['./addquestionform.component.css'],
})
export class AddQuestionFormComponent {
    form: FormGroup;
    description: string = "";
    updatedDescription: string;

    constructor(
        private formBuilder: FormBuilder,
        private questionService: QuestionService,
        private router: Router) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
            offeredPrice: this.formBuilder.control('', Validators.compose([
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