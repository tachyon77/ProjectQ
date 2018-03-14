import { Component, Inject, Input, OnInit, OnDestroy }
    from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnswerService, Answer, AnswerDetail } from '../../answers/answers.service'
import { QuestionService, Question } from '../questions.service'
import { IdentityService, AspNetUser } from '../../../services/identity.service'

@Component({
    selector: 'question-detail',
    templateUrl: './questiondetail.component.html',
    styleUrls: ['./questiondetail.component.css'],
})

export class QuestionDetailComponent implements OnInit, OnDestroy {
    public answerDetails: AnswerDetail[];
    public question: Question;
    public isQuestionEditorVisible: boolean;
    private paramsSubscription: any;
    public isAddAnswerVisible: boolean;

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
                console.log("Deleting question " + this.question.id);
            }, error => console.error(error));
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
                        console.log(result);
                        this.answerDetails = result as AnswerDetail[];
                    }, error => console.error(error));
            });
        
    }

    onAnswerAdded(answer: Answer) {
        console.log("pushing answer: " + answer.text);
        var answerDetail = new AnswerDetail();
        answerDetail.answer = answer;
        this.answerDetails.push(answerDetail);
        this.isAddAnswerVisible = false;
    }

    onAnswerDeleted(answerDetail: AnswerDetail) {
        console.log("deleting answer: " + answerDetail.answer.id);
        let index = this.answerDetails.indexOf(answerDetail);
        if (index >= 0) {
            this.answerDetails.splice(index, 1);
        }
    }

    onQuestionEdited(question: Question) {
        console.log("updating question: " + question.description);
        this.question = question;
        this.isQuestionEditorVisible = false;
    }
    //May be put the answer updater view inside answer card.

}


