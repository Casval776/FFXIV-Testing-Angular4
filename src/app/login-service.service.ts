import { Injectable } from '@angular/core';
import { MockUser } from './mock-user';
import { User } from './user';

@Injectable()
export class LoginService {
  public token: string;
  private mockUsers: User[] = MockUser;

  constructor() {
    //Set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
   }

  processCredentials(username: string, password: string): boolean{
    if (!username || !password) return false
  }

  logout(): void{
    this.token = null;
    localStorage.removeItem('currentUser');
  }

}
