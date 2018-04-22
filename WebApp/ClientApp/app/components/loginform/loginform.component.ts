import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IdentityService, LoginCredential } from '../../services/identity.service';

@Component({
    selector: 'login-form',
    templateUrl: './loginform.component.html',
    styleUrls: ['./loginform.component.css']
})
export class LoginFormComponent {

    @Output() loggedIn = new EventEmitter();
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private identityService: IdentityService) {

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            Email: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
            Password: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
        });
    }


    onSubmit(loginForm: LoginCredential) {
        this.identityService.login(loginForm).subscribe(result => {
            if (result != null && result.length > 0) {
                this.loggedIn.emit(result);
            }
        }, error => console.error(error));
    }


}
