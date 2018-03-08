import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Notification, NotificationService } from '../../services/notification.service'
@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements AfterViewInit{
    private _userName: string;
    private _notificationCount: number;
    private _notifications: Notification[];

    @Output() loggedOut = new EventEmitter();

    constructor(private notificationService: NotificationService) {

    }

    ngAfterViewInit() {
        this.notificationService.getUnseenForUser()
            .subscribe(result => {
                this._notifications = result as Notification[];
                this._notificationCount = this._notifications.length;
            }, error => console.error(error));
    }

    @Input()
    set userName(name: string) {
        this._userName = name;
    }

    get userName() {
        return this._userName;
    }

    get notificationCount() {
        return this._notificationCount;
    }

    get notifications() {
        return this._notifications
    }

    logoutClick() {
        this.loggedOut.emit();
    }
}
