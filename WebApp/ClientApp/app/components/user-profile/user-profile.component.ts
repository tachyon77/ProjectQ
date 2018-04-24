import { Component, OnInit, Output } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ActivatedRoute } from '@angular/router';
import { ApplicationUserService, Education, Employment, Credentials} from '../../services/application-user.service';
import { CredentialsReadonlyComponent } from '../../components/credentials/credentials-readonly/credentials-readonly.component'
import { CredentialsEditorComponent } from '../../components/credentials/credentials-editor/credentials-editor.component'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { User } from '../../services/identity.service';

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

    bsModalRef: BsModalRef;
    isNameEditorVisible = false;
    isIntroductionEditorVisible = false;
    profileUserId: string;
    private _loggedInUser: User;
    private _currentProfile: User;
    private _updatedProfile: User;
    private _credetials: Credentials;
    introductionContent: SafeHtml;

    private paramsSubscription: any;

    showNameEditor() {
        this.isNameEditorVisible = true;
    }

    showIntroductionEditor() {
        this.isIntroductionEditorVisible = true;
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
        this._updatedProfile.name = newName;
    }

    onIntroductionChanged(newIntro: string) {
        this._updatedProfile.introduction = newIntro;
    }

    onCancelNameChange() {
        this.isNameEditorVisible = false;
        this._updatedProfile.name = this._currentProfile.name;
    }

    onCancelIntroductionChange() {
        this.isIntroductionEditorVisible = false;
        this._updatedProfile.introduction = this._currentProfile.introduction;
    }

    updateName() {
        this.applicationUserService
            .updateName(this._updatedProfile.name)
            .subscribe(() => {
                this._currentProfile.name = this._updatedProfile.name;
                this.isNameEditorVisible = false;
            });
    }

    updateIntroduction() {
        this.applicationUserService
            .updateIntroduction(this._updatedProfile.introduction)
            .subscribe(() => {
                this._currentProfile.introduction = this._updatedProfile.introduction;
                this.introductionContent =
                    this.sanitizer.bypassSecurityTrustHtml(this._currentProfile.introduction);

                this.isIntroductionEditorVisible = false;
            });
    }

    onOpenCredentialsEditor() {
        const initialState = {
            name: this.currentProfile.name,
            userId: this.profileUserId
        };
        this.bsModalRef = this.modalService.show(CredentialsEditorComponent, { initialState });
    }

    openCredentials() {
        const initialState = {
            name: this.currentProfile.name,
            userId: this._loggedInUser.id,
        };
        this.bsModalRef = this.modalService.show(CredentialsReadonlyComponent, { initialState });
    }


    ngOnInit() {
        this.paramsSubscription =
            this.activatedRoute.params
            .subscribe(params => {
                this.profileUserId = params['id'];

                this.applicationUserService.getProfile(this.profileUserId).subscribe(
                    response => {
                        this._currentProfile = response as User;                        
                        this._updatedProfile = new User();
                        this.introductionContent =
                            this.sanitizer.bypassSecurityTrustHtml(this._currentProfile.introduction);
                    }
                );

                this.applicationUserService.getCredentials(this.profileUserId).subscribe(
                    response => {                            
                        this._credetials = response as Credentials;
                    }
                );
            });
    }

    constructor(
        private modalService: BsModalService,
        private activatedRoute: ActivatedRoute,
        private applicationUserService: ApplicationUserService,
        private sanitizer: DomSanitizer,
    ) {
        /*
        this.applicationUserService.getContact().subscribe(
            response => {
                this._loggedInUser = response as ApplicationUser;
            }
        );*/
    }
}
