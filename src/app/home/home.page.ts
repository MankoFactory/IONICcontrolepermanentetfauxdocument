import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { IonSlides } from '@ionic/angular';

import { AuthentService } from '../services/authent.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  list = []
  public listuser: Array<{  telephone: "77777777" }> = [];
  constructor(private _aut: AuthentService,
    private _router :Router) {}

  ngOnInit() {
    this._aut.listUser()
    .subscribe
    (
      res =>  this.listuser=res['data'],
      
      error => console.log(error)
     
    )
    
   
  }
  clientDetails(id: number){
    this._router.navigate(['donnees', id]);
  }
  clientupdate( id: number){
    this._router.navigate(['modif',id]);
  }
}
