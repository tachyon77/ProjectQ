import { Component, Inject, Input, OnInit, OnDestroy }
    from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../models/User';
import { Answer } from '../../models/Answer';
import { Question } from '../../models/Question';

import { AnswerService, UserSpecificAnswerView } from '../../services/answers.service'
import { QuestionService } from '../../services/questions.service'
import { IdentityService } from '../../services/identity.service'

@Component({
    selector: 'question-detail',
    templateUrl: './questiondetail.component.html',
    styleUrls: ['./questiondetail.component.css'],
})

export class QuestionDetailComponent implements OnInit, OnDestroy {
    public answerViews: UserSpecificAnswerView[] | undefined;
    public question: Question | undefined;
    public isQuestionEditorVisible: boolean = false;
    private paramsSubscription: any;
    public isAddAnswerVisible: boolean = false;
    loggedInUser: User | undefined;
    isAnswerWritten: boolean = false;
    myAnswerId: number | undefined;;

    constructor(
        private activatedRoute: ActivatedRoute,
        private identityService: IdentityService,
        private answerService: AnswerService,
        private questionService: QuestionService) {

        this.isAddAnswerVisible = false;
        this.isQuestionEditorVisible = false;
        this.isAnswerWritten = false;
    }

    get isAsker() {
        return this.loggedInUser && this.question &&
            this.question.user &&
            this.question.user.id === this.loggedInUser.id;
    }

    OnAnswerClick() {
        this.isAddAnswerVisible = true;
    }

    OnEditQuestionClick() {
        this.isQuestionEditorVisible = true;
    }

    // TODO
    OnDeleteQuestionClick() {
        this.questionService.update(this.question!)
            .subscribe(result => {
            }, error => console.error(error));
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

    loadQuestion(questionId: number) {
        this.questionService.getById(questionId)
            .subscribe((question: Question) => {
                this.question = question;
            }, error => console.error(error));
    }

    loadAnswers(questionId: number) {
        this.answerService.getForQuestion(questionId)
            .subscribe(result => {
                this.answerViews = result as UserSpecificAnswerView[];
                this.findIfWrittenAnswer();
            }, error => console.error(error));
    }

    loadLoggedInUser() {
        this.identityService.getLoggedInUser()
            .subscribe(result => {
                if (result != null) {
                    this.loggedInUser = result as User;
                    this.findIfWrittenAnswer();
                }
            }
        );
    }

    findIfWrittenAnswer() {
        if (!this.isAnswerWritten && this.answerViews && this.loggedInUser) {
            this.answerViews.forEach(
                (av) => {
                    if (av.answer!.user!.id == this.loggedInUser!.id) {
                        this.isAnswerWritten = true;
                        this.myAnswerId = av.answer.id;
                    }
                }
            );
        }
    }

    ngOnInit() {
        this.loadLoggedInUser();
        this.paramsSubscription = 
            this.activatedRoute.params
                .subscribe((params:any) => {
                    let questionId = Number(params['id']);
                    this.loadQuestion(questionId);
                    this.loadAnswers(questionId);
                }
            );
    }

    onAnswerAdded(answer: Answer) {
        this.loadAnswers(this.question!.id);
        this.isAddAnswerVisible = false;
    }

    onAnswerDeleted(answer: Answer) {
        this.loadAnswers(this.question!.id);
    }

    onQuestionEdited(question: Question) {
        this.isQuestionEditorVisible = false;
        this.loadQuestion(this.question!.id);
    }

    onQuestionEditCancelled() {
        this.isQuestionEditorVisible = false;
    }

    //May be put the answer updater view inside answer card.

}


