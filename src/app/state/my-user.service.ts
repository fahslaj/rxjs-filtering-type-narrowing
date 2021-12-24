import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MyUser } from './my-user';

@Injectable({
  providedIn: 'root',
})
export class MyUserService {
  private readonly myUser$ = new BehaviorSubject<MyUser | null>(null);

  selectMyUser(): Observable<MyUser | null> {
    return this.myUser$.asObservable();
  }

  setUser(user: MyUser) {
    this.myUser$.next(user);
  }
}
