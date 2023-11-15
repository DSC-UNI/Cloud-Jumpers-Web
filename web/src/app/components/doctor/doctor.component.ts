import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/users/authentication.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit, OnDestroy {
  userLoginOn:boolean=false;
  userData?:User;

  
  constructor( private loginService: AuthenticationService){


  }
  ngOnDestroy(): void {
    this.loginService.currentUserData.unsubscribe();
    this.loginService.currentUserLoginOn.unsubscribe();
  }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe(
      {
        next:  (userLoginOn) =>{
          this.userLoginOn=userLoginOn;
        }
      }
    )

    this.loginService.currentUserData.subscribe({
      next: (userData) =>{
        this.userData = userData;
      }
    })
  }
}