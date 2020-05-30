import { Component } from '@angular/core';
import { AuthentService } from './services/authent.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

 
private token : string;


  constructor(
    private router: Router,
    private _authenfication: AuthentService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

    this.token = this._authenfication.getToken();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  

  Logout(){
    this._authenfication.logout();
    this.router.navigate(['/login']);
  }
}
