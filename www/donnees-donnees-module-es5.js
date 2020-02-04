(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donnees-donnees-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donnees/donnees.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donnees/donnees.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <ion-header style=\"background-color: #4dac27;\"> \n    <ion-toolbar color=\"green\">\n      <ion-buttons slot=\"start\">\n     \n        <ion-menu-button ></ion-menu-button>\n       </ion-buttons>\n      <ion-title style=\"text-align: center;\">Details</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content padding>\n    <div *ngIf=\"client\">\n    <ion-row>\n      <ion-col>\n      <ion-item>\n      <ion-label>telephone 1:</ion-label>\n      {{client.telephone}}\n      </ion-item>\n      </ion-col>\n      <ion-col>\n      <ion-item>  \n      <ion-label>Telephone 2:</ion-label>  \n      {{client.telephone1}}\n      </ion-item>\n      </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n      <ion-item>\n        <ion-label>Nom</ion-label>\n        {{client.nom}}\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label>Prénom:</ion-label>\n        {{client.prenom}}\n      </ion-item>\n    </ion-col>\n    </ion-row> \n    <ion-row>\n      <ion-col>\n    <ion-item>\n      <ion-label>Date naissance:</ion-label>\n      {{client.date_naissance}}\n    </ion-item>\n  </ion-col>\n  <ion-col>\n    <ion-item>\n      <ion-label>Lieu de naissance:</ion-label>\n      {{client.lieu_naissance}}\n    </ion-item>\n  </ion-col>\n  </ion-row> \n  <ion-row>\n    <ion-col>\n  <ion-item>\n    <ion-label>Adresse client:</ion-label>\n    {{client.adresse_client}}\n  </ion-item>\n  </ion-col>\n  <ion-col>\n  <ion-item>\n    <ion-label>Activite:</ion-label>\n    {{client.activite}}\n  </ion-item>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n  <ion-col>\n  <ion-item>\n  <ion-label>CNI:</ion-label>\n {{client.num_cni}}\n  </ion-item>\n  </ion-col>\n  <ion-col>\n  <ion-item>\n  <ion-label>Agence:</ion-label>\n  {{client.agence}}\n  </ion-item>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>  \n      <ion-label>Genre:</ion-label>  \n      {{client.sexe}}\n      </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n        <ion-label>Statut:</ion-label>\n        {{client.statut}}\n        </ion-item>\n        </ion-col>\n        \n  </ion-row>\n\n</div>\n   </ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/donnees/donnees-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/donnees/donnees-routing.module.ts ***!
  \***************************************************/
/*! exports provided: DonneesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonneesPageRoutingModule", function() { return DonneesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _donnees_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donnees.page */ "./src/app/donnees/donnees.page.ts");




var routes = [
    {
        path: '',
        component: _donnees_page__WEBPACK_IMPORTED_MODULE_3__["DonneesPage"]
    }
];
var DonneesPageRoutingModule = /** @class */ (function () {
    function DonneesPageRoutingModule() {
    }
    DonneesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DonneesPageRoutingModule);
    return DonneesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/donnees/donnees.module.ts":
/*!*******************************************!*\
  !*** ./src/app/donnees/donnees.module.ts ***!
  \*******************************************/
/*! exports provided: DonneesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonneesPageModule", function() { return DonneesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donnees_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./donnees-routing.module */ "./src/app/donnees/donnees-routing.module.ts");
/* harmony import */ var _donnees_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donnees.page */ "./src/app/donnees/donnees.page.ts");







var DonneesPageModule = /** @class */ (function () {
    function DonneesPageModule() {
    }
    DonneesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _donnees_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonneesPageRoutingModule"]
            ],
            declarations: [_donnees_page__WEBPACK_IMPORTED_MODULE_6__["DonneesPage"]]
        })
    ], DonneesPageModule);
    return DonneesPageModule;
}());



/***/ }),

/***/ "./src/app/donnees/donnees.page.scss":
/*!*******************************************!*\
  !*** ./src/app/donnees/donnees.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvbm5lZXMvZG9ubmVlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/donnees/donnees.page.ts":
/*!*****************************************!*\
  !*** ./src/app/donnees/donnees.page.ts ***!
  \*****************************************/
/*! exports provided: DonneesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonneesPage", function() { return DonneesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");
/* harmony import */ var _modeles_register_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modeles/register.model */ "./src/app/modeles/register.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DonneesPage = /** @class */ (function () {
    function DonneesPage(_aut, route, router) {
        this._aut = _aut;
        this.route = route;
        this.router = router;
    }
    DonneesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.client = new _modeles_register_model__WEBPACK_IMPORTED_MODULE_3__["RegisterModel"]();
        this.id = this.route.snapshot.params['id'];
        this._aut.details(this.id).subscribe(function (data) {
            console.log(data);
            _this.client = data;
        }, function (error) { return console.log(error); });
    };
    DonneesPage.ctorParameters = function () { return [
        { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    DonneesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donnees',
            template: __webpack_require__(/*! raw-loader!./donnees.page.html */ "./node_modules/raw-loader/index.js!./src/app/donnees/donnees.page.html"),
            styles: [__webpack_require__(/*! ./donnees.page.scss */ "./src/app/donnees/donnees.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DonneesPage);
    return DonneesPage;
}());

// details(id){
//   this._aut.details(id).subscribe(
//     res =>{ this.listuser =res
//       console.log(res)
//      } ,
//     error => console.log(error)
//   )
// }


/***/ })

}]);
//# sourceMappingURL=donnees-donnees-module-es5.js.map