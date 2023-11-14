import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  ingresarApp(credentials:LoginRequest): Observable<any>{
    return this.http.get('../../assets/data.json')
  }
}