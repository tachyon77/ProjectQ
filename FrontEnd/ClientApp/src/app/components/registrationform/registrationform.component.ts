import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IdentityService, RegistrationForm } from '../../services/identity.service';

@Component({
    selector: 'registration-form',
    templateUrl: './registrationform.component.html',
    styleUrls: ['./registrationform.component.css']
})
export class RegistrationFormComponent {

    isEmailSent: boolean = false;
    @Output() registrationCompleted = new EventEmitter();
    form: FormGroup | undefined;

    constructor(
        private formBuilder: FormBuilder,
        private identityService: IdentityService) {

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            Name: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
            Email: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
            Password: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
            ConfirmPassword: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
        });
    }

    confirmRegistration(regForm: RegistrationForm) {
        this.identityService.confirmRegistration(regForm).subscribe(result => {
            if (result != null && result.length > 0) {
                this.registrationCompleted.emit();
            }
        }, error => console.error(error));
    }

    submitRegistration(regForm: RegistrationForm) {
        this.identityService.register(regForm).subscribe(result => {
            if (result != null && result.length > 0) {
                this.isEmailSent = true;
            }
        }, error => console.error(error));
    }

    onSubmit(regForm: RegistrationForm) {
        if (this.isEmailSent) {
            this.confirmRegistration(regForm);
        }
        else {
            this.submitRegistration(regForm);
        }
    }


}
