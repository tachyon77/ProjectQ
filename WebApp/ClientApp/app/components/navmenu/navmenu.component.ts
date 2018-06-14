import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { User } from '../../models/User';
import { Notification, NotificationService } from '../../services/notification.service'

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements AfterViewInit{
    private _user: User | undefined;
    private _isNotificationsVisible: boolean = false;
    private _notificationCount: number = 0;
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

        let protocol = location.protocol === "https:" ? "wss:" : "ws:";
        let port = document.location.port ? (":" + document.location.port) : "";
        let webSocketURL = protocol + "://" + document.location.hostname + port + "/api/Notifications/ws";

        var socket = new WebSocket(webSocketURL);
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
            var data = event.data;
            if (data != "ping")
            {
                var notification = JSON.parse(data) as Notification;
                this._notifications.push(notification);
            }
        };

        this.notificationService.getUnseen().subscribe(
            data => {
                this._notifications = data as Notification[];
                this._notificationCount = this._notifications.length;
            },
            error => {
                console.error(error);
            }
        );
    }

    get isNotificationsVisible() {
        return this._isNotificationsVisible;
    }

    @Input()
    set user(u: User | undefined) {
        this._user = u;
    }

    getUserId(): (number | undefined) {
        if (this.user) {
            return this.user.id;
        }
       
    }

    get user(): (User | undefined) {
        return this._user;
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
