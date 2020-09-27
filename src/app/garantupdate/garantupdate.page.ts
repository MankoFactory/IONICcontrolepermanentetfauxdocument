import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service'
import { GarantModel } from '../modeles/garant.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm} from '@angular/forms';




@Component({
  selector: 'app-garantupdate',
  templateUrl: './garantupdate.page.html',
  styleUrls: ['./garantupdate.page.scss'],
})
export class GarantupdatePage implements OnInit {
  submitted = false;
  nomPattern = "^[A-Za-z]{2,}$";
  cniPattern= "^[0-9]{9}$";
  telephonePattern = "^((7(?=0|6|7|8))|(3(?=3)))[0-9]{8}$"; 
  datePattern="^(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}$";
  isValidFormSubmitted=false;
  id:number
   garant:GarantModel;
  constructor(private _aut:AuthentService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    
    this.garant=new GarantModel();
    this.id = this.route.snapshot.params['id'];

    this._aut.detailsgarant(this.id).subscribe(
      data=>{console.log(data)
        this.garant=data;
      },
      error=>console.log(error)
      
    )
      
   
   
    
  }
  async update(form:NgForm) {
    this.isValidFormSubmitted=false;
    if(form.invalid){
      return;
    }
    this.isValidFormSubmitted=true;
  this.garant=form.value
    this._aut.updategarant(this.id, this.garant)
      .subscribe(data => console.log(data)

    , error => console.log(error));
    //  this.client = new RegisterModel();
    this.gotoList();
  }

  // onSubmit() {
  //   this.update(); 
    
  // }
  gotoList() {
    this.router.navigate(['/garantliste']);
  }

}

