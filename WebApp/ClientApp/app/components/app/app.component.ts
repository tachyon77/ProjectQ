import { Component } from '@angular/core';
import { IdentityService } from '../../services/identity.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isLoggedIn: boolean = true;

    constructor(private identityService: IdentityService) {

    }
    ngOnInit() {
        this.identityService.get()
            .subscribe(result => {
                console.log("User = " + result);
                this.isLoggedIn = result as boolean;
            });
    }
}
