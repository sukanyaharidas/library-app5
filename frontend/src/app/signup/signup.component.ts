import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthModel } from './auth.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupUser= new AuthModel("","","");
  form:FormGroup|any;
  constructor(public auth:AuthService, public router:Router) { }

  
  ngOnInit(): void {
    this.form=new FormGroup({
      fullName:new FormControl('', Validators.required),
      email:new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password:new FormControl('',Validators.required),
      // cpassword: new FormControl('',Validators.required)
    },
      // {
      //   validators:this.MustMatch('password', 'cpassword')
      // } 
      )
  }

  // checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
  //   let pass = group'password').value;
  //   let confirmPass = group.get('confirmPassword').value
  //   return pass === confirmPass ? null : { notSame: true }
  // }

//   MustMatch(controlName:any, matchingControlName:any){
//     return(formGroup: FormGroup)=>{
   
//       const matchingcontrol=formGroup.controls[matchingControlName];
//       const control=formGroup.controls[controlName];
//       if(matchingControlName.errors && !matchingControlName.errors.MustMatch){
//         return
//       }
//       if(control.value!==matchingcontrol.value){
//         matchingcontrol.setErrors({MustMatch:true});      }

//     else{
//       matchingControlName.setErrors(null);
//       }
    
//   }
// }

// get f(){
//   return this.form.controls
// }

  signUp(){
    this.auth.userSignup(this.signupUser);
    // .subscribe(
    //   res=>console.log(res),
    //   err=>console.log(err)
    // )
    console.log(this.signupUser);
    alert("Account Created");
    this.router.navigate(['/login']);
  }
  
  
}
