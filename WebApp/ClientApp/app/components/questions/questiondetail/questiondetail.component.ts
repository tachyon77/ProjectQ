import { Component, Inject, Input, OnInit, OnDestroy }
    from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Http } from '@angular/http';
import { AnswerService, Answer } from '../../answers/answers.service'
import { QuestionService, Question } from '../questions.service'

@Component({
    selector: 'question-detail',
    templateUrl: './questiondetail.component.html'
})

export class QuestionDetailComponent implements OnInit, OnDestroy {
    public answers: Answer[];
    public question: Question;
    private paramsSubscription: any;


    constructor(
        private activatedRoute: ActivatedRoute,
        private answerService: AnswerService,
        private questionService: QuestionService) {
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

    ngOnInit() {
        this.paramsSubscription = 
        this.activatedRoute.params
            .subscribe(params => {
                let questionId = Number(params['id']);

                this.questionService.getById(questionId)
                    .subscribe(result => {
                        this.question = result as Question;
                    }, error => console.error(error));

                this.answerService.getForQuestion(questionId)
                    .subscribe(result => {
                        this.answers = result as Answer[];
                    }, error => console.error(error));
            });
        
    }
}


