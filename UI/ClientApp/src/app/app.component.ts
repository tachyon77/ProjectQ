import { Component, OnDestroy } from '@angular/core';

import { User } from './models/User';
import { IdentityService } from './services/identity.service';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoggedInStatusService } from './services/logged-in-status.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
    user: User | undefined;
    private _isLoggedIn: boolean = false;
    continueWithoutLogin: boolean = false;
    loggedInEventsubscription: Subscription;
    loggedOutEventsubscription: Subscription;

    constructor(
        private location: Location,
        private identityService: IdentityService,
        private loggedInStatusService: LoggedInStatusService,
        private router: Router) {

        this.router.onSameUrlNavigation = 'reload';

        this.loggedInEventsubscription = this.loggedInStatusService.loggedIn$.subscribe(
            (user: User) => {
                this.user = user;
                this.router.navigateByUrl("/home");
            });

        this.loggedOutEventsubscription = this.loggedInStatusService.loggedOut$.subscribe(
            (ignored) => {
                this.user = null;
                this.identityService.refreshCSRFToken()
                    .subscribe();
                this.router.navigateByUrl("/landing-page");
            });
    }
  

    loadUser() {
        this.identityService.getLoggedInUser().subscribe(
            (user: User) => {
                if (user) {
                    this.user = user;
                    this.router.navigateByUrl("/home");
                } else {
                    this.router.navigateByUrl("/landing-page");
                }
            },
            error => {
                // not supposed to come here. Error is already caught in service layer.
            }
        );
    }

    ngOnInit() {
        this.loadUser();
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.loggedInEventsubscription.unsubscribe();
        this.loggedOutEventsubscription.unsubscribe();
    }
}
