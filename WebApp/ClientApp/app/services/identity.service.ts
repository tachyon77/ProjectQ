﻿import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
}

@Injectable()
export class IdentityService {

    constructor(private http: HttpClient) {
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
}