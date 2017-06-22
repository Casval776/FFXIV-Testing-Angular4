//Angular Native Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Http } from '@angular/http';

//Model Imports
import { User } from './user';

//Component Imports
import { HeaderComponent } from './header/header.component';
import { LeftContentComponent } from './left-content/left-content.component';
import { LoginComponent } from './login/login.component';

//Service Imports
import { HeaderService } from './header-service.service';
import { LoginService } from './login-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  providers: [
    HeaderService,
    LoginService,
    Http
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
 }
