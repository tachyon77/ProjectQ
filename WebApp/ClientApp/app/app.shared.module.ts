import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { DisplayQuestionsComponent } from './components/questions/displayquestions/displayquestions.component';
import { AddQuestionFormComponent } from './components/questions/addquestion/addquestionform.component';
import { QuestionService } from './components/questions/questions.service';
import { AnswerService } from './components/answers/answers.service';
import { DisplayAnswersComponent } from './components/answers/displayanswers/displayanswers.component';
import { AddAnswerFormComponent } from './components/answers/addanswer/addanswerform.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        DisplayQuestionsComponent,
        AddQuestionFormComponent,
        DisplayAnswersComponent,
        AddAnswerFormComponent,
        HomeComponent
    ],
    providers: [QuestionService, AnswerService],
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'display-questions', component: DisplayQuestionsComponent },
            { path: 'add-question-form', component: AddQuestionFormComponent },
            { path: 'add-answer-form', component: AddAnswerFormComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
