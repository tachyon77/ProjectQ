import { Component, Inject, Input, OnInit, OnDestroy }
    from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Http } from '@angular/http';
import { AnswerService, Answer } from '../../answers/answers.service'
import { Question } from '../questions.service'

@Component({
    selector: 'question-detail',
    templateUrl: './questiondetail.component.html'
})

export class QuestionDetailComponent implements OnInit, OnDestroy {
    public answers: Answer[];
    private _questionId: number;
    private paramsSubscription: any;

    @Input()
    set questionId(questionId: number) {
        this._questionId = questionId;
    }
   

    constructor(
        private activatedRoute: ActivatedRoute,
        private answerService: AnswerService) {
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

    ngOnInit() {
        this.paramsSubscription = 
        this.activatedRoute.params
            .subscribe(params => {
                this._questionId = params['id'];

                this.answerService.getForQuestion(
                    this._questionId).subscribe(result => {
                        this.answers = result as Answer[];
                    }, error => console.error(error));
            });
        
    }
}


