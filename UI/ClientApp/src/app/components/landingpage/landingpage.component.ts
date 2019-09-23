import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'landing-page',
    templateUrl: './landingpage.component.html',
    styleUrls: ['./landingpage.component.css']
})
export class LandingPageComponent {

    constructor(
        private router: Router) {
        this.router.onSameUrlNavigation = 'reload';
    }

}
