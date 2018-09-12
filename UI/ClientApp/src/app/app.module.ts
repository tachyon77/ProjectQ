// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Custom Directives
import { FocusDirective } from './directives/focus.directive'
import { ViewPortWatcherDirective } from './directives/viewport-watcher.directive'

// ProjectQ components
import { AppComponent } from './app.component';
import { ApplicationUserService } from './services/application-user.service';
import { AnswerService } from './services/answers.service';
import { AnswerDraftService } from './services/answer-drafts.service';
import { AnswerEditorInlineComponent } from './components/answer-editor-inline/answer-editor-inline.component';
import { AnswerPageComponent } from './components/answer-page/answer-page.component';
import { AnswerPaymentService } from './services/answer-payment.service';
import { AnswerRatingService } from './services/answerrating.service';
import { AnswerCardComponent } from './components/answercard/answercard.component';
import { AddAnswerComponent } from './components/addanswer/addanswer.component';
import { AddQuestionFormComponent } from './components/addquestion/addquestionform.component';
import { CredentialsReadonlyComponent } from './components/credentials-readonly/credentials-readonly.component';
import { CredentialsEditorComponent } from './components/credentials-editor/credentials-editor.component';
import { ContentEditorComponent } from './components/content-editor/contenteditor.component';
import { DisplayQuestionsComponent } from './components/displayquestions/displayquestions.component';
import { HomeComponent } from './components/home/home.component';
import { HtmlContentComponent } from './components/html-content/html-content.component';
import { ImageStoreService } from './services/image-store.service';
import { InlineTextEditorComponent } from './components/inline-text-editor/inlinetexteditor.component';
import { IdentityService } from './services/identity.service';
import { LandingPageComponent } from './components/landingpage/landingpage.component';
import { LoginFormComponent } from './components/loginform/loginform.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { NotificationService } from './services/notification.service';
import { NotificationPopoverComponent } from './components/notification-popover/notification-popover.component';
import { PurchasedAnswersComponent } from './components/purchased-answers/purchased-answers.component'
import { PurchasedAnswerService } from './services/purchased-answers.service';
import { QuestionDetailComponent } from './components/questiondetail/questiondetail.component';
import { QuestionCardComponent } from './components/questioncard/questioncard.component';
import { QuestionService } from './services/questions.service';
import { QuestionFollowerService } from './services/questionfollower.service';
import { QuestionEditorComponent } from './components/questioneditor/questioneditor.component';
import { QuestionViewService } from './services/question-views.service';
import { QuestionTopicService } from './services/question-topics.service';
import { ReadableDatePipe } from './pipes/readable-date.pipe'
import { RedactorService } from './services/redactor.service'
import { RegistrationFormComponent } from './components/registrationform/registrationform.component';
import { RequestInviteComponent } from './components/request-invite/request-invite.component';
import { RequestInviteService } from './services/request-invite.service';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserQuestionsComponent } from './components/user-questions/user-questions.component';
import { ViewportWatcherService } from './directives/viewport-watcher.service';

// third-party modules
import { AlertModule, ModalModule, PopoverModule } from 'ngx-bootstrap';

@NgModule({
  entryComponents: [
    CredentialsReadonlyComponent,
    CredentialsEditorComponent,
  ],
  declarations: [
    AppComponent,
    AddQuestionFormComponent,
    AnswerCardComponent,
    AnswerEditorInlineComponent,
    AnswerPageComponent,
    AddAnswerComponent,
    CredentialsReadonlyComponent,
    CredentialsEditorComponent,
    ContentEditorComponent,
    DisplayQuestionsComponent,
    FocusDirective,
    HomeComponent,
    HtmlContentComponent,
    InlineTextEditorComponent,
    LandingPageComponent,
    LoginFormComponent,
    NavMenuComponent,
    NotificationPopoverComponent,
    PurchasedAnswersComponent,
    QuestionDetailComponent,
    QuestionCardComponent,
    QuestionEditorComponent,
    ReadableDatePipe,
    RegistrationFormComponent,
    RequestInviteComponent,
    UserProfileComponent,
    UserQuestionsComponent,
    ViewPortWatcherDirective,
  ],
  providers: [
    ApplicationUserService,
    AnswerService,
    AnswerDraftService,
    AnswerPaymentService,
    AnswerRatingService,
    ImageStoreService,
    IdentityService,
    NotificationService,
    PurchasedAnswerService,
    QuestionService,
    QuestionViewService,
    QuestionFollowerService,
    QuestionTopicService,
    RedactorService,
    RequestInviteService,
    ViewportWatcherService,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
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
      { path: 'profile', component: UserProfileComponent },
      { path: 'add-question-form', component: AddQuestionFormComponent },
      { path: 'question-detail/:id', component: QuestionDetailComponent },
      { path: 'answer-page/:id', component: AnswerPageComponent },
      { path: 'request-invite', component: RequestInviteComponent },
      { path: '**', redirectTo: 'home' },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
