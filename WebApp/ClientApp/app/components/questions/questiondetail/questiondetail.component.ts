import { Component, Inject, Input, OnInit, OnDestroy }
    from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnswerService, Answer, UserSpecificAnswerView } from '../../answers/answers.service'
import { QuestionService, Question } from '../questions.service'
import { IdentityService, AspNetUser } from '../../../services/identity.service'

@Component({
    selector: 'question-detail',
    templateUrl: './questiondetail.component.html',
    styleUrls: ['./questiondetail.component.css'],
})

export class QuestionDetailComponent implements OnInit, OnDestroy {
    public answerViews: UserSpecificAnswerView[];
    public question: Question;
    public isQuestionEditorVisible: boolean;
    private paramsSubscription: any;
    public isAddAnswerVisible: boolean;
    isAsker: boolean;

    constructor(
        private activatedRoute: ActivatedRoute,
        private identityService: IdentityService,
        private answerService: AnswerService,
        private questionService: QuestionService) {

        this.isAddAnswerVisible = false;
        this.isQuestionEditorVisible = false;
    }

    OnAnswerClick() {
        this.isAddAnswerVisible = true;
    }

    OnEditQuestionClick() {
        this.isQuestionEditorVisible = true;
    }

    OnDeleteQuestionClick() {
        this.question.isDeleted = !this.question.isDeleted;
        this.questionService.update(this.question)
            .subscribe(result => {
            }, error => console.error(error));
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

    loadAnswers(questionId: number) {
        this.answerService.getForQuestion(questionId)
            .subscribe(result => {
                this.answerViews = result as UserSpecificAnswerView[];
            }, error => console.error(error));
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

                this.loadAnswers(questionId);
            });
        
    }

    onAnswerAdded(answer: Answer) {
        this.loadAnswers(this.question.id);
        this.isAddAnswerVisible = false;
    }

    onAnswerDeleted(answer: Answer) {
        this.loadAnswers(this.question.id);
    }

    onQuestionEdited(question: Question) {
        this.question = question;
        this.isQuestionEditorVisible = false;
    }
    //May be put the answer updater view inside answer card.

}


