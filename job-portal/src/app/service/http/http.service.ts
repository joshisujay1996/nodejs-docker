import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  /** Common domain name */
  domainURL:string = "http://localhost:3000";
  
  constructor(private http: HttpClient) { }

  /** Consuming Signup API */
  signUp(user:User):Observable<any> {
    return this.http.post<any>(this.domainURL+'/user/signup',user);
  }

  /** Consuming Signin API */
  login(user:User):Observable<any>{
    return this.http.post<any>(this.domainURL+"/user/signin",user);
  }
}
