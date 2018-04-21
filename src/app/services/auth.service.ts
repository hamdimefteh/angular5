import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()

export class AuthService {

rootUrl = "http://localhost:8080/";
  constructor(private http: HttpClient) {

  }

  login(credentials) {

     var reqHeader = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  
    
     return this.http.post(this.rootUrl+"auth",JSON.stringify(credentials),{headers:reqHeader});

}

getuser(): Observable<any>{

  var r = new HttpHeaders({"Authorization":'Bearer '+ localStorage.getItem('usertoken')});
   r.append('Content-Type', 'application/json; charset=utf-8');

  console.log(r.get('Authorization'));
 
  return this.http.get(this.rootUrl+"user",{headers:r});
}
}