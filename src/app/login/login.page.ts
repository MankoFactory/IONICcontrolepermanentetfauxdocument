import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service';
import { AlertService } from '../services/alert.service'
import { Router ,ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  submitted = false;
  loading = false;
  loginUserData = {}
  public type = 'password'; 
         public showPass = false; 
  constructor(private _authenfication: AuthentService,
    private _router :Router, public formBuilder: FormBuilder,private alertService: AlertService, private route: ActivatedRoute) {
     
       // redirect to home if already logged in
      if (this._authenfication.currentUserValue) {
        this._router.navigate(['/']);
    }
    // }
     }

     
  ngOnInit() {
   this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.loginForm.controls; }
  
  loginUser(){
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();
    if (this.loginForm.invalid) {
      return;
  }
    // console.log(this.loginUserData);
    this.loading = true;
    this._authenfication.login(this.f.email.value, this.f.password.value)
    .subscribe(
      async res => {
        
        let jwt= res.body['token'];
        this._authenfication.saveToken(jwt);
        // this._authenfication.saveUser(res.body['user']);
         this._router.navigate(['/todo']);
        
        //LocalStorage.setItem('token', res.token)
     },
     error => {
      this.alertService.error("email ou password incorrect");
      this.loading = false;
  });
   }
  //  showPassword() {
  //   this.showPass = !this.showPass;
  //         if(this.showPass){
  //             this.type = 'text';
  //              } else {
  //        this.type = 'password';
  //      }
  //    }
  //  isAdmin(){
  //    return this._authenfication.isAdmin()
  //  }
 
  // isUser(){
  //   return this._authenfication.isUser()
  // }
  logout() {
    return this._authenfication.logout ();
  }
  loggedIn() {
    return this._authenfication.loggIn ();
 }
   isAgent(){
     return this._authenfication.isAgent()
   }
 

}

