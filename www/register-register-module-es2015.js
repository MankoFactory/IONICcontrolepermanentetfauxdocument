(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-buttons slot=\"end\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Control permanent</ion-title>\n  </ion-toolbar>\n \n</ion-header>\n\n<ion-content>\n  <!-- <ion-card id=\"carte\">\n     <img src=\"/assets/img/LOGO-VERT.png\" alt=\"\" /> -->\n   <!-- <ion-card-header>\n      <ion-card-subtitle>Bienvenue à l'apllication controle permanent.</ion-card-subtitle>\n     <ion-card-title>  Et détection de faux documents\n       \n       </ion-card-title> \n   </ion-card-header> \n   <ion-card-content style=\"text-align: center;\">\n    <p style=\"font-size: 25px;\">\n     Enregistrement d'un client         \n    </p>\n  </ion-card-content>\n</ion-card>\n    <ion-card>\n  <div class=\"ion-padding\" >\n\n  </div>\n</ion-card>\n    \n           \n           \n              <ion-input > </ion-input>\n            \n          \n    \n\n\n\n\n\n       \n       \n     \n\n  -->\n\n  <ion-segment  [(ngModel)]=\"relationship\" >\n    <ion-segment-button id=\"choix1\"  value=\"client\">\n      Client\n  \n    </ion-segment-button>\n    <ion-segment-button id=\"choix2\"  value=\"garant\">\n      Garant\n    </ion-segment-button>\n  </ion-segment>\n  <div class=\"form-container\">\n    <div [(ngSwitch)]=\"relationship\"> \n      <ion-list *ngSwitchCase=\"'client'\" id=\"form\" class=\"ion-list\"> \n        \n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"ajoutUser()\" role=\"form\">\n      <input id='step2' type='checkbox'>\n      <input id='step3' type='checkbox'>\n  \n      <div id=\"part1\" class=\"form-group\">\n        <div class=\"panel panel-primary\">\n          <ion-card>\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\" style=\"text-align: center;\">Informations Personnelles</h3>\n          </div>\n        </ion-card>\n<ion-row>\n <ion-col>\n          <div class=\"form-group inputIconBg\">\n          <input aria-describedby=\"sizing-addon1\" id=\"telephone\" type=\"tel\" placeholder=\"Telephone 1\" formControlName=\"telephone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.telephone.errors }\">\n          <label for=\"telephone\" class=\"lab\">Telephone 1</label>\n          <div *ngIf=\"submitted && f.telephone.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.telephone.errors.required\">Veuillez saisir le numéro de téléphone</div>\n            <div *ngIf=\"f.telephone.errors.pattern\">Entrez un numéro de téléphone valide</div>\n        </div>\n    </div>\n   </ion-col>\n    <ion-col>\n    <div class=\"form-group\">\n      <input aria-describedby=\"sizing-addon1\" type=\"tel\" id=\"telephone1\" placeholder=\"Telephone 2\" formControlName=\"telephone1\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.telephone1.errors }\">\n      <label for=\"telephone1\" class=\"lab\">Telephone 2</label>\n      <div *ngIf=\"submitted && f.telephone1.errors\" class=\"invalid-feedback\">\n           <div *ngIf=\"f.telephone1.errors.required\">Veuillez saisir le numéro de téléphone</div> \n          <div *ngIf=\"f.telephone1.errors.pattern\">Entrez un numéro de téléphone valide</div> \n      </div>\n    </div>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n    <div class=\"form-group\">\n      <input aria-describedby=\"sizing-addon1\" type=\"text\" placeholder=\"Prénom\" formControlName=\"prenom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.prenom.errors }\">\n      <label for=\"prenom\" class=\"lab\">Prénom</label>\n      <div *ngIf=\"submitted && f.prenom.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.prenom.errors.required\">Veuillez saisir le prénom</div>\n          <div *ngIf=\"f.prenom.errors.pattern\">Entrez un prénom valide</div>\n      </div>\n  </div>\n </ion-col>\n <ion-col>\n  <div class=\"form-group\">\n    <input aria-describedby=\"sizing-addon1\" id=\"nom\" type=\"text\" placeholder=\"Nom\" formControlName=\"nom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nom.errors }\">\n    <label for=\"nom\" class=\"lab\">Nom</label>\n    <div *ngIf=\"submitted && f.nom.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.nom.errors.required\">Veuillez saisir le nom</div>\n        <div *ngIf=\"f.nom.errors.pattern\">Entrez un nom valide</div>\n    </div>\n</div>\n</ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col>\n<div class=\"form-group\">\n  <input aria-describedby=\"sizing-addon1\" id=\"date\" type=\"date\" placeholder=\"Date de naissance\" formControlName=\"date_naissance\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.date_naissance.errors }\">\n  <label for=\"date\" class=\"lab\">Date de naissance</label>\n  <div *ngIf=\"submitted && f.date_naissance.errors\" class=\"invalid-feedback\">\n    <div *ngIf=\"f.date_naissance.errors.required\">Veuillez saisir la date de naissance</div>\n     <!-- <div *ngIf=\"f.nom.errors.minlength\">Password must be at least 6 characters</div>  -->\n</div>\n\n</div>\n</ion-col>\n<ion-col>\n<div class=\"form-group\">\n  <input aria-describedby=\"sizing-addon1\" id=\"lieu\" type=\"text\" placeholder=\"Lieu de naissance\" formControlName=\"lieu_naissance\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lieu_naissance.errors }\">\n  <label for=\"lieu\" class=\"lab\">Lieu de naissance</label>\n  <div *ngIf=\"submitted && f.lieu_naissance.errors\" class=\"invalid-feedback\">\n  <div *ngIf=\"f.lieu_naissance.errors.required\">Veuillez saisir le lieu de naissance</div>\n  <div *ngIf=\"f.lieu_naissance.errors.pattern\">Entrez un lieu valide</div>\n</div>\n</div>\n</ion-col>\n</ion-row>\n<ion-row>\n <ion-col>\n<div class=\"form-group\">\n  <input aria-describedby=\"sizing-addon1\" id=\"cni\" type=\"number\" placeholder=\"CNI\" formControlName=\"num_cni\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.num_cni.errors }\">\n  <label for=\"cni\" class=\"lab\">CNI</label>\n  <div *ngIf=\"submitted && f.num_cni.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.num_cni.errors.required\">Veuillez saisir le cni</div>\n      <div *ngIf=\"f.num_cni.errors.pattern\">Entrez un cni valide</div>\n  </div>\n</div>\n</ion-col>\n<ion-col>\n<div class=\"form-group\">\n  <input aria-describedby=\"sizing-addon1\" id=\"activite\" type=\"text\" placeholder=\"activite\" formControlName=\"activite\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.activite.errors }\">\n  <label for=\"activite\" class=\"lab\">Activité</label>\n  <div *ngIf=\"submitted && f.activite.errors\" class=\"invalid-feedback\">\n  <div *ngIf=\"f.activite.errors.required\">Veuillez saisir une adresse</div>\n   <div *ngIf=\"f.activite.errors.pattern\">Entrez une adresse valide</div>\n</div>\n</div>\n</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col>\n    <div class=\"form-group\">\n      <label for=\"sexe\" class=\"lab\">Adresse</label>\n      <select placeholder=\"Genre\" id=\"sexe\" class=\"form-control\" formControlName=\"sexe\"name=\"sources\" id=\"sources\" >genre\n        <option value=\"\" hidden>Genre </option>\n        <option value=\"homme\">homme</option>\n        <option value=\"femme\">femme</option>\n      </select>\n    </div>\n  </ion-col>\n  <ion-col>\n    <div class=\"form-group\">\n      <input aria-describedby=\"sizing-addon1\" id=\"adresse\" type=\"text\" placeholder=\"Adresse\" formControlName=\"adresse_client\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.adresse_client.errors }\">\n      <label for=\"adresse\" class=\"lab\">Adresse</label>\n      <div *ngIf=\"submitted && f.adresse_client.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.adresse_client.errors.required\">Veuillez saisir une adresse</div>\n       <div *ngIf=\"f.adresse_client.errors.pattern\">Entrez une adresse valide</div>\n    </div>\n    </div>\n  </ion-col>\n</ion-row>\n          <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"...\">\n            <label for='step2' id=\"continue-step2\" class=\"continue\">\n              <div class=\"btn btn-default btn-success btn-lg\" >\n                <i class=\"fa fa-arrow-circle-right\"></i>             \n              </div>\n            </label>\n          </div>\n        </div>\n      </div>\n  \n      <div id=\"part2\" class=\"form-group\">\n        <div class=\"panel panel-primary\">\n          <ion-card>\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\" style=\"text-align: center;\">Informations Supplémentaires</h3>\n          </div>\n        </ion-card>\n         \n          <div class=\"form-group\">\n           <ion-row>\n             <ion-col>\n           <button (click)=\"addPhoto('library', 1)\"    class=\"form-control\">\n             <ion-icon name=\"image\" slot=\"start\"></ion-icon>\n             Ouvrir la bibliothèque\n           </button>\n          </ion-col>\n          <ion-col>\n           <button (click)=\"addPhoto('camera', 1)\"   class=\"form-control\">\n             <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n             Prendre une photo\n           </button>\n          </ion-col>\n          </ion-row>\n          </div>\n           <div class=\"flex\" style=\"text-align: center;\">\n             <div class=\"img-box\">\n               <img [src]=\"imgDevanture\">\n             </div>\n           \n          \n           <div class=\"form-group\">\n             <ion-row>\n               <ion-col>\n           <button (click)=\"addPhoto('library', 2)\" color=\"primary\" shape=\"round\"  class=\"form-control\">\n             <ion-icon name=\"image\" slot=\"start\"></ion-icon>\n             Ouvrir la bibliothèque\n           </button>\n          </ion-col>\n           <ion-col>\n           <button (click)=\"addPhoto('camera', 2)\" color=\"danger\" shape=\"round\"  class=\"form-control\">\n             <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n             Prendre une photo\n           </button>\n          </ion-col>\n          </ion-row>\n           <div class=\"flex\">\n             <div class=\"img-box\">\n               <img [src]=\"imageActivite\">\n             </div>\n           </div>\n         </div>\n         </div>\n          <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"Agence\" formControlName=\"agence\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.agence.errors }\" >\n            <label for=\"agence\" class=\"lab\">Agence</label>\n            <div *ngIf=\"submitted && f.agence.errors \" class=\"invalid-feedback\">\n                <div *ngIf=\"f.agence.errors.required\">Veuillez saisir une agence</div>\n                <div *ngIf=\"f.agence.errors.pattern\">Entrez une agence valide</div>  \n            </div>\n          </div> \n          <div class=\"form-group\" style=\"text-align: center;\">\n          <ion-button type=\"button\" (click)=\"getMyLocation()\" id=\"geo\" >Appuyez ici pour situer le client</ion-button>\n        </div>\n          <div class=\"btn-group btn-group-lg btn-group-justified mt-5\" role=\"group\" aria-label=\"...\">\n  \n            <label for='step2' id=\"back-step2\" class=\"back\">\n              <div class=\"btn btn-default  btn-lg \" role=\"button\" style=\"background-color: #e28008; color: white;\"> \n                <i class=\"fa fa-arrow-circle-left\"></i>             \n              </div>\n            </label>\n  \n  \n            <label for='step3' id=\"continue-step3\" class=\"continue\">\n              <div class=\"btn btn-default btn-success btn-lg\" role=\"button\" style=\"left: 210px;\">\n                <i class=\"fa fa-arrow-circle-right\"></i>              \n              </div>\n            </label>\n  \n          </div>\n        </div>\n      </div>\n  \n      <div id=\"part3\" class=\"form-group\">\n        <div class=\"panel panel-primary\">\n          <div class=\"panel-heading\">\n            <ion-card>\n            <h3 class=\"panel-title\" style=\"text-align: center;\">Commentaires</h3>\n            </ion-card>\n          </div>\n        <div class=\"form-group\">\n          <textarea id=\"message\" class=\"form-control\" formControlName=\"commentaire_agent\" placeholder=\"Message\"></textarea>\n          <label for=\"commentaire_agent\" class=\"lab\">Commentaire de l'agent</label>\n\n        </div>\n\n        <div class=\"form-group\">\n          <textarea id=\"message\" class=\"form-control\" formControlName=\"commentaire_client\" placeholder=\"Message\"></textarea>\n          <label for=\"commentaire_client\" class=\"lab\">Commentaire du client</label>\n        </div>\n\n          <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"...\">\n            <label for='step3' id=\"back-step3\" class=\"back\">\n              <div class=\"btn btn-default  btn-lg\" style=\" background-color:#e28008; color: white;top: 3px; \">\n                <i class=\"fa fa-arrow-circle-left\"></i>              </div>\n            </label>\n            <label class=\"continue\">              \n              <div class=\"form-group\" style=\"left: 160px; \">\n              <ion-button type=\"submit\" [disabled]=\"loading\" class=\"ajout\" style=\"height: 43px;\" >Valider</ion-button>\n            </div>\n            </label>\n          </div>\n        </div>\n      </div>\n    </form>\n  </ion-list>\n</div>\n  </div>\n  <div class=\"form-container\">\n  <div [(ngSwitch)]=\"relationship\"> \n    <ion-list *ngSwitchCase=\"'garant'\">\n      <form [formGroup]=\"garantForm\" (ngSubmit)=\"ajoutgarant()\" role=\"form\">\n    \n      <div class=\"form-group\">\n  \n        <input aria-describedby=\"sizing-addon1\" type=\"text\" placeholder=\"Prénom\" formControlName=\"prenom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.prenom.errors }\">\n        <label for=\"prenom\" class=\"lab\">Prénom</label>   \n             <div *ngIf=\"submitted && g.prenom.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"g.prenom.errors.required\">veuillez entrer le prénom du garant</div>\n            <div *ngIf=\"g.prenom.errors.pattern\">entrez un prénom valide</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n  \n      <input aria-describedby=\"sizing-addon1\" id=\"nom\" type=\"text\" placeholder=\"Nom\" formControlName=\"nom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.nom.errors }\">\n      <label for=\"nom\" class=\"lab\">Nom</label>\n            <div *ngIf=\"submitted && g.nom.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"g.nom.errors.required\">veuillez entrer le nom du garant</div>\n          <div *ngIf=\"g.nom.errors.pattern\">entrez un nom valide</div>\n      </div>\n  </div>\n  <div class=\"form-group\">\n   \n    <input aria-describedby=\"sizing-addon1\" id=\"telephone\" type=\"tel\" placeholder=\"Telephone \" formControlName=\"telephone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.telephone.errors }\">\n    <label for=\"telephone\" class=\"lab\">Telephone </label>\n        <div *ngIf=\"submitted && g.telephone.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"g.telephone.errors.required\">veuillez entrer le numéro de téléphone du garant</div>\n        <div *ngIf=\"g.telephone.errors.pattern\"> entrer un nom valide</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n   \n  \n    <input aria-describedby=\"sizing-addon1\" id=\"client\" type=\"tel\" placeholder=\"Téléphone client\" formControlName=\"client\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.client.errors }\">\n    <label for=\"client\" class=\"lab\">Téléphone client</label>\n        <div *ngIf=\"submitted && g.client.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"g.client.errors.required\">veuillez saisir le téléphone du client</div>\n        <div *ngIf=\"g.client.errors.pattern\">saisissez un numéro valide</div>\n    </div>\n  </div> \n\n  <div class=\"form-group\" style=\"left:210px;\">\n    <ion-button type=\"submit\" [disabled]=\"loading\" class=\"ajout\" >Valider</ion-button>\n  </div>\n      </form>\n    </ion-list>\n    </div>\n  </div>\n</ion-content> \n"

/***/ }),

