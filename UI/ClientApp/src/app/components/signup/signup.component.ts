import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IdentityService, SignupForm, RegistrationRequestReponse } from '../../services/identity.service';
import { Router } from '@angular/router';

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    form: FormGroup | undefined;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
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

    onSubmit(signupForm: SignupForm) {
        this.identityService.register(signupForm)
            .subscribe((result: RegistrationRequestReponse) => {
                if (result.isSucceeded == true) {
                    this.router.navigateByUrl("/confirm-signup");
                }
                else {
                    alert(result.errorCode);
                }
            }, error => console.error(error));
    }
}
