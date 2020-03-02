(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todo-todo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n      <ion-buttons slot=\"end\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title> Controle permanent</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\" id=\"carte\">\n      \n        <!-- <ion-card-header>\n           <ion-card-subtitle>Bienvenue à l'apllication controle permanent</ion-card-subtitle>\n          <ion-card-title> Et détection de faux documents\n            \n            </ion-card-title> \n        </ion-card-header> -->\n        <ion-card-content style=\"text-align: center;\">\n          <p style=\"font-size: 20px;\">\n            liste des clients à visiter          \n          </p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-list>\n            <h2 *ngFor=\"let u of listuser\">\n              <ion-item>  \n                {{u.telephone}} \n             <ion-button slot=\"end\" color=\"energized\" routerLink=\"/register\"> <ion-icon name=\"add\"></ion-icon></ion-button>\n              </ion-item>\n            </h2>\n          \n        \n          </ion-list>\n      </ion-card>\n</ion-content>\n\n  \n\n"

/***/ }),

/***/ "./src/app/todo/todo-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/todo/todo-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TodoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPageRoutingModule", function() { return TodoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.page */ "./src/app/todo/todo.page.ts");




var routes = [
    {
        path: '',
        component: _todo_page__WEBPACK_IMPORTED_MODULE_3__["TodoPage"]
    }
];
var TodoPageRoutingModule = /** @class */ (function () {
    function TodoPageRoutingModule() {
    }
    TodoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TodoPageRoutingModule);
    return TodoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/todo/todo.module.ts":
/*!*************************************!*\
  !*** ./src/app/todo/todo.module.ts ***!
  \*************************************/
/*! exports provided: TodoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPageModule", function() { return TodoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _todo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-routing.module */ "./src/app/todo/todo-routing.module.ts");
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo.page */ "./src/app/todo/todo.page.ts");







var TodoPageModule = /** @class */ (function () {
    function TodoPageModule() {
    }
    TodoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _todo_routing_module__WEBPACK_IMPORTED_MODULE_5__["TodoPageRoutingModule"]
            ],
            declarations: [_todo_page__WEBPACK_IMPORTED_MODULE_6__["TodoPage"]]
        })
    ], TodoPageModule);
    return TodoPageModule;
}());



/***/ }),

/***/ "./src/app/todo/todo.page.scss":
/*!*************************************!*\
  !*** ./src/app/todo/todo.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin: 10px;\n  width: 250px;\n}\n\nion-toolbar {\n  background-color: 0;\n}\n\nion-button {\n  background: #e28008;\n}\n\nion-icon {\n  color: white;\n}\n\nh2 {\n  color: #50A125;\n}\n\nion-card-content {\n  color: #e28008;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9DOlxcVXNlcnNcXFNleW5hYm91IE5kaWF5ZVxcbWFua28tYXBwLWlvbmljL3NyY1xcYXBwXFx0b2RvXFx0b2RvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdG9kby90b2RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFlBQUE7RUFDQyxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBRElFO0VBR0UsbUJBQUE7QUNISjs7QURNRTtFQUNJLFlBQUE7QUNITjs7QURLRTtFQUNFLGNBQUE7QUNGSjs7QURJRTtFQUNFLGNBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgbWFyZ2luOiAxMHB4OyBcclxuICAgIHdpZHRoOiAyNTBweDtcclxufVxyXG5pb24tdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuKCRjb2xvcjogIzAwMDAwMCk7XHJcbiAgfVxyXG4gIGlvbi10aXRsZXtcclxuICAgICAgLy8gY29sb3I6ICB3aGl0ZTtcclxuICAgICAgLy8gd2lkdGg6IDUwJTtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIC8vIGNvbG9yOnJnYigzNCwgMTczLCAzNCk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoNjksIDE5NiwgNjkpO1xyXG4gICAgYmFja2dyb3VuZDogI2UyODAwODtcclxuXHJcbiAgfVxyXG4gIGlvbi1pY29ue1xyXG4gICAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgaDJ7XHJcbiAgICBjb2xvcjojNTBBMTI1OyBcclxuICB9XHJcbiAgaW9uLWNhcmQtY29udGVudHtcclxuICAgIGNvbG9yOiNlMjgwMDg7XHJcbiAgfVxyXG4iLCJpb24taXRlbSB7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IDA7XG59XG5cbmlvbi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZTI4MDA4O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDIge1xuICBjb2xvcjogIzUwQTEyNTtcbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGNvbG9yOiAjZTI4MDA4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/todo/todo.page.ts":
/*!***********************************!*\
  !*** ./src/app/todo/todo.page.ts ***!
  \***********************************/
/*! exports provided: TodoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoPage", function() { return TodoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var TodoPage = /** @class */ (function () {
    function TodoPage(_aut, router, navCtrl, render) {
        this._aut = _aut;
        this.router = router;
        this.navCtrl = navCtrl;
        this.render = render;
        this.listuser = [];
        this.PtagClicked = false;
    }
    TodoPage.prototype.ngOnInit = function () {
        var _this = this;
        this._aut.todo()
            .subscribe(function (res) { return _this.listuser = res['data']; }, function (error) { return console.log(error); });
    };
    TodoPage.prototype.onHide = function (controlToHide) {
        this.render.setStyle(controlToHide, 'visibility', 'hidden');
    };
    TodoPage.ctorParameters = function () { return [
        { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    TodoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! raw-loader!./todo.page.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo.page.html"),
            styles: [__webpack_require__(/*! ./todo.page.scss */ "./src/app/todo/todo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], TodoPage);
    return TodoPage;
}());



/***/ })

}]);
//# sourceMappingURL=todo-todo-module-es5.js.map