/***/ "./src/app/register/register-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  text-align: center;\n  background: url(http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/upfeathers.png);\n}\n\nion-content {\n  height: 100%;\n  width: 100%;\n}\n\n.form-container {\n  width: 100%;\n  max-width: 320px;\n  margin: 0 auto;\n}\n\n.form-container input[type=text], .form-container input[type=email], .form-container input[type=tel], .form-container input[type=number], .form-container input[type=date], .form-container textarea, .form-container select {\n  width: 100%;\n  margin: 10px auto;\n  border-radius: 10px;\n  border: solid 2px grey;\n  border-bottom: solid 1px;\n  box-shadow: 0 0 1px 1px white;\n}\n\n.form-container textarea {\n  min-height: 100px;\n  top: -10px;\n}\n\n.form-container .panel {\n  background: white;\n}\n\n.form-container .panel .panel-heading {\n  margin-bottom: 20px;\n}\n\n.form-container .panel .panel-title {\n  font-size: 20px;\n}\n\n.form-container .btn-group {\n  width: 30%;\n  margin: 0 auto 10px auto;\n  top: -60px;\n}\n\n.form-container .back {\n  float: left;\n  padding-top: 50px;\n  color: white;\n}\n\n.form-container .continue {\n  padding-top: 50px;\n  float: right;\n}\n\n/* Multi-Part CSS */\n\ninput[type=checkbox] {\n  position: absolute;\n  /* Position the checkbox in upper left corner */\n  opacity: 0;\n}\n\n/* Styling Parts */\n\n#part1,\n#part2,\n#part3 {\n  z-index: 2;\n  display: block;\n  height: auto;\n  opacity: 1;\n  -webkit-transition: opacity 1s ease-in-out;\n  transition: opacity 1s ease-in-out;\n}\n\n/* Hidden Parts */\n\n#part2,\n#part3 {\n  opacity: 0;\n  height: 0;\n}\n\n/* Show Step 2 & Hide Step 1 */\n\n#step2:checked ~ #part2 {\n  opacity: 1;\n  height: auto;\n}\n\n#step2:checked ~ #part1 {\n  opacity: 0;\n  height: 0;\n  display: none;\n}\n\n/* Show Step 3  & Hide Step 2 */\n\n#step3:checked ~ #part3 {\n  opacity: 1;\n  height: auto;\n}\n\n#step3:checked ~ #part2 {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\nion-card {\n  background: #e28008;\n  color: white;\n}\n\nion-row {\n  width: 100%;\n}\n\nion-col {\n  width: 50%;\n}\n\n/* Styles go here */\n\ndiv {\n  position: relative;\n}\n\n.lab {\n  position: absolute;\n  left: 20px;\n  top: 9px;\n  color: black;\n  font-size: 7px;\n  opacity: 0;\n  -webkit-transition: top 0.4s, opacity 0.2s;\n  transition: top 0.4s, opacity 0.2s;\n  font-family: helvetica;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\ninput:valid + .lab, textarea:valid + .lab {\n  opacity: 1;\n  top: -16px;\n  color: #e28008;\n}\n\ninput:focus + .lab, textarea:focus + .lab {\n  top: -18px;\n  left: 10px;\n  color: #e28008;\n  font-size: 10px;\n  opacity: 0.5;\n  font-family: helvetica;\n}\n\n[placeholder]:focus::-webkit-input-placeholder, [placeholder]:focus::-webkit-textarea-placeholder {\n  color: black;\n}\n\n/*test*/\n\n.lab, input, textarea {\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  touch-action: manipulation;\n}\n\ninput {\n  border: 0;\n  font-family: inherit;\n  -webkit-appearance: none;\n  border-radius: 0;\n  padding: 0;\n  cursor: text;\n}\n\nion-input {\n  font-family: inherit;\n  -webkit-appearance: none;\n  border-radius: 0;\n  padding: 0;\n  cursor: text;\n}\n\ninput:focus, textarea:focus {\n  outline: 0;\n  border-bottom: 0.05em;\n}\n\n.lab {\n  text-transform: unset;\n  letter-spacing: 0.05em;\n}\n\ninput:placeholder-shown + .lab, textarea:placeholder-shown + .lab {\n  cursor: text;\n  max-width: 40.66%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-transform-origin: left bottom;\n          transform-origin: left bottom;\n  -webkit-transform: translate(0, 2.125rem) scale(1.5);\n          transform: translate(0, 2.125rem) scale(1.5);\n}\n\n::-webkit-input-placeholder, ::-webkit-textarea-placeholder {\n  opacity: 0;\n  -webkit-transition: inherit;\n  transition: inherit;\n}\n\ninput:focus::-webkit-input-placeholder, textarea:focus::-webkit-textarea-placeholder {\n  opacity: 1;\n}\n\ninput:not(:placeholder-shown) + .lab,\ninput:focus + .lab, textarea:not(:placeholder-shown) + .lab,\ntextarea:focus + .lab {\n  -webkit-transform: translate(0, 0) scale(1);\n          transform: translate(0, 0) scale(1);\n  cursor: pointer;\n}\n\nselect {\n  border-bottom: solid 1px #e28008;\n}\n\nbutton {\n  border: 2px solid;\n  color: white;\n  border-radius: none;\n  font-size: 10px;\n  background-color: #50A125;\n}\n\n.garant {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxTZXluYWJvdSBOZGlheWVcXG1hbmtvLWFwcC1pb25pYy9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxnR0FBQTtBQ0FKOztBREVFO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNDTjs7QURDRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNFSjs7QURBSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0FDRU47O0FEQ0k7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUNDTjs7QURDSTtFQUNFLGlCQUFBO0FDQ047O0FEQU07RUFDRSxtQkFBQTtBQ0VSOztBREFNO0VBQ0UsZUFBQTtBQ0VSOztBRENJO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtBQ0NOOztBREVJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0FOOztBREVJO0VBQ0MsaUJBQUE7RUFDQSxZQUFBO0FDQUw7O0FES0UsbUJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLCtDQUFBO0VBRUEsVUFBQTtBQ0hKOztBRE1FLGtCQUFBOztBQUNBOzs7RUFHRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtBQ0hKOztBRE1FLGlCQUFBOztBQUNBOztFQUVFLFVBQUE7RUFDQSxTQUFBO0FDSEo7O0FET0UsOEJBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0pKOztBRE1FO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDSEo7O0FETUUsK0JBQUE7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0hKOztBREtFO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDRko7O0FESUU7RUFDSSxtQkFBQTtFQUNBLFlBQUE7QUNETjs7QURJRTtFQUNJLFdBQUE7QUNETjs7QURHRTtFQUNJLFVBQUE7QUNBTjs7QURPQyxtQkFBQTs7QUFFRDtFQUNDLGtCQUFBO0FDTEQ7O0FEVUU7RUFDRCxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtBQ1BEOztBRFNFO0VBQ0MsVUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDTkg7O0FEUUU7RUFFRCxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDTkQ7O0FEVUU7RUFDRCxZQUFBO0FDUEQ7O0FEU0UsT0FBQTs7QUFFQTtFQUNDLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSwwQkFBQTtBQ1BIOztBRFVFO0VBRUMsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDUkg7O0FEVUU7RUFFQyxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1JIOztBRFVFO0VBQ0MsVUFBQTtFQUNBLHFCQUFBO0FDUEg7O0FEU0U7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0FDTkg7O0FEU0U7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0Esb0RBQUE7VUFBQSw0Q0FBQTtBQ05IOztBRFNFO0VBQ0MsVUFBQTtFQUNBLDJCQUFBO0VBQUEsbUJBQUE7QUNOSDs7QURRRTtFQUNDLFVBQUE7QUNMSDs7QURPRTs7O0VBR0MsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLGVBQUE7QUNKSDs7QURNRTtFQUVJLGdDQUFBO0FDSk47O0FET0U7RUFFRSxpQkFBQTtFQUNELFlBQUE7RUFDQSxtQkFBQTtFQUNDLGVBQUE7RUFDQSx5QkFBQTtBQ0xKOztBRFFFO0VBQ0UsWUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICAgICAgXHJcbmJvZHkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHA6Ly9zdWJ0bGVwYXR0ZXJuczIwMTUuc3VidGxlcGF0dGVybnMubmV0ZG5hLWNkbi5jb20vcGF0dGVybnMvdXBmZWF0aGVycy5wbmcpO1xyXG4gIH1cclxuICBpb24tY29udGVudHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmZvcm0tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBcclxuICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9ZW1haWxdLCBpbnB1dFt0eXBlPXRlbF0sIGlucHV0W3R5cGU9bnVtYmVyXSxpbnB1dFt0eXBlPWRhdGVdLCB0ZXh0YXJlYSxzZWxlY3Qge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJvcmRlcjogc29saWQgMnB4IGdyZXk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgIDAgMXB4IDFweCB3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgICAgdG9wOiAtMTBweDtcclxuICAgIH1cclxuICAgIC5wYW5lbCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAucGFuZWwtaGVhZGluZyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAucGFuZWwtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuLWdyb3VwIHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xyXG4gICAgICB0b3A6IC02MHB4O1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5iYWNrIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuY29udGludWUge1xyXG4gICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgIGZsb2F0OiByaWdodDtcclxuICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogTXVsdGktUGFydCBDU1MgKi9cclxuICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvKiBQb3NpdGlvbiB0aGUgY2hlY2tib3ggaW4gdXBwZXIgbGVmdCBjb3JuZXIgKi9cclxuICAgIFxyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGluZyBQYXJ0cyAqL1xyXG4gICNwYXJ0MSxcclxuICAjcGFydDIsXHJcbiAgI3BhcnQzIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAvKiBIaWRkZW4gUGFydHMgKi9cclxuICAjcGFydDIsXHJcbiAgI3BhcnQzIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAvKiBTaG93IFN0ZXAgMiAmIEhpZGUgU3RlcCAxICovXHJcbiAgI3N0ZXAyOmNoZWNrZWQgfiAjcGFydDIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgI3N0ZXAyOmNoZWNrZWQgfiAjcGFydDEge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNob3cgU3RlcCAzICAmIEhpZGUgU3RlcCAyICovXHJcbiAgI3N0ZXAzOmNoZWNrZWQgfiAjcGFydDMge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgI3N0ZXAzOmNoZWNrZWQgfiAjcGFydDIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgICAgYmFja2dyb3VuZDogI2UyODAwODtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBcclxuICB9XHJcbiAgaW9uLXJvd3tcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGlvbi1jb2x7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG4gLmZvcm0tZ3JvdXB7XHJcbiAgICAvLyBoZWlnaHQ6IDEwcHg7XHJcbiAgIFxyXG4gfVxyXG4gIFxyXG4gLyogU3R5bGVzIGdvIGhlcmUgKi9cclxuXHJcbmRpdntcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbiAgLmxhYntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMjBweDtcclxuXHR0b3A6IDlweDtcclxuXHRjb2xvcjpibGFjaztcclxuXHRmb250LXNpemU6IDdweDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHRyYW5zaXRpb246IHRvcCAwLjRzLCBvcGFjaXR5IDAuMnM7XHJcblx0Zm9udC1mYW1pbHk6IGhlbHZldGljYTtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XHJcblx0dHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgaW5wdXQ6dmFsaWQrIC5sYWIsdGV4dGFyZWE6dmFsaWQgKyAubGFie1xyXG5cdCAgb3BhY2l0eTogMTtcclxuXHQgIHRvcDogLTE2cHg7XHJcblx0ICBjb2xvcjogI2UyODAwODtcclxuICB9XHJcbiAgaW5wdXQ6Zm9jdXMgKyAubGFiLCB0ZXh0YXJlYTpmb2N1cyArIC5sYWJ7XHJcblx0XHJcblx0dG9wOiAtMThweDtcclxuXHRsZWZ0OiAxMHB4O1xyXG5cdGNvbG9yOiAjZTI4MDA4O1xyXG5cdGZvbnQtc2l6ZTogMTBweDtcclxuXHRvcGFjaXR5OiAwLjU7XHJcblx0Zm9udC1mYW1pbHk6IGhlbHZldGljYTtcclxuXHRcclxuICB9XHJcbiAgXHJcbiAgW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC10ZXh0YXJlYS1wbGFjZWhvbGRlcntcclxuXHRjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC8qdGVzdCovXHJcbiBcclxuICAubGFiLGlucHV0LHRleHRhcmVhe1xyXG5cdCAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcblx0ICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuXHQgXHJcbiAgfVxyXG4gIGlucHV0e1xyXG5cdCBcclxuXHQgIGJvcmRlcjogMDtcclxuXHQgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cdCAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdCAgYm9yZGVyLXJhZGl1czogMDtcclxuXHQgIHBhZGRpbmc6IDA7XHJcblx0ICBjdXJzb3I6IHRleHQ7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dHtcclxuICBcclxuXHQgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cdCAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdCAgYm9yZGVyLXJhZGl1czogMDtcclxuXHQgIHBhZGRpbmc6IDA7XHJcblx0ICBjdXJzb3I6IHRleHQ7XHJcbiAgfVxyXG4gIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1c3tcclxuXHQgIG91dGxpbmU6IDA7XHJcblx0ICBib3JkZXItYm90dG9tOiAwLjA1ZW07XHJcbiAgfVxyXG4gIC5sYWIge1xyXG5cdCAgdGV4dC10cmFuc2Zvcm06IHVuc2V0O1xyXG5cdCAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuXHRcclxuICB9XHJcbiAgaW5wdXQ6cGxhY2Vob2xkZXItc2hvd24gKy5sYWIsIHRleHRhcmVhOnBsYWNlaG9sZGVyLXNob3duICsgLmxhYntcclxuXHQgIGN1cnNvcjogdGV4dDtcclxuXHQgIG1heC13aWR0aDogNDAuNjYlO1xyXG5cdCAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHQgIG92ZXJmbG93OiBoaWRkZW47XHJcblx0ICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHQgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG5cdCAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMi4xMjVyZW0pXHJcblx0ICBzY2FsZSgxLjUpO1xyXG4gIH1cclxuICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIDo6LXdlYmtpdC10ZXh0YXJlYS1wbGFjZWhvbGRlcntcclxuXHQgIG9wYWNpdHk6IDA7XHJcblx0ICB0cmFuc2l0aW9uOiBpbmhlcml0O1xyXG4gIH1cclxuICBpbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtdGV4dGFyZWEtcGxhY2Vob2xkZXJ7XHJcblx0ICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSsubGFiLFxyXG4gIGlucHV0OmZvY3VzKyAubGFiLHRleHRhcmVhOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pKy5sYWIsXHJcbiAgdGV4dGFyZWE6Zm9jdXMrIC5sYWJ7XHJcblx0ICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwICwgMCkgc2NhbGUoMSk7XHJcblx0ICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIHNlbGVjdHtcclxuICAgICAgXHJcbiAgICAgIGJvcmRlci1ib3R0b206c29saWQgMXB4ICNlMjgwMDggO1xyXG4gIH1cclxuICBcclxuICBidXR0b257XHJcbiAgIFxyXG4gICAgYm9yZGVyOjJweCBzb2xpZCA7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgYm9yZGVyLXJhZGl1czpub25lO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwQTEyNTtcclxuICBcclxuICB9XHJcbiAgLmdhcmFudHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgXHJcblxyXG4iLCJib2R5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL3N1YnRsZXBhdHRlcm5zMjAxNS5zdWJ0bGVwYXR0ZXJucy5uZXRkbmEtY2RuLmNvbS9wYXR0ZXJucy91cGZlYXRoZXJzLnBuZyk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0sIC5mb3JtLWNvbnRhaW5lciBpbnB1dFt0eXBlPWVtYWlsXSwgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9dGVsXSwgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9bnVtYmVyXSwgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9ZGF0ZV0sIC5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSwgLmZvcm0tY29udGFpbmVyIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggZ3JleTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4O1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCB3aGl0ZTtcbn1cbi5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB0b3A6IC0xMHB4O1xufVxuLmZvcm0tY29udGFpbmVyIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmZvcm0tY29udGFpbmVyIC5wYW5lbCAucGFuZWwtaGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZm9ybS1jb250YWluZXIgLnBhbmVsIC5wYW5lbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5mb3JtLWNvbnRhaW5lciAuYnRuLWdyb3VwIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xuICB0b3A6IC02MHB4O1xufVxuLmZvcm0tY29udGFpbmVyIC5iYWNrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uZm9ybS1jb250YWluZXIgLmNvbnRpbnVlIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLyogTXVsdGktUGFydCBDU1MgKi9cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBQb3NpdGlvbiB0aGUgY2hlY2tib3ggaW4gdXBwZXIgbGVmdCBjb3JuZXIgKi9cbiAgb3BhY2l0eTogMDtcbn1cblxuLyogU3R5bGluZyBQYXJ0cyAqL1xuI3BhcnQxLFxuI3BhcnQyLFxuI3BhcnQzIHtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogYXV0bztcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluLW91dDtcbn1cblxuLyogSGlkZGVuIFBhcnRzICovXG4jcGFydDIsXG4jcGFydDMge1xuICBvcGFjaXR5OiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi8qIFNob3cgU3RlcCAyICYgSGlkZSBTdGVwIDEgKi9cbiNzdGVwMjpjaGVja2VkIH4gI3BhcnQyIHtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jc3RlcDI6Y2hlY2tlZCB+ICNwYXJ0MSB7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU2hvdyBTdGVwIDMgICYgSGlkZSBTdGVwIDIgKi9cbiNzdGVwMzpjaGVja2VkIH4gI3BhcnQzIHtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jc3RlcDM6Y2hlY2tlZCB+ICNwYXJ0MiB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2UyODAwODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb2wge1xuICB3aWR0aDogNTAlO1xufVxuXG4vKiBTdHlsZXMgZ28gaGVyZSAqL1xuZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMHB4O1xuICB0b3A6IDlweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDdweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdG9wIDAuNHMsIG9wYWNpdHkgMC4ycztcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5pbnB1dDp2YWxpZCArIC5sYWIsIHRleHRhcmVhOnZhbGlkICsgLmxhYiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRvcDogLTE2cHg7XG4gIGNvbG9yOiAjZTI4MDA4O1xufVxuXG5pbnB1dDpmb2N1cyArIC5sYWIsIHRleHRhcmVhOmZvY3VzICsgLmxhYiB7XG4gIHRvcDogLTE4cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZTI4MDA4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbn1cblxuW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgW3BsYWNlaG9sZGVyXTpmb2N1czo6LXdlYmtpdC10ZXh0YXJlYS1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyp0ZXN0Ki9cbi5sYWIsIGlucHV0LCB0ZXh0YXJlYSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuaW9uLWlucHV0IHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG5pbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXItYm90dG9tOiAwLjA1ZW07XG59XG5cbi5sYWIge1xuICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbmlucHV0OnBsYWNlaG9sZGVyLXNob3duICsgLmxhYiwgdGV4dGFyZWE6cGxhY2Vob2xkZXItc2hvd24gKyAubGFiIHtcbiAgY3Vyc29yOiB0ZXh0O1xuICBtYXgtd2lkdGg6IDQwLjY2JTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyLjEyNXJlbSkgc2NhbGUoMS41KTtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLCA6Oi13ZWJraXQtdGV4dGFyZWEtcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xufVxuXG5pbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Zm9jdXM6Oi13ZWJraXQtdGV4dGFyZWEtcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG5pbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSArIC5sYWIsXG5pbnB1dDpmb2N1cyArIC5sYWIsIHRleHRhcmVhOm5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYixcbnRleHRhcmVhOmZvY3VzICsgLmxhYiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNlbGVjdCB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZTI4MDA4O1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiBub25lO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MEExMjU7XG59XG5cbi5nYXJhbnQge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");









