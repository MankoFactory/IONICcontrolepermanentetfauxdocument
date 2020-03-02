import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service'
import { GarantModel } from '../modeles/garant.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-garantupdate',
  templateUrl: './garantupdate.page.html',
  styleUrls: ['./garantupdate.page.scss'],
})
export class GarantupdatePage implements OnInit {
  id:number
 
   garant:GarantModel
  constructor(private _aut:AuthentService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    
    this.garant=new GarantModel();
    this.id = this.route.snapshot.params['id'];
   
    // this._aut.details(this.id).subscribe(
    //   data=>{console.log(data)
    //     this.garant=data;
    //   },
    //   error=>console.log(error)
      
    // )
    
  }
  update() {
    this._aut.updategarant(this.id, this.garant)
      .subscribe(res => console.log(res)

    , error => console.log(error));
    //  this.client = new RegisterModel();
    this.gotoList();
  }

  onSubmit() {
    this.update(); 
    
  }
  gotoList() {
    this.router.navigate(['/garantliste']);
  }

}

