import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { DisplayQuestionsComponent } from './components/questions/displayquestions/displayquestions.component';
import { AddQuestionFormComponent } from './components/questions/addquestion/addquestionform.component';
import { QuestionService } from './components/questions/questions.service';

import { CounterComponent } from './components/counter/counter.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        DisplayQuestionsComponent,
        AddQuestionFormComponent,
        HomeComponent
    ],
    providers: [QuestionService],
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'display-questions', component: DisplayQuestionsComponent },
            { path: 'add-question-form', component: AddQuestionFormComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
