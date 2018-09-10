import { Component } from '@angular/core';

import { User } from './models/User';
import { IdentityService } from './services/identity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User | undefined;
  isLoggedIn: boolean = false;

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
}
