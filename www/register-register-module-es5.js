(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-buttons slot=\"end\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>Control permanent</ion-title>\n  </ion-toolbar>\n \n</ion-header>\n\n<ion-content>\n  <ion-card id=\"carte\">\n    <img src=\"/assets/img/LOGO-VERT.png\" alt=\"\" />\n   <!-- <ion-card-header>\n      <ion-card-subtitle>Bienvenue à l'apllication controle permanent.</ion-card-subtitle>\n     <ion-card-title>  Et détection de faux documents\n       \n       </ion-card-title> \n   </ion-card-header> -->\n   <ion-card-content style=\"text-align: center;\">\n    <p style=\"font-size: 20px;\">\n     Enregistrement d'un client         \n    </p>\n  </ion-card-content>\n</ion-card>\n    <ion-card>\n  <div class=\"ion-padding\" >\n    <ion-segment  [(ngModel)]=\"relationship\" color=\"primary\" >\n      <ion-segment-button id=\"choix1\"  value=\"client\">\n        Client\n    \n      </ion-segment-button>\n      <ion-segment-button id=\"choix2\"  value=\"garant\">\n        Garant\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n    <div [(ngSwitch)]=\"relationship\"> \n        <ion-list *ngSwitchCase=\"'client'\"> \n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"ajoutUser()\">\n            <div class=\"form-group\">\n              <label >Téléphone 1:</label>\n              <input type=\"number\" placeholder=\"Telephone 1\" formControlName=\"telephone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.telephone.errors }\" />\n              <div *ngIf=\"submitted && f.telephone.errors\" class=\"invalid-feedback\">\n                  <div *ngIf=\"f.telephone.errors.required\">Veuillez saisir le numéro de téléphone</div>\n                  <div *ngIf=\"f.telephone.errors.minlength\">Entrez un numéro de téléphone valide</div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Téléphone 2:</label>\n            <input type=\"number\" placeholder=\"Telephone 2\" formControlName=\"telephone1\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.telephone1.errors }\" />\n            <div *ngIf=\"submitted && f.telephone1.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.telephone1.errors.required\">Veuillez saisir le numéro de téléphone</div>\n                <div *ngIf=\"f.adresse_activite.errors.minlength\">Entrez un numéro de téléphone valide</div> \n            </div>\n          </div>\n        <div class=\"form-group\">\n          <label>Prénom:</label>\n          <input type=\"text\" placeholder=\"Prenom\" formControlName=\"prenom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.prenom.errors }\" />\n          <div *ngIf=\"submitted && f.prenom.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.prenom.errors.required\">Veuillez saisir le prénom</div>\n              <div *ngIf=\"f.prenom.errors.minlength\">Entrez un prénom valide</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Nom:</label>\n        <input type=\"text\" placeholder=\"Nom\" formControlName=\"nom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nom.errors }\" />\n        <div *ngIf=\"submitted && f.nom.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.nom.errors.required\">Veuillez saisir le nom</div>\n            <div *ngIf=\"f.nom.errors.minlength\">Entrez un nom valide</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Numéro CNI:</label>\n      <input type=\"number\" placeholder=\"CNI\" formControlName=\"num_cni\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.num_cni.errors }\" />\n      <div *ngIf=\"submitted && f.num_cni.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.num_cni.errors.required\">Veuillez saisir le cni</div>\n          <div *ngIf=\"f.num_cni.errors.maxlength\">Entrez un cni valide</div>\n      </div>\n  </div>\n  <div class=\"form-group\">\n    <label>Date naissance:</label>\n    <input type=\"date\" placeholder=\"Date de naissance\" formControlName=\"date_naissance\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.date_naissance.errors }\" />\n    <div *ngIf=\"submitted && f.date_naissance.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.date_naissance.errors.required\">Veuillez saisir la date de naissance</div>\n        <!-- <div *ngIf=\"f.nom.errors.minlength\">Password must be at least 6 characters</div> -->\n    </div>\n</div>\n<div class=\"form-group\">\n  <label >Lieu naissance:</label>\n  <input type=\"text\" placeholder=\"Lieu de naissance\" formControlName=\"lieu_naissance\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lieu_naissance.errors }\" />\n  <div *ngIf=\"submitted && f.lieu_naissance.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.lieu_naissance.errors.required\">Veuillez saisir le lieu de naissance</div>\n      <div *ngIf=\"f.lieu_naissance.errors.minlength\">Entrez un lieu valide</div>\n  </div>\n</div>\n<div class=\"form-group\">\n  <label>Activité:</label>\n  <input type=\"text\" placeholder=\"Activite\" formControlName=\"activite\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.activite.errors }\" />\n  <div *ngIf=\"submitted && f.activite.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.activite.errors.required\">Veuillez saisir une activite</div>\n      <!-- <div *ngIf=\"f.activite.errors.minlength\">Password must be at least 6 characters</div> -->\n  </div>\n</div>\n\n<div class=\"form-group\">\n  <label>Adresse:</label>\n  <input type=\"text\" placeholder=\"Adresse client\" formControlName=\"adresse_client\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.adresse_client.errors }\" />\n  <div *ngIf=\"submitted && f.adresse_client.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"f.adresse_client.errors.required\">Veuillez saisir une adresse</div>\n      <!-- <div *ngIf=\"f.adresse_activite.errors.minlength\">Password must be at least 6 characters</div> -->\n  </div>\n</div>\n<div class=\"form-group\">\n  <label>Agence:</label>\n  <input type=\"text\" placeholder=\"Agence\" formControlName=\"agence\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.agence.errors }\" />\n  <div *ngIf=\"submitted && f.agence.errors \" class=\"invalid-feedback\">\n      <div *ngIf=\"f.agence.errors.required\">Veuillez saisir une agence</div>\n      <!-- <div *ngIf=\"f.agence.errors.minlength\">Password must be at least 6 characters</div>  -->\n  </div>\n</div>\n<div class=\"form-group\">\n  <label >Photo devanture:</label>\n  <input type=\"file\" placeholder=\"image devanture\" formControlName=\"photo_venture\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.photo_venture.errors }\" />\n  <div *ngIf=\"submitted && f.photo_venture.errors \" class=\"invalid-feedback\">\n      <div *ngIf=\"f.photo_venture.errors.required\">Veuillez entrer la photo de devanture</div>\n      <!-- <div *ngIf=\"f.photo_venture.errors.minlength\">Password must be at least 6 characters</div>  -->\n  </div>\n</div>\n<div class=\"form-group\">\n  <label >Photo activité:</label>\n  <input type=\"file\" placeholder=\"photo activite\" formControlName=\"photo_activite\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.photo_activite.errors }\" />\n  <div *ngIf=\"submitted && f.photo_activite.errors \" class=\"invalid-feedback\">\n      <div *ngIf=\"f.photo_activite.errors.required\">Veuillez entrer la photo de l'activité</div>\n      <!-- <div *ngIf=\"f.image_activite.errors.minlength\">Password must be at least 6 characters</div>  -->\n  </div>\n</div>\n<div class=\"form-group\">\n  <label>Genre:</label>\n  <!-- <input type=\"text\" placeholder=\"Agence\" formControlName=\"agence\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" /> -->\n  <select placeholder=\"Genre\" class=\"form-control\" formControlName=\"sexe\" placeholder=\"Genre\">genre\n    <option value=\"homme\">homme</option>\n    <option value=\"femme\">femme</option>\n  </select>\n \n</div>\n\n        <div class=\"form-group\">\n          <button [disabled]=\"loading\" class=\"btn btn-block\" >Ajouter</button>\n        </div>\n                \n           \n        </form>\n      </ion-list>\n </div>\n\n <div [(ngSwitch)]=\"relationship\"> \n  <ion-list *ngSwitchCase=\"'garant'\">\n    <form [formGroup]=\"garantForm\" (ngSubmit)=\"ajoutgarant()\">\n  \n    <div class=\"form-group\">\n      <input type=\"text\" placeholder=\"Prenom\" formControlName=\"prenom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.prenom.errors }\" />\n      <div *ngIf=\"submitted && g.prenom.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"g.prenom.errors.required\">veuillez entrer le prénom du garant</div>\n          <div *ngIf=\"g.prenom.errors.minlength\">entrez un prénom valide</div>\n      </div>\n  </div>\n  <div class=\"form-group\">\n    <input type=\"text\" placeholder=\"Nom\" formControlName=\"nom\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.nom.errors }\" />\n    <div *ngIf=\"submitted && g.nom.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"g.nom.errors.required\">veuillez entrer le nom du garant</div>\n        <div *ngIf=\"g.nom.errors.minlength\">entrez un nom valide</div>\n    </div>\n</div>\n<div class=\"form-group\">\n              \n  <input type=\"number\" placeholder=\"Telephone\" formControlName=\"telephone\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.telephone.errors }\" />\n  <div *ngIf=\"submitted && g.telephone.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"g.telephone.errors.required\">veuillez entrer le numéro de téléphone du garant</div>\n      <div *ngIf=\"g.telephone.errors.minlength\"> entrer un nom valide</div>\n  </div>\n</div>\n<div class=\"form-group\">\n              \n  <input type=\"number\" placeholder=\"Client\" formControlName=\"client\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && g.client.errors }\" />\n  <div *ngIf=\"submitted && g.client.errors\" class=\"invalid-feedback\">\n      <div *ngIf=\"g.client.errors.required\">veuillez saisir le téléphone du client</div>\n      <div *ngIf=\"g.client.errors.minlength\">saisissez un numéro valide</div>\n  </div>\n</div>\n<div class=\"form-group\">\n  <button [disabled]=\"loading\" class=\"btn btn-block\" >Ajouter</button>\n</div>\n    </form>\n  </ion-list>\n  </div>\n</ion-card>\n</ion-content> \n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");




