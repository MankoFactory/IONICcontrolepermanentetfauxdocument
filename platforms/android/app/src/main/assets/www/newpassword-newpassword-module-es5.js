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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newpassword.page */ "./src/app/newpassword/newpassword.page.ts");




var routes = [
    {
        path: '',
        component: _newpassword_page__WEBPACK_IMPORTED_MODULE_3__["NewpasswordPage"]
    }
];
var NewpasswordPageRoutingModule = /** @class */ (function () {
    function NewpasswordPageRoutingModule() {
    }
    NewpasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NewpasswordPageRoutingModule);
    return NewpasswordPageRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _newpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newpassword-routing.module */ "./src/app/newpassword/newpassword-routing.module.ts");
/* harmony import */ var _newpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newpassword.page */ "./src/app/newpassword/newpassword.page.ts");







var NewpasswordPageModule = /** @class */ (function () {
    function NewpasswordPageModule() {
    }
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
    return NewpasswordPageModule;
}());



/***/ }),

/***/ "./src/app/newpassword/newpassword.page.scss":
/*!***************************************************!*\
  !*** ./src/app/newpassword/newpassword.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#token {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cGFzc3dvcmQvQzpcXFVzZXJzXFxTZXluYWJvdSBOZGlheWVcXG1hbmtvLWFwcC1pb25pYy9zcmNcXGFwcFxcbmV3cGFzc3dvcmRcXG5ld3Bhc3N3b3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbmV3cGFzc3dvcmQvbmV3cGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL25ld3Bhc3N3b3JkL25ld3Bhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b2tlbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSIsIiN0b2tlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");




var NewpasswordPage = /** @class */ (function () {
    function NewpasswordPage(route, _auth, router) {
        var _this = this;
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
        route.queryParams.subscribe(function (params) { return _this.form.token = params['token']; });
    }
    NewpasswordPage.prototype.ngOnInit = function () {
    };
    NewpasswordPage.prototype.Newpassword = function () {
        this._auth.newpassword(this.form).subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.glo();
    };
    NewpasswordPage.prototype.glo = function () {
        this.router.navigate(["/login"]);
    };
    NewpasswordPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_3__["AuthentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NewpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newpassword',
            template: __webpack_require__(/*! raw-loader!./newpassword.page.html */ "./node_modules/raw-loader/index.js!./src/app/newpassword/newpassword.page.html"),
            styles: [__webpack_require__(/*! ./newpassword.page.scss */ "./src/app/newpassword/newpassword.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_authent_service__WEBPACK_IMPORTED_MODULE_3__["AuthentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewpasswordPage);
    return NewpasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=newpassword-newpassword-module-es5.js.map