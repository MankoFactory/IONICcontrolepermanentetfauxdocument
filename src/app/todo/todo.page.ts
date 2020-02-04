import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service';
import { Router } from '@angular/router';
import { listuser } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  // listuser :listuser [];
  
  private selectedItem: any;
  public listuser: Array<{  telephone: "77777777" }> = [];
  constructor(private _aut:AuthentService,
    private router:Router) { }

  ngOnInit() {
    this._aut.todo()
    .subscribe
    (
      res =>  this.listuser=res['data'],
      
      error => console.log(error)
     
    )
    
  }

}
