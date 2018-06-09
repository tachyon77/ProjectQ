import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IdentityService, LoginCredential } from '../../services/identity.service';

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

    constructor(
        private router: Router) {

        this.router.onSameUrlNavigation = 'reload';
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
