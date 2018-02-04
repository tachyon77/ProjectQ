import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'landing-page',
    templateUrl: './landingpage.component.html',
    styleUrls: ['./landingpage.component.css']
})
export class LandingPageComponent {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        //private questionService: QuestionService,
        private router: Router) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
            password: this.formBuilder.control('', Validators.compose([
                Validators.required,
            ])),
        });
    }


    onSubmit(loginFoem: LoginForm) {
        this.questionService.add(question)
            .subscribe(() => {
                this.router.navigate(['/home']);
            });
    }


}
