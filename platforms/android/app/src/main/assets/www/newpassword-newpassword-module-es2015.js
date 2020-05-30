(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newpassword-newpassword-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/newpassword/newpassword.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/newpassword/newpassword.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>changer mot de passe</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"card-body\">\n<form >\n\n  <div class=\"form-group row\">\n    <label for=\"inputEmail13\" class=\"col-sm-2 col-form-label\">Email</label>\n<div class=\"col-sm-10\">\n  <input type=\"email\" name=\"email\" class=\"form-control\" id=\"inputEmail13\" placeholder=\"Email\" [(ngModel)]=\"form.email\" required>\n</div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"inputPassword13\" class=\"col-sm-2 col-form-label\">Mot de passe</label>\n<div class=\"col-sm-10\">\n  <input type=\"password\" name=\"password\" class=\"form-control\" id=\"inputPassword13\" placeholder=\"Confirmer mot de passe\" [(ngModel)]=\"form.password\" required>\n</div>\n  </div>\n  <div class=\"form-group row\">\n    <label for=\"inputPassword4\" class=\"col-sm-2 col-form-label\">Confirmer mot de passe</label>\n<div class=\"col-sm-10\">\n  <input type=\"password\" name=\"password_confirmation\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Mot de passe\" [(ngModel)]=\"form.password_confirmation\" required>\n</div>\n  </div>\n  <div class=\"form-group row\" id=\"token\">\n<div class=\"col-sm-10\" >\n  <input type=\"text\" name=\"token\" class=\"form-control\" id=\"token\" [(ngModel)]=\"form.token\" >\n</div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-sn-10 offset-2\"> \n<ion-button type=\"submit\" (click)=\"Newpassword()\" class=\"btn btn-primary\">\nChanger mot de passe\n</ion-button>\n    </div>\n\n  </div>\n</form>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/newpassword/newpassword-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/newpassword/newpassword-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NewpasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpasswordPageRoutingModule", function() { return NewpasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _newpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newpassword.page */ "./src/app/newpassword/newpassword.page.ts");




const routes = [
    {
        path: '',
        component: _newpassword_page__WEBPACK_IMPORTED_MODULE_3__["NewpasswordPage"]
    }
];
let NewpasswordPageRoutingModule = class NewpasswordPageRoutingModule {
};
NewpasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewpasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/newpassword/newpassword.module.ts":
/*!***************************************************!*\
  !*** ./src/app/newpassword/newpassword.module.ts ***!
  \***************************************************/
/*! exports provided: NewpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpasswordPageModule", function() { return NewpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newpassword-routing.module */ "./src/app/newpassword/newpassword-routing.module.ts");
/* harmony import */ var _newpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newpassword.page */ "./src/app/newpassword/newpassword.page.ts");







let NewpasswordPageModule = class NewpasswordPageModule {
};
NewpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _newpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewpasswordPageRoutingModule"]
        ],
        declarations: [_newpassword_page__WEBPACK_IMPORTED_MODULE_6__["NewpasswordPage"]]
    })
], NewpasswordPageModule);



/***/ }),

/***/ "./src/app/newpassword/newpassword.page.scss":
/*!***************************************************!*\
  !*** ./src/app/newpassword/newpassword.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#token {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cGFzc3dvcmQvQzpcXFVzZXJzXFxTZXluYWJvdSBOZGlheWVcXERvY3VtZW50c1xcdGVzdF9pb25pY1xcbWFua28tYXBwLWlvbmljL3NyY1xcYXBwXFxuZXdwYXNzd29yZFxcbmV3cGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9uZXdwYXNzd29yZC9uZXdwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbmV3cGFzc3dvcmQvbmV3cGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Rva2Vue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59IiwiI3Rva2VuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/newpassword/newpassword.page.ts":
/*!*************************************************!*\
  !*** ./src/app/newpassword/newpassword.page.ts ***!
  \*************************************************/
/*! exports provided: NewpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpasswordPage", function() { return NewpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");




let NewpasswordPage = class NewpasswordPage {
    constructor(route, _auth, router) {
        this.route = route;
        this._auth = _auth;
        this.router = router;
        this.error = [];
        this.form = {
            email: null,
            password: null,
            password_confirmation: null,
            token: null
        };
        route.queryParams.subscribe(params => this.form.token = params['token']);
    }
    ngOnInit() {
    }
    Newpassword() {
        this._auth.newpassword(this.form).subscribe(data => console.log(data), error => console.log(error));
        this.glo();
    }
    glo() {
        this.router.navigate(["/login"]);
    }
};
NewpasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_3__["AuthentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NewpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-newpassword',
        template: __webpack_require__(/*! raw-loader!./newpassword.page.html */ "./node_modules/raw-loader/index.js!./src/app/newpassword/newpassword.page.html"),
        styles: [__webpack_require__(/*! ./newpassword.page.scss */ "./src/app/newpassword/newpassword.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_authent_service__WEBPACK_IMPORTED_MODULE_3__["AuthentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], NewpasswordPage);



/***/ })

}]);
//# sourceMappingURL=newpassword-newpassword-module-es2015.js.map