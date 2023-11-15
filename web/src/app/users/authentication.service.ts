import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError, BehaviorSubject, tap} from 'rxjs';
import { User } from './user';
 
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); // No está logeado
  currentUserData: BehaviorSubject<User> =new BehaviorSubject<User>({id:0, email:''});

  constructor(private http: HttpClient) { }

  enter_app(credentials: LoginRequest) : Observable<User>{ 
    //console.log(credentials)
    return this.http.get<User>('http://localhost:4200/assets/data.json').pipe(
      tap( (userData: User) =>{           //No modifica la secuencia de los observables: tap
        this.currentUserData.next(userData); //Emite info a todos los componentes subcritos
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handlerError)
    );
  }

  private handlerError(error: HttpErrorResponse){
    if(error.status==0){
      console.error('Se ha producido un error', error.error)
    }
    else{
      console.error('Backend retornó el código de estado', error.status, error.error)
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente'));
  }

  get userData():Observable<User>{
    return this.currentUserData.asObservable();
  }

  get userLoginOn(): Observable<boolean>{
    return this.currentUserLoginOn.asObservable();
  }
}