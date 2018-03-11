import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Notification, NotificationService } from '../../services/notification.service'
@Component({
    selector: 'notification-popover',
    templateUrl: './notification-popover.component.html',
    styleUrls: ['./notification-popover.component.css'],
    host: {
        '(document:click)': 'onClick($event)',
    },
})
export class NotificationPopoverComponent{
    private _notificationCount: number;
    private fistClick: boolean = true;
    public visible: boolean = true;
    private _notifications: Notification[];

    @Output() notificationDismissed = new EventEmitter();

    constructor(
        private notificationService: NotificationService,
        private _eref: ElementRef
    ) {
        this._notifications = [];
        this.visible = true;
        this.fistClick = true;
        this.notificationService.getUnseen()
            .subscribe(result => {
                this._notifications = result as Notification[];
                this._notificationCount = this._notifications.length;
            }, error => console.error(error));
    }

    onNotificationClick(id: number) {
        this.notificationService.markAsSeen(id)
            .subscribe(result => { });
    }

    onClick(event:any) {
        if (!this._eref.nativeElement.contains(event.target)) {
            if (!this.fistClick) {
                this.notificationDismissed.emit();
                this.visible = false;
            }
            else {
                this.fistClick = false;
            }
        }
            
    }

    get notificationCount() {
        return this._notifications.length;
    }

    get notifications() {
        return this._notifications
    }

}
