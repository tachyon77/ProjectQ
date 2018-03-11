import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class Notification {
    id: number;
    EventDescription: string;
    OriginData: Date;
    Link: string;
}

@Injectable()
export class NotificationService {

    constructor(private http: HttpClient) {
    }

    getUnseenForUser() {
        return this.http.get('api/notifications/unseen')
            .map(response => {
                return response;
            });
    }

}