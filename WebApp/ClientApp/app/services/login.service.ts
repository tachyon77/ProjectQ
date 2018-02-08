import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class LoginForm {
    Email: string;
    Password: string;
}

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {
    }

    login(formData: LoginForm) {
        console.log("posting login request");
        console.log(formData);
        return this.http.post('api/Account', formData)
            .map(response => {
                return response;
            });
    }

}