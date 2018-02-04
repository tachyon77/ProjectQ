import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FocusDirective } from './directives/focus.directive'
import { AppComponent } from './components/app/app.component';
import { LandingPageComponent } from './components/landingpage/landingpage.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ContentEditorComponent } from './components/content-editor/contenteditor.component';
import { QuestionDetailComponent } from './components/questions/questiondetail/questiondetail.component';
import { QuestionCardComponent } from './components/questions/questioncard/questioncard.component';
import { DisplayQuestionsComponent } from './components/questions/displayquestions/displayquestions.component';
import { AddQuestionFormComponent } from './components/questions/addquestion/addquestionform.component';
import { QuestionService } from './components/questions/questions.service';
import { AnswerService } from './components/answers/answers.service';
import { IdentityService } from './services/identity.service';
import { AnswerCardComponent } from './components/answers/answercard/answercard.component';
import { AddAnswerComponent } from './components/answers/addanswer/addanswer.component';
import { UpdateAnswerComponent } from './components/answers/updateanswer/updateanswer.component';
import { QuestionEditorComponent } from './components/questions/questioneditor/questioneditor.component';
import { FacebookLoginComponent } from './components/facebooklogin/facebooklogin.component'

@NgModule({
    declarations: [
        AppComponent,
        LandingPageComponent,
        NavMenuComponent,
        FocusDirective,
        ContentEditorComponent,
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
        AnswerService,
        IdentityService],
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
            { path: 'content-editor', component: ContentEditorComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}

