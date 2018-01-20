import { Component, Inject, Input, OnInit, OnDestroy }
    from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnswerService, Answer } from '../../answers/answers.service'
import { QuestionService, Question } from '../questions.service'

@Component({
    selector: 'question-detail',
    templateUrl: './questiondetail.component.html',
    styleUrls: ['./questiondetail.component.css'],
})

export class QuestionDetailComponent implements OnInit, OnDestroy {
    public answers: Answer[];
    public question: Question;
    public isAnswerEditorVisible: boolean;
    private paramsSubscription: any;


    constructor(
        private activatedRoute: ActivatedRoute,
        private answerService: AnswerService,
        private questionService: QuestionService) {

        this.isAnswerEditorVisible = false;
    }

    OnAnswerClick() {
        this.isAnswerEditorVisible = true;
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

    onAnswerAdded(answer: Answer) {
        console.log("pushing answer: " + answer.text);
        this.answers.push(answer);
    }
}


