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
    private _questionId: number;
    @Output() questionEdited = new EventEmitter();

    @Input()
    set questionId(questionId: number) {
        this._questionId = questionId;
    }

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
            description: this.formBuilder.control(''),
        });
    }

    onSubmit(question: Question) {
        question.id = this._questionId;
        this.questionService.update(question)
            .subscribe(() => {
                console.log("emitting question " + question.description);
                this.questionEdited.emit(question);
            });
    }
}