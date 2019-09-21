import { Component, OnInit } from '@angular/core';
import { SignupConfirmationForm, IdentityService } from '../../services/identity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-signup',
  templateUrl: './confirm-signup.component.html',
  styleUrls: ['./confirm-signup.component.css']
})
export class ConfirmSignupComponent implements OnInit {

    constructor(
        private identityService: IdentityService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    submit(confirmationForm: SignupConfirmationForm) {
        this.identityService.confirmRegistration(confirmationForm).subscribe(result => {
            if (result != null && result.length > 0) {
                this.router.navigateByUrl("/home");
            }
        }, error => console.error(error));
    }

}
