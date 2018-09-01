import { Component, OnInit, TemplateRef, Inject } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ApplicationUserService, Credentials} from '../../services/application-user.service';
import { CredentialsReadonlyComponent } from '../../components/credentials-readonly/credentials-readonly.component'
import { CredentialsEditorComponent } from '../../components/credentials-editor/credentials-editor.component'

import { User } from '../../models/User';
import { ImageStoreService } from '../../services/image-store.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

    bsModalRef: BsModalRef | undefined;
    isNameEditorVisible = false;
    isIntroductionEditorVisible = false;
    profileUserId: number | undefined;
    private _loggedInUser: User | undefined;
    private _currentProfile: User | undefined;
    private _updatedProfile: User | undefined;
    private _credetials: Credentials | undefined;
    changePictureModal: BsModalRef | undefined;
    baseUrl: string | undefined;

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

    onShowChangePicture(template: TemplateRef<any>) {
        const initialState = {
        };
        this.changePictureModal = this.modalService.show(
            template, { initialState }
        );
    }

    selectedFile: File | undefined;
    imageUrl: string | undefined;

    onPictureFileSelected(event: any) {
        this.selectedFile = <File>event.target.files[0];
        console.log(this.selectedFile);
        this.imageUrl = this.selectedFile!.name;
    }

  upload(): Observable<any> {
        const formData = new FormData();
        formData.append('image', this.selectedFile!, this.selectedFile!.name);
        return this.imageStoreService.upload(formData);
    }

  onChangePicture() {
    
        if (this.imageUrl) {
            let imageUrlLowerCase = this.imageUrl.toLowerCase();
            if (imageUrlLowerCase.startsWith("http://") || imageUrlLowerCase.startsWith("https://")) {
            } else {
                this.upload().subscribe(
                    (imagePath) => {
                      this.imageUrl = this.baseUrl!.concat("/api/imagestore/").concat(imagePath);
                      this.updatePicture();
                      this.changePictureModal!.hide();
                });
          }
        }
    }

    onNameChange(newName: string) {
        this._updatedProfile!.name = newName;
    }

    onIntroductionChanged(newIntro: string) {
        this._updatedProfile!.introduction = newIntro;
    }

    onCancelNameChange() {
        this.isNameEditorVisible = false;
        this._updatedProfile!.name = this._currentProfile!.name;
    }

    onCancelIntroductionChange() {
        this.isIntroductionEditorVisible = false;
        this._updatedProfile!.introduction = this._currentProfile!.introduction;
    }

  updatePicture() {
    this._updatedProfile!.pictureUrl = this.imageUrl;
    this.applicationUserService
      .updatePictureUrl(this._updatedProfile!)
        .subscribe(() => {
          this._currentProfile!.pictureUrl = this._updatedProfile!.pictureUrl;
        });
    }

    updateName() {
        this.applicationUserService
            .updateUser(this._updatedProfile!)
            .subscribe(() => {
                this._currentProfile!.name = this._updatedProfile!.name;
                this.isNameEditorVisible = false;
            });
    }

    updateIntroduction() {
        this.applicationUserService
            .updateUser(this._updatedProfile!)
            .subscribe(() => {
                this._currentProfile!.introduction = this._updatedProfile!.introduction;
                this.isIntroductionEditorVisible = false;
            });
    }

    onOpenCredentialsEditor() {
        const initialState = {
            name: this.currentProfile!.name,
            userId: this.profileUserId
        };
        this.bsModalRef = this.modalService.show(CredentialsEditorComponent, { initialState });
    }

    openCredentials() {
        const initialState = {
            name: this.currentProfile!.name,
            userId: this._loggedInUser!.id,
        };
        this.bsModalRef = this.modalService.show(CredentialsReadonlyComponent, { initialState });
    }


    ngOnInit() {
        this.paramsSubscription =
            this.activatedRoute.params
            .subscribe((params: any) => {
                this.profileUserId = params['id'];

                this.applicationUserService.getProfile(this.profileUserId).subscribe(
                    response => {
                        this._currentProfile = response as User;
                        this._updatedProfile = { ...this._currentProfile };                       
                    }
                );
                this.applicationUserService.getCredentials(this.profileUserId!).subscribe(
                    response => {
                        this._credetials = response as Credentials;
                    }
                );
                
            });
    }


    constructor(
        @Inject('BASE_URL') baseUrl: string,
        private modalService: BsModalService,
        private activatedRoute: ActivatedRoute,
        private applicationUserService: ApplicationUserService,
        private imageStoreService: ImageStoreService,
    ) {
      this.baseUrl = baseUrl;
    }
}
