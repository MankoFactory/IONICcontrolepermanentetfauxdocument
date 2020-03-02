(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modif-modif-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modif/modif.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modif/modif.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-buttons slot=\"end\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card >\n         <!-- <img src=\"/assets/img/LOGO-VERT.png\" alt=\"\" /> -->\n        <!-- <ion-card-header>\n           <ion-card-subtitle>Bienvenue à l'apllication controle permanent.</ion-card-subtitle>\n          <ion-card-title>  Et détection de faux documents\n            \n            </ion-card-title> \n        </ion-card-header> -->\n        <ion-card-content style=\"text-align: center;\">\n          <p style=\"font-size: 20px;\">\n           Modification d'un client         \n          </p>\n        </ion-card-content>\n    </ion-card>\n\n\n    \n  <!-- <div class=\"ion-padding\">\n    <ion-segment  [(ngModel)]=\"relationship\" color=\"primary\" >\n      <ion-segment-button id=\"choix1\"  value=\"client\">\n        Client\n    \n      </ion-segment-button>\n      <ion-segment-button id=\"choix2\"  value=\"garant\">\n        Garant\n      </ion-segment-button>\n    </ion-segment>\n  </div>  -->\n \n    <div> \n      <ion-card>\n        <ion-list >  \n          <div [hidden]=\"submitted\" >\n            <form >\n\n              <div class=\"form-group\">\n                <label >Telephone 1</label>\n                <input type=\"tel\" class=\"form-control\" id=\"telephone\"  [(ngModel)]=\"client.telephone\" name=\"telephone\">\n              </div>\n          \n              <div class=\"form-group\">\n                <label >Telephone 2</label>\n                <input type=\"tel\" class=\"form-control\" id=\"telephone1\" [(ngModel)]=\"client.telephone1\" name=\"telephone1\">\n              </div>\n          \n              <div class=\"form-group\">\n                <label>Nom:</label>\n                <input type=\"text\" class=\"form-control\" id=\"nom\"  [(ngModel)]=\"client.nom\" name=\"nom\">\n              </div>\n\n              <div class=\"form-group\">\n                <label>Prénom:</label>\n                <input type=\"text\" class=\"form-control\" id=\"prenom\"  [(ngModel)]=\"client.prenom\" name=\"prenom\">\n              </div>\n\n              <div class=\"form-group\">\n                <label>Date de naissance:</label>\n                <input type=\"date\" class=\"form-control\" id=\"date_naissance\"  [(ngModel)]=\"client.date_naissance\" name=\"date_naissance\">\n              </div>\n\n              <div class=\"form-group\">\n                <label>Lieu naissance:</label>\n                <input type=\"text\" class=\"form-control\" id=\"lieu_naissance\"  [(ngModel)]=\"client.lieu_naissance\" name=\"lieu_naissance\">\n              </div>\n\n              <div class=\"form-group\">\n                <label>CNI:</label>\n                <input type=\"number\" class=\"form-control\" id=\"num_cni\"  [(ngModel)]=\"client.num_cni\" name=\"num_cni\">\n              </div>\n          \n              <div class=\"form-group\">\n                <label>Adresse:</label>\n                <input type=\"text\" class=\"form-control\" id=\"adresse_client\"  [(ngModel)]=\"client.adresse_client\" name=\"adresse_client\">\n              </div>\n\n              <div class=\"form-group\">\n                <label>Activité:</label>\n                <input type=\"text\" class=\"form-control\" id=\"activite\"  [(ngModel)]=\"client.activite\" name=\"activite\">\n              </div>\n\n              <div class=\"form-group\">\n                <label>Agence:</label>\n                <input type=\"text\" class=\"form-control\" id=\"agence\"  [(ngModel)]=\"client.agence\" name=\"agence\">\n              </div>\n\n              <div class=\"form-group\">\n                <label>Genre:</label>\n                <input type=\"text\" class=\"form-control\" id=\"sexe\"  [(ngModel)]=\"client.sexe\" name=\"sexe\">\n              </div>\n<div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-block\" (click)=\"onSubmit()\">Submit</button>\n            </div>\n            </form>\n          </div>\n           </ion-list>\n          </ion-card>\n          </div> \n       \n\n\n\n\n <!-- <div [(ngSwitch)]=\"relationship\"> \n  <ion-list *ngSwitchCase=\"'garant'\"> \n  \n  </ion-list>\n  </div> -->\n   \n\n \n</ion-content> \n"

/***/ }),

