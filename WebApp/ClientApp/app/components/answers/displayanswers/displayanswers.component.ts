import { Component, Inject, Input, Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AnswerService, Answer } from '../answers.service'

@Component({
    selector: 'display-answers',
    templateUrl: './displayanswers.component.html'
})

export class DisplayAnswersComponent implements OnInit{
    public answers: Answer[];
    private _questionId: number;

    @Input()
    set questionId(questionId: number) {
        this._questionId = questionId;
    }

    constructor(
        private answerService: AnswerService) {        
    }

    ngOnInit() {
        this.answerService.getForQuestion(this._questionId).subscribe(result => {
            this.answers = result as Answer[];
        }, error => console.error(error));  
    }
}


