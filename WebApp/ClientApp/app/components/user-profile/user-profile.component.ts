import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationUser, ApplicationUserService, UserProfile }
    from '../../services/application-user.service'

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

    private _loggedInUser: ApplicationUser;
    private _profileOwner: UserProfile;

    private paramsSubscription: any;


    get profileOwner() {
        return this._profileOwner;
    }

    get loggedInUser() {
        return this._loggedInUser;
    }

    ngOnInit() {
        this.paramsSubscription =
            this.activatedRoute.params
                .subscribe(params => {
                    let userId = params['id'];

                    this.applicationUserService.getUserInfo(userId).subscribe(
                        response => {
                            this._profileOwner = response as UserProfile;
                        }
                    );
                });

    }

    constructor(
        private activatedRoute: ActivatedRoute,
        private applicationUserService: ApplicationUserService
    ) {
        this.applicationUserService.getContact().subscribe(
            response => {
                this._loggedInUser = response as ApplicationUser;
            }
        );
    }
}
