import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AnswerService, Answer } from '../../services/answers.service'
import { AnswerRating, AnswerRatingService } from '../../services/answerrating.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { IdentityService, User } from '../../services/identity.service'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ActivatedRoute } from '@angular/router';
import { QuestionService, Question } from '../../services/questions.service';

@Component({
    selector: 'answer-page',
    templateUrl: './answer-page.component.html',
    styleUrls: ['./answer-page.component.css'],
})

export class AnswerPageComponent implements OnInit {
    answerContent: SafeHtml;
    private _answer: Answer;
    public isUpdateAnswerVisible: boolean;
    @Output() answerDeleted = new EventEmitter();
    private paramsSubscription: any;
    question: Question;
    questionDescription: SafeHtml;

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
                params => {
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
            json => {
                this._answer = json as Answer;
                this.answerContent =
                    this.sanitizer.bypassSecurityTrustHtml(this._answer.redactedHtmlContent);
                this.loadQuestion(this.answer.questionId);

            },
            error => console.error(error)
        );
    }

    OnEditClick() {
        this.isUpdateAnswerVisible = true;
    }

    OnDeleteClick() {
        this.answerService.delete(this.answer.id)
            .subscribe(() => {
                //this.answerDeleted.emit(this.answer);
            });
    }

    OnUnDeleteClick() {
        this.answerService.unDelete(this.answer.id)
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


