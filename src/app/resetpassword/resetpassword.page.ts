import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  public sendForm: FormGroup;
  submitted = false;
  loading = false;
  constructor(private _authenfication: AuthentService,
    private _router :Router, public formBuilder: FormBuilder,private alertService: AlertService) { }

  ngOnInit() {
    this.sendForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
      
  });
  }
  get f() { return this.sendForm.controls; }
  
  Send(){
    this.submitted = true;
  
    // reset alerts on submit
    this.alertService.clear();
    if (this.sendForm.invalid) {
      return;
  }
    
    this.loading = true;
    this._authenfication.sendmail(this.sendForm.value)
    .subscribe(
      async res => {
        
        console.log(res)
        
     },
     error => {
      this.alertService.error(error);
      this.loading = false;
  });
   }

}
