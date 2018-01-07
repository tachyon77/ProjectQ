import { Component } from '@angular/core';
import { Router } from "@angular/router";

declare var window: any;
declare var FB: any;

@Component({
    selector: 'facebook-login',
    templateUrl: './facebooklogin.component.html'
})

export class FacebookLoginComponent{

    showAuthResponse() {
        console.log(window.AuthRespose);
    }

    constructor() {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '430143260734821',
                cookie: true,  // enable cookies to allow the server to access
                // the session
                xfbml: true,  // parse social plugins on this page
                version: 'v2.11' // use graph api version 2.11
            });

            FB.getLoginStatus(function (response: any) {
                window.AuthRespose = response;
            });

        };

        // Load the SDK asynchronously
        (function (d, s, id) {
            var js: any, fjs: any = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
}