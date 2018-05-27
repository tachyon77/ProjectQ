import { Component, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../../models/User';
import { AnswerRating } from '../../models/AnswerRating';
import { Answer } from '../../models/Answer';
import { Question } from '../../models/Question';

import { AnswerService } from '../../services/answers.service'
import { AnswerRatingService } from '../../services/answerrating.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { IdentityService } from '../../services/identity.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../services/questions.service';

@Component({
    selector: 'answer-page',
    templateUrl: './answer-page.component.html',
    styleUrls: ['./answer-page.component.css'],
})

export class AnswerPageComponent implements OnInit {
    answerContent: SafeHtml | undefined;
    private _answer: Answer | undefined;
    public isUpdateAnswerVisible: boolean;
    @Output() answerDeleted = new EventEmitter();
    private paramsSubscription: any;
    question: Question | undefined;
    questionDescription: SafeHtml | undefined;

    get answer() {
        return this._answer;
    }

    constructor(
        private activatedRoute: ActivatedRoute,
        private answerService: AnswerService,
        private questionService: QuestionService,
        private answerRatingService: AnswerRatingService,
        private sanitizer: DomSanitizer
    ) {
        this.isUpdateAnswerVisible = false;
    }

    ngOnInit() {
        this.paramsSubscription =
            this.activatedRoute.params.subscribe(
                (params:any) => {
                    let answerId = Number(params['id']);
                    this.loadAnswer(answerId);
                }
            );
    }

    loadQuestion(questionId: number) {
        this.questionService.getById(questionId)
            .subscribe(result => {
                this.question = result as Question;
                this.questionDescription =
                    this.sanitizer.bypassSecurityTrustHtml(this.question.description);
            }, error => console.error(error));
    }

    loadAnswer(id: number) {
        this.answerService.getById(id).subscribe(
            (answer: Answer) => {
                this._answer = answer;
                this.answerContent =
                    this.sanitizer.bypassSecurityTrustHtml(answer.redactedHtmlContent);
                this.loadQuestion(answer.questionId!);

            },
            error => console.error(error)
        );
    }

    OnEditClick() {
        this.isUpdateAnswerVisible = true;
    }

    OnDeleteClick() {
        this.answerService.delete(this.answer!.id!)
            .subscribe(() => {
                //this.answerDeleted.emit(this.answer);
            });
    }

    OnUnDeleteClick() {
        this.answerService.unDelete(this.answer!.id!)
            .subscribe(() => {
                //this.answerDeleted.emit(this.answer);
            });
    }

    onAnswerUpdated(answer: Answer) {
        this._answer = answer;
        this.answerContent =
            this.sanitizer.bypassSecurityTrustHtml(answer.redactedHtmlContent);
        this.isUpdateAnswerVisible = false;
    }

    onUpdateCancelled() {
        this.isUpdateAnswerVisible = false;
    }
}


