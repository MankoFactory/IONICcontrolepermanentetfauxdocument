import { Component, OnInit , Renderer2} from '@angular/core';
import { AuthentService } from '../services/authent.service';
import { Router } from '@angular/router';
import { listuser } from './todo';
import { NavController } from '@ionic/angular';
import { UserModel } from '../modeles/user.model';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  // listuser :listuser [];
  currentUser: UserModel;
  authenticated = false;
  superadmin = false;
  admin = false;
  agent=false;
  private token : string;
  private selectedItem: any;
  public listuser: Array<{  telephone: "77777777" }> = [];
  public PtagClicked: boolean = false;

  constructor(private _aut:AuthentService,private router:Router
    ,public navCtrl: NavController, private render: Renderer2) { 

      this.currentUser=this._aut.currentUserValue;
    this.token = this._aut.getToken();
    }

  ngOnInit() {
    this._aut.todo()
    .subscribe
    (
      res =>  this.listuser=res['data'],
      
      error => console.log(error)
     
    )
    
    this.isSuperadmin();
    this.isAdmin();
    this.isAuthenticated();    
    localStorage.setItem('admin',this.admin+'');
    localStorage.setItem('authenticated',this.authenticated+'');
    localStorage.setItem('superadmin',this.superadmin+'');
    localStorage.setItem('agent',this.agent+'');
    console.log("getStatus 1",this.getStatus('admin'));
    console.log("getStatus 2",this.getStatus('authenticated'));
    console.log("getStatus 3",this.getStatus('superadmin'));
    console.log("getStatus 4",this.getStatus('agent'));
    this.isAgent();
  }
  public onHide(controlToHide) {
    this.render.setStyle(controlToHide, 'visibility', 'hidden');
  }
   
  isSuperadmin() {
    if(this._aut.isSuperadmin()) this.superadmin = true;
    localStorage.setItem('superadmin',this.superadmin+'');
  }
  isAdmin() {
    if(this._aut.isAdmin()) this.admin = true;
  }
  isAgent() {
    if(this._aut.isAgent()) this.agent = true;
    // return this._aut.isAgent();
  }

  logout() {
    return this._aut.logout();
    
  }

  isAuthenticated() {
    if(this._aut.isAuthenticated()) this.authenticated = true;
  }

  getStatus(key){     
    let boolValue = (localStorage.getItem(key) =="true");
    return boolValue;
  }

}
