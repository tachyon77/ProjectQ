import { Component, OnInit, Output } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ActivatedRoute } from '@angular/router';
import {
    ApplicationUser, ApplicationUserService, UserProfile,
    Education, Employment, Credentials
} from '../../services/application-user.service';
import { CredentialsReadonlyComponent } from '../../components/credentials/credentials-readonly/credentials-readonly.component'

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

    bsModalRef: BsModalRef;
    private _loggedInUser: ApplicationUser;
    private _profileOwner: UserProfile;
    private _credetials: Credentials;

    private paramsSubscription: any;

    get credentials() {
        return this._credetials;
    }

    get profileOwner() {
        return this._profileOwner;
    }

    get loggedInUser() {
        return this._loggedInUser;
    }


    openCredentials() {
        const initialState = {
            name: this.profileOwner.name,
            educations: this._credetials.educations,
            employments: this._credetials.employments,
            title: 'Credentials'
        };
        this.bsModalRef = this.modalService.show(CredentialsReadonlyComponent, { initialState });
        this.bsModalRef.content.closeBtnName = 'Close';
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

                    this.applicationUserService.getCredentials(userId).subscribe(
                        response => {                            
                            this._credetials = response as Credentials;
                            console.log(this._credetials);
                        }
                    );
                });

    }

    constructor(
        private modalService: BsModalService,
        private activatedRoute: ActivatedRoute,
        private applicationUserService: ApplicationUserService
    ) {
        /*
        this.applicationUserService.getContact().subscribe(
            response => {
                this._loggedInUser = response as ApplicationUser;
            }
        );*/
    }
}
