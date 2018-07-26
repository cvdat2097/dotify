import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  loggedInUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor() { }

  GetLoggedUser(): Observable<User> {
    return this.loggedInUser.asObservable();
  }

  Login(user: User) {
    this.loggedInUser.next(user);
  }

  Logout() {
    this.loggedInUser.next(null);
  }
}
