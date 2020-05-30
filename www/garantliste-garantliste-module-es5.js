(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["garantliste-garantliste-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/garantliste/garantliste.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/garantliste/garantliste.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n\n      <ion-buttons slot=\"end\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n    <ion-title> Controle permanent</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <h3>liste des garants</h3>\n  </ion-card>\n  <div >\n  <table>\n    <thead>\n      <tr>\n          <th scope=\"col\">telephone</th>\n          <th scope=\"col\">nom</th>\n          <th scope=\"col\">prenom</th>\n          <th scope=\"col\">modifier</th>\n        \n      </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let u of listgarant\">\n      \n         <td scope=\"row\" data-label=\"telephone\">{{u.telephone}}</td>\n         <td scope=\"row\" data-label=\"nom\">{{u.nom}}</td>\n         <td scope=\"row\" data-label=\"prénom\">{{u.prenom}}</td>\n     <td scope=\"row\" data-label=\"modifier\"><ion-button slot=\"end\" color=\"energized\" (click)=\"modifgarant(u.id)\"> <ion-icon name=\"create\"></ion-icon></ion-button> </td>\n\n    \n  </tr>\n</tbody>\n</table>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/garantliste/garantliste-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/garantliste/garantliste-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: GarantlistePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GarantlistePageRoutingModule", function() { return GarantlistePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _garantliste_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./garantliste.page */ "./src/app/garantliste/garantliste.page.ts");




var routes = [
    {
        path: '',
        component: _garantliste_page__WEBPACK_IMPORTED_MODULE_3__["GarantlistePage"]
    }
];
var GarantlistePageRoutingModule = /** @class */ (function () {
    function GarantlistePageRoutingModule() {
    }
    GarantlistePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], GarantlistePageRoutingModule);
    return GarantlistePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/garantliste/garantliste.module.ts":
/*!***************************************************!*\
  !*** ./src/app/garantliste/garantliste.module.ts ***!
  \***************************************************/
/*! exports provided: GarantlistePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GarantlistePageModule", function() { return GarantlistePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _garantliste_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./garantliste-routing.module */ "./src/app/garantliste/garantliste-routing.module.ts");
/* harmony import */ var _garantliste_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./garantliste.page */ "./src/app/garantliste/garantliste.page.ts");







var GarantlistePageModule = /** @class */ (function () {
    function GarantlistePageModule() {
    }
    GarantlistePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _garantliste_routing_module__WEBPACK_IMPORTED_MODULE_5__["GarantlistePageRoutingModule"]
            ],
            declarations: [_garantliste_page__WEBPACK_IMPORTED_MODULE_6__["GarantlistePage"]]
        })
    ], GarantlistePageModule);
    return GarantlistePageModule;
}());



/***/ }),

