import { Component, OnInit , Renderer2} from '@angular/core';
import { AuthentService } from '../services/authent.service';
import { Router } from '@angular/router';
import { listuser } from './todo';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  // listuser :listuser [];
  
  private selectedItem: any;
  public listuser: Array<{  telephone: "77777777" }> = [];
  public PtagClicked: boolean = false;

  constructor(private _aut:AuthentService,private router:Router
    ,public navCtrl: NavController, private render: Renderer2) { }

  ngOnInit() {
    this._aut.todo()
    .subscribe
    (
      res =>  this.listuser=res['data'],
      
      error => console.log(error)
     
    )
    
  }
  public onHide(controlToHide) {
    this.render.setStyle(controlToHide, 'visibility', 'hidden');
  }

}
