import { Component } from '@angular/core';
import { IdentityService, AspNetUser } from '../../services/identity.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    userName: string;
    userId: string;
    isLoggedIn: boolean = true;

    constructor(
        private identityService: IdentityService,
        private router: Router) {

        this.router.onSameUrlNavigation = 'reload';
    }

    onLogin(uname: string) {
        this.userName = uname;
        this.isLoggedIn = true;
    }

    onLogout() {
        this.identityService.logout()
            .subscribe(result => {
                this.userName = '';
                this.isLoggedIn = false;
                this.identityService.refreshCSRFToken()
                    .subscribe();
            });
    }

    ngOnInit() {
        this.identityService.getLoggedInUser()
            .subscribe(result => {
                if (result != null) {
                    const user = result as AspNetUser;
                    this.userName = user.name;
                    this.userId = user.id;
                    this.isLoggedIn = true;
                }
                else {
                    this.isLoggedIn = false;
                }
                         
            });
    }
}
