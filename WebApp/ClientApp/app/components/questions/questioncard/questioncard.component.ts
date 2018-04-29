import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { UserSpecificQuestionPreview } from '../questions.service'
import { QuestionFollowerService } from '../../../services/questionfollower.service'
import { AnswerService, Answer } from '../../answers/answers.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
    selector: 'question-card',
    templateUrl: './questioncard.component.html',
    styleUrls: ['./questioncard.component.css']
})
export class QuestionCardComponent {
    previewAnswerContent: SafeHtml;
    questionDescription: SafeHtml;
    private _questionView: UserSpecificQuestionPreview;

    onFollow() {
        this.questionFollowerService.follow(
            this._questionView.question.id).subscribe(
            () => {
                this._questionView.isFollowing = true;
            }
        );
    }

    onUnfollow() {
        this.questionFollowerService.unfollow(
            this._questionView.question.id).subscribe(
            () => {
                this._questionView.isFollowing = false;
            }
        );
    }

    @Input()
    set questionView(questionView: UserSpecificQuestionPreview) {
        console.log(questionView);
        this._questionView = questionView;
        this.questionDescription =
            this.sanitizer.bypassSecurityTrustHtml(questionView.question.description);
        if (questionView.previewAnswer) {
            this.previewAnswerContent =
                this.sanitizer.bypassSecurityTrustHtml(
                questionView.previewAnswer.redactedHtmlContent.substring(0, 100) + " ... ");
        }
    }

    get questionView() {
        return this._questionView;
    }

    constructor(
        private sanitizer: DomSanitizer,
        private questionFollowerService: QuestionFollowerService
    ) {
    }

}


