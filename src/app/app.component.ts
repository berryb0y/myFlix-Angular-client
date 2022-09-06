import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFlix-Angular-client';

  constructor(public dialog: MatDialog) { }
  //function opens dialog when signup button is clicked
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      //assign dialog a width
      width: '480px'
    });
  }
  //function opens dialog when login button is clicked
  openLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      //assign dialog a width
      width: '480px'
    });
  }
}
