import { Component, OnInit } from '@angular/core';

import { LoginService } from './../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hasErrors: boolean;
  errorMsg: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  processLogin(username: string, password: string): void{
    this.hasErrors = false;
    this.errorMsg = '';

    if (!this.loginService.processCredentials(username, password)){
      this.hasErrors = true;
      this.errorMsg = "There was an error processing your username and password."
    }
  }

}
