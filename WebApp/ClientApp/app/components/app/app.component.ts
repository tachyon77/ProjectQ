import { Component } from '@angular/core';
import { IdentityService, User } from '../../services/identity.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    user: User;
    isLoggedIn: boolean = true;

    constructor(
        private identityService: IdentityService,
        private router: Router) {

        this.router.onSameUrlNavigation = 'reload';
    }

    onLogin(u: User) {
        this.user = u;
        this.isLoggedIn = true;
    }

    onLogout() {
        this.identityService.logout()
            .subscribe(result => {
                // TODO: this.user = undefined;
                this.isLoggedIn = false;
                this.identityService.refreshCSRFToken()
                    .subscribe();
            });
    }

    ngOnInit() {
        this.identityService.getLoggedInUser()
            .subscribe(result => {
                if (result != null) {
                    this.user = result as User;
                    this.isLoggedIn = true;
                }
                else {
                    this.isLoggedIn = false;
                }
                         
            });
    }
}