// import swal from 'sweetalert';
let RegisterPage = class RegisterPage {
    // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    constructor(_authenfication, _router, formBuilder, alertService, camera, navCtrl, geo) {
        this._authenfication = _authenfication;
        this._router = _router;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.geo = geo;
        this.imageData = null;
        this.submitted = false;
        this.next = false;
        this.last = false;
        this.lastnext = false;
        this.loading = false;
        this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
        this.nomPattern = "^[A-Za-z]{2,}$";
        this.cniPattern = "^[0-9]{9}$";
        this.telephonePattern = "^((7(?=0|6|7|8))|(3(?=3)))[0-9]{8}$";
        this.datePattern = "^(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}$";
        this.images = { 'venture': '', 'activite': '' };
        this.relationship = "client";
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            date_naissance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.datePattern)]],
            lieu_naissance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.nomPattern)]],
            activite: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.nomPattern)]],
            adresse_client: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.nomPattern)]],
            photo_venture: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            photo_activite: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.telephonePattern)]],
            agence: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.nomPattern)]],
            sexe: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            telephone1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.telephonePattern)]],
            nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.nomPattern)]],
            prenom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.nomPattern)]],
            num_cni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.cniPattern)]],
            lat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            lng: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            commentaire_agent: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            commentaire_client: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.garantForm = this.formBuilder.group({
            nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.nomPattern)]],
            prenom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.nomPattern)]],
            telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.telephonePattern)]],
            client: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.telephonePattern)]]
        });
    }
    getMyLocation() {
        this.geo.getCurrentPosition({
            enableHighAccuracy: true
        }).then(location => {
            this.registerForm.value.lat = location.coords.latitude;
            this.registerForm.value.lng = location.coords.longitude;
        });
    }
    openLibrary() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
                quality: 10,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetWidth: 1000,
                targetHeight: 1000,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
            };
            return this.camera.getPicture(options);
        });
    }
    openCamera() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
                quality: 10,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                targetWidth: 1000,
                targetHeight: 1000,
                sourceType: this.camera.PictureSourceType.CAMERA
            };
            return this.camera.getPicture(options);
        });
    }
    addPhoto(source, number) {
        let result = null;
        if (source == 'camera')
            result = this.openCamera();
        else
            result = this.openLibrary();
        if (result != null)
            result.then(imageData => {
                // console.log("imageData",imageData);
                if (number == 1) {
                    this.imgDevanture = "data:image/jpeg;base64," + imageData;
                    this.registerForm.get('photo_venture').setValue(imageData);
                }
                else {
                    this.imageActivite = "data:image/jpeg;base64," + imageData;
                    this.registerForm.get('photo_activite').setValue(imageData);
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
    ajoutUser(User) {
        let data = Object.assign({}, User);
        data.photo_venture = this.images.venture;
        data.photo_activite = this.images.activite;
        this.submitted = true;
        this.alertService.clear();
        this.loading = true;
        let user = this.registerForm.value;
        console.log(this.registerForm);
        this._authenfication.ajoutUser(this.registerForm.value)
            .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            alert("client ajouté");
            console.log(res);
        }), error => {
            console.log(error);
            this.alertService.error(error);
            this.loading = false;
        });
    }
    ajoutgarant() {
        this.submitted = true;
        this.alertService.clear();
        if (this.garantForm.invalid) {
            return;
        }
        this.loading = true;
        this._authenfication.garant(this.garantForm.value)
            .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            alert("garant ajouté");
            console.log(res);
        }), error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
    dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0) {
            byteString = atob(dataURI.split(',')[1]);
        }
        else {
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
};
RegisterPage.ctorParameters = () => [
    { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] }
];
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
        styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map