var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
var RegisterPageRoutingModule = /** @class */ (function () {
    function RegisterPageRoutingModule() {
    }
    RegisterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RegisterPageRoutingModule);
    return RegisterPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "./src/app/register/register-routing.module.ts");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
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
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  background-color: 0;\n}\n\nion-title {\n  color: white;\n}\n\nion-button {\n  color: #22ad22;\n  background: #45c445;\n}\n\nion-icon {\n  color: white;\n}\n\nh2 {\n  color: #50A125;\n}\n\n#carte {\n  position: sticky;\n  position: -webkit-sticky;\n}\n\n#register {\n  margin-top: 500px;\n}\n\n.form-group .btn {\n  color: #fff;\n  border-radius: 30px;\n  background: #04B404;\n  line-height: normal;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxTZXluYWJvdSBOZGlheWVcXG1hbmtvLWFwcC1pb25pYy9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0dGOztBRERBO0VBQ0ksWUFBQTtBQ0lKOztBREZBO0VBQ0UsY0FBQTtBQ0tGOztBREhBO0VBQ0UsZ0JBQUE7RUFFQSx3QkFBQTtBQ0tGOztBREZBO0VBQ0UsaUJBQUE7QUNLRjs7QURIQTtFQUNDLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ01EIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4oJGNvbG9yOiAjMDAwMDAwKTtcclxufVxyXG5pb24tdGl0bGV7XHJcbiAgICBjb2xvcjogIHdoaXRlO1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgY29sb3I6cmdiKDM0LCAxNzMsIDM0KTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNjksIDE5NiwgNjkpO1xyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuaDJ7XHJcbiAgY29sb3I6IzUwQTEyNTsgXHJcbn1cclxuI2NhcnRle1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbi8vICAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246LXdlYmtpdC1zdGlja3k7XHJcbiBcclxufVxyXG4jcmVnaXN0ZXJ7XHJcbiAgbWFyZ2luLXRvcDogNTAwcHg7XHJcbn1cclxuLmZvcm0tZ3JvdXAgLmJ0bntcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cdGJhY2tncm91bmQ6ICMwNEI0MDQ7XHJcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHJcbn1cclxuXHJcbiIsImlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogMDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgY29sb3I6ICMyMmFkMjI7XG4gIGJhY2tncm91bmQ6ICM0NWM0NDU7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMiB7XG4gIGNvbG9yOiAjNTBBMTI1O1xufVxuXG4jY2FydGUge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG59XG5cbiNyZWdpc3RlciB7XG4gIG1hcmdpbi10b3A6IDUwMHB4O1xufVxuXG4uZm9ybS1ncm91cCAuYnRuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICMwNEI0MDQ7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






// import swal from 'sweetalert';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(_authenfication, _router, formBuilder, alertService) {
        this._authenfication = _authenfication;
        this._router = _router;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.submitted = false;
        this.loading = false;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            date_naissance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            lieu_naissance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]],
            activite: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            adresse_client: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            photo_venture: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            photo_activite: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(9)]],
            agence: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            sexe: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            telephone1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(9)]],
            nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]],
            prenom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]],
            num_cni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(9)]]
        });
        this.garantForm = this.formBuilder.group({
            nom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            prenom: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(9)]],
            client: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(9)]]
        });
    };
    Object.defineProperty(RegisterPage.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "g", {
        get: function () { return this.garantForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterPage.prototype.ajoutUser = function () {
        var _this = this;
        this.submitted = true;
        this.alertService.clear();
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this._authenfication.ajoutUser(this.registerForm.value)
            .subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(res);
                return [2 /*return*/];
            });
        }); }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterPage.prototype.ajoutgarant = function () {
        var _this = this;
        this.submitted = true;
        this.alertService.clear();
        if (this.garantForm.invalid) {
            return;
        }
        this.loading = true;
        this._authenfication.garant(this.garantForm.value)
            .subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(res);
                return [2 /*return*/];
            });
        }); }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module-es5.js.map