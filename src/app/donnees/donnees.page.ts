import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service'
import { RegisterModel } from '../modeles/register.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-donnees',
  templateUrl: './donnees.page.html',
  styleUrls: ['./donnees.page.scss'],
})
export class DonneesPage implements OnInit {
  id:number
client:RegisterModel;
  constructor(private _aut:AuthentService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.client=new RegisterModel();
    this.id = this.route.snapshot.params['id'];
   
    this._aut.details(this.id).subscribe(
      data=>{console.log(data)
        this.client=data;
      },
      error=>console.log(error)
      
    )

    }
  }
  // details(id){

  //   this._aut.details(id).subscribe(
  //     res =>{ this.listuser =res
  //       console.log(res)
  //      } ,
    
  //     error => console.log(error)
  //   )
     
  // }
  

