import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    private _userName: string;
    @Output() loggedOut = new EventEmitter();

    @Input()
    set userName(name: string) {
        this._userName = name;
    }

    get userName() {
        return this._userName
    }

    logoutClick() {
        this.loggedOut.emit();
    }
}
