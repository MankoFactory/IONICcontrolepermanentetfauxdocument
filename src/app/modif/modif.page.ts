import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service'
import { RegisterModel } from '../modeles/register.model';
import { GarantModel } from '../modeles/garant.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm} from '@angular/forms';
// import swal from 'sweetalert';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.page.html',
  styleUrls: ['./modif.page.scss'],
})
export class ModifPage implements OnInit {
  submitted = false;
  nomPattern = "^[A-Za-z]{2,}$";
  cniPattern= "^[0-9]{9}$";
  telephonePattern = "^((7(?=0|6|7|8))|(3(?=3)))[0-9]{8}$"; 
  datePattern="^(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}$";
  isValidFormSubmitted=false;



  id:number
  client:RegisterModel;
  // garant:GarantModel
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

  update(form:NgForm) {
    this.isValidFormSubmitted=false;
  if(form.invalid){
    return;
  }
  this.isValidFormSubmitted=true;
this.client=form.value
    this._aut.update(this.id, this.client)
      .subscribe(data => console.log(data)

      // swal ("client modifié")
    , error => console.log(error));
    this.gotoList();
  }

  

  // onSubmit() {
  //   this.update(); 
    
  // }
 

  gotoList() {
    this.router.navigate(['/home']);
  }

}
