import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService, LoginForm } from '../../services/login.service';

@Component({
    selector: 'landing-page',
    templateUrl: './landingpage.component.html',
    styleUrls: ['./landingpage.component.css']
})
export class LandingPageComponent {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService,
        private router: Router) { }

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
            console.log(result);
        }, error => console.error(error));
    }


}
