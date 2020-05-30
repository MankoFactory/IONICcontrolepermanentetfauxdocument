(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-buttons slot=\"end\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Control permanent</ion-title>\n  </ion-toolbar>\n \n</ion-header>\n\n<ion-content>\n  <!-- <ion-card id=\"carte\">\n     <img src=\"/assets/img/LOGO-VERT.png\" alt=\"\" /> -->\n   <!-- <ion-card-header>\n      <ion-card-subtitle>Bienvenue à l'apllication controle permanent.</ion-card-subtitle>\n     <ion-card-title>  Et détection de faux documents\n       \n       </ion-card-title> \n   </ion-card-header> \n   <ion-card-content style=\"text-align: center;\">\n    <p style=\"font-size: 25px;\">\n     Enregistrement d'un client         \n    </p>\n  </ion-card-content>\n</ion-card>\n    <ion-card>\n  <div class=\"ion-padding\" >\n\n  </div>\n</ion-card>\n    \n           \n           \n              <ion-input > </ion-input>\n            \n          \n    \n\n\n\n\n\n       \n       \n     \n\n  -->\n\n  <ion-segment  [(ngModel)]=\"relationship\" >\n    <ion-segment-button id=\"choix1\"  value=\"client\">\n      Client\n  \n    </ion-segment-button>\n    <ion-segment-button id=\"choix2\"  value=\"garant\">\n      Garant\n    </ion-segment-button>\n  </ion-segment>\n  <div class=\"form-container\">\n    <div [(ngSwitch)]=\"relationship\"> \n      <ion-list *ngSwitchCase=\"'client'\" id=\"form\" class=\"ion-list\"> \n        \n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"ajoutUser()\" role=\"form\">\n      <input id='step2' type='checkbox'>\n      <input id='step3' type='checkbox'>\n  \n      <div id=\"part1\" class=\"form-group\">\n        <div class=\"panel panel-primary\">\n          <ion-card>\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\" style=\"text-align: center;\">Informations Personnelles</h3>\n          </div>\n        </ion-card>\n<ion-row>\n <ion-col>\n          <div class=\"form-group inputIconBg\">\n          <input aria-describedby=\"sizing-addon1\" id=\"telephone\" type=\"tel\" placeholder=\"Telephone 1\" formControlName=\"telephone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.telephone.errors }\">\n          <label for=\"telephone\" class=\"lab\">Telephone 1</label>\n          <div *ngIf=\"submitted && f.telephone.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.telephone.errors.required\">Veuillez saisir le numéro de téléphone</div>\n            <div *ngIf=\"f.telephone.errors.pattern\">Entrez un numéro de téléphone valide</div>\n        </div>\n    </div>\n   </ion-col>\n    <ion-col>\n    <div class=\"form-group\">\n      <input aria-describedby=\"sizing-addon1\" type=\"tel\" id=\"telephone1\" placeholder=\"Telephone 2\" formControlName=\"telephone1\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.telephone1.errors }\">\n      <label for=\"telephone1\" class=\"lab\">Telephone 2</label>\n      <div *ngIf=\"submitted && f.telephone1.errors\" class=\"invalid-feedback\">\n           <div *ngIf=\"f.telephone1.errors.required\">Veuillez saisir le numéro de téléphone</div> \n          <div *ngIf=\"f.telephone1.errors.pattern\">Entrez un numéro de téléphone valide</div> \n      </div>\n    </div>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n    <div class=\"form-group\">\n      <input aria-describedby=\"sizing-addon1\" type=\"text\" placeholder=\"Prénom\" formControlName=\"prenom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.prenom.errors }\">\n      <label for=\"prenom\" class=\"lab\">Prénom</label>\n      <div *ngIf=\"submitted && f.prenom.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.prenom.errors.required\">Veuillez saisir le prénom</div>\n          <div *ngIf=\"f.prenom.errors.pattern\">Entrez un prénom valide</div>\n      </div>\n  </div>\n </ion-col>\n <ion-col>\n  <div class=\"form-group\">\n    <input aria-describedby=\"sizing-addon1\" id=\"nom\" type=\"text\" placeholder=\"Nom\" formControlName=\"nom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nom.errors }\">\n    <label for=\"nom\" class=\"lab\">Nom</label>\n    <div *ngIf=\"submitted && f.nom.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.nom.errors.required\">Veuillez saisir le nom</div>\n        <div *ngIf=\"f.nom.errors.pattern\">Entrez un nom valide</div>\n    </div>\n</div>\n</ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col>\n<div class=\"form-group\">\n  <input aria-describedby=\"sizing-addon1\" id=\"date\" type=\"date\" placeholder=\"Date de naissance\" formControlName=\"date_naissance\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.date_naissance.errors }\">\n  <label for=\"date\" class=\"lab\">Date de naissance</label>\n  <div *ngIf=\"submitted && f.date_naissance.errors\" class=\"invalid-feedback\">\n    <div *ngIf=\"f.date_naissance.errors.required\">Veuillez saisir la date de naissance</div>\n     <!-- <div *ngIf=\"f.nom.errors.minlength\">Password must be at least 6 characters</div>  -->\n</div>\n\n</div>\n</ion-col>\n<ion-col>\n<div class=\"form-group\">\n  <input aria-describedby=\"sizing-addon1\" id=\"lieu\" type=\"text\" placeholder=\"Lieu de naissance\" formControlName=\"lieu_naissance\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lieu_naissance.errors }\">\n  <label for=\"lieu\" class=\"lab\">Lieu de naissance</label>\n  <div *ngIf=\"submitted && f.lieu_naissance.errors\" class=\"invalid-feedback\">\n  <div *ngIf=\"f.lieu_naissance.errors.required\">Veuillez saisir le lieu de naissance</div>\n  <div *ngIf=\"f.lieu_naissance.errors.pattern\">Entrez un lieu valide</div>\n</div>\n</div>\n</ion-col>\n</ion-row>\n<ion-row>\n <ion-col>\n<div class=\"form-group\">\n  <input aria-describedby=\"sizing-addon1\" id=\"cni\" type=\"number\" placeholder=\"CNI\" formControlName=\"num_cni\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.num_cni.errors }\">\n  <label for=\"cni\" class=\"lab\">CNI</label>\n  <div *ngIf=\"submitted && f.num_cni.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.num_cni.errors.required\">Veuillez saisir le cni</div>\n      <div *ngIf=\"f.num_cni.errors.pattern\">Entrez un cni valide</div>\n  </div>\n</div>\n</ion-col>\n<ion-col>\n<div class=\"form-group\">\n  <input aria-describedby=\"sizing-addon1\" id=\"activite\" type=\"text\" placeholder=\"activite\" formControlName=\"activite\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.activite.errors }\">\n  <label for=\"activite\" class=\"lab\">Activité</label>\n  <div *ngIf=\"submitted && f.activite.errors\" class=\"invalid-feedback\">\n  <div *ngIf=\"f.activite.errors.required\">Veuillez saisir une adresse</div>\n   <div *ngIf=\"f.activite.errors.pattern\">Entrez une adresse valide</div>\n</div>\n</div>\n</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col>\n    <div class=\"form-group\">\n      <label for=\"sexe\" class=\"lab\">Adresse</label>\n      <select placeholder=\"Genre\" id=\"sexe\" class=\"form-control\" formControlName=\"sexe\"name=\"sources\" id=\"sources\" >genre\n        <option value=\"\" hidden>Genre </option>\n        <option value=\"homme\">homme</option>\n        <option value=\"femme\">femme</option>\n      </select>\n    </div>\n  </ion-col>\n  <ion-col>\n    <div class=\"form-group\">\n      <input aria-describedby=\"sizing-addon1\" id=\"adresse\" type=\"text\" placeholder=\"Adresse\" formControlName=\"adresse_client\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.adresse_client.errors }\">\n      <label for=\"adresse\" class=\"lab\">Adresse</label>\n      <div *ngIf=\"submitted && f.adresse_client.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.adresse_client.errors.required\">Veuillez saisir une adresse</div>\n       <div *ngIf=\"f.adresse_client.errors.pattern\">Entrez une adresse valide</div>\n    </div>\n    </div>\n  </ion-col>\n</ion-row>\n          <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"...\">\n            <label for='step2' id=\"continue-step2\" class=\"continue\">\n              <div class=\"btn btn-default btn-success btn-lg\" >\n                <i class=\"fa fa-arrow-circle-right\"></i>             \n              </div>\n            </label>\n          </div>\n        </div>\n      </div>\n  \n      <div id=\"part2\" class=\"form-group\">\n        <div class=\"panel panel-primary\">\n          <ion-card>\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\" style=\"text-align: center;\">Informations Supplémentaires</h3>\n          </div>\n        </ion-card>\n         \n          <div class=\"form-group\">\n           <ion-row>\n             <ion-col>\n           <button (click)=\"addPhoto('library', 1)\"    class=\"form-control\">\n             <ion-icon name=\"image\" slot=\"start\"></ion-icon>\n             Ouvrir la bibliothèque\n           </button>\n          </ion-col>\n          <ion-col>\n           <button (click)=\"addPhoto('camera', 1)\"   class=\"form-control\">\n             <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n             Prendre une photo\n           </button>\n          </ion-col>\n          </ion-row>\n          </div>\n           <div class=\"flex\" style=\"text-align: center;\">\n             <div class=\"img-box\">\n               <img [src]=\"imgDevanture\">\n             </div>\n           \n          \n           <div class=\"form-group\">\n             <ion-row>\n               <ion-col>\n           <button (click)=\"addPhoto('library', 2)\" color=\"primary\" shape=\"round\"  class=\"form-control\">\n             <ion-icon name=\"image\" slot=\"start\"></ion-icon>\n             Ouvrir la bibliothèque\n           </button>\n          </ion-col>\n           <ion-col>\n           <button (click)=\"addPhoto('camera', 2)\" color=\"danger\" shape=\"round\"  class=\"form-control\">\n             <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n             Prendre une photo\n           </button>\n          </ion-col>\n          </ion-row>\n           <div class=\"flex\">\n             <div class=\"img-box\">\n               <img [src]=\"imageActivite\">\n             </div>\n           </div>\n         </div>\n         </div>\n          <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"Agence\" formControlName=\"agence\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.agence.errors }\" >\n            <label for=\"agence\" class=\"lab\">Agence</label>\n            <div *ngIf=\"submitted && f.agence.errors \" class=\"invalid-feedback\">\n                <div *ngIf=\"f.agence.errors.required\">Veuillez saisir une agence</div>\n                <div *ngIf=\"f.agence.errors.pattern\">Entrez une agence valide</div>  \n            </div>\n          </div> \n          <div class=\"form-group\" style=\"text-align: center;\">\n          <ion-button type=\"button\" (click)=\"getMyLocation()\" id=\"geo\" >Appuyez ici pour situer le client</ion-button>\n        </div>\n          <div class=\"btn-group btn-group-lg btn-group-justified mt-5\" role=\"group\" aria-label=\"...\">\n  \n            <label for='step2' id=\"back-step2\" class=\"back\">\n              <div class=\"btn btn-default  btn-lg \" role=\"button\" style=\"background-color: #e28008; color: white;\"> \n                <i class=\"fa fa-arrow-circle-left\"></i>             \n              </div>\n            </label>\n  \n  \n            <label for='step3' id=\"continue-step3\" class=\"continue\">\n              <div class=\"btn btn-default btn-success btn-lg\" role=\"button\" style=\"left: 210px;\">\n                <i class=\"fa fa-arrow-circle-right\"></i>              \n              </div>\n            </label>\n  \n          </div>\n        </div>\n      </div>\n  \n      <div id=\"part3\" class=\"form-group\">\n        <div class=\"panel panel-primary\">\n          <div class=\"panel-heading\">\n            <ion-card>\n            <h3 class=\"panel-title\" style=\"text-align: center;\">Commentaires</h3>\n            </ion-card>\n          </div>\n        <div class=\"form-group\">\n          <textarea id=\"message\" class=\"form-control\" formControlName=\"commentaire_agent\" placeholder=\"Message\"></textarea>\n          <label for=\"commentaire_agent\" class=\"lab\">Commentaire de l'agent</label>\n\n        </div>\n\n        <div class=\"form-group\">\n          <textarea id=\"message\" class=\"form-control\" formControlName=\"commentaire_client\" placeholder=\"Message\"></textarea>\n          <label for=\"commentaire_client\" class=\"lab\">Commentaire du client</label>\n        </div>\n\n          <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"...\">\n            <label for='step3' id=\"back-step3\" class=\"back\">\n              <div class=\"btn btn-default  btn-lg\" style=\" background-color:#e28008; color: white;top: 3px; \">\n                <i class=\"fa fa-arrow-circle-left\"></i>              </div>\n            </label>\n            <label class=\"continue\">              \n              <div class=\"form-group\" style=\"left: 160px; \">\n              <ion-button type=\"submit\" [disabled]=\"loading\" class=\"ajout\" style=\"height: 43px;\" >Valider</ion-button>\n            </div>\n            </label>\n          </div>\n        </div>\n      </div>\n    </form>\n  </ion-list>\n</div>\n  </div>\n  <div class=\"form-container\">\n  <div [(ngSwitch)]=\"relationship\"> \n    <ion-list *ngSwitchCase=\"'garant'\">\n      <ion-card >\n        <ion-card-content style=\"text-align: center;\">\n          <p style=\"font-size: 20px;\">\n           Ajouter garant         \n          </p>\n        </ion-card-content>\n    </ion-card>\n      <form [formGroup]=\"garantForm\" (ngSubmit)=\"ajoutgarant()\" role=\"form\">\n    \n      <div class=\"form-group\">\n  \n        <input aria-describedby=\"sizing-addon1\" type=\"text\" placeholder=\"Prénom\" formControlName=\"prenom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.prenom.errors }\">\n        <label for=\"prenom\" class=\"lab\">Prénom</label>   \n             <div *ngIf=\"submitted && g.prenom.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"g.prenom.errors.required\">veuillez entrer le prénom du garant</div>\n            <div *ngIf=\"g.prenom.errors.pattern\">entrez un prénom valide</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n  \n      <input aria-describedby=\"sizing-addon1\" id=\"nom\" type=\"text\" placeholder=\"Nom\" formControlName=\"nom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.nom.errors }\">\n      <label for=\"nom\" class=\"lab\">Nom</label>\n            <div *ngIf=\"submitted && g.nom.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"g.nom.errors.required\">veuillez entrer le nom du garant</div>\n          <div *ngIf=\"g.nom.errors.pattern\">entrez un nom valide</div>\n      </div>\n  </div>\n  <div class=\"form-group\">\n   \n    <input aria-describedby=\"sizing-addon1\" id=\"telephone\" type=\"tel\" placeholder=\"Telephone \" formControlName=\"telephone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.telephone.errors }\">\n    <label for=\"telephone\" class=\"lab\">Telephone </label>\n        <div *ngIf=\"submitted && g.telephone.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"g.telephone.errors.required\">veuillez entrer le numéro de téléphone du garant</div>\n        <div *ngIf=\"g.telephone.errors.pattern\"> entrer un nom valide</div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n   \n  \n    <input aria-describedby=\"sizing-addon1\" id=\"client\" type=\"tel\" placeholder=\"Téléphone client\" formControlName=\"client\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.client.errors }\">\n    <label for=\"client\" class=\"lab\">Téléphone client</label>\n        <div *ngIf=\"submitted && g.client.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"g.client.errors.required\">veuillez saisir le téléphone du client</div>\n        <div *ngIf=\"g.client.errors.pattern\">saisissez un numéro valide</div>\n    </div>\n  </div> \n\n  <div class=\"form-group\" style=\"left:210px;\">\n    <ion-button type=\"submit\" [disabled]=\"loading\" class=\"ajout\" >Valider</ion-button>\n  </div>\n      </form>\n    </ion-list>\n    </div>\n  </div>\n</ion-content> \n"

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

module.exports = "body {\n  text-align: center;\n  background: url(http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/upfeathers.png);\n}\n\nion-content {\n  height: 100%;\n  width: 100%;\n}\n\n.form-container {\n  width: 100%;\n  max-width: 320px;\n  margin: 0 auto;\n}\n\n.form-container input[type=text], .form-container input[type=email], .form-container input[type=tel], .form-container input[type=number], .form-container input[type=date], .form-container textarea, .form-container select {\n  width: 100%;\n  margin: 10px auto;\n  border-radius: 10px;\n  border: solid 2px grey;\n  border-bottom: solid 1px;\n  box-shadow: 0 0 1px 1px white;\n}\n\n.form-container textarea {\n  min-height: 100px;\n  top: -10px;\n}\n\n.form-container .panel {\n  background: white;\n}\n\n.form-container .panel .panel-heading {\n  margin-bottom: 20px;\n}\n\n.form-container .panel .panel-title {\n  font-size: 20px;\n}\n\n.form-container .btn-group {\n  width: 30%;\n  margin: 0 auto 10px auto;\n  top: -60px;\n}\n\n.form-container .back {\n  float: left;\n  padding-top: 50px;\n  color: white;\n}\n\n.form-container .continue {\n  padding-top: 50px;\n  float: right;\n}\n\n/* Multi-Part CSS */\n\ninput[type=checkbox] {\n  position: absolute;\n  /* Position the checkbox in upper left corner */\n  opacity: 0;\n}\n\n/* Styling Parts */\n\n#part1,\n#part2,\n#part3 {\n  z-index: 2;\n  display: block;\n  height: auto;\n  opacity: 1;\n  -webkit-transition: opacity 1s ease-in-out;\n  transition: opacity 1s ease-in-out;\n}\n\n/* Hidden Parts */\n\n#part2,\n#part3 {\n  opacity: 0;\n  height: 0;\n}\n\n/* Show Step 2 & Hide Step 1 */\n\n#step2:checked ~ #part2 {\n  opacity: 1;\n  height: auto;\n}\n\n#step2:checked ~ #part1 {\n  opacity: 0;\n  height: 0;\n  display: none;\n}\n\n/* Show Step 3  & Hide Step 2 */\n\n#step3:checked ~ #part3 {\n  opacity: 1;\n  height: auto;\n}\n\n#step3:checked ~ #part2 {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\nion-card {\n  background: #e28008;\n  color: white;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  ion-card {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n  }\n}\n\nion-row {\n  width: 100%;\n}\n\nion-col {\n  width: 50%;\n}\n\n/* Styles go here */\n\ndiv {\n  position: relative;\n}\n\n.lab {\n  position: absolute;\n  left: 20px;\n  top: 9px;\n  color: black;\n  font-size: 7px;\n  opacity: 0;\n  -webkit-transition: top 0.4s, opacity 0.2s;\n  transition: top 0.4s, opacity 0.2s;\n  font-family: helvetica;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\ninput:valid + .lab, textarea:valid + .lab {\n  opacity: 1;\n  top: -16px;\n  color: #e28008;\n}\n\ninput:focus + .lab, textarea:focus + .lab {\n  top: -18px;\n  left: 10px;\n  color: #e28008;\n  font-size: 10px;\n  opacity: 0.5;\n  font-family: helvetica;\n}\n\n[placeholder]:focus::-webkit-input-placeholder, [placeholder]:focus::-webkit-textarea-placeholder {\n  color: black;\n}\n\n/*test*/\n\n.lab, input, textarea {\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  touch-action: manipulation;\n}\n\ninput {\n  border: 0;\n  font-family: inherit;\n  -webkit-appearance: none;\n  border-radius: 0;\n  padding: 0;\n  cursor: text;\n}\n\nion-input {\n  font-family: inherit;\n  -webkit-appearance: none;\n  border-radius: 0;\n  padding: 0;\n  cursor: text;\n}\n\ninput:focus, textarea:focus {\n  outline: 0;\n  border-bottom: 0.05em;\n}\n\n.lab {\n  text-transform: unset;\n  letter-spacing: 0.05em;\n}\n\ninput:placeholder-shown + .lab, textarea:placeholder-shown + .lab {\n  cursor: text;\n  max-width: 40.66%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-transform-origin: left bottom;\n          transform-origin: left bottom;\n  -webkit-transform: translate(0, 2.125rem) scale(1.5);\n          transform: translate(0, 2.125rem) scale(1.5);\n}\n\n::-webkit-input-placeholder, ::-webkit-textarea-placeholder {\n  opacity: 0;\n  -webkit-transition: inherit;\n  transition: inherit;\n}\n\ninput:focus::-webkit-input-placeholder, textarea:focus::-webkit-textarea-placeholder {\n  opacity: 1;\n}\n\ninput:not(:placeholder-shown) + .lab,\ninput:focus + .lab, textarea:not(:placeholder-shown) + .lab,\ntextarea:focus + .lab {\n  -webkit-transform: translate(0, 0) scale(1);\n          transform: translate(0, 0) scale(1);\n  cursor: pointer;\n}\n\nselect {\n  border-bottom: solid 1px #e28008;\n}\n\nbutton {\n  border: 2px solid;\n  color: white;\n  border-radius: none;\n  font-size: 10px;\n  background-color: #50A125;\n}\n\n.garant {\n  float: right;\n}\n\nion-card {\n  text-align: center;\n  color: white;\n  background-color: #e28008;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  ion-card {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxTZXluYWJvdSBOZGlheWVcXERvY3VtZW50c1xcdGVzdF9pb25pY1xcbWFua28tYXBwLWlvbmljL3NyY1xcYXBwXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtFQUNBLGdHQUFBO0FDQUo7O0FERUU7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0NOOztBRENFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7QUNFTjs7QURDSTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQ0NOOztBRENJO0VBQ0UsaUJBQUE7QUNDTjs7QURBTTtFQUNFLG1CQUFBO0FDRVI7O0FEQU07RUFDRSxlQUFBO0FDRVI7O0FEQ0k7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0FDQ047O0FERUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQU47O0FERUk7RUFDQyxpQkFBQTtFQUNBLFlBQUE7QUNBTDs7QURLRSxtQkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsK0NBQUE7RUFFQSxVQUFBO0FDSEo7O0FETUUsa0JBQUE7O0FBQ0E7OztFQUdFLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtFQUFBLGtDQUFBO0FDSEo7O0FETUUsaUJBQUE7O0FBQ0E7O0VBRUUsVUFBQTtFQUNBLFNBQUE7QUNISjs7QURPRSw4QkFBQTs7QUFDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDSko7O0FETUU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUNISjs7QURNRSwrQkFBQTs7QUFDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDSEo7O0FES0U7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNGSjs7QURJRTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBQ0ROOztBRElFO0VBQTZCO0lBQzNCLHdCQUFBO0lBQUEsZ0JBQUE7SUFDQSxNQUFBO0VDQUY7QUFDRjs7QURFRTtFQUNJLFdBQUE7QUNBTjs7QURFRTtFQUNJLFVBQUE7QUNDTjs7QURNQyxtQkFBQTs7QUFFRDtFQUNDLGtCQUFBO0FDSkQ7O0FEU0U7RUFDRCxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtBQ05EOztBRFFFO0VBQ0MsVUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDTEg7O0FET0U7RUFFRCxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDTEQ7O0FEU0U7RUFDRCxZQUFBO0FDTkQ7O0FEUUUsT0FBQTs7QUFFQTtFQUNDLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSwwQkFBQTtBQ05IOztBRFNFO0VBRUMsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDUEg7O0FEU0U7RUFFQyxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1BIOztBRFNFO0VBQ0MsVUFBQTtFQUNBLHFCQUFBO0FDTkg7O0FEUUU7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0FDTEg7O0FEUUU7RUFDQyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0Esb0RBQUE7VUFBQSw0Q0FBQTtBQ0xIOztBRFFFO0VBQ0MsVUFBQTtFQUNBLDJCQUFBO0VBQUEsbUJBQUE7QUNMSDs7QURPRTtFQUNDLFVBQUE7QUNKSDs7QURNRTs7O0VBR0MsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLGVBQUE7QUNISDs7QURLRTtFQUVJLGdDQUFBO0FDSE47O0FETUU7RUFFRSxpQkFBQTtFQUNELFlBQUE7RUFDQSxtQkFBQTtFQUNDLGVBQUE7RUFDQSx5QkFBQTtBQ0pKOztBRE9FO0VBQ0UsWUFBQTtBQ0pKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNISjs7QURLRTtFQUE2QjtJQUMzQix3QkFBQTtJQUFBLGdCQUFBO0lBQ0EsTUFBQTtFQ0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgICAgICBcclxuYm9keSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL3N1YnRsZXBhdHRlcm5zMjAxNS5zdWJ0bGVwYXR0ZXJucy5uZXRkbmEtY2RuLmNvbS9wYXR0ZXJucy91cGZlYXRoZXJzLnBuZyk7XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIFxyXG4gICAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dGVsXSwgaW5wdXRbdHlwZT1udW1iZXJdLGlucHV0W3R5cGU9ZGF0ZV0sIHRleHRhcmVhLHNlbGVjdCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYm9yZGVyOiBzb2xpZCAycHggZ3JleTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IDtcclxuICAgICAgYm94LXNoYWRvdzogMCAgMCAxcHggMXB4IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICB0b3A6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgLnBhbmVsIHtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIC5wYW5lbC1oZWFkaW5nIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5wYW5lbC10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4tZ3JvdXAge1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XHJcbiAgICAgIHRvcDogLTYwcHg7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLmJhY2sge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5jb250aW51ZSB7XHJcbiAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBNdWx0aS1QYXJ0IENTUyAqL1xyXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIFBvc2l0aW9uIHRoZSBjaGVja2JveCBpbiB1cHBlciBsZWZ0IGNvcm5lciAqL1xyXG4gICAgXHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsaW5nIFBhcnRzICovXHJcbiAgI3BhcnQxLFxyXG4gICNwYXJ0MixcclxuICAjcGFydDMge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEhpZGRlbiBQYXJ0cyAqL1xyXG4gICNwYXJ0MixcclxuICAjcGFydDMge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNob3cgU3RlcCAyICYgSGlkZSBTdGVwIDEgKi9cclxuICAjc3RlcDI6Y2hlY2tlZCB+ICNwYXJ0MiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAjc3RlcDI6Y2hlY2tlZCB+ICNwYXJ0MSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogU2hvdyBTdGVwIDMgICYgSGlkZSBTdGVwIDIgKi9cclxuICAjc3RlcDM6Y2hlY2tlZCB+ICNwYXJ0MyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAjc3RlcDM6Y2hlY2tlZCB+ICNwYXJ0MiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIGlvbi1jYXJke1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZTI4MDA4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIFxyXG4gIH1cclxuICBAc3VwcG9ydHMocG9zaXRpb246IHN0aWNreSl7IGlvbi1jYXJke1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIH1cclxuICAgIH1cclxuICBpb24tcm93e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgaW9uLWNvbHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAuZm9ybS1ncm91cHtcclxuICAgIC8vIGhlaWdodDogMTBweDtcclxuICAgXHJcbiB9XHJcbiAgXHJcbiAvKiBTdHlsZXMgZ28gaGVyZSAqL1xyXG5cclxuZGl2e1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuICAubGFie1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAyMHB4O1xyXG5cdHRvcDogOXB4O1xyXG5cdGNvbG9yOmJsYWNrO1xyXG5cdGZvbnQtc2l6ZTogN3B4O1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0dHJhbnNpdGlvbjogdG9wIDAuNHMsIG9wYWNpdHkgMC4ycztcclxuXHRmb250LWZhbWlseTogaGVsdmV0aWNhO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuXHR0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBpbnB1dDp2YWxpZCsgLmxhYix0ZXh0YXJlYTp2YWxpZCArIC5sYWJ7XHJcblx0ICBvcGFjaXR5OiAxO1xyXG5cdCAgdG9wOiAtMTZweDtcclxuXHQgIGNvbG9yOiAjZTI4MDA4O1xyXG4gIH1cclxuICBpbnB1dDpmb2N1cyArIC5sYWIsIHRleHRhcmVhOmZvY3VzICsgLmxhYntcclxuXHRcclxuXHR0b3A6IC0xOHB4O1xyXG5cdGxlZnQ6IDEwcHg7XHJcblx0Y29sb3I6ICNlMjgwMDg7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdG9wYWNpdHk6IDAuNTtcclxuXHRmb250LWZhbWlseTogaGVsdmV0aWNhO1xyXG5cdFxyXG4gIH1cclxuICBcclxuICBbcGxhY2Vob2xkZXJdOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLCBbcGxhY2Vob2xkZXJdOmZvY3VzOjotd2Via2l0LXRleHRhcmVhLXBsYWNlaG9sZGVye1xyXG5cdGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLyp0ZXN0Ki9cclxuIFxyXG4gIC5sYWIsaW5wdXQsdGV4dGFyZWF7XHJcblx0ICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuXHQgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xyXG5cdCBcclxuICB9XHJcbiAgaW5wdXR7XHJcblx0IFxyXG5cdCAgYm9yZGVyOiAwO1xyXG5cdCAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcblx0ICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0ICBib3JkZXItcmFkaXVzOiAwO1xyXG5cdCAgcGFkZGluZzogMDtcclxuXHQgIGN1cnNvcjogdGV4dDtcclxuICB9XHJcbiAgaW9uLWlucHV0e1xyXG4gIFxyXG5cdCAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcblx0ICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0ICBib3JkZXItcmFkaXVzOiAwO1xyXG5cdCAgcGFkZGluZzogMDtcclxuXHQgIGN1cnNvcjogdGV4dDtcclxuICB9XHJcbiAgaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3Vze1xyXG5cdCAgb3V0bGluZTogMDtcclxuXHQgIGJvcmRlci1ib3R0b206IDAuMDVlbTtcclxuICB9XHJcbiAgLmxhYiB7XHJcblx0ICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XHJcblx0ICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG5cdFxyXG4gIH1cclxuICBpbnB1dDpwbGFjZWhvbGRlci1zaG93biArLmxhYiwgdGV4dGFyZWE6cGxhY2Vob2xkZXItc2hvd24gKyAubGFie1xyXG5cdCAgY3Vyc29yOiB0ZXh0O1xyXG5cdCAgbWF4LXdpZHRoOiA0MC42NiU7XHJcblx0ICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdCAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHQgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdCAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XHJcblx0ICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAyLjEyNXJlbSlcclxuXHQgIHNjYWxlKDEuNSk7XHJcbiAgfVxyXG4gIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgOjotd2Via2l0LXRleHRhcmVhLXBsYWNlaG9sZGVye1xyXG5cdCAgb3BhY2l0eTogMDtcclxuXHQgIHRyYW5zaXRpb246IGluaGVyaXQ7XHJcbiAgfVxyXG4gIGlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTpmb2N1czo6LXdlYmtpdC10ZXh0YXJlYS1wbGFjZWhvbGRlcntcclxuXHQgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pKy5sYWIsXHJcbiAgaW5wdXQ6Zm9jdXMrIC5sYWIsdGV4dGFyZWE6bm90KDpwbGFjZWhvbGRlci1zaG93bikrLmxhYixcclxuICB0ZXh0YXJlYTpmb2N1cysgLmxhYntcclxuXHQgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAgLCAwKSBzY2FsZSgxKTtcclxuXHQgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgc2VsZWN0e1xyXG4gICAgICBcclxuICAgICAgYm9yZGVyLWJvdHRvbTpzb2xpZCAxcHggI2UyODAwOCA7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbntcclxuICAgXHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIDtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICBib3JkZXItcmFkaXVzOm5vbmU7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBBMTI1O1xyXG4gIFxyXG4gIH1cclxuICAuZ2FyYW50e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2UyODAwOCA7XHJcbiAgfVxyXG4gIEBzdXBwb3J0cyhwb3NpdGlvbjogc3RpY2t5KXsgaW9uLWNhcmR7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuXHJcbiIsImJvZHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybChodHRwOi8vc3VidGxlcGF0dGVybnMyMDE1LnN1YnRsZXBhdHRlcm5zLm5ldGRuYS1jZG4uY29tL3BhdHRlcm5zL3VwZmVhdGhlcnMucG5nKTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSwgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9ZW1haWxdLCAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZWxdLCAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1udW1iZXJdLCAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1kYXRlXSwgLmZvcm0tY29udGFpbmVyIHRleHRhcmVhLCAuZm9ybS1jb250YWluZXIgc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCBncmV5O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHg7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggMXB4IHdoaXRlO1xufVxuLmZvcm0tY29udGFpbmVyIHRleHRhcmVhIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHRvcDogLTEwcHg7XG59XG4uZm9ybS1jb250YWluZXIgLnBhbmVsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uZm9ybS1jb250YWluZXIgLnBhbmVsIC5wYW5lbC1oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5mb3JtLWNvbnRhaW5lciAucGFuZWwgLnBhbmVsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLmZvcm0tY29udGFpbmVyIC5idG4tZ3JvdXAge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG4gIHRvcDogLTYwcHg7XG59XG4uZm9ybS1jb250YWluZXIgLmJhY2sge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5mb3JtLWNvbnRhaW5lciAuY29udGludWUge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4vKiBNdWx0aS1QYXJ0IENTUyAqL1xuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIFBvc2l0aW9uIHRoZSBjaGVja2JveCBpbiB1cHBlciBsZWZ0IGNvcm5lciAqL1xuICBvcGFjaXR5OiAwO1xufVxuXG4vKiBTdHlsaW5nIFBhcnRzICovXG4jcGFydDEsXG4jcGFydDIsXG4jcGFydDMge1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBhdXRvO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xufVxuXG4vKiBIaWRkZW4gUGFydHMgKi9cbiNwYXJ0MixcbiNwYXJ0MyB7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogU2hvdyBTdGVwIDIgJiBIaWRlIFN0ZXAgMSAqL1xuI3N0ZXAyOmNoZWNrZWQgfiAjcGFydDIge1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbiNzdGVwMjpjaGVja2VkIH4gI3BhcnQxIHtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTaG93IFN0ZXAgMyAgJiBIaWRlIFN0ZXAgMiAqL1xuI3N0ZXAzOmNoZWNrZWQgfiAjcGFydDMge1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbiNzdGVwMzpjaGVja2VkIH4gI3BhcnQyIHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZTI4MDA4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBzdXBwb3J0cyAocG9zaXRpb246IHN0aWNreSkge1xuICBpb24tY2FyZCB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gIH1cbn1cbmlvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNvbCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8qIFN0eWxlcyBnbyBoZXJlICovXG5kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sYWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwcHg7XG4gIHRvcDogOXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogN3B4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB0b3AgMC40cywgb3BhY2l0eSAwLjJzO1xuICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmlucHV0OnZhbGlkICsgLmxhYiwgdGV4dGFyZWE6dmFsaWQgKyAubGFiIHtcbiAgb3BhY2l0eTogMTtcbiAgdG9wOiAtMTZweDtcbiAgY29sb3I6ICNlMjgwMDg7XG59XG5cbmlucHV0OmZvY3VzICsgLmxhYiwgdGV4dGFyZWE6Zm9jdXMgKyAubGFiIHtcbiAgdG9wOiAtMThweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6ICNlMjgwMDg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgb3BhY2l0eTogMC41O1xuICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xufVxuXG5bcGxhY2Vob2xkZXJdOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLCBbcGxhY2Vob2xkZXJdOmZvY3VzOjotd2Via2l0LXRleHRhcmVhLXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKnRlc3QqL1xuLmxhYiwgaW5wdXQsIHRleHRhcmVhIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiB0ZXh0O1xufVxuXG5pb24taW5wdXQge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbmlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlci1ib3R0b206IDAuMDVlbTtcbn1cblxuLmxhYiB7XG4gIHRleHQtdHJhbnNmb3JtOiB1bnNldDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbn1cblxuaW5wdXQ6cGxhY2Vob2xkZXItc2hvd24gKyAubGFiLCB0ZXh0YXJlYTpwbGFjZWhvbGRlci1zaG93biArIC5sYWIge1xuICBjdXJzb3I6IHRleHQ7XG4gIG1heC13aWR0aDogNDAuNjYlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDIuMTI1cmVtKSBzY2FsZSgxLjUpO1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIDo6LXdlYmtpdC10ZXh0YXJlYS1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGluaGVyaXQ7XG59XG5cbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTpmb2N1czo6LXdlYmtpdC10ZXh0YXJlYS1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pICsgLmxhYixcbmlucHV0OmZvY3VzICsgLmxhYiwgdGV4dGFyZWE6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiLFxudGV4dGFyZWE6Zm9jdXMgKyAubGFiIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuc2VsZWN0IHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlMjgwMDg7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwQTEyNTtcbn1cblxuLmdhcmFudCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyODAwODtcbn1cblxuQHN1cHBvcnRzIChwb3NpdGlvbjogc3RpY2t5KSB7XG4gIGlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgfVxufSJdfQ== */"

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
            latitude: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            longitude: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
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
            this.registerForm.value.latitude = location.coords.latitude;
            this.registerForm.value.longitude = location.coords.longitude;
        });
        console.log(this.registerForm.value);
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
                    this.registerForm.value.imgDevanture = this.imgDevanture;
                }
                else {
                    this.imageActivite = "data:image/jpeg;base64," + imageData;
                    this.registerForm.get('photo_activite').setValue(imageData);
                    this.registerForm.value.imageActivite = this.imageActivite;
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