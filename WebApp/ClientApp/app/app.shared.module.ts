import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionDetailComponent } from './components/questions/questiondetail/questiondetail.component';
import { QuestionCardComponent } from './components/questions/questioncard/questioncard.component';
import { DisplayQuestionsComponent } from './components/questions/displayquestions/displayquestions.component';
import { AddQuestionFormComponent } from './components/questions/addquestion/addquestionform.component';
import { QuestionService } from './components/questions/questions.service';
import { AnswerService } from './components/answers/answers.service';
import { AnswerCardComponent } from './components/answers/answercard/answercard.component';
import { AddAnswerComponent } from './components/answers/addanswer/addanswer.component';
import { UpdateAnswerComponent } from './components/answers/updateanswer/updateanswer.component';
import { QuestionEditorComponent } from './components/questions/questioneditor/questioneditor.component';
import { FacebookLoginComponent } from './components/facebooklogin/facebooklogin.component'

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        QuestionDetailComponent,
        QuestionCardComponent,
        DisplayQuestionsComponent,
        AddQuestionFormComponent,
        AnswerCardComponent,
        AddAnswerComponent,
        UpdateAnswerComponent,
        QuestionEditorComponent,
        FacebookLoginComponent,
        HomeComponent,
    ],
    providers: [
        QuestionService,
        AnswerService],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'add-question-form', component: AddQuestionFormComponent },
            { path: 'question-detail/:id', component: QuestionDetailComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}

