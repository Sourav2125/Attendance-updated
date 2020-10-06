import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ApiService} from '../apiservice/api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //isLoggedIn=false;
  constructor(private apiservice:ApiService,
              private router : Router) { }

  ngOnInit(): void {
  }

  /*--------SIGN IN FORM--------------*/
  signinForm = new FormGroup({
    userId : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)

  })

  f= this.signinForm.controls;

  //---------SUBMIT BUTTON--------------
  onSubmit(){
     const userId = this.f.userId.value;
     const userPassword = this.f.password.value;
     this.apiservice.login(userId, userPassword);

  }
     
     
  //   this.apiservice.login(this.f.value).subscribe(
  //     () => {
  //       this.router.navigateByUrl('/profile')
  //     },
  //     err => {
  //       console.error(err)
  //     }
  //   )
   
  //   }
    


  /*-------------RESET--------------*/
    reset(){
      this.signinForm.reset();
    }

  }

 


