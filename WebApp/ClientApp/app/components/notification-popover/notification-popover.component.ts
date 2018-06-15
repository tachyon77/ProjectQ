import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Notification } from '../../services/notification.service'

@Component({
    selector: 'notification-popover',
    templateUrl: './notification-popover.component.html',
    styleUrls: ['./notification-popover.component.css'],
    host: {
        '(document:click)': 'onClick($event)',
    },
})
export class NotificationPopoverComponent{
    private fistClick: boolean = true;
    visible: boolean = true;

    @Input() notifications: Notification[] = [];

    @Output() notificationDismissed = new EventEmitter();
    @Output() notificationClicked = new EventEmitter<number>();
    @Output() notificationAllMarkedSeen = new EventEmitter<number>();

    constructor(
        private _eref: ElementRef
    ) {
        this.visible = true;
        this.fistClick = true;
    }

    onMarkAllReadClick() {
        this.notificationAllMarkedSeen.emit();
    }

    onNotificationClick(id: number) {
        this.notificationClicked.emit(id);
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

}
