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
  loginError:string='';

  formLogin= this.fb.group({
    user:['luis@gmail.com',[Validators.required, Validators.email]],
    password:['', [Validators.required]]
  })

  constructor(private fb:FormBuilder, private login_auth_service:AuthenticationService, private router:Router){
  } 

  ngOnInit(): void {
  }

  get login_user(){
    return this.formLogin.get('user');
  }

  loguear(){

    if(this.formLogin.valid){
      this.login_auth_service.enter_app(this.formLogin.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () => {
          console.info("Login Complete");
          this.router.navigateByUrl('/doctor'); 
        }
      }); 
    }

    else{
      alert("error al ingresar datos")
    }
    
  }

}
