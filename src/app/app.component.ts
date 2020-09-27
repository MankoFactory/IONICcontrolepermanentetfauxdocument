import { Component, OnInit , Renderer2} from '@angular/core';
import { AuthentService } from './services/authent.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserModel } from './modeles/user.model';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

 
private token : string;

currentUser: UserModel;
  authenticated = false;
  superadmin = false;
  admin = false;
  agent=false;

  constructor(
    private router: Router,
    private _authenfication: AuthentService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

    this.currentUser=this._authenfication.currentUserValue;
    this.token = this._authenfication.getToken();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit() {
    if(!this._authenfication.isAuthenticated()){
      this.router.navigate(['/login']);
    }
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

  
  isSuperadmin() {
    if(this._authenfication.isSuperadmin()) this.superadmin = true;
    localStorage.setItem('superadmin',this.superadmin+'');
  }
  isAdmin() {
    if(this._authenfication.isAdmin()) this.admin = true;
  }
  isAgent() {
    if(this._authenfication.isAgent()) this.agent = true;
    localStorage.setItem('agent',this.agent+'');
  }
  

  logout() {
    return this._authenfication.logout();
    
  }

  isAuthenticated() {
    if(this._authenfication.isAuthenticated()) this.authenticated = true;
  }
 
  getStatus(key){     
    let boolValue = (localStorage.getItem(key) =="true");
    return boolValue;
  }
}
