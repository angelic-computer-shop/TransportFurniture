import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

const AUTH_API = 'http://localhost:3000/drivers/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {




  
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        email,
        password,
      },
      httpOptions
    );
  }



 


  

//Register as a driver

  register(name: string, email: string, password: string,surname: string, idno: number,trucktype: string,cellno: number,licenseno: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        name,
        surname,
        idno,
        trucktype,
        licenseno,
        cellno,
        email,
        password
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
