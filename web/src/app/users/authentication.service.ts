import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from './user';
 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  enter_app(credentials: LoginRequest) : Observable<User>{ 
    //console.log(credentials)
    return this.http.get<User>('http://localhost:4200/assets/data.json')
  }
}