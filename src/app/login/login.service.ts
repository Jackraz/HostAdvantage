import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { User } from '../user';


const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //Authorization: 'my-auth-token'
    })
  };
  
@Injectable({
  providedIn: "root"
})

export class LoginService {
  userUrl = 'http://localhost:56500/api/user';  // apiURL to web api
  loginUrl = 'http://localhost:56500/api/login';  // apiURL to web api

  constructor(private http: HttpClient){}

  login(user): Observable<User> {
    return this.http.post<User>(this.loginUrl, JSON.stringify(user), httpOptions)
      .pipe(
        //catchError(this.handleError('login', []))
      );
  }
  //////// Save methods //////////

  /** POST: add a new user to the database */
  addUser(user): Observable<User> {

    var blar =  this.http.post<User>(this.userUrl, JSON.stringify(user), httpOptions);
    console.log(blar);
    return(blar);
  }

}