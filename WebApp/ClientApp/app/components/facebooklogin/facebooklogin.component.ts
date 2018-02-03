import { Component, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";

declare var window: any;
declare var FB: any;


@Component({
    selector: 'facebook-login',
    templateUrl: './facebooklogin.component.html',
    styleUrls:['./facebooklogin.component.css'],
})
export class FacebookLoginComponent implements AfterViewInit {

    ngAfterViewInit() {
        window.checkLoginState = function () {
            FB.getLoginStatus(function (response: any) {
                if (response.status == 'connected') {
                    FB.api('/me?fields=name,email', function (info: any) {
                        window.authResponse = response.authResponse;
                        let e: any = document.getElementById('idUserName');
                        e.innerHTML = info.name;
                        window.user = info;
                    });               
                }
                else {
                    let e: any = document.getElementById('idUserName');
                    e.innerHTML = "";
                }
            });
        }
        window.fbAsyncInit = function () {
            FB.init({
                appId: '430143260734821',
                cookie: true,  // enable cookies to allow the server to access
                // the session
                xfbml: true,  // parse social plugins on this page
                version: 'v2.11' // use graph api version 2.11
            });

            window.checkLoginState();

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

    constructor() {
       
    }
}