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

    showLoginForm: boolean = true;

    @Output() loggedIn = new EventEmitter();

    constructor(
        private router: Router) {

        this.router.onSameUrlNavigation = 'reload';
    }

    onRegistrationCompleted() {
        this.showLoginForm = true;
    }

    onLoggedIn(event: Event) {
        this.loggedIn.emit(event);
    }

    onShowLogin() {
        this.showLoginForm = true;
    }

    onShowRegistration() {
        this.showLoginForm = false;
    }

}
