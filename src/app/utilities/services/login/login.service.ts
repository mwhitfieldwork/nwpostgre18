import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authentication } from '../../models/authentication';
import { environment } from '../../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url:string = environment.apiUrl;
  errorMessage:any;
  private _http = inject(HttpClient);

  constructor() { }

  createUser(authentication: Authentication): Observable<any> {
    let url = `${this.url}/api/Login/AddUser`;
    let newLogin = JSON.stringify(authentication)
    var response = this._http.post<Authentication>(url, newLogin, httpOptions);
    console.log(url,1);
    return response;
  }

  AuthenticateUser(authentication: Authentication): Observable<any> {
    let url = `${this.url}/api/Login`;
    let newLogin = JSON.stringify(authentication)
    var response = this._http.post<Authentication>(url, newLogin, httpOptions);
    console.log(url, 2);
    return response;
  }
}
