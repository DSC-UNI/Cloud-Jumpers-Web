import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public formLogin!: FormGroup;

  constructor(private fb:FormBuilder){

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

  public login(){

    if(this.formLogin.invalid){
      alert(" formulario invalido");
      return;
    }

    alert("Logear")
    console.log(this.formLogin.value);
  }

}
