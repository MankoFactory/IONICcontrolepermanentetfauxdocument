import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service'
import { RegisterModel } from '../modeles/register.model';
import { GarantModel } from '../modeles/garant.model';
import { ActivatedRoute, Router } from '@angular/router';
// import swal from 'sweetalert';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.page.html',
  styleUrls: ['./modif.page.scss'],
})
export class ModifPage implements OnInit {
  id:number
  client:RegisterModel;
  garant:GarantModel
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

    this.garant=new GarantModel();
    this.id = this.route.snapshot.params['id'];
   
    
  }

  update() {
    this._aut.update(this.id, this.client)
      .subscribe(data => console.log(data)

      // swal ("client modifié")
    , error => console.log(error));
    //  this.client = new RegisterModel();
    this.gotoList();
  }

  updategarant() {
    this._aut.updategarant(this.id, this.garant)
      .subscribe(data => console.log(data)
      
    , error => console.log(error));
    //  this.client = new RegisterModel();
    this.gotoList();
  }

  onSubmit() {
    this.update(); 
    
  }
  Insubmit(){
    this.updategarant();
  }

  gotoList() {
    this.router.navigate(['/home']);
  }

}
