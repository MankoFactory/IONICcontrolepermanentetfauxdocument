import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service'
import { AlertService } from '../services/alert.service'
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController} from '@ionic/angular';
 import { Geolocation } from '@ionic-native/geolocation/ngx';
 import { Platform } from '@ionic/angular';

// import swal from 'sweetalert';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 
  public registerForm: FormGroup;
  public garantForm:FormGroup;
  imageData = null;
  submitted = false;
 
  loading = false;
  relationship:string
  image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
  imgDevanture: any;
  nomPattern = "^[A-Za-z]{2,}$";
  cniPattern= "^[0-9]{9}$";
  telephonePattern = "^((7(?=0|6|7|8))|(3(?=3)))[0-9]{8}$"; 
  datePattern="^(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}$";
  imageActivite:any;
  images: any = {'venture': '', 'activite': ''};

  constructor(private _authenfication: AuthentService,
    private _router :Router, public formBuilder: FormBuilder,
    private alertService: AlertService,private camera: Camera, 
    public navCtrl: NavController,
    private geo: Geolocation) {
      this.relationship="client"
    }
   
    
 ngOnInit() {
  this.registerForm = this.formBuilder.group({
    date_naissance: ['', [Validators.required,Validators.pattern(this.datePattern)]],
    lieu_naissance: ['', [Validators.required, Validators.pattern(this.nomPattern)]],
    activite: ['', [Validators.required,Validators.pattern(this.nomPattern)]],
    adresse_client: ['', [Validators.required,Validators.pattern(this.nomPattern)]],
     photo_venture: ['', [Validators.required]],
     photo_activite: ['', [Validators.required]],
    telephone: ['', [Validators.required, Validators.pattern(this.telephonePattern)]],
    agence: ['', [Validators.required,Validators.pattern(this.nomPattern)]],
    sexe: ['', [Validators.required]],
    telephone1: ['', [Validators.pattern(this.telephonePattern)]],
    nom: ['', [Validators.required, Validators.pattern(this.nomPattern)]],
    prenom: ['', [Validators.required, Validators.pattern(this.nomPattern)]],
    num_cni: ['', [Validators.required, Validators.pattern(this.cniPattern)]],
    latitude:['',[Validators.required]],
     longitude:['',[Validators.required]],
     commentaire_agent:['',Validators.required],
     commentaire_client:['',Validators.required]
});
this.garantForm=this.formBuilder.group({
  nom:['',[Validators.required,Validators.pattern(this.nomPattern)]],
  prenom:['',[Validators.required,Validators.pattern(this.nomPattern)]],
  telephone:['',[Validators.required,Validators.pattern(this.telephonePattern)]],
  client:['',[Validators.required,Validators.pattern(this.telephonePattern)]]

})
}

 getMyLocation() {
  this.geo.getCurrentPosition({
    enableHighAccuracy: true
  }).then(location => {
    this.registerForm.value.latitude = location.coords.latitude;
    this.registerForm.value.longitude = location.coords.longitude;
  })
  console.log(this.registerForm.value);
}
async openLibrary() {
  const options: CameraOptions = {
    quality: 10,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 1000,
    targetHeight: 1000,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY  };
  return this.camera.getPicture(options);
}
async openCamera() {
  const options: CameraOptions = {
    quality: 10,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 1000,
    targetHeight: 1000,
    sourceType: this.camera.PictureSourceType.CAMERA
  };
  return this.camera.getPicture(options);
}
 addPhoto(source: string, number: number) {
   let result =null;
   if(source=='camera') result = this.openCamera();
   else result = this.openLibrary();
   if(result!=null)
    result.then(imageData=>{
    
  
      // console.log("imageData",imageData);

      if(number == 1){
        this.imgDevanture="data:image/jpeg;base64,"+ imageData;
        this.registerForm.get('photo_venture').setValue(imageData);
        this.registerForm.value.imgDevanture=this.imgDevanture;
      }
      else{
        this.imageActivite="data:image/jpeg;base64,"+ imageData;
        this.registerForm.get('photo_activite').setValue(imageData);
        this.registerForm.value.imageActivite=this.imageActivite;
      }
      

      // console.log("this.registerForm",this.registerForm);
    });


  //   console.log("this.registerForm",this.registerForm);
  // });

  // if (source === 'camera') {
  //   console.log('camera');
  //   const imageData = await this.openCamera();
  //   this.image = 'data:image/jpg;base64,' + imageData;
  // } else {

  //   console.log('library');
  //   const imageData = await this.openLibrary();
  //   this.image = 'data:image/jpg;base64,' + imageData;
  // }
  
}


get f() { return this.registerForm.controls; }
get g() { return this.garantForm.controls; }
ajoutUser(User){
  

 
  let data = Object.assign({}, User);
  data.photo_venture = this.images.venture;
  data.photo_activite = this.images.activite;
  this.submitted = true;

  this.alertService.clear();

  this.loading = true;
  let user = this.registerForm.value;
  console.log(this.registerForm);

  this._authenfication.ajoutUser(this.registerForm.value
  )
  .subscribe(
    async res => {
      
      alert("client ajouté")
      console.log(res)
      

   },
   error => {
     console.log(error);
    this.alertService.error(error);
    this.loading = false;
    
});

 }

ajoutgarant(){
  this.submitted = true;

 
  this.alertService.clear();
  if (this.garantForm.invalid) {
    return;
}
 
  this.loading = true;
  this._authenfication.garant(this.garantForm.value)
  .subscribe(
    async res => {
      alert("garant ajouté")
      console.log(res)
    
   },
   error => {
    this.alertService.error(error);
    this.loading = false;

});
 }

  dataURItoBlob(dataURI: any) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    let byteString: any;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURI.split(',')[1]);
    } else {
      byteString = unescape(dataURI.split(',')[1]);
    }
    // separate out the mime component
    const mimeString = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0];
    // write the bytes of the string to a typed array
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { type: mimeString });
  } 
   selectChange(e) {
    console.log(e);
  }


  // nextForm() {
  //   if (!this.next) {
  //     this.next = true;
  //   } else {
  //     this.next = false;
  //     if (!this.last) {
  //       this.last = true;
  //        this.lastnext=true;
  //     } else {
  //       this.last = false;
  //     }
  //   }
  //     console.log(this.next),
  //     console.log(this.last),
  //     console.log(this.lastnext)
  //   }

}
