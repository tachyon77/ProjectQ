import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'landing-page',
    templateUrl: './landingpage.component.html',
    styleUrls: ['./landingpage.component.css']
})
export class LandingPageComponent {

    @Output() loggedIn = new EventEmitter();
    @Output() continuedWithoutLogin = new EventEmitter();

    constructor(
        private router: Router) {

        this.router.onSameUrlNavigation = 'reload';
    }

    onLoggedIn(event: Event) {
        this.loggedIn.emit(event);
    }

}
