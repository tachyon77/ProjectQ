import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { User } from '../../models/User';
import { Notification, NotificationService } from '../../services/notification.service'
import { LoggedInStatusService } from '../../services/logged-in-status.service';
import { Router } from '@angular/router';
import { IdentityService } from '../../services/identity.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements AfterViewInit{
    private _user: User | undefined;
    isNotificationsVisible: boolean = false;
    notifications: Notification[] = [];

    constructor(
        private router: Router,
        private identityService: IdentityService,
        private notificationService: NotificationService,
        private loggedInStatusService: LoggedInStatusService){
    }

    onNotificationDismissed() {
        this.isNotificationsVisible = false;
    }

    toggleNotification() {
        this.isNotificationsVisible = !this.isNotificationsVisible;
    }

    ngAfterViewInit() {

        let protocol = location.protocol === "https:" ? "wss:" : "ws:";
        let port = document.location.port ? (":" + document.location.port) : "";
        let webSocketURL = protocol + "//" + document.location.hostname + port + "/api/Notifications/ws";

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
                //var notification = JSON.parse(data) as Notification;
                //this.notifications.push(notification);
                this.loadNotifications();
            }
        };

        this.loadNotifications();
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

    logoutClick() {
        this.identityService.logout().subscribe(
            (any) => {
                this.loggedInStatusService.logOut();
            },
            error => {
                alert("Logout failed: " + error);
            }
        );
    }

    loadNotifications() {
        this.notificationService.getUnseen()
            .subscribe(result => {
                this.notifications = result as Notification[];
                console.log(`Loaded ${this.notifications.length} notifications`);
            }, error => console.error(error));
    }

    onNotificationAllMarkedSeen() {
        this.notificationService.markAllAsSeen()
            .subscribe(result => { this.loadNotifications(); });
    }

    onNotificationClicked(id: number) {
        this.notificationService.markAsSeen(id)
            .subscribe(result => { this.loadNotifications(); });
    }

}
