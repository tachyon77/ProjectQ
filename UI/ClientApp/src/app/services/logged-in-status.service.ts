import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
import { User } from '../models/User';

@Injectable()
export class LoggedInStatusService {

    // Observable log in/out event sources
    private loggedInSource = new Subject<User>();
    private loggedOutSource = new Subject<boolean>();

    // Observable login/out event streams
    loggedIn$ = this.loggedInSource.asObservable();
    loggedOut$ = this.loggedOutSource.asObservable();

    logIn(user: User) {
        this.loggedInSource.next(user);
    }

    logOut() {
        this.loggedOutSource.next(false);
    }
}
