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
    public isQuestionEditorVisible: boolean;
    private paramsSubscription: any;
    public isAddAnswerVisible: boolean;

    constructor(
        private activatedRoute: ActivatedRoute,
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
                        this.answers = result as Answer[];
                    }, error => console.error(error));
            });
        
    }

    onAnswerAdded(answer: Answer) {
        console.log("pushing answer: " + answer.text);
        this.answers.push(answer);
        this.isAddAnswerVisible = false;
    }

    onAnswerDeleted(answer: Answer) {
        console.log("deleting answer: " + answer.id);
        let index = this.answers.indexOf(answer);
        if (index >= 0) {
            this.answers.splice(index, 1);
        }
    }

    onQuestionEdited(question: Question) {
        console.log("updating question: " + question.description);
        this.question = question;
        this.isQuestionEditorVisible = false;
    }
    //May be put the answer updater view inside answer card.

}


