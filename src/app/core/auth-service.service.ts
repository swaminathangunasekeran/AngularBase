import { Injectable } from '@angular/core';
import {AuthData,User} from "./data/auth";

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService  extends AuthData {


  constructor() {
    super();
  }  

  login(): Observable<User> {
    throw new Error("Method not implemented.");
  }
  
  logout(): void {
    throw new Error("Method not implemented.");
  }

  currentUserValue(): Observable<User> {
    throw new Error("Method not implemented.");
  }

  public isAuthenticated(): boolean {
    // const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return true;
  }

}
