import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IdentityService, LoginCredential } from '../../services/identity.service';
import { User } from '../../models/User';
import { LoggedInStatusService } from '../../services/logged-in-status.service';

@Component({
    selector: 'login-form',
    templateUrl: './loginform.component.html',
    styleUrls: ['./loginform.component.css']
})
export class LoginFormComponent {

    @Output() loggedIn = new EventEmitter();
    form: FormGroup | undefined;

    constructor(
        private formBuilder: FormBuilder,
        private loggedInStatusService: LoggedInStatusService,
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
        this.identityService.login(loginForm).subscribe(
            (user: User) => {
                if (user) {
                    this.loggedInStatusService.logIn(user);
                } else {
                    alert("Login Failed.");
                }
            },
            error => {
                alert("Login failed: " + error);
            }
        );
    }
}
