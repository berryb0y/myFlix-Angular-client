import { Component, OnInit, Input } from '@angular/core';

//import to close dialog on success
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

//import brings api calls
import { FetchApiDataService } from '../fetch-api-data.service';


@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  // 
  // Called when created an instance of the class
  // @param fetchApiData
  // @param dialogRef
  // @param snackBar
  // 
constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  //this function is responsible for sending the form inputs to the backend

  // function for sending form inputs to backend to create a new user
  // @returns alert indicating a successful registration or an error

  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
      //logic for successful user registration goes here!
      console.log(result)
      this.dialogRef.close();//closes modal on success
      this.snackBar.open('User registration successful', 'OK', {
        duration: 2000
      });
    }, (result) => {
      console.log(result)
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }
}
