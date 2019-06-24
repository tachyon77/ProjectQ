import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IdentityService, RegistrationForm, RegistrationRequestReponse } from '../../services/identity.service';

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

    checkPasswords(group: FormGroup) { // here we have the 'passwords' group
        let pass = group.controls.password.value;
        let confirmPass = group.controls.confirmPass.value;

        return pass === confirmPass ? null : { notSame: true }
    }

    confirmRegistration(regForm: RegistrationForm) {
        this.identityService.confirmRegistration(regForm).subscribe(result => {
            if (result != null && result.length > 0) {
                this.registrationCompleted.emit();
            }
        }, error => console.error(error));
    }

    submitRegistration(regForm: RegistrationForm) {
        this.identityService.register(regForm)
            .subscribe((result: RegistrationRequestReponse) => {
                if (result.isSucceeded == true) {
                    this.isEmailSent = true;
                    alert('Please check your email to confirm registration');
                    this.registrationCompleted.emit();
                }
                else {
                    alert(result.errorCode);
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
