import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class ApplicationUser {
    id: string;
    firstName: string;

}


@Injectable()
export class ApplicationUserService {

    constructor(private http: HttpClient) {
    }

    getContact() {
        return this.http.get('api/applicationuser/me')
            .map(response => {
                return response;
            });
    }
}