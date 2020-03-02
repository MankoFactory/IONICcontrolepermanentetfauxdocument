(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-buttons slot=\"end\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Control permanent</ion-title>\n  </ion-toolbar>\n \n</ion-header>\n\n<ion-content>\n  <!-- <ion-card id=\"carte\">\n     <img src=\"/assets/img/LOGO-VERT.png\" alt=\"\" /> -->\n   <!-- <ion-card-header>\n      <ion-card-subtitle>Bienvenue à l'apllication controle permanent.</ion-card-subtitle>\n     <ion-card-title>  Et détection de faux documents\n       \n       </ion-card-title> \n   </ion-card-header> \n   <ion-card-content style=\"text-align: center;\">\n    <p style=\"font-size: 25px;\">\n     Enregistrement d'un client         \n    </p>\n  </ion-card-content>\n</ion-card>\n    <ion-card>\n  <div class=\"ion-padding\" >\n\n  </div>\n</ion-card>\n    \n           \n           \n              <ion-input > </ion-input>\n            \n          \n    \n\n\n\n\n\n       \n       \n     \n\n <div [(ngSwitch)]=\"relationship\"> \n  <ion-list *ngSwitchCase=\"'garant'\">\n    <form [formGroup]=\"garantForm\" (ngSubmit)=\"ajoutgarant()\" id=\"form\">\n  \n    <div class=\"form-group\">\n      <span class=\"fa fa-user icon\"></span>\n\n      <ion-input type=\"text\" placeholder=\"Prenom\" formControlName=\"prenom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.prenom.errors }\" > </ion-input>\n      <div *ngIf=\"submitted && g.prenom.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"g.prenom.errors.required\">veuillez entrer le prénom du garant</div>\n          <div *ngIf=\"g.prenom.errors.pattern\">entrez un prénom valide</div>\n      </div>\n  </div>\n  <div class=\"form-group\">\n    <span class=\"fa fa-user icon\"></span>\n\n    <ion-input type=\"text\" placeholder=\"Nom\" formControlName=\"nom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.nom.errors }\" > </ion-input>\n    <div *ngIf=\"submitted && g.nom.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"g.nom.errors.required\">veuillez entrer le nom du garant</div>\n        <div *ngIf=\"g.nom.errors.pattern\">entrez un nom valide</div>\n    </div>\n</div>\n<div class=\"form-group\">\n  <span class=\"fa fa-phone icon\"></span>\n \n  <ion-input type=\"number\" placeholder=\"Telephone\" formControlName=\"telephone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.telephone.errors }\" > </ion-input>\n  <div *ngIf=\"submitted && g.telephone.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"g.telephone.errors.required\">veuillez entrer le numéro de téléphone du garant</div>\n      <div *ngIf=\"g.telephone.errors.pattern\"> entrer un nom valide</div>\n  </div>\n</div>\n<div class=\"form-group\">\n \n\n  <ion-input type=\"number\" placeholder=\"Client\" formControlName=\"client\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.client.errors }\" > </ion-input>\n  <div *ngIf=\"submitted && g.client.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"g.client.errors.required\">veuillez saisir le téléphone du client</div>\n      <div *ngIf=\"g.client.errors.pattern\">saisissez un numéro valide</div>\n  </div>\n</div> <div class=\"form-group\">\n              \n  <input type=\"text\" placeholder=\"commentaire\"  />\n  \n</div> \n<div class=\"form-group\">\n  <button [disabled]=\"loading\" class=\"btn btn-block\" >Ajouter</button>\n</div>\n    </form>\n  </ion-list>\n  </div> -->\n\n  <ion-segment  [(ngModel)]=\"relationship\" >\n    <ion-segment-button id=\"choix1\"  value=\"client\">\n      Client\n  \n    </ion-segment-button>\n    <ion-segment-button id=\"choix2\"  value=\"garant\">\n      Garant\n    </ion-segment-button>\n  </ion-segment>\n  <div class=\"form-container\">\n    <div [(ngSwitch)]=\"relationship\"> \n      <ion-list *ngSwitchCase=\"'client'\" id=\"form\" class=\"ion-list\"> \n        \n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"ajoutUser()\" role=\"form\">\n      <input id='step2' type='checkbox'>\n      <input id='step3' type='checkbox'>\n  \n      <div id=\"part1\" class=\"form-group\">\n        <div class=\"panel panel-primary\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\" style=\"text-align: center;\">Informations Personnelles</h3>\n          </div>\n<ion-row>\n <ion-col>\n          <div class=\"form-group\">\n          <input aria-describedby=\"sizing-addon1\" id=\"telephone\" type=\"tel\" placeholder=\"Telephone 1\" formControlName=\"telephone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.telephone.errors }\">\n          <label for=\"telephone\" class=\"lab\">Telephone 1</label>\n          <div *ngIf=\"submitted && f.telephone.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.telephone.errors.required\">Veuillez saisir le numéro de téléphone</div>\n            <div *ngIf=\"f.telephone.errors.pattern\">Entrez un numéro de téléphone valide</div>\n        </div>\n    </div>\n   </ion-col>\n    <ion-col>\n    <div class=\"form-group\">\n      <input aria-describedby=\"sizing-addon1\" type=\"tel\" id=\"telephone1\" placeholder=\"Telephone 2\" formControlName=\"telephone1\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.telephone1.errors }\">\n      <label for=\"telephone1\" class=\"lab\">Telephone 2</label>\n      <div *ngIf=\"submitted && f.telephone1.errors\" class=\"invalid-feedback\">\n           <div *ngIf=\"f.telephone1.errors.required\">Veuillez saisir le numéro de téléphone</div> \n          <div *ngIf=\"f.telephone1.errors.pattern\">Entrez un numéro de téléphone valide</div> \n      </div>\n    </div>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n    <div class=\"form-group\">\n      <input aria-describedby=\"sizing-addon1\" type=\"text\" placeholder=\"Prénom\" formControlName=\"prenom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.prenom.errors }\">\n      <label for=\"prenom\" class=\"lab\">Prénom</label>\n      <div *ngIf=\"submitted && f.prenom.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.prenom.errors.required\">Veuillez saisir le prénom</div>\n          <div *ngIf=\"f.prenom.errors.pattern\">Entrez un prénom valide</div>\n      </div>\n  </div>\n </ion-col>\n <ion-col>\n  <div class=\"form-group\">\n    <input aria-describedby=\"sizing-addon1\" id=\"nom\" type=\"text\" placeholder=\"Nom\" formControlName=\"nom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nom.errors }\">\n    <label for=\"nom\" class=\"lab\">Nom</label>\n    <div *ngIf=\"submitted && f.nom.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.nom.errors.required\">Veuillez saisir le nom</div>\n        <div *ngIf=\"f.nom.errors.pattern\">Entrez un nom valide</div>\n    </div>\n</div>\n</ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col>\n<div class=\"form-group\">\n  <input aria-describedby=\"sizing-addon1\" id=\"date\" type=\"date\" placeholder=\"Date de naissance\" formControlName=\"date_naissance\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.date_naissance.errors }\">\n  <label for=\"date\" class=\"lab\">Date de naissance</label>\n  <div *ngIf=\"submitted && f.date_naissance.errors\" class=\"invalid-feedback\">\n    <div *ngIf=\"f.date_naissance.errors.required\">Veuillez saisir la date de naissance</div>\n     <div *ngIf=\"f.nom.errors.minlength\">Password must be at least 6 characters</div> \n</div>\n\n</div>\n</ion-col>\n<ion-col>\n<div class=\"form-group\">\n  <input aria-describedby=\"sizing-addon1\" id=\"lieu\" type=\"text\" placeholder=\"Lieu de naissance\" formControlName=\"lieu_naissance\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lieu_naissance.errors }\">\n  <label for=\"lieu\" class=\"lab\">Lieu de naissance</label>\n  <div *ngIf=\"submitted && f.lieu_naissance.errors\" class=\"invalid-feedback\">\n  <div *ngIf=\"f.lieu_naissance.errors.required\">Veuillez saisir le lieu de naissance</div>\n  <div *ngIf=\"f.lieu_naissance.errors.pattern\">Entrez un lieu valide</div>\n</div>\n</div>\n</ion-col>\n</ion-row>\n<ion-row>\n <ion-col>\n<div class=\"form-group\">\n  <input aria-describedby=\"sizing-addon1\" id=\"cni\" type=\"number\" placeholder=\"CNI\" formControlName=\"num_cni\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.num_cni.errors }\">\n  <label for=\"cni\" class=\"lab\">CNI</label>\n  <div *ngIf=\"submitted && f.num_cni.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.num_cni.errors.required\">Veuillez saisir le cni</div>\n      <div *ngIf=\"f.num_cni.errors.pattern\">Entrez un cni valide</div>\n  </div>\n</div>\n</ion-col>\n<ion-col>\n<div class=\"form-group\">\n  <input aria-describedby=\"sizing-addon1\" id=\"activite\" type=\"text\" placeholder=\"activite\" formControlName=\"activite\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.activite.errors }\">\n  <label for=\"activite\" class=\"lab\">Activité</label>\n  <div *ngIf=\"submitted && f.activite.errors\" class=\"invalid-feedback\">\n  <div *ngIf=\"f.activite.errors.required\">Veuillez saisir une adresse</div>\n   <div *ngIf=\"f.activite.errors.pattern\">Entrez une adresse valide</div>\n</div>\n</div>\n</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col>\n    <div class=\"form-group\">\n      <label for=\"sexe\" class=\"lab\">Adresse</label>\n      <select placeholder=\"Genre\" id=\"sexe\" class=\"form-control\" formControlName=\"sexe\"name=\"sources\" id=\"sources\" >genre\n        \n        <option selected>homme</option>\n        <option value=\"femme\">femme</option>\n      </select>\n    </div>\n  </ion-col>\n  <ion-col>\n    <div class=\"form-group\">\n      <input aria-describedby=\"sizing-addon1\" id=\"adresse\" type=\"text\" placeholder=\"Adresse\" formControlName=\"adresse_client\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.adresse_client.errors }\">\n      <label for=\"adresse\" class=\"lab\">Adresse</label>\n      <div *ngIf=\"submitted && f.adresse_client.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.adresse_client.errors.required\">Veuillez saisir une adresse</div>\n       <div *ngIf=\"f.adresse_client.errors.pattern\">Entrez une adresse valide</div>\n    </div>\n    </div>\n  </ion-col>\n</ion-row>\n          <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"...\">\n            <label for='step2' id=\"continue-step2\" class=\"continue\">\n              <div class=\"btn btn-default btn-success btn-lg\">Continue</div>\n            </label>\n          </div>\n        </div>\n      </div>\n  \n      <div id=\"part2\" class=\"form-group\">\n        <div class=\"panel panel-primary\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Part 2</h3>\n          </div>\n         \n          <div class=\"form-group\">\n           <ion-button (click)=\"addPhoto('library', 1)\" color=\"primary\" style=\"width: 100%;\" expand=\"block\" class=\"form-control\">\n             <ion-icon name=\"image\" slot=\"start\"></ion-icon>\n             Ouvrir la bibliothèque\n           </ion-button>\n           <ion-button (click)=\"addPhoto('camera', 1)\" color=\"danger\"  expand=\"round\" class=\"form-control\">\n             <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n             Prendre une photo\n           </ion-button>\n           <div class=\"flex\">\n             <div class=\"img-box\">\n               <img [src]=\"imgDevanture\">\n             </div>\n           </div>\n          \n           <div class=\"form-group\">\n           <ion-button (click)=\"addPhoto('library', 2)\" color=\"primary\" shape=\"round\"  class=\"form-control\">\n             <ion-icon name=\"image\" slot=\"start\"></ion-icon>\n             Ouvrir la bibliothèque\n           </ion-button>\n         \n           <ion-button (click)=\"addPhoto('camera', 2)\" color=\"danger\" shape=\"round\"  class=\"form-control\">\n             <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n             Prendre une photo\n           </ion-button>\n           <div class=\"flex\">\n             <div class=\"img-box\">\n               <img [src]=\"imageActivite\">\n             </div>\n           </div>\n         </div>\n       \n         </div>\n          <div class=\"form-group\">\n            <input type=\"text\" placeholder=\"Agence\" formControlName=\"agence\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.agence.errors }\" >\n            <label for=\"agence\" class=\"lab\">Agence</label>\n            <div *ngIf=\"submitted && f.agence.errors \" class=\"invalid-feedback\">\n                <div *ngIf=\"f.agence.errors.required\">Veuillez saisir une agence</div>\n                <div *ngIf=\"f.agence.errors.pattern\">Entrez une agence valide</div>  \n            </div>\n          </div> \n          <!-- <input type=\"number\" id=\"zip\" class=\"form-control\" placeholder=\"Zip Code\">\n          <input type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Email\">\n          <input type=\"number\" id=\"phone\" class=\"form-control\" placeholder=\"Phone\">\n          <input type=\"number\" id=\"zip\" class=\"form-control\" placeholder=\"Zip Code\">  -->\n          <div class=\"btn-group btn-group-lg btn-group-justified mt-5\" role=\"group\" aria-label=\"...\">\n  \n            <label for='step2' id=\"back-step2\" class=\"back\">\n              <div class=\"btn btn-default btn-primary btn-lg \" role=\"button\">Back</div>\n            </label>\n  \n  \n            <label for='step3' id=\"continue-step3\" class=\"continue\">\n              <div class=\"btn btn-default btn-success btn-lg\" role=\"button\">Continue</div>\n            </label>\n  \n          </div>\n        </div>\n      </div>\n  \n      <div id=\"part3\" class=\"form-group\">\n        <div class=\"panel panel-primary\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Part 3</h3>\n          </div>\n        \n          <textarea id=\"message\" class=\"form-control\" placeholder=\"Message\"></textarea>\n          <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"...\">\n            <label for='step3' id=\"back-step3\" class=\"back\">\n              <div class=\"btn btn-default btn-primary btn-lg\">Back</div>\n            </label>\n            <label class=\"continue\">              \n              <div class=\"form-group\">\n              <button type=\"submit\" [disabled]=\"loading\" class=\"btn btn-default btn-success btn-lg\">Submit</button>\n            </div>\n            </label>\n          </div>\n        </div>\n      </div>\n    </form>\n  </ion-list>\n</div>\n  </div>\n</ion-content> \n"

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

module.exports = "body {\n  text-align: center;\n  background: url(http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/upfeathers.png);\n}\n\nion-content {\n  height: 100%;\n}\n\n.form-container {\n  width: 100%;\n  max-width: 320px;\n  margin: 0 auto;\n}\n\n.form-container input[type=text], .form-container input[type=email], .form-container input[type=tel], .form-container input[type=number], .form-container input[type=date], .form-container textarea {\n  width: 90%;\n  margin: 10px auto;\n  border: solid 1px #e28008;\n  border-bottom: solid 1px #e28008;\n  box-shadow: 0 0 1px 1px white;\n}\n\n.form-container textarea {\n  min-height: 100px;\n  top: -10px;\n}\n\n.form-container .panel {\n  background: white;\n}\n\n.form-container .panel .panel-heading {\n  margin-bottom: 20px;\n}\n\n.form-container .btn-group {\n  width: 90%;\n  margin: 0 auto 10px auto;\n  height: 50px;\n}\n\n.form-container .back {\n  float: left;\n  padding-top: 50px;\n}\n\n.form-container .continue {\n  padding-top: 50px;\n}\n\n/* Multi-Part CSS */\n\ninput[type=checkbox] {\n  position: absolute;\n  /* Position the checkbox in upper left corner */\n  opacity: 0;\n}\n\n/* Styling Parts */\n\n#part1,\n#part2,\n#part3 {\n  z-index: 2;\n  display: block;\n  height: auto;\n  opacity: 1;\n  -webkit-transition: opacity 1s ease-in-out;\n  transition: opacity 1s ease-in-out;\n}\n\n/* Hidden Parts */\n\n#part2,\n#part3 {\n  opacity: 0;\n  height: 0;\n}\n\n/* Show Step 2 & Hide Step 1 */\n\n#step2:checked ~ #part2 {\n  opacity: 1;\n  height: auto;\n}\n\n#step2:checked ~ #part1 {\n  opacity: 0;\n  height: 0;\n  display: none;\n}\n\n/* Show Step 3  & Hide Step 2 */\n\n#step3:checked ~ #part3 {\n  opacity: 1;\n  height: auto;\n}\n\n#step3:checked ~ #part2 {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\nion-card {\n  background: orange;\n}\n\nion-row {\n  width: 100%;\n}\n\nion-col {\n  width: 50%;\n}\n\n/* Styles go here */\n\ndiv {\n  position: relative;\n}\n\n.lab {\n  position: absolute;\n  left: 20px;\n  top: 9px;\n  color: black;\n  font-size: 7px;\n  opacity: 0;\n  -webkit-transition: top 0.4s, opacity 0.2s;\n  transition: top 0.4s, opacity 0.2s;\n  font-family: helvetica;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\ninput:valid + .lab {\n  opacity: 1;\n  top: -16px;\n  color: #e28008;\n}\n\ninput:focus + .lab {\n  top: -18px;\n  left: 10px;\n  color: #e28008;\n  font-size: 10px;\n  opacity: 0.5;\n  font-family: helvetica;\n}\n\n[placeholder]:focus::-webkit-input-placeholder {\n  color: black;\n}\n\n/*test*/\n\n.lab, input {\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  touch-action: manipulation;\n}\n\ninput {\n  border: 0;\n  font-family: inherit;\n  -webkit-appearance: none;\n  border-radius: 0;\n  padding: 0;\n  cursor: text;\n}\n\ninput:focus {\n  outline: 0;\n  border-bottom: 0.05em;\n}\n\n.lab {\n  text-transform: unset;\n  letter-spacing: 0.05em;\n}\n\ninput:placeholder-shown + .lab {\n  cursor: text;\n  max-width: 40.66%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-transform-origin: left bottom;\n          transform-origin: left bottom;\n  -webkit-transform: translate(0, 2.125rem) scale(1.5);\n          transform: translate(0, 2.125rem) scale(1.5);\n}\n\n::-webkit-input-placeholder {\n  opacity: 0;\n  -webkit-transition: inherit;\n  transition: inherit;\n}\n\ninput:focus::-webkit-input-placeholder {\n  opacity: 1;\n}\n\ninput:not(:placeholder-shown) + .lab,\ninput:focus + .lab {\n  -webkit-transform: translate(0, 0) scale(1);\n          transform: translate(0, 0) scale(1);\n  cursor: pointer;\n}\n\nselect {\n  border-bottom: solid 1px #e28008;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxTZXluYWJvdSBOZGlheWVcXG1hbmtvLWFwcC1pb25pYy9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFJQTtFQUNJLGtCQUFBO0VBQ0EsZ0dBQUE7QUNwSUo7O0FEc0lFO0VBQ0ksWUFBQTtBQ25JTjs7QURxSUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDbElKOztBRG9JSTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUVBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ25JTjs7QUR3SUk7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUN0SU47O0FEd0lJO0VBQ0UsaUJBQUE7QUN0SU47O0FEdUlNO0VBQ0UsbUJBQUE7QUNySVI7O0FEd0lJO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQ3RJTjs7QUR5SUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUN2SU47O0FEeUlJO0VBRUMsaUJBQUE7QUN4SUw7O0FENklFLG1CQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSwrQ0FBQTtFQUVBLFVBQUE7QUMzSUo7O0FEOElFLGtCQUFBOztBQUNBOzs7RUFHRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7RUFBQSxrQ0FBQTtBQzNJSjs7QUQ4SUUsaUJBQUE7O0FBQ0E7O0VBRUUsVUFBQTtFQUNBLFNBQUE7QUMzSUo7O0FEK0lFLDhCQUFBOztBQUNBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUM1SUo7O0FEOElFO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDM0lKOztBRDhJRSwrQkFBQTs7QUFDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDM0lKOztBRDZJRTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQzFJSjs7QUQ0SUU7RUFDSSxrQkFBQTtBQ3pJTjs7QUQySUU7RUFDSSxXQUFBO0FDeElOOztBRDBJRTtFQUNJLFVBQUE7QUN2SU47O0FEOElDLG1CQUFBOztBQUVEO0VBQ0Msa0JBQUE7QUM1SUQ7O0FEaUpFO0VBQ0Qsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0VBQUEsa0NBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7QUM5SUQ7O0FEZ0pFO0VBQ0MsVUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDN0lIOztBRCtJRTtFQUVELFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUM3SUQ7O0FEaUpFO0VBQ0QsWUFBQTtBQzlJRDs7QURnSkUsT0FBQTs7QUFFQTtFQUNDLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSwwQkFBQTtBQzlJSDs7QURpSkU7RUFFQyxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUMvSUg7O0FEaUpFO0VBQ0MsVUFBQTtFQUNBLHFCQUFBO0FDOUlIOztBRGdKRTtFQUNDLHFCQUFBO0VBQ0Esc0JBQUE7QUM3SUg7O0FEZ0pFO0VBQ0MsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLG9EQUFBO1VBQUEsNENBQUE7QUM3SUg7O0FEZ0pFO0VBQ0MsVUFBQTtFQUNBLDJCQUFBO0VBQUEsbUJBQUE7QUM3SUg7O0FEK0lFO0VBQ0MsVUFBQTtBQzVJSDs7QUQ4SUU7O0VBRUMsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLGVBQUE7QUMzSUg7O0FENklFO0VBRUksZ0NBQUE7QUMzSU4iLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tdG9vbGJhcntcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbigkY29sb3I6ICMwMDAwMDApO1xyXG4vLyB9XHJcbi8vIGlvbi10aXRsZXtcclxuLy8gICAgIGNvbG9yOiAgd2hpdGU7XHJcbi8vIH1cclxuLy8gaW9uLWJ1dHRvbntcclxuLy8gICBjb2xvcjpyZ2IoMzQsIDE3MywgMzQpO1xyXG4vLyAgIGJhY2tncm91bmQ6IHJnYig2OSwgMTk2LCA2OSk7XHJcbi8vIH1cclxuLy8gaW9uLWljb257XHJcbi8vICAgICBjb2xvcjp3aGl0ZTtcclxuLy8gfVxyXG4vLyBoMntcclxuLy8gICBjb2xvcjojNTBBMTI1OyBcclxuLy8gfVxyXG4vLyAjY2FydGV7XHJcbi8vICAgcG9zaXRpb246IHN0aWNreTtcclxuLy8gLy8gICByaWdodDogMDtcclxuLy8gICBwb3NpdGlvbjotd2Via2l0LXN0aWNreTtcclxuIFxyXG4vLyB9XHJcbi8vICNyZWdpc3RlcntcclxuLy8gICBtYXJnaW4tdG9wOiA1MDBweDtcclxuLy8gfVxyXG4vLyAuZm9ybS1ncm91cCAuYnRue1xyXG4vLyBcdGNvbG9yOiAjZmZmO1xyXG4vLyBcdGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbi8vIFx0YmFja2dyb3VuZDogIzA0QjQwNDtcclxuLy8gXHRsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4vLyBcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcclxuLy8gfVxyXG4vLyAuZmxleCB7XHJcbi8vICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyB9XHJcbi8vIC5pbWctYm94IHtcclxuLy8gICBoZWlnaHQ6IDIwMHB4O1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vIH1cclxuLy8gaW1nIHtcclxuLy8gICBoZWlnaHQ6IDIwMHB4O1xyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG4vLyAvKmZvbnQgVmFyaWFibGVzKi8gXHJcbi8vICRyb2JvdG86ICdSb2JvdG8nLCBzYW5zLXNlcmlmOyBcclxuLy8gLypDb2xvciBWYXJpYWJsZXMqLyBcclxuLy8gJGJjOiAjNWNiODVjO1xyXG4vLyAkaGVkaW5nOiAjNDA1ODY3OyBcclxuLy8gJHBmb250OiAjNWY2NzcxO1xyXG5cclxuLy8gLy8gTWl4aW5zXHJcbi8vIEBtaXhpbiB0cmFuc2l0aW9uKCRwcm9wZXJ0eTogYWxsLCAkZHVyYXRpb246IDMwMG1zLCAkYW5pbWF0ZTogbGluZWFyLCAkZGVsYXk6MHMpe1xyXG4vLyAgICAgdHJhbnNpdGlvbjogJHByb3BlcnR5ICRkdXJhdGlvbiAkYW5pbWF0ZSAkZGVsYXk7IFxyXG4vLyB9ICBcclxuXHJcbi8vIC8vIFBsYWNlaG9sZGVyIE1peGluc1xyXG4vLyBAbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4vLyAgICAgJi5wbGFjZWhvbGRlciB7IEBjb250ZW50OyB9XHJcbi8vICAgICAmOi1tb3otcGxhY2Vob2xkZXIgeyBAY29udGVudDsgfVxyXG4vLyAgICAgJjo6LW1vei1wbGFjZWhvbGRlciB7IEBjb250ZW50OyB9XHJcbi8vICAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgQGNvbnRlbnQ7IH1cclxuLy8gfVxyXG5cclxuLy8gLy8gRm9udCBmYW1pbHkgbGlua1xyXG4vLyBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzozMDBpLDQwMCw0MDBpLDUwMCw3MDAsOTAwJyk7XHJcblxyXG5cclxuLy8gICAgICAgICAgICAgICAgIGg2e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgIGg0e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IDUwMCAxNXB4LzIzcHggJHJvYm90bztcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHBmb250O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgaW9uLWlucHV0e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBlbmQ7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDE2cHggMTJweCAwIDEycHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3NTc1NzU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgICAgICAgICAgI2Zvcm17XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogNXB4IDVweCAxMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAucGxhY2Vob2xkZXItaWNvbntcclxuLy8gICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBib3R0b206IDlweDtcclxuLy8gICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxN3B4O1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgIC5pY29ue1xyXG4vLyAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuLy8gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbi8vICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiBvcmFuZ2U7XHJcbi8vICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuYm9keSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL3N1YnRsZXBhdHRlcm5zMjAxNS5zdWJ0bGVwYXR0ZXJucy5uZXRkbmEtY2RuLmNvbS9wYXR0ZXJucy91cGZlYXRoZXJzLnBuZyk7XHJcbiAgfVxyXG4gIGlvbi1jb250ZW50e1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgXHJcbiAgICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPW51bWJlcl0saW5wdXRbdHlwZT1kYXRlXSwgdGV4dGFyZWEge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgXHJcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICNlMjgwMDg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZTI4MDA4O1xyXG4gICAgICBib3gtc2hhZG93OiAwICAwIDFweCAxcHggd2hpdGU7XHJcbiAgICB9XHJcbiAgICAvLyAuaW52YWxpZC1mZWVkYmFja3tcclxuICAgIC8vICAgICBtYXJnaW4tdG9wOiAtcHg7XHJcbiAgICAvLyB9XHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICB0b3A6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgLnBhbmVsIHtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIC5wYW5lbC1oZWFkaW5nIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuLWdyb3VwIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLmJhY2sge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGludWUge1xyXG4gICAgICBcclxuICAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogTXVsdGktUGFydCBDU1MgKi9cclxuICBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvKiBQb3NpdGlvbiB0aGUgY2hlY2tib3ggaW4gdXBwZXIgbGVmdCBjb3JuZXIgKi9cclxuICAgIFxyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogU3R5bGluZyBQYXJ0cyAqL1xyXG4gICNwYXJ0MSxcclxuICAjcGFydDIsXHJcbiAgI3BhcnQzIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAvKiBIaWRkZW4gUGFydHMgKi9cclxuICAjcGFydDIsXHJcbiAgI3BhcnQzIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAvKiBTaG93IFN0ZXAgMiAmIEhpZGUgU3RlcCAxICovXHJcbiAgI3N0ZXAyOmNoZWNrZWQgfiAjcGFydDIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgI3N0ZXAyOmNoZWNrZWQgfiAjcGFydDEge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNob3cgU3RlcCAzICAmIEhpZGUgU3RlcCAyICovXHJcbiAgI3N0ZXAzOmNoZWNrZWQgfiAjcGFydDMge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgI3N0ZXAzOmNoZWNrZWQgfiAjcGFydDIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBpb24tY2FyZHtcclxuICAgICAgYmFja2dyb3VuZDogb3JhbmdlO1xyXG4gIH1cclxuICBpb24tcm93e1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgaW9uLWNvbHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICB9XHJcbiAuZm9ybS1ncm91cHtcclxuICAgIC8vIGhlaWdodDogMTBweDtcclxuICAgXHJcbiB9XHJcbiAgXHJcbiAvKiBTdHlsZXMgZ28gaGVyZSAqL1xyXG5cclxuZGl2e1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuICAubGFie1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiAyMHB4O1xyXG5cdHRvcDogOXB4O1xyXG5cdGNvbG9yOmJsYWNrO1xyXG5cdGZvbnQtc2l6ZTogN3B4O1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0dHJhbnNpdGlvbjogdG9wIDAuNHMsIG9wYWNpdHkgMC4ycztcclxuXHRmb250LWZhbWlseTogaGVsdmV0aWNhO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcclxuXHR0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBpbnB1dDp2YWxpZCsgLmxhYntcclxuXHQgIG9wYWNpdHk6IDE7XHJcblx0ICB0b3A6IC0xNnB4O1xyXG5cdCAgY29sb3I6ICNlMjgwMDg7XHJcbiAgfVxyXG4gIGlucHV0OmZvY3VzICsgLmxhYntcclxuXHRcclxuXHR0b3A6IC0xOHB4O1xyXG5cdGxlZnQ6IDEwcHg7XHJcblx0Y29sb3I6ICNlMjgwMDg7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdG9wYWNpdHk6IDAuNTtcclxuXHRmb250LWZhbWlseTogaGVsdmV0aWNhO1xyXG5cdFxyXG4gIH1cclxuICBcclxuICBbcGxhY2Vob2xkZXJdOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuXHRjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC8qdGVzdCovXHJcbiBcclxuICAubGFiLGlucHV0e1xyXG5cdCAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcblx0ICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcclxuXHQgXHJcbiAgfVxyXG4gIGlucHV0e1xyXG5cdCBcclxuXHQgIGJvcmRlcjogMDtcclxuXHQgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cdCAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdCAgYm9yZGVyLXJhZGl1czogMDtcclxuXHQgIHBhZGRpbmc6IDA7XHJcblx0ICBjdXJzb3I6IHRleHQ7XHJcbiAgfVxyXG4gIGlucHV0OmZvY3Vze1xyXG5cdCAgb3V0bGluZTogMDtcclxuXHQgIGJvcmRlci1ib3R0b206IDAuMDVlbTtcclxuICB9XHJcbiAgLmxhYiB7XHJcblx0ICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XHJcblx0ICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG5cdFxyXG4gIH1cclxuICBpbnB1dDpwbGFjZWhvbGRlci1zaG93biArLmxhYntcclxuXHQgIGN1cnNvcjogdGV4dDtcclxuXHQgIG1heC13aWR0aDogNDAuNjYlO1xyXG5cdCAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHQgIG92ZXJmbG93OiBoaWRkZW47XHJcblx0ICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHQgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xyXG5cdCAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMi4xMjVyZW0pXHJcblx0ICBzY2FsZSgxLjUpO1xyXG4gIH1cclxuICA6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7XHJcblx0ICBvcGFjaXR5OiAwO1xyXG5cdCAgdHJhbnNpdGlvbjogaW5oZXJpdDtcclxuICB9XHJcbiAgaW5wdXQ6Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7XHJcblx0ICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSsubGFiLFxyXG4gIGlucHV0OmZvY3VzKyAubGFie1xyXG5cdCAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCAsIDApIHNjYWxlKDEpO1xyXG5cdCAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBzZWxlY3R7XHJcbiAgICAgIFxyXG4gICAgICBib3JkZXItYm90dG9tOnNvbGlkIDFweCAjZTI4MDA4IDtcclxuICB9XHJcblxyXG4iLCJib2R5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL3N1YnRsZXBhdHRlcm5zMjAxNS5zdWJ0bGVwYXR0ZXJucy5uZXRkbmEtY2RuLmNvbS9wYXR0ZXJucy91cGZlYXRoZXJzLnBuZyk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZXh0XSwgLmZvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9ZW1haWxdLCAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT10ZWxdLCAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1udW1iZXJdLCAuZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT1kYXRlXSwgLmZvcm0tY29udGFpbmVyIHRleHRhcmVhIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGJvcmRlcjogc29saWQgMXB4ICNlMjgwMDg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZTI4MDA4O1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCB3aGl0ZTtcbn1cbi5mb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB0b3A6IC0xMHB4O1xufVxuLmZvcm0tY29udGFpbmVyIC5wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLmZvcm0tY29udGFpbmVyIC5wYW5lbCAucGFuZWwtaGVhZGluZyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uZm9ybS1jb250YWluZXIgLmJ0bi1ncm91cCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvIDEwcHggYXV0bztcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmZvcm0tY29udGFpbmVyIC5iYWNrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuLmZvcm0tY29udGFpbmVyIC5jb250aW51ZSB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4vKiBNdWx0aS1QYXJ0IENTUyAqL1xuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIFBvc2l0aW9uIHRoZSBjaGVja2JveCBpbiB1cHBlciBsZWZ0IGNvcm5lciAqL1xuICBvcGFjaXR5OiAwO1xufVxuXG4vKiBTdHlsaW5nIFBhcnRzICovXG4jcGFydDEsXG4jcGFydDIsXG4jcGFydDMge1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBhdXRvO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xufVxuXG4vKiBIaWRkZW4gUGFydHMgKi9cbiNwYXJ0MixcbiNwYXJ0MyB7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogU2hvdyBTdGVwIDIgJiBIaWRlIFN0ZXAgMSAqL1xuI3N0ZXAyOmNoZWNrZWQgfiAjcGFydDIge1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbiNzdGVwMjpjaGVja2VkIH4gI3BhcnQxIHtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTaG93IFN0ZXAgMyAgJiBIaWRlIFN0ZXAgMiAqL1xuI3N0ZXAzOmNoZWNrZWQgfiAjcGFydDMge1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbiNzdGVwMzpjaGVja2VkIH4gI3BhcnQyIHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG59XG5cbmlvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNvbCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi8qIFN0eWxlcyBnbyBoZXJlICovXG5kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sYWIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwcHg7XG4gIHRvcDogOXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogN3B4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB0b3AgMC40cywgb3BhY2l0eSAwLjJzO1xuICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmlucHV0OnZhbGlkICsgLmxhYiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRvcDogLTE2cHg7XG4gIGNvbG9yOiAjZTI4MDA4O1xufVxuXG5pbnB1dDpmb2N1cyArIC5sYWIge1xuICB0b3A6IC0xOHB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogI2UyODAwODtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG59XG5cbltwbGFjZWhvbGRlcl06Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qdGVzdCovXG4ubGFiLCBpbnB1dCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXItYm90dG9tOiAwLjA1ZW07XG59XG5cbi5sYWIge1xuICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbmlucHV0OnBsYWNlaG9sZGVyLXNob3duICsgLmxhYiB7XG4gIGN1cnNvcjogdGV4dDtcbiAgbWF4LXdpZHRoOiA0MC42NiU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMi4xMjVyZW0pIHNjYWxlKDEuNSk7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGluaGVyaXQ7XG59XG5cbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgKyAubGFiLFxuaW5wdXQ6Zm9jdXMgKyAubGFiIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuc2VsZWN0IHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlMjgwMDg7XG59Il19 */"

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








// import swal from 'sweetalert';
let RegisterPage = class RegisterPage {
    // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    constructor(_authenfication, _router, formBuilder, alertService, camera, navCtrl) {
        this._authenfication = _authenfication;
        this._router = _router;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.camera = camera;
        this.navCtrl = navCtrl;
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
        this.images = { 'venture': '', 'activite': '' };
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            date_naissance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
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
            num_cni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.cniPattern)]]
        });
        this.garantForm = this.formBuilder.group({
            nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.nomPattern)]],
            prenom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.nomPattern)]],
            telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.telephonePattern)]],
            client: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.telephonePattern)]]
        });
    }
    openLibrary() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
                quality: 100,
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
                quality: 100,
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
        // this.openLibrary();
        if (source == 'camera')
            result = this.openCamera();
        result.then(imageData => {
            console.log("imageData", imageData);
            if (number == 1) {
                this.imgDevanture = "data:image/jpeg;base64," + imageData;
                this.registerForm.get('photo_venture').setValue(imageData);
            }
            else {
                this.imageActivite = "data:image/jpeg;base64," + imageData;
                this.registerForm.get('photo_activite').setValue(imageData);
            }
            console.log("this.registerForm", this.registerForm);
        });
        if (source == 'library')
            result = this.openLibrary();
        result.then(imageData => {
            console.log("imageData", imageData);
            if (number == 1) {
                this.imgDevanture = "data:image/jpeg;base64," + imageData;
                this.registerForm.get('photo_venture').setValue(imageData);
            }
            else {
                this.imageActivite = "data:image/jpeg;base64," + imageData;
                this.registerForm.get('photo_activite').setValue(imageData);
            }
            console.log("this.registerForm", this.registerForm);
        });
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map