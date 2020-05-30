(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header no-border>\r\n  \r\n  \r\n</ion-header>\r\n<ion-content>\r\n\r\n\r\n<div class=\"wrapper fadeInDown\">\r\n  <div id=\"formContent\">\r\n   \r\n    <div class=\"fadeIn first\">\r\n      <img src=\"/assets/img/LOGO-VERT.png\" id=\"icon\" alt=\"User Icon\" />\r\n    </div>\r\n\r\n  \r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser()\" style=\"margin-top: 30px;\" >\r\n      <div class=\"form-group inputIconBg\" >\r\n          <ion-input type=\"text\" id=\"email\"  name=\"email\" placeholder=\"Email\" formControlName=\"email\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\">\r\n            <i class=\"fa fa-envelope fa-lg fa-fw\" aria-hidden=\"true\"></i>\r\n          </ion-input>\r\n          <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.email.errors.required\">Veuillez saisir votre adresse email</div>\r\n        <div *ngIf=\"f.email.errors.email\">Veuillez saisir un mail valide</div>\r\n    </div>\r\n    </div>\r\n  \r\n    <div class=\"form-group inputIconBg\">\r\n      <ion-input type=\"password\" id=\"password\" class=\"fadeIn third\" name=\"login\" placeholder=\"Mot de passe\"formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\">\r\n        <i class=\"fa fa-lock fa-lg fa-fw\" ></i> \r\n      </ion-input> \r\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.password.errors.required\">Veuillez saisir votre mot de passe</div>\r\n        <div *ngIf=\"f.password.errors.minlength\">Veuillez saisir un mot de passe valide</div>\r\n    </div>\r\n    </div>\r\n    \r\n     \r\n   \r\n    <div class=\"form-group\">\r\n      <ion-input type=\"submit\" class=\"fadeIn fourth\" [disabled]=\"loading\" value=\"Connexion\" > </ion-input>\r\n    </div>\r\n    </form>\r\n\r\n    <!-- Remind Passowrd -->\r\n    <div id=\"formFooter\">\r\n      <a class=\"underlineHover\" routerLink=\"/resetpassword\">Mot de passe oublié?</a>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
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



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins\");\n/* BASIC */\nbody {\n  font-family: \"Poppins\", sans-serif;\n  height: 100vh;\n}\na {\n  color: #4dac27;\n  display: inline-block;\n  text-decoration: none;\n  font-weight: 400;\n}\nh2 {\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  display: inline-block;\n  margin: 40px 8px 10px 8px;\n  color: #cccccc;\n}\n/* STRUCTURE */\n.wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  min-height: 100%;\n  padding: 20px;\n}\n#formContent {\n  border-radius: 10px 10px 10px 10px;\n  background: #fff;\n  padding: 50px;\n  width: 90%;\n  max-width: 450px;\n  position: relative;\n  padding: 0px;\n  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);\n  text-align: center;\n}\n#formFooter {\n  background-color: #f6f6f6;\n  border-top: 1px solid #dce8f1;\n  padding: 25px;\n  text-align: center;\n  border-radius: 0 0 10px 10px;\n}\n/* TABS */\n/* FORM TYPOGRAPHY*/\nion-input[type=button], ion-input[type=submit], ion-input[type=reset] {\n  background-color: #4dac27;\n  border: none;\n  color: white;\n  width: 100px;\n  padding: 15px 100px 15px 39px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 10px;\n  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\nion-input[type=button]:hover, ion-input[type=submit]:hover, ion-input[type=reset]:hover {\n  background-color: #4dac27;\n}\nion-input[type=button]:active, ion-input[type=submit]:active, ion-input[type=reset]:active {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n}\nion-input[type=text], ion-input[type=password] {\n  background-color: #f6f6f6;\n  border: none;\n  color: #0d0d0d;\n  padding: 25px 32px;\n  text-align: center;\n  height: 35px;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 10px;\n  margin: 5px;\n  width: 85%;\n  border: 2px solid #f6f6f6;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  border-radius: 5px 5px 5px 5px;\n}\nion-input[type=text]:focus, ion-input[type=password]:focus {\n  background-color: #fff;\n  border-bottom: 2px solid #e28008;\n  border-color: #e28008;\n}\nion-input[type=text]:placeholder {\n  color: #cccccc;\n}\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n    transform: none;\n  }\n}\n/* Simple CSS3 Fade-in Animation */\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  opacity: 0;\n  -webkit-animation: fadeIn ease-in 1;\n  animation: fadeIn ease-in 1;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n}\n.fadeIn.first {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n  top: 30px;\n}\n.fadeIn.second {\n  -webkit-animation-delay: 0.6s;\n  animation-delay: 0.6s;\n}\n.fadeIn.third {\n  -webkit-animation-delay: 0.8s;\n  animation-delay: 0.8s;\n}\n.fadeIn.fourth {\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #4dac27;\n  content: \"\";\n  -webkit-transition: width 0.2s;\n  transition: width 0.2s;\n}\n.underlineHover:hover {\n  color: #0d0d0d;\n}\n.underlineHover:hover:after {\n  width: 100%;\n}\n/* OTHERS */\n*:focus {\n  outline: none;\n}\n#icon {\n  width: 60%;\n}\n* {\n  box-sizing: border-box;\n}\n/* Styles go here */\ndiv {\n  position: relative;\n}\n[placeholder]:focus::-webkit-input-placeholder {\n  color: black;\n}\n/*test*/\nion-input {\n  border: 0;\n  font-family: inherit;\n  -webkit-appearance: none;\n  border-radius: 0;\n  padding: 0;\n  cursor: text;\n}\nion-input:focus {\n  outline: 0;\n  border-bottom: 0.05em;\n}\n.form-group i {\n  position: absolute;\n  color: #aaaaaa;\n  top: -2px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.form-group.inputIconBg i {\n  background-color: #e28008;\n  color: #fff;\n  font-size: 20px;\n  padding-bottom: 17px;\n  padding: 10px;\n  padding-right: 25px;\n  border-radius: 4px 0 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxTZXluYWJvdSBOZGlheWVcXERvY3VtZW50c1xcdGVzdF9pb25pY1xcbWFua28tYXBwLWlvbmljL3NyY1xcYXBwXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ1EsOERBQUE7QUFFUixVQUFBO0FBTUE7RUFDRSxrQ0FBQTtFQUNBLGFBQUE7QUNORjtBRFNBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ05GO0FEU0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNORjtBRFdBLGNBQUE7QUFFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ1RGO0FEWUE7RUFFRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLDRDQUFBO0VBQ0Esa0JBQUE7QUNURjtBRFlBO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLDRCQUFBO0FDVEY7QURZQSxTQUFBO0FBRUEsbUJBQUE7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxpREFBQTtFQUVBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3Q0FBQTtFQUlBLGdDQUFBO0FDWEY7QURjQTtFQUNFLHlCQUFBO0FDWEY7QURjQTtFQUVFLDhCQUFBO0VBR0Esc0JBQUE7QUNYRjtBRGNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFJQSxnQ0FBQTtFQUVBLDhCQUFBO0FDWEY7QURjQTtFQUNFLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtBQ1hGO0FEY0E7RUFDRSxjQUFBO0FDWEY7QURnQkEsZUFBQTtBQUVBLHVDQUFBO0FBQ0E7RUFDRSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUNkRjtBRGlCQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJDQUFBO0lBQ0EsbUNBQUE7RUNkRjtFRGdCQTtJQUNFLFVBQUE7SUFDQSx1QkFBQTtJQUNBLGVBQUE7RUNkRjtBQUNGO0FEaUJBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkNBQUE7SUFDQSxtQ0FBQTtFQ2ZGO0VEaUJBO0lBQ0UsVUFBQTtJQUNBLHVCQUFBO0lBQ0EsZUFBQTtFQ2ZGO0FBQ0Y7QURrQkEsa0NBQUE7QUFDQTtFQUE0QjtJQUFPLFVBQUE7RUNkakM7RURjOEM7SUFBSyxVQUFBO0VDWG5EO0FBQ0Y7QURZQTtFQUFvQjtJQUFPLFVBQUE7RUNBekI7RURBc0M7SUFBSyxVQUFBO0VDRzNDO0FBQ0Y7QURGQTtFQUNFLFVBQUE7RUFDQSxtQ0FBQTtFQUVBLDJCQUFBO0VBRUEscUNBQUE7RUFFQSw2QkFBQTtFQUVBLDhCQUFBO0VBRUEsc0JBQUE7QUNFRjtBRENBO0VBQ0UsNkJBQUE7RUFFQSxxQkFBQTtFQUNBLFNBQUE7QUNFRjtBRENBO0VBQ0UsNkJBQUE7RUFFQSxxQkFBQTtBQ0VGO0FEQ0E7RUFDRSw2QkFBQTtFQUVBLHFCQUFBO0FDRUY7QURDQTtFQUNFLDJCQUFBO0VBRUEsbUJBQUE7QUNFRjtBRENBLGtDQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQUEsc0JBQUE7QUNFRjtBRENBO0VBQ0UsY0FBQTtBQ0VGO0FEQ0E7RUFDRSxXQUFBO0FDRUY7QURHQSxXQUFBO0FBRUE7RUFDSSxhQUFBO0FDREo7QURJQTtFQUNFLFVBQUE7QUNERjtBRE1BO0VBQ0Usc0JBQUE7QUNIRjtBRFFBLG1CQUFBO0FBRUE7RUFDQyxrQkFBQTtBQ05EO0FEU0U7RUFDRCxZQUFBO0FDTkQ7QURRRSxPQUFBO0FBR0E7RUFFQyxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNSSDtBRFVFO0VBQ0MsVUFBQTtFQUNBLHFCQUFBO0FDUEg7QURXRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDUko7QURVRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLDBCQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zJyk7XHJcblxyXG4vKiBCQVNJQyAqL1xyXG5cclxuaW9uLWNvbnRlbnQge1xyXG5cdC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM0ZGFjMjc7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzRkYWMyNztcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7IFxyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFNUUlVDVFVSRSAqL1xyXG5cclxuLndyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNmb3JtQ29udGVudCB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZm9ybUZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZThmMTtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxufVxyXG5cclxuLyogVEFCUyAqL1xyXG5cclxuLyogRk9STSBUWVBPR1JBUEhZKi9cclxuXHJcbmlvbi1pbnB1dFt0eXBlPWJ1dHRvbl0sIGlvbi1pbnB1dFt0eXBlPXN1Ym1pdF0sIGlvbi1pbnB1dFt0eXBlPXJlc2V0XSAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZGFjMjc7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzogMTVweCAxMDBweCAxNXB4IDM5cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgcmdiYSg5NSwxODYsMjMzLDAuNCk7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIG1hcmdpbjogNXB4IDIwcHggNDBweCAyMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlvbi1pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlvbi1pbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZGFjMjc7XHJcbn1cclxuXHJcbmlvbi1pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpb24taW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW9uLWlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSAge1xyXG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG59XHJcblxyXG5pb24taW5wdXRbdHlwZT10ZXh0XSxpb24taW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIHBhZGRpbmc6IDI1cHggMzJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuaW9uLWlucHV0W3R5cGU9dGV4dF06Zm9jdXMgLGlvbi1pbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1c3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTI4MDA4O1xyXG4gIGJvcmRlci1jb2xvcjogI2UyODAwODtcclxufVxyXG5cclxuaW9uLWlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEFOSU1BVElPTlMgKi9cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cclxuLmZhZGVJbkRvd24ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIG9wYWNpdHk6MDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG59XHJcblxyXG4uZmFkZUluLmZpcnN0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZmFkZUluLnNlY29uZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG59XHJcblxyXG4uZmFkZUluLnRoaXJkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uZm91cnRoIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xMHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZGFjMjc7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLyogT1RIRVJTICovXHJcblxyXG4qOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn0gXHJcblxyXG4jaWNvbiB7XHJcbiAgd2lkdGg6NjAlO1xyXG4gIFxyXG5cclxufVxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuICBcclxuICBcclxuLyogU3R5bGVzIGdvIGhlcmUgKi9cclxuXHJcbmRpdntcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIFtwbGFjZWhvbGRlcl06Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG5cdGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLyp0ZXN0Ki9cclxuIFxyXG4gXHJcbiAgaW9uLWlucHV0e1xyXG5cdCBcclxuXHQgIGJvcmRlcjogMDtcclxuXHQgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cdCAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG5cdCAgYm9yZGVyLXJhZGl1czogMDtcclxuXHQgIHBhZGRpbmc6IDA7XHJcblx0ICBjdXJzb3I6IHRleHQ7XHJcbiAgfVxyXG4gIGlvbi1pbnB1dDpmb2N1c3tcclxuXHQgIG91dGxpbmU6IDA7XHJcblx0ICBib3JkZXItYm90dG9tOiAwLjA1ZW07XHJcbiAgfVxyXG4gXHJcbiBcclxuICAuZm9ybS1ncm91cCBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4gICAgdG9wOiAtMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICB9XHJcbiAgLmZvcm0tZ3JvdXAuaW5wdXRJY29uQmcgaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI4MDA4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTdweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4gIH1cclxuICBcclxuICAiLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zXCIpO1xuLyogQkFTSUMgKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmEge1xuICBjb2xvcjogIzRkYWMyNztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cbi8qIFNUUlVDVFVSRSAqL1xuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNmb3JtQ29udGVudCB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA0NTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNmb3JtRm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xufVxuXG4vKiBUQUJTICovXG4vKiBGT1JNIFRZUE9HUkFQSFkqL1xuaW9uLWlucHV0W3R5cGU9YnV0dG9uXSwgaW9uLWlucHV0W3R5cGU9c3VibWl0XSwgaW9uLWlucHV0W3R5cGU9cmVzZXRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkYWMyNztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZzogMTVweCAxMDBweCAxNXB4IDM5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsIDE4NiwgMjMzLCAwLjQpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsIDE4NiwgMjMzLCAwLjQpO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xuICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbmlvbi1pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlvbi1pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlvbi1pbnB1dFt0eXBlPXJlc2V0XTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZGFjMjc7XG59XG5cbmlvbi1pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpb24taW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW9uLWlucHV0W3R5cGU9cmVzZXRdOmFjdGl2ZSB7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cblxuaW9uLWlucHV0W3R5cGU9dGV4dF0sIGlvbi1pbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwZDBkMGQ7XG4gIHBhZGRpbmc6IDI1cHggMzJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogODUlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjZmNmY2O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbn1cblxuaW9uLWlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlvbi1pbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTI4MDA4O1xuICBib3JkZXItY29sb3I6ICNlMjgwMDg7XG59XG5cbmlvbi1pbnB1dFt0eXBlPXRleHRdOnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG5cbi8qIEFOSU1BVElPTlMgKi9cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cbi5mYWRlSW5Eb3duIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmZhZGVJbiB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xuICAtbW96LWFuaW1hdGlvbjogZmFkZUluIGVhc2UtaW4gMTtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZS1pbiAxO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG59XG5cbi5mYWRlSW4uZmlyc3Qge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgdG9wOiAzMHB4O1xufVxuXG4uZmFkZUluLnNlY29uZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG4uZmFkZUluLnRoaXJkIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XG59XG5cbi5mYWRlSW4uZm91cnRoIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG59XG5cbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXG4udW5kZXJsaW5lSG92ZXI6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAtMTBweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGRhYzI3O1xuICBjb250ZW50OiBcIlwiO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xufVxuXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xuICBjb2xvcjogIzBkMGQwZDtcbn1cblxuLnVuZGVybGluZUhvdmVyOmhvdmVyOmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIE9USEVSUyAqL1xuKjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNpY29uIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qIFN0eWxlcyBnbyBoZXJlICovXG5kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbltwbGFjZWhvbGRlcl06Zm9jdXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qdGVzdCovXG5pb24taW5wdXQge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGN1cnNvcjogdGV4dDtcbn1cblxuaW9uLWlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyLWJvdHRvbTogMC4wNWVtO1xufVxuXG4uZm9ybS1ncm91cCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogI2FhYWFhYTtcbiAgdG9wOiAtMnB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uZm9ybS1ncm91cC5pbnB1dEljb25CZyBpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyODAwODtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDE3cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let LoginPage = class LoginPage {
    constructor(_authenfication, _router, formBuilder, alertService, route) {
        this._authenfication = _authenfication;
        this._router = _router;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.route = route;
        this.submitted = false;
        this.loading = false;
        this.loginUserData = {};
        this.type = 'password';
        this.showPass = false;
        // redirect to home if already logged in
        if (this._authenfication.currentUserValue) {
            this._router.navigate(['/']);
        }
        // }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)]]
        });
    }
    get f() { return this.loginForm.controls; }
    loginUser() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        if (this.loginForm.invalid) {
            return;
        }
        // console.log(this.loginUserData);
        this.loading = true;
        this._authenfication.login(this.f.email.value, this.f.password.value)
            .subscribe((res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let jwt = res.body['token'];
            this._authenfication.saveToken(jwt);
            // this._authenfication.saveUser(res.body['user']);
            this._router.navigate(['/todo']);
            //LocalStorage.setItem('token', res.token)
        }), error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
    //  showPassword() {
    //   this.showPass = !this.showPass;
    //         if(this.showPass){
    //             this.type = 'text';
    //              } else {
    //        this.type = 'password';
    //      }
    //    }
    //  isAdmin(){
    //    return this._authenfication.isAdmin()
    //  }
    // isUser(){
    //   return this._authenfication.isUser()
    // }
    logout() {
        return this._authenfication.logout();
    }
    loggedIn() {
        return this._authenfication.loggIn();
    }
    isAgent() {
        return this._authenfication.isAgent();
    }
    isAthenticated() {
        return this._authenfication.isAuthenticated();
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map