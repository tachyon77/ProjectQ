import { Component } from '@angular/core';

import { User } from './models/User';
import { IdentityService, LoginCredential } from './services/identity.service';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-root',
    providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    user: User | undefined;
    isLoggedIn: boolean = false;
    continueWithoutLogin: boolean = false;

    constructor(
        private location: Location,
        private identityService: IdentityService,
        private router: Router) {

        this.router.onSameUrlNavigation = 'reload';
    }

    onLogin(u: User) {
        this.user = u;
        this.isLoggedIn = true;
    }

    onContinueWithoutLogin() {
        this.continueWithoutLogin = true;
    }

    onWantsToLogin() {
        this.isLoggedIn = false;
        this.continueWithoutLogin = false;
    }

    onLogout() {
        this.identityService.logout().subscribe(
            data => { // success path
                this.isLoggedIn = false;
                this.identityService.refreshCSRFToken()
                    .subscribe();
            },
            error => {
                alert("failed to log out");
            }
        );
    }


    loadUser() {
        this.identityService.getLoggedInUser().subscribe(
            (user: User) => {
                if (user) {
                    this.user = user;
                    this.isLoggedIn = true;
                } else {
                    this.isLoggedIn = false;
                }
            },
            error => {
                // not supposed to come here. Error is already caught in service layer.
            }
        );
    }

    ngOnInit() {
        if (this.location.path() == '/anonymous') {
            var loginForm = new LoginCredential();
            loginForm.Email = "anonymous@sharedmem.com";
            loginForm.Password = "anonymous";

            this.identityService.login(loginForm).subscribe(
                (user: User) => {
                    if (user) {
                        this.loadUser();
                    } else {
                        alert("Login Failed.");
                    }
                },
                error => {
                    alert("Login failed: " + error);
                }
            );
           
        } else {
            this.loadUser();
        }
    }
}
