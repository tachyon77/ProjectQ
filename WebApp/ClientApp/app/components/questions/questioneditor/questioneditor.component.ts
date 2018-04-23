import { Component, Inject, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { QuestionService, Question } from '../questions.service'

@Component({
    selector: 'question-editor',
    templateUrl: './questioneditor.component.html',
    styleUrls: ['./questioneditor.component.css'],
})
export class QuestionEditorComponent implements OnInit {
    form: FormGroup;
    private _question: Question;
    updatedDescription: string;

    @Output() questionEdited = new EventEmitter();

    @Input()
    set question(question: Question) {
        this._question = question;
        this.updatedDescription = question.description;
    }

    get question() {
        return this._question;
    }

    onDescriptionChanged(newDesc: string) {
        this.updatedDescription = newDesc;
    }

    constructor(
        private formBuilder: FormBuilder,
        private questionService: QuestionService,
        private router: Router) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control(this.question.title, Validators.compose([
                Validators.required,
            ])),
            offeredPrice: this.formBuilder.control(this.question.offeredPrice,
                Validators.compose([
                Validators.pattern('[0-9]+'),
                ]))
        });
    }

    onSubmit(question: Question) {
        question.id = this.question.id;
        question.description = this.updatedDescription;
        console.log(question);
        this.questionService.update(question)
            .subscribe(() => {
                this.questionEdited.emit(question);
            });
    }
}