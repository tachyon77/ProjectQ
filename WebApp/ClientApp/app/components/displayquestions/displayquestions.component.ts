﻿import { Component, Inject, OnInit } from '@angular/core';
import { QuestionService, UserSpecificQuestionPreview } from '../../services/questions.service'

import { Question } from '../../models/Question';

@Component({
    selector: 'display-questions',
    templateUrl: './displayquestions.component.html',
    styleUrls: ['./displayquestions.component.css'],
})

export class DisplayQuestionsComponent {
    questionViews: UserSpecificQuestionPreview[] | undefined;

    constructor(
        private questionService: QuestionService) {
        this.questionService.get().subscribe(
            (result: UserSpecificQuestionPreview[]) => {
                this.questionViews = result;
            },
            (error:string) => console.error(error)
        );
    }

}


