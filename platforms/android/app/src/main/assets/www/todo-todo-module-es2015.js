(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todo-todo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n      <ion-buttons slot=\"end\" >\n          <ion-menu-button ></ion-menu-button>\n        </ion-buttons>\n    <ion-title> Controle permanent</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\" id=\"carte\">\n      \n       \n        <ion-card-content style=\"text-align: center;\">\n          <p style=\"font-size: 20px;\">\n            liste des clients à visiter          \n          </p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-list>\n            <h2 *ngFor=\"let u of listuser\">\n              <ion-item>  \n                {{u.telephone}} \n             <ion-button slot=\"end\" color=\"energized\" routerLink=\"/register\"> <ion-icon name=\"add\"></ion-icon></ion-button>\n              </ion-item>\n            </h2>\n          \n        \n          </ion-list>\n      </ion-card>\n</ion-content>\n\n  \n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo.page */ "./src/app/todo/todo.page.ts");




const routes = [
    {
        path: '',
        component: _todo_page__WEBPACK_IMPORTED_MODULE_3__["TodoPage"]
    }
];
let TodoPageRoutingModule = class TodoPageRoutingModule {
};
TodoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TodoPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _todo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-routing.module */ "./src/app/todo/todo-routing.module.ts");
/* harmony import */ var _todo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo.page */ "./src/app/todo/todo.page.ts");







let TodoPageModule = class TodoPageModule {
};
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



/***/ }),

/***/ "./src/app/todo/todo.page.scss":
/*!*************************************!*\
  !*** ./src/app/todo/todo.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin: 15px;\n  font-weight: bold;\n}\n\nion-toolbar {\n  background-color: 0;\n}\n\nion-title {\n  font-size: 15px;\n  text-align: center;\n}\n\nion-button {\n  background: #50A125;\n}\n\nion-icon {\n  color: white;\n}\n\nh2 {\n  color: #50A125;\n}\n\nion-card-content {\n  background-color: #e28008;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9DOlxcVXNlcnNcXFNleW5hYm91IE5kaWF5ZVxcbWFua28tYXBwLWlvbmljL3NyY1xcYXBwXFx0b2RvXFx0b2RvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdG9kby90b2RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLFlBQUE7RUFDQSxpQkFBQTtBQ0NIOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURDRTtFQUNHLGVBQUE7RUFDQSxrQkFBQTtBQ0VMOztBREFFO0VBR0UsbUJBQUE7QUNDSjs7QURFRTtFQUNJLFlBQUE7QUNDTjs7QURDRTtFQUNFLGNBQUE7QUNFSjs7QURBRTtFQUNDLHlCQUFBO0VBQ0QsWUFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvdG9kby90b2RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICBtYXJnaW46IDE1cHg7IFxyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIFxyXG59XHJcbmlvbi10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4oJGNvbG9yOiAjMDAwMDAwKTtcclxuICB9XHJcbiAgaW9uLXRpdGxle1xyXG4gICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGlvbi1idXR0b257XHJcbiAgICAvLyBjb2xvcjpyZ2IoMzQsIDE3MywgMzQpO1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDY5LCAxOTYsIDY5KTtcclxuICAgIGJhY2tncm91bmQ6IzUwQTEyNSA7XHJcblxyXG4gIH1cclxuICBpb24taWNvbntcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIGgye1xyXG4gICAgY29sb3I6IzUwQTEyNTsgXHJcbiAgfVxyXG4gIGlvbi1jYXJkLWNvbnRlbnR7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNlMjgwMDg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIFxyXG5cclxuICB9XHJcbiIsImlvbi1pdGVtIHtcbiAgbWFyZ2luOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAwO1xufVxuXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICM1MEExMjU7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5oMiB7XG4gIGNvbG9yOiAjNTBBMTI1O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyODAwODtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let TodoPage = class TodoPage {
    constructor(_aut, router, navCtrl, render) {
        this._aut = _aut;
        this.router = router;
        this.navCtrl = navCtrl;
        this.render = render;
        this.listuser = [];
        this.PtagClicked = false;
    }
    ngOnInit() {
        this._aut.todo()
            .subscribe(res => this.listuser = res['data'], error => console.log(error));
    }
    onHide(controlToHide) {
        this.render.setStyle(controlToHide, 'visibility', 'hidden');
    }
};
TodoPage.ctorParameters = () => [
    { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
TodoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: __webpack_require__(/*! raw-loader!./todo.page.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo.page.html"),
        styles: [__webpack_require__(/*! ./todo.page.scss */ "./src/app/todo/todo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], TodoPage);



/***/ })

}]);
//# sourceMappingURL=todo-todo-module-es2015.js.map