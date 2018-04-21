import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { OnInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Education, Employment, ApplicationUserService, Credentials } from '../../../services/application-user.service';

@Component({
    selector: 'credential-editor',
    templateUrl: './credentials-editor.component.html',
    styleUrls: ['./credentials-editor.component.css']
})
export class CredentialsEditorComponent implements AfterViewInit {
    name: string;
    userId: string;
    educations: Education[] = [];
    employments: Employment[] = [];

    educationModal: BsModalRef;
    employmentModal: BsModalRef;

    form: FormGroup;
    employmentForm: FormGroup;

    constructor(
        private profileService: ApplicationUserService,
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
        public selfModalRef: BsModalRef) {
    }

    onOpenEducation(template: TemplateRef<any>) {
        const initialState = {
            name: this.name
        };
        this.educationModal = this.modalService.show(
            template, { initialState }
        );
    }

    onOpenEmployment(template: TemplateRef<any>) {
        const initialState = {
            name: this.name
        };
        this.employmentModal = this.modalService.show(
            template, { initialState }
        );
    }

    ngAfterViewInit() {

        this.profileService.getCredentials(this.userId).subscribe(
            response => {
                let credetials = response as Credentials;
                credetials.educations.forEach((e) => { this.educations.push(e); });
                credetials.employments.forEach((e) => { this.employments.push(e); });
            }
        );

        this.form = this.formBuilder.group({
            school: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
            concentration: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
            secondaryConcentration: this.formBuilder.control(''),
            degreeType: this.formBuilder.control(''),
            graduationYear: this.formBuilder.control(''),
        });

        this.employmentForm = this.formBuilder.group({
            company: this.formBuilder.control('', Validators.compose([Validators.required])),
            position: this.formBuilder.control('', Validators.compose([Validators.required])),
        });
    }

    onSubmit(education: Education) {
        this.profileService.addEducaion(education)
            .subscribe(() => {
                this.educationModal.hide();
                this.educations.push(education);
            });
    }

    onEmploymentSubmit(employment: Employment) {
        this.profileService.addEmployment(employment)
            .subscribe(() => {
                this.employmentModal.hide();
                this.employments.push(employment);
            });
    }
}
