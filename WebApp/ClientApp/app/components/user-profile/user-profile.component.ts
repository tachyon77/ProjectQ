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
    isNameEditorVisible = false;
    private _loggedInUser: ApplicationUser;
    private _currentProfile: UserProfile;
    private _updatedProfile: UserProfile;
    private _credetials: Credentials;

    private paramsSubscription: any;

    showNameEditor() {
        this.isNameEditorVisible = true;
    }

    get credentials() {
        return this._credetials;
    }

    get currentProfile() {
        return this._currentProfile;
    }

    get loggedInUser() {
        return this._loggedInUser;
    }

    onNameChange(newName: string) {
        console.log("name changed to: " + newName);
        this._updatedProfile.name = newName;
    }

    onCancelNameChange() {
        this.isNameEditorVisible = false;
        this._updatedProfile.name = this._currentProfile.name;
    }

    updateName() {
        this.applicationUserService
            .updateName(this._updatedProfile)
            .subscribe(() => {
                this._currentProfile.name = this._updatedProfile.name;
                this.isNameEditorVisible = false;
            });
    }

    openCredentials() {
        const initialState = {
            name: this.currentProfile.name,
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
                            this._currentProfile = response as UserProfile;
                            this._updatedProfile = new UserProfile();
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
