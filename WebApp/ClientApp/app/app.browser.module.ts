import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        AppModuleShared
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl },
        { provide: 'ABCD', useFactory: getAbcd },

    ]
})
export class AppModule {
}

export function getBaseUrl() {
    console.log("dsflksdfkl");
    return document.getElementsByTagName('base')[0].href;
}

export function getAbcd() {
    return "abcd";
}