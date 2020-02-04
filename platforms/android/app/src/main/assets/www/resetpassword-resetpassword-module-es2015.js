(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resetpassword-resetpassword-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/resetpassword/resetpassword.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/resetpassword/resetpassword.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title> Controle permanent</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\">\n        <img src=\"/assets/img/LOGO-VERT.png\" alt=\"\" />\n        <ion-card-header>\n          <ion-card-subtitle>Bienvenue à l'apllication controle permanent</ion-card-subtitle>\n          <ion-card-title> Et détection de faux documents\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p>\n            Naviguer facilement et rapidement.          \n          </p>\n        </ion-card-content>\n      </ion-card>\n      <form [formGroup]=\"sendForm\" (ngSubmit)=\"Send()\">\n\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.email.errors.required\">Email is required</div>\n              <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\n          </div>\n      </div>\n    \n      <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-block\" >connexion</button>\n      </div>\n    \n       \n      </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/resetpassword/resetpassword-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ResetpasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPageRoutingModule", function() { return ResetpasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetpassword.page */ "./src/app/resetpassword/resetpassword.page.ts");




const routes = [
    {
        path: '',
        component: _resetpassword_page__WEBPACK_IMPORTED_MODULE_3__["ResetpasswordPage"]
    }
];
let ResetpasswordPageRoutingModule = class ResetpasswordPageRoutingModule {
};
ResetpasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetpasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/resetpassword/resetpassword.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.module.ts ***!
  \*******************************************************/
/*! exports provided: ResetpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPageModule", function() { return ResetpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resetpassword-routing.module */ "./src/app/resetpassword/resetpassword-routing.module.ts");
/* harmony import */ var _resetpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetpassword.page */ "./src/app/resetpassword/resetpassword.page.ts");







let ResetpasswordPageModule = class ResetpasswordPageModule {
};
ResetpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetpasswordPageRoutingModule"]
        ],
        declarations: [_resetpassword_page__WEBPACK_IMPORTED_MODULE_6__["ResetpasswordPage"]]
    })
], ResetpasswordPageModule);



/***/ }),

/***/ "./src/app/resetpassword/resetpassword.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.page.ts ***!
  \*****************************************************/
/*! exports provided: ResetpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordPage", function() { return ResetpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let ResetpasswordPage = class ResetpasswordPage {
    constructor(_authenfication, _router, formBuilder, alertService) {
        this._authenfication = _authenfication;
        this._router = _router;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.submitted = false;
        this.loading = false;
    }
    ngOnInit() {
        this.sendForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]]
        });
    }
    get f() { return this.sendForm.controls; }
    Send() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        if (this.sendForm.invalid) {
            return;
        }
        this.loading = true;
        this._authenfication.sendmail(this.sendForm.value)
            .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(res);
        }), error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
};
ResetpasswordPage.ctorParameters = () => [
    { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }
];
ResetpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resetpassword',
        template: __webpack_require__(/*! raw-loader!./resetpassword.page.html */ "./node_modules/raw-loader/index.js!./src/app/resetpassword/resetpassword.page.html"),
        styles: [__webpack_require__(/*! ./resetpassword.page.scss */ "./src/app/resetpassword/resetpassword.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
], ResetpasswordPage);



/***/ })

}]);
//# sourceMappingURL=resetpassword-resetpassword-module-es2015.js.map