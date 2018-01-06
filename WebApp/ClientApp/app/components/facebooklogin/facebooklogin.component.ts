import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


declare const FB: any;

@Component({
    selector: 'facebook-login',
    templateUrl: './facebooklogin.component.html'
})

export class FacebookLoginComponent implements OnInit {

    constructor() {
        console.log("FacebookLoginComponent: constructor()");
    }

    checkLoginState() {
        FB.getLoginStatus(function (response: any) {
            if (response.status === 'connected') {
                // the user is logged in and has authenticated your
                // app, and response.authResponse supplies
                // the user's ID, a valid access token, a signed
                // request, and the time the access token 
                // and signed request each expire
                var uid = response.authResponse.userID;
                var accessToken = response.authResponse.accessToken;
                console.log('uid = ' + uid);
            } else if (response.status === 'not_authorized') {
                // the user is logged in to Facebook, 
                // but has not authenticated your app
            } else {
                // the user isn't logged in to Facebook.
            }
        });
    }

    ngOnInit() {
        console.log('initing login');
        
    }
}