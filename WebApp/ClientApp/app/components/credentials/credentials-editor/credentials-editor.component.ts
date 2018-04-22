import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Education, Employment, ApplicationUserService, Credentials } from '../../../services/application-user.service';

@Component({
    selector: 'credential-editor',
    templateUrl: './credentials-editor.component.html',
    styleUrls: ['./credentials-editor.component.css']
})
export class CredentialsEditorComponent implements OnInit {
    name: string;
    userId: string;
    educations: Education[] = [];
    employments: Employment[] = [];

    educationAddModal: BsModalRef;
    educationEditModal: BsModalRef;
    employmentModal: BsModalRef;

    educationAddForm: FormGroup;
    educationEditForm: FormGroup;
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
        this.educationAddModal = this.modalService.show(
            template, { initialState }
        );
    }

    onOpenEditEducation(template: TemplateRef<any>, education: Education) {
        const initialState = {
            name: this.name
        };

        this.educationEditForm = this.formBuilder.group({
            id: this.formBuilder.control(education.id),
            school: this.formBuilder.control(education.school, Validators.compose([
                Validators.required,
            ])),
            concentration: this.formBuilder.control(education.concentration, Validators.compose([
                Validators.required,
            ])),
            secondaryConcentration: this.formBuilder.control(education.secondaryConcentration),
            degreeType: this.formBuilder.control(education.degreeType),
            graduationYear: this.formBuilder.control(education.graduationYear),
        });

        this.educationEditModal = this.modalService.show(
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

    ngOnInit() {

        this.profileService.getCredentials(this.userId).subscribe(
            response => {
                let credetials = response as Credentials;
                this.educations = [];
                this.employments = [];
                credetials.educations.forEach((e) => { this.educations.push(e); });
                credetials.employments.forEach((e) => { this.employments.push(e); });
            }
        );

        this.educationAddForm = this.formBuilder.group({
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

    onAddEducationSubmit(education: Education) {
        this.profileService.addEducaion(education)
            .subscribe(() => {
                this.educationAddModal.hide();
                this.profileService.getCredentials(this.userId).subscribe(
                    response => {
                        this.educations = [];
                        let credetials = response as Credentials;
                        credetials.educations.forEach((e) => { this.educations.push(e); });
                    }
                );
            });
    }

    onEditEducationSubmit(education: Education) {
        this.profileService.updateEducaion(education)
            .subscribe(() => {
                this.educationEditModal.hide();
                this.profileService.getCredentials(this.userId).subscribe(
                    response => {
                        this.educations = [];
                        let credetials = response as Credentials;
                        credetials.educations.forEach((e) => { this.educations.push(e); });
                    }
                );
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
