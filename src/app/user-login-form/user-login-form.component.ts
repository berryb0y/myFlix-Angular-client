import { Component, OnInit, Input } from '@angular/core';

//import to close dialog on success
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

//import brings api calls
import { FetchApiDataService } from '../fetch-api-data.service';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: '' };

  /* 
  * Called when created an instance of the class
  * @param fetchApiData
  * @param dialogRef
  * @param snackBar
  */ 
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router,
  ) { }
  ngOnInit(): void {
  }


  //this function is responsible for sending the form inputs to the backend

  // function for sending form inputs to backend to create a new user
  // @returns alert indicating a successful registration or an error

  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((result) => {
      console.log(result)
      //adds token and username to local storage
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', result.user.Username);
      this.dialogRef.close();//closes modal on success
      this.snackBar.open('User login successful', 'OK', {
        duration: 2000
      });
      this.router.navigate(['movies']);
    }, (result) => {
      console.log(result);
      this.snackBar.open('User login failed', 'OK', {
        duration: 2000
      });
    });
  }
}