/***/ "./src/app/garantliste/garantliste.page.scss":
/*!***************************************************!*\
  !*** ./src/app/garantliste/garantliste.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-button {\n  background-color: #08c008;\n  color: white;\n}\n\nion-card {\n  text-align: center;\n  color: white;\n  background-color: #e28008;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  ion-card {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n  }\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  line-height: 1.25;\n}\n\ntable {\n  border: 1px solid #ccc;\n  border-collapse: collapse;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  table-layout: fixed;\n}\n\ntable caption {\n  font-size: 1.5em;\n  margin: 0.5em 0 0.75em;\n}\n\ntable tr {\n  background-color: #f8f8f8;\n  border: 1px solid #ddd;\n  padding: 0.35em;\n}\n\ntable th,\ntable td {\n  padding: 0.625em;\n  text-align: center;\n}\n\ntable th {\n  font-size: 0.85em;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n}\n\n@media screen and (max-width: 600px) {\n  table {\n    border: 0;\n  }\n\n  table caption {\n    font-size: 1.3em;\n  }\n\n  table thead {\n    border: none;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n  }\n\n  table tr {\n    border-bottom: 3px solid #ddd;\n    display: block;\n    margin-bottom: 0.625em;\n  }\n\n  table td {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: 0.8em;\n    text-align: right;\n  }\n\n  table td::before {\n    /*\n    * aria-label has no advantage, it won't be read inside a table\n    content: attr(aria-label);\n    */\n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n\n  table td:last-child {\n    border-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FyYW50bGlzdGUvQzpcXFVzZXJzXFxTZXluYWJvdSBOZGlheWVcXERvY3VtZW50c1xcdGVzdF9pb25pY1xcbWFua28tYXBwLWlvbmljL3NyY1xcYXBwXFxnYXJhbnRsaXN0ZVxcZ2FyYW50bGlzdGUucGFnZS5zY3NzIiwic3JjL2FwcC9nYXJhbnRsaXN0ZS9nYXJhbnRsaXN0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQUE7RUFBNkI7SUFDekIsd0JBQUE7SUFBQSxnQkFBQTtJQUNBLE1BQUE7RUNJRjtBQUNGOztBREZBO0VBQ0ksb0NBQUE7RUFDQSxpQkFBQTtBQ0lKOztBRERFO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDSUo7O0FEREU7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FDSUo7O0FEREU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0lKOztBRERFOztFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURERTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0lKOztBRERFO0VBQ0U7SUFDRSxTQUFBO0VDSUo7O0VEREU7SUFDRSxnQkFBQTtFQ0lKOztFRERFO0lBQ0UsWUFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUNJSjs7RURERTtJQUNFLDZCQUFBO0lBQ0EsY0FBQTtJQUNBLHNCQUFBO0VDSUo7O0VEREU7SUFDRSw2QkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VDSUo7O0VEREU7SUFDRTs7O0tBQUE7SUFJQSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtJQUNBLHlCQUFBO0VDSUo7O0VEREU7SUFDRSxnQkFBQTtFQ0lKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9nYXJhbnRsaXN0ZS9nYXJhbnRsaXN0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDE5MiwgOCk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuaW9uLWNhcmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI4MDA4O1xyXG59XHJcbkBzdXBwb3J0cyhwb3NpdGlvbjogc3RpY2t5KXsgaW9uLWNhcmR7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgfVxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUgY2FwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgbWFyZ2luOiAuNWVtIDAgLjc1ZW07XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHRyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogLjM1ZW07XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHRoLFxyXG4gIHRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IC42MjVlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUgdGgge1xyXG4gICAgZm9udC1zaXplOiAuODVlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMWVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIHRhYmxlIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdGFibGUgY2FwdGlvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRhYmxlIHRoZWFkIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRhYmxlIHRyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNkZGQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAuNjI1ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRhYmxlIHRkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0YWJsZSB0ZDo6YmVmb3JlIHtcclxuICAgICAgLypcclxuICAgICAgKiBhcmlhLWxhYmVsIGhhcyBubyBhZHZhbnRhZ2UsIGl0IHdvbid0IGJlIHJlYWQgaW5zaWRlIGEgdGFibGVcclxuICAgICAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcclxuICAgICAgKi9cclxuICAgICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0YWJsZSB0ZDpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIH1cclxuICB9XHJcbiAiLCJpb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4YzAwODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI4MDA4O1xufVxuXG5Ac3VwcG9ydHMgKHBvc2l0aW9uOiBzdGlja3kpIHtcbiAgaW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICB9XG59XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbnRhYmxlIGNhcHRpb24ge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW46IDAuNWVtIDAgMC43NWVtO1xufVxuXG50YWJsZSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDAuMzVlbTtcbn1cblxudGFibGUgdGgsXG50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDAuNjI1ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGFibGUgdGgge1xuICBmb250LXNpemU6IDAuODVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICB0YWJsZSB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgdGFibGUgY2FwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgfVxuXG4gIHRhYmxlIHRoZWFkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuICB9XG5cbiAgdGFibGUgdHIge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1ZW07XG4gIH1cblxuICB0YWJsZSB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIHRhYmxlIHRkOjpiZWZvcmUge1xuICAgIC8qXG4gICAgKiBhcmlhLWxhYmVsIGhhcyBubyBhZHZhbnRhZ2UsIGl0IHdvbid0IGJlIHJlYWQgaW5zaWRlIGEgdGFibGVcbiAgICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xuICAgICovXG4gICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/garantliste/garantliste.page.ts":
/*!*************************************************!*\
  !*** ./src/app/garantliste/garantliste.page.ts ***!
  \*************************************************/
/*! exports provided: GarantlistePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GarantlistePage", function() { return GarantlistePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GarantlistePage = /** @class */ (function () {
    function GarantlistePage(_aut, _router) {
        this._aut = _aut;
        this._router = _router;
    }
    GarantlistePage.prototype.ngOnInit = function () {
        var _this = this;
        this._aut.listgarant()
            .subscribe(function (res) {
            _this.listgarant = res;
        }, function (error) { return console.log(error); });
    };
    GarantlistePage.prototype.modifgarant = function (id) {
        this._router.navigate(['garantupdate', id]);
    };
    GarantlistePage.ctorParameters = function () { return [
        { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    GarantlistePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-garantliste',
            template: __webpack_require__(/*! raw-loader!./garantliste.page.html */ "./node_modules/raw-loader/index.js!./src/app/garantliste/garantliste.page.html"),
            styles: [__webpack_require__(/*! ./garantliste.page.scss */ "./src/app/garantliste/garantliste.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GarantlistePage);
    return GarantlistePage;
}());



/***/ })

}]);
//# sourceMappingURL=garantliste-garantliste-module-es5.js.map