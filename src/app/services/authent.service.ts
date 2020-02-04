import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import {BehaviorSubject, Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthentService {
  private _Updateclient="http://localhost:8000/api/updateClient";
  private _Updategarant="http://localhost:8000/api/updategarant";
  private _loginUrl = "http://localhost:8000/api/login";
private _ajoutuser="http://localhost:8000/api/client";
private _ajoutgarant="http://localhost:8000/api/garant";
private _sendmail="http://localhost:8000/api/password/email";
private _newpassword=" http://localhost:8000/api/password/reset";
private _todo=" http://localhost:8000/api/visite";


  jwt : string;
  email : string;
 roles: string;
  navigate: any;
  // _router: any;

  private headers = {
    headers: new HttpHeaders().set(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    )
  };
  constructor(private http: HttpClient,
    private _router:Router) {}
   
   ajoutUser( User ){
    const endpoint = 'http://localhost:8000/api/client';
   const formData: FormData = new FormData();
   formData.append('photo_venture',User.photo_venture);
   formData.append('photo_activite',User.photo_activite);
    formData.append('prenom',User.prenom);
    formData.append('nom',User.nom);
   formData.append('num_cni',User.num_cni);
    formData.append('adresse_client',User.adresse_client);
     formData.append('telephone1',User.telephone1);
     formData.append('telephone',User.telephone);
    formData.append('date_naissance',User.date_naissance);
    formData.append('lieu_naissance',User.lieu_naissance);
    formData.append('activite',User.activite);
    formData.append('agence',User.agence);
    formData.append('sexe',User.sexe);
  //   formData.append('compte',User.compte);
    return this.http.post(endpoint, formData,this.headers);

 }
 login(email, password){
  return this.http.post<any>(this._loginUrl,{ email, password }, {observe: 'response'})
  
}

  // login(email, password){
  //   return this.http.post<any>(environment.baseUrl+"login",{ email, password }, {observe: 'response'})
    
  // }
   sendmail(User){
     return this.http.post<any>(this._sendmail, User,this.headers)
   }

   newpassword(aaa){
    return this.http.post<any>(this._newpassword, aaa,this.headers)
  }


  listUser(){
    return this.http.get<any>(this._ajoutuser,this.headers)
  }
  todo(){
    return this.http.get<any>(this._todo,this.headers)
  }
  garant(garant){
    return this.http.post<any>(this._ajoutgarant,garant, this.headers)
  }
  details(id:number):Observable<any>{
    return this.http.get(`${this._ajoutuser}/${id}`,this.headers)
  }
  update(id: number, value: any): Observable<Object> {
    return this.http.post(`${this._Updateclient}/${id}`, value,this.headers);
  }
 
  updategarant(id: number, value: any): Observable<Object> {
    return this.http.put(`${this._ajoutgarant}/${id}`, value,this.headers);
  }
  
  // loggedIn(){
  //   return !!localStorage.getItem('token')
  //}
  /* logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
   } */
  //  getListUser(){
  //   return this.http.get<any>(this._listuserUrl)
  // }
    saveToken(jwt:string)
    {
      localStorage.setItem('token',jwt);
      this.jwt=jwt;
      this.parseJWT();
    }
    parseJWT(){
      let jwtHelper = new JwtHelperService();
      let objJWT = jwtHelper.decodeToken(this.jwt);
      console.log(objJWT);
      this.email=objJWT.email;
      console.log(this.email)
      this.roles=objJWT.roles;
      console.log(this.roles);
    }

    saveUser(user: any) {
      localStorage.setItem('user',user);
      this.email= user.email;
      this.roles=user.roles;
    }
    


  getToken()
  { 
    return localStorage.getItem('token')
  }
  loggIn(){
    return !!localStorage.getItem('token')
  }
  logOut(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
    this.initParams();
  }
  initParams(){
    this.jwt=undefined;
    this.email=undefined;
    //this.roles=undefined;
  }
// isAdmin() {
//     return this.roles.indexOf('ROLE_ADMIN') >= 0;

// }
// isSuperAdmin() {
//     return this.roles.indexOf('ROLE_SUPER_ADMIN') >= 0;

// }
// isCaissier() {
//   return this.roles.indexOf('ROLE_CAISSIER') >= 0;

// }
// isUser() {
//     return this.roles.indexOf('ROLE_USER') >= 0;
// }
// isAuthenticated() {
//     return this.roles && (this.isAdmin() || this.isUser() || this.isCaissier);

// }
//   loadToken(){
//     this.jwt=localStorage.getItem('token');
//     this.parseJWT();
//   }



}
