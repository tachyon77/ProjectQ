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

    ngOnInit() {
        this.identityService.getLoggedInUser().subscribe(
            data => { // success path
                this.user = data as User;
                this.isLoggedIn = true;
            }, 
            error => {
                this.isLoggedIn = false;
            }
        );
    }
}
