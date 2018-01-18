import { Component, AfterViewInit, Inject } from '@angular/core';
import { Router } from "@angular/router";

declare const gapi: any;

@Component({
    selector: 'google-signin',
    templateUrl: './googlesignin.component.html'
})

export class GoogleSigninComponent implements AfterViewInit {

    private isLoggedIn: boolean = false;

    constructor() {
    }

    public auth2: any;
    public googleInit() {
        gapi.load('auth2', () => {
            this.auth2 = gapi.auth2.init({
                client_id: '1088135107632-fkljgcuqljspdqrl69tmhncadg0a7uoq.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            this.attachSignin(document.getElementById('googleBtn'));
        });
    }
    public attachSignin(element: any) {
        this.auth2.attachClickHandler(element, {},
            (googleUser: any) => {
                console.log("updating log in to true");
                let element: any = document.getElementById('googleBtn');
                element.innerHTML = "Log out";
                this.isLoggedIn = true;
                let profile = googleUser.getBasicProfile();

                console.log('Token || ' + googleUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
 
            }, (error:any) => {
                alert(JSON.stringify(error, undefined, 2));
            });
    }

    ngAfterViewInit() {
        this.googleInit();
    }
}