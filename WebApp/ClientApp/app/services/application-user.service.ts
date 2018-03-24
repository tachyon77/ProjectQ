import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class ApplicationUser {
    firstName: string;
}


@Injectable()
export class ApplicationUserService {

    constructor(private http: HttpClient) {
    }

    get() {
        return this.http.get('api/applicationuser/me')
            .map(response => {
                console.log(response);
                return response;
            });
    }
}