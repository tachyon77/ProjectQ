import { Component, Output } from '@angular/core';
import { ApplicationUser, ApplicationUserService }
    from '../../services/application-user.service'

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {

    private _user: ApplicationUser;

    @Output()
    get user() {
        return this._user;
    }

    constructor(
        private applicationUserService: ApplicationUserService
    ) {
        this.applicationUserService.getContact().subscribe(
            response => {
                this._user = response as ApplicationUser;
            }
        );
    }
}
