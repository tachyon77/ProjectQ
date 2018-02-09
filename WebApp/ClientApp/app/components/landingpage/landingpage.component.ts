import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService, LoginForm } from '../../services/login.service';

@Component({
    selector: 'landing-page',
    templateUrl: './landingpage.component.html',
    styleUrls: ['./landingpage.component.css']
})
export class LandingPageComponent {

    @Output() loggedIn = new EventEmitter();
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private router: Router) {

        this.router.onSameUrlNavigation = 'reload';
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


    onSubmit(loginForm: LoginForm) {
        this.loginService.login(loginForm).subscribe(result => {
            console.log("login result: ");
            console.log(result);
            if (result != null && result.length > 0) {
                this.loggedIn.emit(result);
            }
        }, error => console.error(error));
    }


}
