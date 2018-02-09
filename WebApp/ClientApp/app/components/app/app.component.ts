import { Component } from '@angular/core';
import { IdentityService } from '../../services/identity.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    userName: string;
    isLoggedIn: boolean = true;

    constructor(
        private identityService: IdentityService,
        private router: Router) {

        this.router.onSameUrlNavigation = 'reload';
    }

    onLogin(uname: string) {
        this.userName = uname;
        this.isLoggedIn = true;
        console.log("reloading after log in");
        this.router.navigate(['/home']);
    }

    onLogout() {
        this.identityService.logout()
            .subscribe(result => {
                this.userName = '';
                this.isLoggedIn = false;
                this.router.navigate(['/home']);
            });
    }

    ngOnInit() {
        this.identityService.get()
            .subscribe(result => {
                this.userName = result as string;
                this.isLoggedIn = (result != null);
            });
    }
}
