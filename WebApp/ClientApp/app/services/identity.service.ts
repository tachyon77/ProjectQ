import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
}

@Injectable()
export class IdentityService {

    public currentUserEmail: string;

    constructor() {
    }
    
}