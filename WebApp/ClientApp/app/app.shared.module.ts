import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FocusDirective } from './directives/focus.directive'
import { AppComponent } from './components/app/app.component';
import { LandingPageComponent } from './components/landingpage/landingpage.component';
import { LoginFormComponent } from './components/loginform/loginform.component';
import { RegistrationFormComponent } from './components/registrationform/registrationform.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { NotificationPopoverComponent } from './components/notification-popover/notification-popover.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CredentialsReadonlyComponent } from './components/credentials/credentials-readonly/credentials-readonly.component';
import { CredentialsEditorComponent } from './components/credentials/credentials-editor/credentials-editor.component';
import { UserQuestionsComponent } from './components/user-questions/user-questions.component';
import { ContentEditorComponent } from './components/content-editor/contenteditor.component';
import { InlineTextEditorComponent } from './components/inline-text-editor/inlinetexteditor.component';
import { QuestionDetailComponent } from './components/questions/questiondetail/questiondetail.component';
import { QuestionCardComponent } from './components/questions/questioncard/questioncard.component';
import { DisplayQuestionsComponent } from './components/questions/displayquestions/displayquestions.component';
import { AddQuestionFormComponent } from './components/questions/addquestion/addquestionform.component';
import { QuestionService } from './components/questions/questions.service';
import { AnswerService } from './components/answers/answers.service';
import { AnswerRatingService } from './services/answerrating.service';
import { QuestionFollowerService } from './services/questionfollower.service';
import { IdentityService } from './services/identity.service';
import { ApplicationUserService } from './services/application-user.service';
import { NotificationService } from './services/notification.service';
import { AnswerCardComponent } from './components/answers/answercard/answercard.component';
import { AddAnswerComponent } from './components/answers/addanswer/addanswer.component';
import { UpdateAnswerComponent } from './components/answers/updateanswer/updateanswer.component';
import { QuestionEditorComponent } from './components/questions/questioneditor/questioneditor.component';
import {
    AlertModule, 
    ModalModule,
    PopoverModule,
} from 'ngx-bootstrap';


@NgModule({
    entryComponents: [
        CredentialsReadonlyComponent,
        CredentialsEditorComponent,
    ],
    declarations: [
        AppComponent,
        LandingPageComponent,
        LoginFormComponent,
        RegistrationFormComponent,
        NavMenuComponent,
        NotificationPopoverComponent,
        FocusDirective,
        ContentEditorComponent,
        InlineTextEditorComponent,
        QuestionDetailComponent,
        QuestionCardComponent,
        DisplayQuestionsComponent,
        AddQuestionFormComponent,
        AnswerCardComponent,
        AddAnswerComponent,
        UpdateAnswerComponent,
        QuestionEditorComponent,
        HomeComponent,
        UserProfileComponent,
        CredentialsReadonlyComponent,
        CredentialsEditorComponent,
        UserQuestionsComponent,
    ],
    providers: [
        QuestionService,
        AnswerService,
        IdentityService,
        NotificationService,
        AnswerRatingService,
        QuestionFollowerService,
        ApplicationUserService,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AlertModule.forRoot(),
        ModalModule.forRoot(),
        PopoverModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'landing-page', component: LandingPageComponent },
            { path: 'profile/:id', component: UserProfileComponent },
            { path: 'add-question-form', component: AddQuestionFormComponent },
            { path: 'question-detail/:id', component: QuestionDetailComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}

