import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service'
import { AlertService } from '../services/alert.service'
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import swal from 'sweetalert';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // registerUserData = {}
  // listuser = []
  public registerForm: FormGroup;
  public garantForm:FormGroup;
  submitted = false;
  loading = false;

  nomPattern = "^[A-Za-z]{2,}$";
  cniPattern= "^[0-9]{9}$";
  telephonePattern = "^((\\+91-?)|0)?[0-9]{5}$"; 
  // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private _authenfication: AuthentService,
    private _router :Router, public formBuilder: FormBuilder,private alertService: AlertService) {}
    

 ngOnInit() {
  this.registerForm = this.formBuilder.group({
    date_naissance: ['', [Validators.required]],
    lieu_naissance: ['', [Validators.required, Validators.pattern(this.nomPattern)]],
    activite: ['', [Validators.required,Validators.pattern(this.nomPattern)]],
    adresse_client: ['', [Validators.required,Validators.pattern(this.nomPattern)]],
    photo_venture: ['', [Validators.required]],
    photo_activite: ['', [Validators.required]],
    telephone: ['', [Validators.required, Validators.pattern(this.telephonePattern)]],
    agence: ['', [Validators.required,Validators.pattern(this.nomPattern)]],
    sexe: ['', [Validators.required]],
    telephone1: ['', [Validators.pattern(this.telephonePattern)]],
    nom: ['', [Validators.required, Validators.pattern(this.nomPattern)]],
    prenom: ['', [Validators.required, Validators.pattern(this.nomPattern)]],
    num_cni: ['', [Validators.required, Validators.pattern(this.cniPattern)]]
});
this.garantForm=this.formBuilder.group({
  nom:['',[Validators.required]],
  prenom:['',[Validators.required]],
  telephone:['',[Validators.required,Validators.minLength(9)]],
  client:['',[Validators.required,Validators.minLength(9)]]
})
}
get f() { return this.registerForm.controls; }
get g() { return this.garantForm.controls; }
ajoutUser(){
  this.submitted = true;

  this.alertService.clear();
  if (this.registerForm.invalid) {
    return;
}
  this.loading = true;
  this._authenfication.ajoutUser(this.registerForm.value)
  .subscribe(
    async res => {
      
      console.log(res)
      

   },
   error => {
    this.alertService.error(error);
    this.loading = false;
    
});
 }

ajoutgarant(){
  this.submitted = true;

 
  this.alertService.clear();
  if (this.garantForm.invalid) {
    return;
}
 
  this.loading = true;
  this._authenfication.garant(this.garantForm.value)
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
