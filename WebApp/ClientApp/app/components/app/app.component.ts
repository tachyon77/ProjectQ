import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isLoggedIn: boolean = true;

    ngOnInit() {
        this.isLoggedIn = false;
    }
}
