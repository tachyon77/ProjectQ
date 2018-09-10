import { Component, Inject, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Question } from '../../models/Question';
import { QuestionService } from '../../services/questions.service'

@Component({
    selector: 'question-editor',
    templateUrl: './questioneditor.component.html',
    styleUrls: ['./questioneditor.component.css'],
})
export class QuestionEditorComponent implements OnInit {
    form: FormGroup | undefined;
    private _question: Question | undefined;
    updatedDescription: string = "";

    @Output() questionEdited = new EventEmitter();
    @Output() questionEditCancelled = new EventEmitter();

    @Input()
    set question(question: Question | undefined) {
        if (question) {
            this._question = question;
            this.updatedDescription = question.description;

            this.form = this.formBuilder.group({
                title: this.formBuilder.control(question.title, Validators.compose([
                    Validators.required,
                ])),
                offeredPrice: this.formBuilder.control(question.offeredPrice,
                    Validators.compose([
                        Validators.pattern('[0-9]+'),
                    ]))
            });
        }
    }

    get question(): (Question | undefined) {
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

       
    }

    onSubmit(question: Question) {
        question.id = this.question!.id;
        question.description = this.updatedDescription;
        this.questionService.update(question)
            .subscribe(() => {
                this.questionEdited.emit(question);
            });
    }

    onCancel() {
        this.questionEditCancelled.emit();
    }
}