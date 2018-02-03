import { Inject, Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
    HttpHandler,
    HttpEvent,
    HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { IdentityService } from './identity.service';


declare var window: any;

@Injectable()
export class AuthInterceptor {

    constructor(private identityService: IdentityService) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        var accessToken: string = "";

        if (window.authResponse != null) {
            accessToken = window.authResponse.accessToken;            
            this.identityService.currentUserEmail = window.user.email;
            console.log("email: " + window.user.email);
        }
        // add a custom header
        const customReq = request.clone({
            headers: new HttpHeaders()
                .set('Authorization', accessToken),
        });

        // pass on the modified request object
        return next.handle(customReq);
    }
}