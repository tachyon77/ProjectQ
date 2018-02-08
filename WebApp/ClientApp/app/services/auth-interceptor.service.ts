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


declare var window: any;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("http intercepted.");

        var accessToken: string = "";

        if (window.authResponse != null) {
            accessToken = window.authResponse.accessToken;            
        }
     
        // add a custom header
        const customReq = request.clone({
            headers: request.headers.set('Authorization', accessToken) 
        });
        // pass on the modified request object
        return next.handle(customReq);
    }
}