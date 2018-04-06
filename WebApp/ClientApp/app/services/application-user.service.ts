import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class ApplicationUser {
    id: string;
    firstName: string;

}

export class UserProfile {
    name: string;
}

export class Education {
    school: string;
    concentration: string;

    toString() {
        alert("hi");
        return this.concentration + ", " + this.school;
    }
}

export class Employment {
    position: string;
    company: string;

    toString() {
        return this.position + ", " + this.company;
    }
}

export class Credentials {
    public educations: Education[] = [];
    public employments: Employment[] = [];
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

    getUserInfo(id: string) {
        return this.http.get('api/profile/' + id)
            .map(response => {
                return response;
            });
    }

    getCredentials(id: string) {
        return this.http.get('api/credentials/' + id)
            .map(response => {
                return response;
            });
    }
}