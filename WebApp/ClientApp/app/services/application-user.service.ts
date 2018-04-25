import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from './identity.service';

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

    getProfile(id: string) {
        if (!id) {
            id = "";
        }
        return this.http.get('api/profile/' + id)
            .map(response => {
                return response;
            });
    }

    getCredentials(id: string) {
        if (!id) {
            id = "";
        }
        return this.http.get('api/credentials/' + id)
            .map(response => {
                return response;
            });
    }

    updateUser(user: User) {
        return this.http.put('api/profile', user)
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
}