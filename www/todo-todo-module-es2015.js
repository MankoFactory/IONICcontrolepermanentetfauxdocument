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

module.exports = "ion-item {\n  margin: 15px;\n  font-weight: bold;\n}\n\nion-toolbar {\n  background-color: 0;\n}\n\nion-title {\n  font-size: 15px;\n  text-align: center;\n}\n\nion-button {\n  background: #50A125;\n}\n\nion-icon {\n  color: white;\n}\n\nh2 {\n  color: #50A125;\n}\n\nion-card {\n  text-align: center;\n  color: white;\n  background-color: #e28008;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  ion-card {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby9DOlxcVXNlcnNcXFNleW5hYm91IE5kaWF5ZVxcRG9jdW1lbnRzXFx0ZXN0X2lvbmljXFxtYW5rby1hcHAtaW9uaWMvc3JjXFxhcHBcXHRvZG9cXHRvZG8ucGFnZS5zY3NzIiwic3JjL2FwcC90b2RvL3RvZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csWUFBQTtFQUNBLGlCQUFBO0FDQ0g7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBRENFO0VBQ0csZUFBQTtFQUNBLGtCQUFBO0FDRUw7O0FEQUU7RUFHRSxtQkFBQTtBQ0NKOztBREVFO0VBQ0ksWUFBQTtBQ0NOOztBRENFO0VBQ0UsY0FBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNHSjs7QURERTtFQUE2QjtJQUMzQix3QkFBQTtJQUFBLGdCQUFBO0lBQ0EsTUFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90b2RvL3RvZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgIG1hcmdpbjogMTVweDsgXHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgXHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbigkY29sb3I6ICMwMDAwMDApO1xyXG4gIH1cclxuICBpb24tdGl0bGV7XHJcbiAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIC8vIGNvbG9yOnJnYigzNCwgMTczLCAzNCk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoNjksIDE5NiwgNjkpO1xyXG4gICAgYmFja2dyb3VuZDojNTBBMTI1IDtcclxuXHJcbiAgfVxyXG4gIGlvbi1pY29ue1xyXG4gICAgICBjb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgaDJ7XHJcbiAgICBjb2xvcjojNTBBMTI1OyBcclxuICB9XHJcbiAgaW9uLWNhcmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlMjgwMDggO1xyXG4gIH1cclxuICBAc3VwcG9ydHMocG9zaXRpb246IHN0aWNreSl7IGlvbi1jYXJke1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRvcDogMDtcclxuICAgIH1cclxuICAgIH1cclxuIiwiaW9uLWl0ZW0ge1xuICBtYXJnaW46IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IDA7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzUwQTEyNTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmgyIHtcbiAgY29sb3I6ICM1MEExMjU7XG59XG5cbmlvbi1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjgwMDg7XG59XG5cbkBzdXBwb3J0cyAocG9zaXRpb246IHN0aWNreSkge1xuICBpb24tY2FyZCB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gIH1cbn0iXX0= */"

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