import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddQuestionFormComponent } from './components/addquestion/addquestionform.component';
import { AnswerPageComponent } from './components/answer-page/answer-page.component';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landingpage/landingpage.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { QuestionDetailComponent } from './components/questiondetail/questiondetail.component';
import { RequestInviteComponent } from './components/request-invite/request-invite.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
