import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { User } from './user';


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

  constructor(private http: HttpClient){}

  /** GET users from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(
        //catchError(this.handleError('getUsers', []))
      );
  }

  /** GET users from the server */
  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl)
      .pipe(
        // catchError(this.handleError('getUser', []))
      );
  }

  /* GET users whose name contains search term */
  searchUsers(term: string): Observable<User[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<User[]>(this.userUrl, options)
      .pipe(
        //catchError(this.handleError<User[]>('searchUsers', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new user to the database */
  addUser(user): Observable<User> {

    var blar =  this.http.post<User>(this.userUrl, JSON.stringify(user), httpOptions);
    console.log(blar);
    return(blar);
  }

  /** DELETE: delete the user from the server */
  deleteUser(id) {
    const url = `${this.userUrl}/${id}`; // DELETE api/user/42
    return this.http.delete(url, httpOptions);
  }

  /** PUT: update the user on the server. Returns the updated user upon success. */
  updateUser(id, user): Observable<User> {
    const url = `${this.userUrl}/${id}`; // DELETE api/user/42
    //httpOptions.headers =
    //  httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<User>(url, JSON.stringify(user), httpOptions)
  }

}