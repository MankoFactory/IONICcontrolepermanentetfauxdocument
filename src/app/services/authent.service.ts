import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import {BehaviorSubject, Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import {environment} from '../../environments/environment';
import { UserModel } from '../modeles/user.model';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthentService {
  private currentUserSubject: BehaviorSubject<UserModel>;
  public currentUser: Observable<UserModel>; 

//   private _Updateclient="http://localhost:8000/api/updateClient";
//   private _Updategarant="http://localhost:8000/api/updategarant";
//   private _loginUrl = "http://localhost:8000/api/login";
// private _ajoutuser="http://localhost:8000/api/client";
// private _ajoutgarant="http://localhost:8000/api/garant";
// private _sendmail="http://localhost:8000/api/password/email";
// private _newpassword=" http://localhost:8000/api/password/reset";
// private _todo=" http://localhost:8000/api/visite";


 
  email : string;
 roles=[];
  navigate: any;
  rols=[];
  // _router: any;
  private headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  jwt: string;
  constructor(private http: HttpClient,
    private _router:Router) {
      this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
    }
   
    public get currentUserValue(): UserModel {
      return this.currentUserSubject.value;
  }
    ajoutUser(fd:FormData ){
  
     return this.http.post(environment.baseUrl+"client", fd,this.headers);

  }
//  login(email, password){
//   return this.http.post<any>(this._loginUrl,{ email, password }, {observe: 'response'})
  
// }

  login(email, password){
    return this.http.post<any>(environment.baseUrl+"login",{ email, password }, {observe: 'response'})
    .pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
    //  this.currentUserSubject.next(user);
      return user;
  }))
    
   }
   sendmail(User){
     return this.http.post<any>(environment.baseUrl+"password/email", User,this.headers)
   }

   newpassword(aaa){
    return this.http.post<any>(environment.baseUrl+"password/reset", aaa,this.headers)
  }


  listUser(){
    return this.http.get<any>(environment.baseUrl+"client",this.headers)
  }
  todo(){
    return this.http.get<any>(environment.baseUrl+"visite",this.headers)
  }
  garant(garant){
    return this.http.post<any>(environment.baseUrl+"garant",garant, this.headers)
  }
  listgarant(){
    return this.http.get<any>(environment.baseUrl+"garant", this.headers)
  }
  detailsgarant(id:number):Observable<any>{
    return this.http.get(`${environment.baseUrl+"garant"}/${id}`,this.headers)
  }
  details(id:number):Observable<any>{
    return this.http.get(`${environment.baseUrl+"client"}/${id}`,this.headers)
  }
  update(id: number, value: any): Observable<Object> {
    return this.http.post(`${environment.baseUrl+"updateClient"}/${id}`, value,this.headers);
  }
 
   updategarant(id: number, value: any): Observable<Object> {
     return this.http.post(`${environment.baseUrl+"updategarant"}/${id}`, value,this.headers);
   }
  

    saveToken(jwt:string)
    {
      localStorage.setItem('token',jwt);
      this.jwt=jwt;
      this.parseJWT();
    }
    parseJWT(){
      const jwtHelper = new JwtHelperService();
      const objJWT = jwtHelper.decodeToken(this.jwt);
      console.log(objJWT);
      this.email=objJWT.email;
      console.log(this.email)
      this.roles=objJWT.roles;
       let i = 0;
       objJWT.roles.forEach((r: { name: any; }) => {
         this.rols[i] = r.name;
        i++;
      });
      localStorage.setItem("roles",JSON.stringify(this.rols));
       console.log('@@@@@@@@@@@@@@@');
       console.log(this.rols);

     // localStorage.setItem('roles',objJWT.roles);
    }

    saveUser(user: any) {
      localStorage.setItem('user',user);
      // this.email= user.email;
      // this.roles=user.roles;
    }
    


  getToken()
  { 
    return localStorage.getItem('token')
  }
  loggIn(){
    return !!localStorage.getItem('token')
  }
  
  logout() {
  
        localStorage.removeItem('token');
        localStorage.removeItem('roles');
        localStorage.removeItem('admin');
        localStorage.removeItem('authenticated');
        localStorage.removeItem('superadmin');
        localStorage.removeItem('agent');
        localStorage.removeItem('currentUser');
        // localStorage.clear();
        this.jwt = undefined;
        this.email = undefined;
        this.roles = undefined;
     
    }
 
  initParams(){
    this.jwt=undefined;
    this.email=undefined;
    //this.roles=undefined;
  }
  saveRole(rols:any){
    localStorage.setItem('roles',rols);
    this.rols=this.rols;
  }
  isAgent() {
    const rols = JSON.parse(localStorage.getItem('roles')) || [];
    return rols.includes('agent') ;
   }
   isAdmin() {
    const rols = JSON.parse(localStorage.getItem('roles')) || [];
    return rols.includes('admin') ;
   }
   isSuperadmin() {
    const rols = JSON.parse(localStorage.getItem('roles')) || [];
    return rols.includes('superadmin') ;
   }
   isAuthenticated() {
    return this.roles && (this.isAdmin || this.isSuperadmin || this.isAgent);
  }
//   loadToken(){
//     this.jwt=localStorage.getItem('token');
//     this.parseJWT();
//   }

logoute() {
  if (window.confirm('Vous etes sure de vouloir déconnecter ?')) {
  localStorage.removeItem('token');
  this.jwt = undefined;
  this.email = undefined;
  this.roles = undefined;
}

}
}