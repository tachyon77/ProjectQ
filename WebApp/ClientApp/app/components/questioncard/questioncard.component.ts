import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

import { User } from '../../models/User';
import { UserSpecificQuestionPreview } from '../../services/questions.service'
import { QuestionFollowerService } from '../../services/questionfollower.service'
import { AnswerService } from '../../services/answers.service'
import { Question } from '../../models/Question';

@Component({
    selector: 'question-card',
    templateUrl: './questioncard.component.html',
    styleUrls: ['./questioncard.component.css']
})
export class QuestionCardComponent {
    previewAnswerContent: SafeHtml | undefined;
    private _questionView: UserSpecificQuestionPreview | undefined;

    onEnterLeaveViewport(event: any, question: Question) {
        const { entry , target, value } = event;

        console.log(question.title);

        //console.log('entry', entry);
        //console.log('target', target);
        //console.log('value', value);

    }

    onFollow() {
        this.questionFollowerService.follow(
            this._questionView!.question.id).subscribe(
            () => {
                this._questionView!.isFollowing = true;
            }
        );
    }

    onUnfollow() {
        this.questionFollowerService.unfollow(
            this._questionView!.question.id).subscribe(
            () => {
                this._questionView!.isFollowing = false;
            }
        );
    }

    @Input()
    set questionView(questionView: UserSpecificQuestionPreview | undefined) {

        if(questionView){
            this._questionView = questionView;           
            if (questionView.previewAnswer) {
                this.previewAnswerContent =
                    this.sanitizer.bypassSecurityTrustHtml(
                        questionView.previewAnswer.redactedHtmlContent.substring(0, 100) + " ... ");
            }
        }
    }

    get questionView(): (UserSpecificQuestionPreview | undefined) {
        return this._questionView;
    }

    constructor(
        private sanitizer: DomSanitizer,
        private questionFollowerService: QuestionFollowerService
    ) {
    }

}


