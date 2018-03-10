import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Notification, NotificationService } from '../../services/notification.service'
@Component({
    selector: 'notification-popover',
    templateUrl: './notification-popover.component.html',
    styleUrls: ['./notification-popover.component.css']
})
export class NotificationPopoverComponent{
    private _notificationCount: number;
    private _notifications: Notification[];

    constructor(private notificationService: NotificationService) {
        this._notifications = [];

        this.notificationService.getUnseenForUser()
            .subscribe(result => {
                this._notifications = result as Notification[];
                this._notificationCount = this._notifications.length;
            }, error => console.error(error));
    }

    get notificationCount() {
        return this._notifications.length;
    }

    get notifications() {
        return this._notifications
    }

}