/***/ "./src/app/modif/modif-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modif/modif-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ModifPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifPageRoutingModule", function() { return ModifPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modif_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modif.page */ "./src/app/modif/modif.page.ts");




const routes = [
    {
        path: '',
        component: _modif_page__WEBPACK_IMPORTED_MODULE_3__["ModifPage"]
    }
];
let ModifPageRoutingModule = class ModifPageRoutingModule {
};
ModifPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModifPageRoutingModule);



/***/ }),

/***/ "./src/app/modif/modif.module.ts":
/*!***************************************!*\
  !*** ./src/app/modif/modif.module.ts ***!
  \***************************************/
/*! exports provided: ModifPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifPageModule", function() { return ModifPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modif_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modif-routing.module */ "./src/app/modif/modif-routing.module.ts");
/* harmony import */ var _modif_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modif.page */ "./src/app/modif/modif.page.ts");







let ModifPageModule = class ModifPageModule {
};
ModifPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modif_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModifPageRoutingModule"]
        ],
        declarations: [_modif_page__WEBPACK_IMPORTED_MODULE_6__["ModifPage"]]
    })
], ModifPageModule);



/***/ }),

/***/ "./src/app/modif/modif.page.scss":
/*!***************************************!*\
  !*** ./src/app/modif/modif.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin-left: auto;\n  margin-right: auto;\n  width: 400px;\n}\n\nion-toolbar {\n  background-color: 0;\n}\n\nion-title {\n  color: white;\n}\n\n.form-group .btn {\n  color: #fff;\n  border-radius: 30px;\n  background: #04B404;\n  line-height: normal;\n  display: inline-block;\n}\n\nion-card {\n  background-color: #e28008;\n  text-align: center;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kaWYvQzpcXFVzZXJzXFxTZXluYWJvdSBOZGlheWVcXG1hbmtvLWFwcC1pb25pYy9zcmNcXGFwcFxcbW9kaWZcXG1vZGlmLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kaWYvbW9kaWYucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQUU7RUFDRSxZQUFBO0FDR0o7O0FEREE7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNJRDs7QUREQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9tb2RpZi9tb2RpZi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAgXHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbigkY29sb3I6ICMwMDAwMDApO1xyXG4gIH1cclxuICBpb24tdGl0bGV7XHJcbiAgICBjb2xvcjogIHdoaXRlO1xyXG59XHJcbi5mb3JtLWdyb3VwIC5idG57XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogMzBweDtcclxuXHRiYWNrZ3JvdW5kOiAjMDRCNDA0O1xyXG5cdGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFxyXG59XHJcbmlvbi1jYXJke1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2UyODAwOCA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufSIsImlvbi1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZvcm0tZ3JvdXAgLmJ0biB7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDRCNDA0O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyODAwODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/modif/modif.page.ts":
/*!*************************************!*\
  !*** ./src/app/modif/modif.page.ts ***!
  \*************************************/
/*! exports provided: ModifPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifPage", function() { return ModifPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");
/* harmony import */ var _modeles_register_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modeles/register.model */ "./src/app/modeles/register.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





// import swal from 'sweetalert';
let ModifPage = class ModifPage {
    // garant:GarantModel
    constructor(_aut, route, router) {
        this._aut = _aut;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.client = new _modeles_register_model__WEBPACK_IMPORTED_MODULE_3__["RegisterModel"]();
        this.id = this.route.snapshot.params['id'];
        this._aut.details(this.id).subscribe(data => {
            console.log(data);
            this.client = data;
        }, error => console.log(error));
    }
    update() {
        this._aut.update(this.id, this.client)
            .subscribe(data => console.log(data)
        // swal ("client modifié")
        , error => console.log(error));
        //  this.client = new RegisterModel();
        this.gotoList();
    }
    onSubmit() {
        this.update();
    }
    gotoList() {
        this.router.navigate(['/home']);
    }
};
ModifPage.ctorParameters = () => [
    { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ModifPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modif',
        template: __webpack_require__(/*! raw-loader!./modif.page.html */ "./node_modules/raw-loader/index.js!./src/app/modif/modif.page.html"),
        styles: [__webpack_require__(/*! ./modif.page.scss */ "./src/app/modif/modif.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ModifPage);



/***/ })

}]);
//# sourceMappingURL=modif-modif-module-es2015.js.map