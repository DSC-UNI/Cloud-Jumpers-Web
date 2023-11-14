import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/users/authentication.service';
import { LoginRequest } from 'src/app/users/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  
  public formLogin!: FormGroup;

  constructor(private fb:FormBuilder, private login_auth_service:AuthenticationService, private router:Router){
  } 

  ngOnInit(): void {
    this.formLogin = this.createformLogin();
  }

  get login_user(){
    return this.formLogin.get('user');
  }

  private createformLogin():FormGroup{
    return this.fb.group({
      user:['',[Validators.required, Validators.email]],
      password:[]
    });
  }

  public loguear(){

    if(this.formLogin.valid){
      this.login_auth_service.ingresarApp(this.formLogin.value).subscribe({
        next: (userData) =>{
          console.log(userData);
        },
        error: (errorData) =>{
          console.error(errorData);
        },
        complete: () => {
          console.info("Login Completo")
        }
      });
      this.router.navigateByUrl('/doctor');  
    }

    else{
      alert("error al ingresar datos")
    }
    
  }

}
