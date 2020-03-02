import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service'
import { Router } from '@angular/router';
import { listgarant } from './listgarant';


@Component({
  selector: 'app-garantliste',
  templateUrl: './garantliste.page.html',
  styleUrls: ['./garantliste.page.scss'],
})
export class GarantlistePage implements OnInit {
 
  public listgarant:listgarant[];
  constructor(private _aut: AuthentService,
    private _router :Router) { }

  ngOnInit() {
    this._aut.listgarant()
    .subscribe
    (
      res =>  {this.listgarant=res
      
     },
      
      error => console.log(error)
     
    )
  }
  modifgarant( id: number){
    this._router.navigate(['garantupdate',id]);
  }
}
