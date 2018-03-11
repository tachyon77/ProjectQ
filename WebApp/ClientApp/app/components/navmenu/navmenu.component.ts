import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Notification, NotificationService } from '../../services/notification.service'
@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements AfterViewInit{
    private _userName: string;
    private _isNotificationsVisible: boolean;
    private _notificationCount: number;
    private _notifications: Notification[];

    @Output() loggedOut = new EventEmitter();

    constructor(private notificationService: NotificationService) {
        this._notifications = [];
    }

    onNotificationDismissed() {
        this._isNotificationsVisible = false;
    }

    toggleNotification() {
        this._isNotificationsVisible = !this._isNotificationsVisible;
    }

    ngAfterViewInit() {

        var scheme = "ws";
        var port = document.location.port ? (":" + document.location.port) : "";
        var connectionUrl = scheme + "://" + document.location.hostname + port + "/api/Notifications/ws";

        var socket = new WebSocket(connectionUrl);
        socket.onopen = function (event) {
            console.log("connection open!");
        };

        socket.onclose = function (event) {
            console.log("webscocket closed.");
        };
        socket.onerror = function (event) {
            console.log("websocket errror.");
        };
        socket.onmessage = (event) => {
            console.log(event);
            var data = event.data;
            if (data != "ping")
            {
                var notification = JSON.parse(data) as Notification;
                this._notifications.push(notification);
            }
        };

        this.notificationService.getUnseen()
            .subscribe(result => {
                this._notifications = result as Notification[];
                this._notificationCount = this._notifications.length;
            }, error => console.error(error));
    }

    get isNotificationsVisible() {
        return this._isNotificationsVisible;
    }

    @Input()
    set userName(name: string) {
        this._userName = name;
    }

    get userName() {
        return this._userName;
    }

    get notificationCount() {
        return this._notifications.length;
    }

    get notifications() {
        return this._notifications
    }

    logoutClick() {
        this.loggedOut.emit();
    }
}
