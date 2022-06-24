import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AuthModel } from '../signup/auth.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resp:any;
  User= new AuthModel('','','');
  form:FormGroup|any;

  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit(): void {
  

    this.form=new FormGroup({
     
      email:new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password:new FormControl('',Validators.required),
      // cpassword: new FormControl('',Validators.required)
    },
      // {
      //   validators:this.MustMatch('password', 'cpassword')
      // } 
      )
    // }
  }
  loginUser(){
  this._auth.login(this.User).subscribe(data=>{
    // localStorage.setItem('token',data.token)
    if(data!=null){
      this.resp=data;
      localStorage.setItem('token',data.token);
    this._router.navigate(['\mybooks'])

    }

    })
  }

}
