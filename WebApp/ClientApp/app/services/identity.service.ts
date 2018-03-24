import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class AspNetUser {
    id: number;
    email: string;
}

export class LoginCredential {
    Email: string;
    Password: string;
}

export class RegistrationForm {
    Email: string;
    Password: string;
    ConfirmEmailCode: string;
}



@Injectable()
export class IdentityService {

    constructor(private http: HttpClient) {
    }

    register(regForm: RegistrationForm) {
        console.log(regForm);
        return this.http.post('api/Account/Register', regForm)
            .map(response => {
                return response as string;
            });
    }

    confirmRegistration(regForm: RegistrationForm) {
        console.log("posting registration confirmation");
        console.log(regForm);
        return this.http.post('api/Account/Confirm', regForm)
            .map(response => {
                return response as string;
            });
    }

    login(credential: LoginCredential) {
        console.log(credential);
        return this.http.post('api/Account', credential)
            .map(response => {
                return response as string;
            });
    }

    logout() {
        return this.http.post('api/account/logout', null)
            .map(response => { });
    }

    get() {
        return this.http.get('api/account/username')
            .map(response => {
                return response;
            });
    }

    refreshCSRFToken() {
        return this.http.get('api/Account/refreshtoken')
            .map(response => { });
    }
}