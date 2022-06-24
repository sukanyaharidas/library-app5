import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http:HttpClient) { }


  userSignup(users:any){
    return this.http.post('http://localhost:4400/signup', {users})
    .subscribe((data)=>console.log(data));
    }


  login(authData:any){
    return this.http.post<any>('http://localhost:4400/login',authData);
  
    }


    // loggedIn(){
    //   return !!localStorage.getItem('token')
      
    // }
    // getToken(){
      
    //   return localStorage.getItem('token')
    // }
 
 

}
