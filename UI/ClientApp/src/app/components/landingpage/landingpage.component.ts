import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'landing-page',
    templateUrl: './landingpage.component.html',
    styleUrls: ['./landingpage.component.css']
})
export class LandingPageComponent {

    // 0: login form
    // 1: registration form
    // 2: Request invitation form
    state: number = 0;


    @Output() loggedIn = new EventEmitter();
    @Output() continuedWithoutLogin = new EventEmitter();

    constructor(
        private router: Router) {

        this.router.onSameUrlNavigation = 'reload';
    }

    onContinueWithoutLogin() {
        this.continuedWithoutLogin.emit();
    }

    onRegistrationCompleted() {
        this.state = 0;
    }

    onLoggedIn(event: Event) {
        this.loggedIn.emit(event);
    }

    onShowLogin() {
        this.state = 0;
    }

    onShowRegistration() {
        this.state = 1;
    }

    onRequestInvite() {
        this.state = 2;
    }

    onInviteReqSubmitted() {
        this.state = 0;
    }

}
