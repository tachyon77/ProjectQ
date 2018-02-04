import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class LoginForm {
    email: string;
    password: string;
}

@Injectable()
export class LoginService {

    constructor() {
    }
    
}