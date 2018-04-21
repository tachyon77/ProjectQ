﻿import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class ApplicationUser {
    id: string;
    firstName: string;

}

export class UserProfile {
    name: string;
    introduction: string;
}

export class Education {
    school: string;
    concentration: string;
    degreeType: string;
}

export class Employment {
    position: string;
    company: string;
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

    getProfile(id: string) {
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

    updateName(profile: UserProfile) {
        console.log("name change: " + profile.name);
        return this.http.put('api/profile/name', profile)
            .map(response => {
                return response;
            });
    }

    addEducaion(education: Education) {
        console.log("adding education: " + education.school);
        return this.http.post('api/profile/educations', education)
            .map(response => {
                return response;
            });
    }

    addEmployment(employment: Employment) {
        console.log("adding employment: " + employment.company);
        return this.http.post('api/profile/employments', employment)
            .map(response => {
                return response;
            });
    }

    updateIntroduction(profile: UserProfile) {
        console.log("introduction change: " + profile.introduction);
        return this.http.put('api/profile/introduction', profile)
            .map(response => {
                return response;
            });
    }
}