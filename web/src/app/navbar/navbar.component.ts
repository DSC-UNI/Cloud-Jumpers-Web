import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../users/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy{
  userLoginOn: boolean=false;


  constructor(private loginService:AuthenticationService){}
  ngOnDestroy(): void {
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
  }

}
