import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient, public _router:Router) { }


  userSignup(users:any){
    return this.http.post('http://localhost:4400/signup', {users})
    .subscribe((data)=>console.log(data));
    }


  login(authData:any){
    return this.http.post<any>('http://localhost:4400/login',authData);
  
    }

isLoggedin(){
  return localStorage.getItem('token')!=undefined;
}
    // loggedIn(){
    //   return !!localStorage.getItem('token')
      
    // }
    // getToken(){
      
    //   return localStorage.getItem('token')
    // }
 
 logoutUser(){
  
  this._router.navigate(['\login']);
 }

}
