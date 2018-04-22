import { Inject, Injectable } from '@angular/core';
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
    id: number;
    school: string;
    concentration: string;
    secondaryConcentration: string
    degreeType: string;
    graduationYear: number;
}

export class Employment {
    id: number;
    position: string;
    company: string;
    start: Date;
    end: Date;
    isCurrent: boolean;
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
        return this.http.put('api/profile/name', profile)
            .map(response => {
                return response;
            });
    }

    addEducaion(education: Education) {
        return this.http.post('api/credentials/educations', education)
            .map(response => {
                return response;
            });
    }

    updateEducaion(education: Education) {
        return this.http.put('api/credentials/educations', education)
            .map(response => {
                return response;
            });
    }

    addEmployment(employment: Employment) {
        return this.http.post('api/credentials/employments', employment)
            .map(response => {
                return response;
            });
    }

    updateEmployment(employment: Employment) {
        return this.http.put('api/credentials/employments', employment)
            .map(response => {
                return response;
            });
    }

    updateIntroduction(profile: UserProfile) {
        return this.http.put('api/profile/introduction', profile)
            .map(response => {
                return response;
            });
    }
}