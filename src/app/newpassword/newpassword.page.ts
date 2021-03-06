import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import { from } from 'rxjs';
import { AuthentService } from '../services/authent.service'
import { getLocaleTimeFormat } from '@angular/common';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.page.html',
  styleUrls: ['./newpassword.page.scss'],
})
export class NewpasswordPage implements OnInit {
public error=[];
public form ={
  email:null,
  password:null,
  password_confirmation:null,
  token:null
}
  constructor(private route:ActivatedRoute, private _auth:AuthentService,private router:Router) {

    route.queryParams.subscribe(
      params => this.form.token = params['token']
    )
   }

  ngOnInit() {
  }
  Newpassword(){
    this._auth.newpassword(this.form).subscribe(
      data => console.log(data),
      error=> console.log(error)
      
    )
    this.glo();
  }
  glo()
  {
    this.router.navigate(["/login"])
  }

}
