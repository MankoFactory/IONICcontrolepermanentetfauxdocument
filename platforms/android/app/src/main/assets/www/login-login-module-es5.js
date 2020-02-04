(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header no-border>\r\n  <div class=\"login-header\">\r\n    <img src=\"assets/logoblancgris.png\" class=\"logo-img\">\r\n  </div> \r\n</ion-header>\r\n<ion-content>\r\n<div class=\"center\">\r\n  <div heading-column-lr>\r\n    <h4 class=\"modal-title\">Authentification</h4>\r\n    <!-- <h2 small-heading>S'enregistrer</h2> -->\r\n  </div>\r\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser()\" style=\"margin-top: 100px;\">\r\n    <div class=\"form-group\">\r\n      \r\n      <input type=\"text\" placeholder=\"Email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n      <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n          <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n      </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <input type=\"password\" placeholder=\"Mot de passe\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n        <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n    </div>\r\n</div>\r\n<div class=\"float-right\">\r\n<a [routerLink]=\"['/resetpassword']\" class=\"small-text\" >Forgot Password?</a>\r\n</div>\r\n<div class=\"form-group\">\r\n  <button [disabled]=\"loading\" class=\"btn btn-block\" >connexion</button>\r\n</div>\r\n        \r\n   \r\n</form>\r\n\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700,800,900&display=swap\");\n.login-header {\n  background: var(--theme-color);\n}\n.login-header {\n  position: relative;\n  background: var(--theme-color);\n  border-radius: 0em;\n}\n.login-header:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 15%;\n  width: 0;\n  height: 0;\n  border: 20px solid transparent;\n  border-top-color: var(--theme-color);\n  border-bottom: 0;\n  margin-left: -15px;\n  margin-bottom: -15px;\n}\n.logo-img {\n  display: block;\n  width: 120px;\n  margin: 0 auto;\n  text-align: center;\n}\n[heading-column-lr] {\n  display: -webkit-box;\n  display: flex;\n  .m1-flex-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n[big-heading] {\n  font-family: \"Heebo-Bold\" !important;\n  font-size: 30px !important;\n  color: var(--color-black);\n}\n[small-heading] {\n  font-family: \"Heebo-Regular\" limportant;\n  margin-left: auto;\n  padding-right: 70px;\n  font-size: 15px;\n}\nion-label {\n  color: #000;\n  opacity: 8;\n  font-size: 13px;\n  display: block;\n}\nion-content {\n  --background: #fafafa;\n}\n[transparent] {\n  --background: transparent;\n}\nion-input {\n  --color: #000;\n  --padding-bottom: 15px;\n  --padding-top: 15px;\n  --padding-start: 15px;\n  font-size: 15px;\n  text-indent: 1px;\n  padding-left: 10px !important;\n}\n[icon-small] {\n  width: 30px;\n}\nion-item {\n  --highlight-color-focused: transparent;\n  --highlight-height: 0;\n  --highlight-color-invalid:#000;\n  --highlight-color-valid:#ddd;\n  --min-height: 65px;\n  --padding-start: 0;\n}\n[linespace] {\n  height: 30px;\n}\n[ion-label] {\n  color: #000;\n  opacity: 0.8;\n  font-size: 13px;\n  display: block;\n}\n.forget-password {\n  color: #000;\n  text-align: right;\n  font-size: 13px;\n  display: block;\n  padding: 10px;\n}\n.form-group .form-control {\n  border-radius: 30px;\n}\n.modal-title {\n  font-family: \"Varela Round\", sans-serif;\n}\n.form-group .btn {\n  color: #fff;\n  border-radius: 30px;\n  background: #04B404;\n  line-height: normal;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxTZXluYWJvdSBOZGlheWVcXG1hbmtvLWFwcC1pb25pYy9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDUSxxR0FBQTtBQUVSO0VBRUksOEJBQUE7QUMvQ0o7QURrREE7RUFDQyxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUMvQ0Q7QURrREE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQy9DRDtBRGtEQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDL0NKO0FEaURBO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDOUNEO0FEZ0RBO0VBQ0Msb0NBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDN0NEO0FEK0NBO0VBQ0MsdUNBQUE7RUFDQSxpQkFBQTtFQUFrQixtQkFBQTtFQUFvQixlQUFBO0FDMUN2QztBRDRDQTtFQUNDLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUN6Q0Q7QUQyQ0E7RUFDQyxxQkFBQTtBQ3hDRDtBRDBDQTtFQUNDLHlCQUFBO0FDdkNEO0FEeUNDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDdENGO0FEd0NDO0VBQ0MsV0FBQTtBQ3JDRjtBRHdDQztFQUNDLHNDQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ3JDRjtBRHdDQztFQUNDLFlBQUE7QUNyQ0Y7QUR1Q0M7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDcENGO0FEc0NDO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDbkNEO0FEcUNBO0VBQ0MsbUJBQUE7QUNsQ0Q7QURvQ0E7RUFDQyx1Q0FBQTtBQ2pDRDtBRG1DQTtFQUNDLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ2hDRCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlx0XHJcbi8vIH1cclxuLy8gI2NvbnRhaW5lciBwIHtcclxuLy8gXHRmb250LWZhbWlseTogJ0ZhcnNhbicsIGN1cnNpdmU7XHJcbi8vIFx0bWFyZ2luOiAzcHggMCAxLjVlbSAwO1xyXG4vLyBcdGZvbnQtc2l6ZTogMS4zZW07XHJcbi8vIFx0Y29sb3I6ICM3ZDdkN2Q7XHJcbi8vIH1cclxuXHJcbi8vICNjb250YWluZXIgaW5wdXQge1xyXG4vLyAvKiBcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMywgMjU0LCAwLjkwKTsgKi9cclxuLy8gXHR3aWR0aDogMjEwcHg7XHJcbi8vIFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gXHRib3JkZXItcmFkaXVzOiA3cHg7XHJcbi8vIFx0YmFja2dyb3VuZDogI2VlZTtcclxuLy8gXHRwYWRkaW5nOiAxZW0gMmVtO1xyXG4vLyBcdG91dGxpbmU6IG5vbmU7XHJcbi8vIFx0Ym9yZGVyOiBub25lO1xyXG4vLyBcdGNvbG9yOiAjMjIyO1xyXG4vLyBcdHRyYW5zaXRpb246IDAuM3MgbGluZWFyO1xyXG4vLyB9XHJcbi8vIDo6cGxhY2Vob2xkZXJ7Y29sb3I6ICM5OTk7fVxyXG4vLyAjY29udGFpbmVyIGlucHV0OmZvY3VzIHtiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDMzMywgMC4xMCk7fVxyXG5cclxuLy8gI2NvbnRhaW5lciBidXR0b24ge1xyXG4vLyBcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDE0NiwgMjU1LCAxNzMsIDAuNzUpIDAlLCByZ2JhKDgsIDcxLCAxOSwgMC44NikgMTAwJSk7XHJcbi8vIFx0Ym94LXNoYWRvdzogMCA5cHggMjVweCAtNXB4ICMwYWIxNmI7XHJcbi8vIFx0Zm9udC1mYW1pbHk6ICdBYmVsJywgc2Fucy1zZXJpZjtcclxuLy8gXHRwYWRkaW5nOiAwLjVlbSAxLjllbTtcclxuLy8gXHRtYXJnaW46IDIuM2VtIDAgMCAwO1xyXG4vLyBcdGJvcmRlci1yYWRpdXM6IDdweDtcclxuLy8gXHRmb250LXNpemU6IDEuNGVtO1xyXG4vLyBcdGN1cnNvcjogcG9pbnRlcjtcclxuLy8gXHRjb2xvcjogI0ZGRkZGRjtcclxuLy8gXHRmb250LXNpemU6IDFlbTtcclxuLy8gXHRvdXRsaW5lOiBub25lO1xyXG4vLyBcdGJvcmRlcjogbm9uZTtcclxuLy8gXHR0cmFuc2l0aW9uOiAwLjNzIGxpbmVhcjtcclxuXHJcbi8vIH1cclxuLy8gI2NvbnRhaW5lciBidXR0b246aG92ZXJ7dHJhbnNmb3JtOiB0cmFuc2xhdGV5KDJweCk7fVxyXG4vLyAjY29udGFpbmVyIGJ1dHRvbjphY3RpdmV7dHJhbnNmb3JtOiB0cmFuc2xhdGV5KDVweCk7fVxyXG4vLyAubGVuYSB7XHJcbi8vIFx0bWFyZ2luLXRvcDogLTMwJTtcclxuLy8gfVxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUhlZWJvOjEwMCwzMDAsNDAwLDUwMCw3MDAsODAwLDkwMCZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5sb2dpbi1oZWFkZXJ7XHJcblxyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xyXG5cclxufVxyXG4ubG9naW4taGVhZGVye1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvcik7XHJcblx0Ym9yZGVyLXJhZGl1czogMGVtO1xyXG5cclxufVxyXG4ubG9naW4taGVhZGVyOmFmdGVye1xyXG5cdGNvbnRlbnQ6IFwiXCIgO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206IDA7XHJcblx0bGVmdDogMTUlO1xyXG5cdHdpZHRoOiAwO1xyXG5cdGhlaWdodDogMDtcclxuXHRib3JkZXI6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xyXG5cdGJvcmRlci1ib3R0b206IDA7XHJcblx0bWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG5cdG1hcmdpbi1ib3R0b206IC0xNXB4O1xyXG5cclxufVxyXG4ubG9nby1pbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbltoZWFkaW5nLWNvbHVtbi1scl17XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQubTEtZmxleC1hbGlnbjogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuW2JpZy1oZWFkaW5nXXtcclxuXHRmb250LWZhbWlseTogXCJIZWViby1Cb2xkXCIgIWltcG9ydGFudDtcclxuXHRmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuXHRjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xyXG59XHJcbltzbWFsbC1oZWFkaW5nXXtcclxuXHRmb250LWZhbWlseTogXCJIZWViby1SZWd1bGFyXCIgbGltcG9ydGFudDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztwYWRkaW5nLXJpZ2h0OiA3MHB4O2ZvbnQtc2l6ZTogMTVweFxyXG59XHJcbmlvbi1sYWJlbHtcclxuXHRjb2xvcjogIzAwMDtcclxuXHRvcGFjaXR5OiA4O1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5pb24tY29udGVudHtcclxuXHQtLWJhY2tncm91bmQ6ICNmYWZhZmE7IFxyXG59XHJcblt0cmFuc3BhcmVudF17XHJcblx0LS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4gaW9uLWlucHV0e1xyXG5cdCAtLWNvbG9yOiAjMDAwO1xyXG5cdCAtLXBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG5cdCAtLXBhZGRpbmctdG9wOiAxNXB4O1xyXG5cdCAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XHJcblx0IGZvbnQtc2l6ZTogMTVweDtcclxuXHQgdGV4dC1pbmRlbnQ6IDFweDtcclxuXHQgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBbaWNvbi1zbWFsbF17XHJcblx0IHdpZHRoOiAzMHB4O1xyXG5cclxuIH1cclxuIGlvbi1pdGVte1xyXG5cdCAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuXHQgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG5cdCAtLWhpZ2hsaWdodC1jb2xvci1pbnZhbGlkOiMwMDA7XHJcblx0IC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiNkZGQ7XHJcblx0IC0tbWluLWhlaWdodDogNjVweDtcclxuXHQgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5cclxuIH1cclxuIFtsaW5lc3BhY2Vde1xyXG5cdCBoZWlnaHQ6IDMwcHg7XHJcbiB9XHJcbiBbaW9uLWxhYmVsXXtcclxuXHQgY29sb3I6ICMwMDA7XHJcblx0IG9wYWNpdHk6IC44O1xyXG5cdCBmb250LXNpemU6IDEzcHg7XHJcblx0IGRpc3BsYXk6IGJsb2NrO1xyXG4gfVxyXG4gLmZvcmdldC1wYXNzd29yZHtcclxuXHRjb2xvcjogIzAwMDtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogMTBweDtcclxufVxyXG4uZm9ybS1ncm91cCAuZm9ybS1jb250cm9se1xyXG5cdGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuLm1vZGFsLXRpdGxle1xyXG5cdGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG4uZm9ybS1ncm91cCAuYnRue1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblx0YmFja2dyb3VuZDogIzA0QjQwNDtcclxuXHRsaW5lLWhlaWdodDogbm9ybWFsO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFxyXG5cdFxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUhlZWJvOjEwMCwzMDAsNDAwLDUwMCw3MDAsODAwLDkwMCZkaXNwbGF5PXN3YXBcIik7XG4ubG9naW4taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtY29sb3IpO1xufVxuXG4ubG9naW4taGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDBlbTtcbn1cblxuLmxvZ2luLWhlYWRlcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAxNSU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICBib3JkZXItYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xufVxuXG4ubG9nby1pbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5baGVhZGluZy1jb2x1bW4tbHJdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLm0xLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuW2JpZy1oZWFkaW5nXSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlZWJvLUJvbGRcIiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbn1cblxuW3NtYWxsLWhlYWRpbmddIHtcbiAgZm9udC1mYW1pbHk6IFwiSGVlYm8tUmVndWxhclwiIGxpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiA4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cblxuW3RyYW5zcGFyZW50XSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tY29sb3I6ICMwMDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIC0tcGFkZGluZy10b3A6IDE1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWluZGVudDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuW2ljb24tc21hbGxdIHtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgLS1oaWdobGlnaHQtY29sb3ItaW52YWxpZDojMDAwO1xuICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDojZGRkO1xuICAtLW1pbi1oZWlnaHQ6IDY1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbn1cblxuW2xpbmVzcGFjZV0ge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbltpb24tbGFiZWxdIHtcbiAgY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvcmdldC1wYXNzd29yZCB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZvcm0tZ3JvdXAgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbi5tb2RhbC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9ybS1ncm91cCAuYnRuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICMwNEI0MDQ7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(_authenfication, _router, formBuilder, alertService) {
        this._authenfication = _authenfication;
        this._router = _router;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.submitted = false;
        this.loading = false;
        this.loginUserData = {};
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(LoginPage.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        if (this.loginForm.invalid) {
            return;
        }
        // console.log(this.loginUserData);
        this.loading = true;
        this._authenfication.login(this.f.email.value, this.f.password.value)
            .subscribe(function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var jwt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                jwt = res.body['access_token']['accessToken'];
                this._authenfication.saveToken(jwt);
                this._authenfication.saveUser(res.body['user']);
                this._router.navigate(['/todo']);
                return [2 /*return*/];
            });
        }); }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module-es5.js.map