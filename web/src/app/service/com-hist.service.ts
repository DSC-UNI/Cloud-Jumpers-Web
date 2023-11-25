import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();

  setUserData(userData: any) {
    this.userDataSubject.next(userData);
    console.log("Datos recibidos en DataService:", userData);
  }
}
