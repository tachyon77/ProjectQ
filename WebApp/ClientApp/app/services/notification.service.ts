﻿import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class Notification {
    eventDescription: string;
}

@Injectable()
export class NotificationService {

    constructor(private http: HttpClient) {
    }

    getUnseenForUser() {
        return this.http.get('api/notifications/')
            .map(response => {
                return response;
            });
    }

}