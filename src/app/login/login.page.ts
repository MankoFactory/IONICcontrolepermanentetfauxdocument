import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service';
import { AlertService } from '../services/alert.service'
import { Router } from '@angular/router';
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
  constructor(private _authenfication: AuthentService,
    private _router :Router, public formBuilder: FormBuilder,private alertService: AlertService) { }

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
        
        let jwt= res.body['access_token']['accessToken'];
        this._authenfication.saveToken(jwt);
        this._authenfication.saveUser(res.body['user']);
        this._router.navigate(['/todo']);
        
        //LocalStorage.setItem('token', res.token)
     },
     error => {
      this.alertService.error(error);
      this.loading = false;
  });
   }
  //  isAdmin(){
  //    return this._authenfication.isAdmin()
  //  }
 
  // isUser(){
  //   return this._authenfication.isUser()
  // }
  // isCaissier(){
  //   return this._authenfication.isCaissier()
  // }
  // isAthenticated(){
  //   return this._authenfication.isAuthenticated() 
  //  }

}

