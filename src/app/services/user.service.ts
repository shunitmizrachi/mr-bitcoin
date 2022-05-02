import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Contact } from '../models/contact';
import { Move } from '../models/move';
import { StorageService } from './storage.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private KEY = 'user';
  private _user: User = this.storageService.load(this.KEY) || null
  private _user$ = new BehaviorSubject<User>(this.storageService.load(this.KEY) || null);
  public user$ = this._user$.asObservable();
  

  public getLoggedInUser() {
    return this._user;
  }



public checkIsLoggedIn(): Promise<boolean> {
    let user = this._user 
    return new Promise((resolve, reject) => {
     if (user) resolve(true) 
     else resolve (false)
    })
}


  public signup(name: string): void {
    let user = this.storageService.load(this.KEY);
    if (!user) {
      let newUser = new User();
      newUser.name = name;
      this.storageService.store(this.KEY, newUser);
      this._user = newUser;
    }
    this._user$.next(this._user);
  }

  public addMove(contact: Contact, amount: number): void {
    let newMove = new Move();
    newMove.toId = this._setId();
    newMove.to = contact.name;
    newMove.at = Date.now();
    newMove.amount = amount;
    const editedUser = { ...this._user$.value };
    editedUser.coins -= amount;
    editedUser.moves.unshift(newMove);
    this.storageService.store(this.KEY, editedUser);
    this._user$.next(editedUser);
  }

  public isAuthenticated(): boolean {
    const user = this._user$.value;
    // return (user) ? true : false;
    return !!user;
  }

  public _setId(): string {
    var txt = ''
    let length = 10;
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
  }
  constructor(private storageService: StorageService) { }

}
