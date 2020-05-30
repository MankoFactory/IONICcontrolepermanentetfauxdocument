(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modif-modif-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modif/modif.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modif/modif.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-buttons slot=\"end\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"sticky\">\n    <ion-card >\n        <ion-card-content style=\"text-align: center;\">\n          <p style=\"font-size: 20px;\">\n           Modification d'un client         \n          </p>\n        </ion-card-content>\n    </ion-card>\n\n \n          <div [hidden]=\"submitted\" >\n            <div class=\"container\">\n            <form #userForm=\"ngForm\" (ngSubmit)=\"update(userForm)\">\n\n              <div class=\"form-group\">\n                <label for=\"tel\">Telephone 1</label>\n                <input type=\"tel\" id=\"tel\"class=\"form-control\" id=\"telephone\"  [(ngModel)]=\"client.telephone\" name=\"telephone\" [pattern]=\"telephonePattern\" #telephone=\"ngModel\">\n                <div *ngIf=\"telephone.errors && userForm.submitted && !isValidFormSubmitted\" [ngClass] = \"'error'\"> \n                  <div *ngIf=\"telephone.errors.pattern\" class=\"error\"> \n                    veuillez saisir un numéro valide\n                  </div>\t\n              </div>\n              </div>\n          \n              <div class=\"form-group\">\n                <label for=\"tel1\">Telephone 2</label>\n                <input type=\"tel\" id=\"tel1\" class=\"form-control\" id=\"telephone1\" [(ngModel)]=\"client.telephone1\" name=\"telephone1\" [pattern]=\"telephonePattern\" #telephone1=\"ngModel\">\n                <div *ngIf=\"telephone1.errors && userForm.submitted && !isValidFormSubmitted\" [ngClass] = \"'error'\"> \n                  <div *ngIf=\"telephone.errors.pattern\" class=\"error\"> \n                    veuillez saisir un numéro valide\n                  </div>\n              </div>\n          </div>\n\n              <div class=\"form-group\">\n                <label for=\"nom\">Nom:</label>\n                <input type=\"text\" id=\"nom\" class=\"form-control\" id=\"nom\"  [(ngModel)]=\"client.nom\" name=\"nom\" [pattern]=\"nomPattern\" #nom=\"ngModel\">\n                <div *ngIf=\"nom.errors && userForm.submitted && !isValidFormSubmitted\" [ngClass] = \"'error'\"> \n                  <div *ngIf=\"nom.errors.pattern\" class=\"error\"> \n                   veuillez saisir un nom valide\n                  </div>\n              </div>\n             </div>\n\n              <div class=\"form-group\">\n                <label for=\"pren\">Prénom:</label>\n                <input type=\"text\" id=\"pren\" class=\"form-control\" id=\"prenom\"  [(ngModel)]=\"client.prenom\" name=\"prenom\" [pattern]=\"nomPattern\" #prenom=\"ngModel\">\n                <div *ngIf=\"prenom.errors && userForm.submitted && !isValidFormSubmitted\" [ngClass] = \"'error'\"> \n                  <div *ngIf=\"prenom.errors.pattern\" class=\"error\"> \n                    veuillez saisir un prenom valide\n                  </div>\n              </div>\n   </div>\n              <div class=\"form-group\">\n                <label for=\"date\">Date de naissance:</label>\n                <input type=\"date\" id=\"date\" class=\"form-control\" id=\"date_naissance\"  [(ngModel)]=\"client.date_naissance\" name=\"date_naissance\"  #date_naissance=\"ngModel\">\n               \n             \n              </div>\n              <div class=\"form-group\">\n                <label for=\"lieu\">Lieu naissance:</label>\n                <input type=\"text\" id=\"lieu\" class=\"form-control\" id=\"lieu_naissance\"  [(ngModel)]=\"client.lieu_naissance\" name=\"lieu_naissance\">\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"cni\">CNI:</label>\n                <input type=\"number\" id=\"cni\" class=\"form-control\" id=\"num_cni\"  [(ngModel)]=\"client.num_cni\" name=\"num_cni\" [pattern]=\"cniPattern\" #num_cni=\"ngModel\">\n                <div *ngIf=\"num_cni.errors && userForm.submitted && !isValidFormSubmitted\" [ngClass] = \"'error'\"> \n                  <div *ngIf=\"num_cni.errors.pattern\" class=\"error\"> \n                    veuillez saisir un cni valide\n                  </div>\n              </div>\n          </div>\n              <div class=\"form-group\">\n                <label for=\"ad\">Adresse:</label>\n                <input type=\"text\" id=\"ad\" class=\"form-control\" id=\"adresse_client\"  [(ngModel)]=\"client.adresse_client\" name=\"adresse_client\" >\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"act\">Activité:</label>\n                <input type=\"text\" id=\"act\" class=\"form-control\" id=\"activite\"  [(ngModel)]=\"client.activite\" name=\"activite\" [pattern]=\"nomPattern\" #activite=\"ngModel\">\n                <div *ngIf=\"activite.errors && userForm.submitted && !isValidFormSubmitted\" [ngClass] = \"'error'\"> \n                  <div *ngIf=\"activite.errors.pattern\" class=\"error\"> \n                    veuillez saisir une activité valide\n                  </div>\n              </div>\n</div>\n              <div class=\"form-group\">\n                <label for=\"ag\">Agence:</label>\n                <input type=\"text\" id=\"ag\" class=\"form-control\" id=\"agence\"  [(ngModel)]=\"client.agence\" name=\"agence\">\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"sexe\">Genre:</label>\n                <input type=\"text\" id=\"sexe\" class=\"form-control\" id=\"sexe\"  [(ngModel)]=\"client.sexe\" name=\"sexe\">\n              </div>\n\n             <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-block\" >Submit</button>\n            </div>\n\n            </form>\n          </div>\n        </div>\n \n</div>\n</ion-content> \n"

/***/ }),

/***/ "./src/app/modif/modif-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modif/modif-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ModifPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifPageRoutingModule", function() { return ModifPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modif_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modif.page */ "./src/app/modif/modif.page.ts");




const routes = [
    {
        path: '',
        component: _modif_page__WEBPACK_IMPORTED_MODULE_3__["ModifPage"]
    }
];
let ModifPageRoutingModule = class ModifPageRoutingModule {
};
ModifPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModifPageRoutingModule);



/***/ }),

/***/ "./src/app/modif/modif.module.ts":
/*!***************************************!*\
  !*** ./src/app/modif/modif.module.ts ***!
  \***************************************/
/*! exports provided: ModifPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifPageModule", function() { return ModifPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modif_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modif-routing.module */ "./src/app/modif/modif-routing.module.ts");
/* harmony import */ var _modif_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modif.page */ "./src/app/modif/modif.page.ts");







let ModifPageModule = class ModifPageModule {
};
ModifPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modif_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModifPageRoutingModule"]
        ],
        declarations: [_modif_page__WEBPACK_IMPORTED_MODULE_6__["ModifPage"]]
    })
], ModifPageModule);



/***/ }),

/***/ "./src/app/modif/modif.page.scss":
/*!***************************************!*\
  !*** ./src/app/modif/modif.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  text-align: center;\n  color: white;\n  background-color: #e28008;\n}\n\n/*css form*/\n\n/* Style inputs with type=\"text\", select elements and textareas */\n\ninput[type=text] {\n  width: 100%;\n  /* Full width */\n  padding: 12px;\n  /* Some padding */\n  border: 1px solid #ccc;\n  /* Gray border */\n  border-radius: 4px;\n  /* Rounded borders */\n  box-sizing: border-box;\n  /* Make sure that padding and width stays in place */\n  margin-top: 6px;\n  /* Add a top margin */\n  margin-bottom: 16px;\n  /* Bottom margin */\n  resize: vertical;\n}\n\n/* Style the submit button with a specific background color etc */\n\nbutton[type=submit] {\n  background-color: #4CAF50;\n  color: white;\n  margin: 10px;\n  border: none;\n  float: right;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n/* When moving the mouse over the submit button, add a darker green color */\n\nbutton[type=submit]:hover {\n  background-color: #45a049;\n}\n\n/* Add a background color and some padding around the form */\n\n.container {\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  ion-card {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n  }\n}\n\n.error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kaWYvQzpcXFVzZXJzXFxTZXluYWJvdSBOZGlheWVcXERvY3VtZW50c1xcdGVzdF9pb25pY1xcbWFua28tYXBwLWlvbmljL3NyY1xcYXBwXFxtb2RpZlxcbW9kaWYucGFnZS5zY3NzIiwic3JjL2FwcC9tb2RpZi9tb2RpZi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBLFdBQUE7O0FBQ0EsaUVBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQWEsZUFBQTtFQUNiLGFBQUE7RUFBZSxpQkFBQTtFQUNmLHNCQUFBO0VBQXdCLGdCQUFBO0VBQ3hCLGtCQUFBO0VBQW9CLG9CQUFBO0VBQ3BCLHNCQUFBO0VBQXdCLG9EQUFBO0VBQ3hCLGVBQUE7RUFBaUIscUJBQUE7RUFDakIsbUJBQUE7RUFBcUIsa0JBQUE7RUFDckIsZ0JBQUE7QUNRRjs7QURMQSxpRUFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1FGOztBRExBLDJFQUFBOztBQUNBO0VBQ0UseUJBQUE7QUNRRjs7QURMQSw0REFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0FDUUY7O0FETkE7RUFBNkI7SUFDN0Isd0JBQUE7SUFBQSxnQkFBQTtJQUNBLE1BQUE7RUNVRTtBQUNGOztBRFJBO0VBQ0UsVUFBQTtBQ1VGIiwiZmlsZSI6InNyYy9hcHAvbW9kaWYvbW9kaWYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlMjgwMDggO1xyXG59XHJcblxyXG4vKmNzcyBmb3JtKi9cclxuLyogU3R5bGUgaW5wdXRzIHdpdGggdHlwZT1cInRleHRcIiwgc2VsZWN0IGVsZW1lbnRzIGFuZCB0ZXh0YXJlYXMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBwYWRkaW5nOiAxMnB4OyAvKiBTb21lIHBhZGRpbmcgKi8gXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLyogR3JheSBib3JkZXIgKi9cclxuICBib3JkZXItcmFkaXVzOiA0cHg7IC8qIFJvdW5kZWQgYm9yZGVycyAqL1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIE1ha2Ugc3VyZSB0aGF0IHBhZGRpbmcgYW5kIHdpZHRoIHN0YXlzIGluIHBsYWNlICovXHJcbiAgbWFyZ2luLXRvcDogNnB4OyAvKiBBZGQgYSB0b3AgbWFyZ2luICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDsgLyogQm90dG9tIG1hcmdpbiAqL1xyXG4gIHJlc2l6ZTogdmVydGljYWwgLyogQWxsb3cgdGhlIHVzZXIgdG8gdmVydGljYWxseSByZXNpemUgdGhlIHRleHRhcmVhIChub3QgaG9yaXpvbnRhbGx5KSAqL1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgc3VibWl0IGJ1dHRvbiB3aXRoIGEgc3BlY2lmaWMgYmFja2dyb3VuZCBjb2xvciBldGMgKi9cclxuYnV0dG9uW3R5cGU9c3VibWl0XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogV2hlbiBtb3ZpbmcgdGhlIG1vdXNlIG92ZXIgdGhlIHN1Ym1pdCBidXR0b24sIGFkZCBhIGRhcmtlciBncmVlbiBjb2xvciAqL1xyXG5idXR0b25bdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xyXG59XHJcblxyXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBzb21lIHBhZGRpbmcgYXJvdW5kIHRoZSBmb3JtICovXHJcbi5jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuQHN1cHBvcnRzKHBvc2l0aW9uOiBzdGlja3kpeyBpb24tY2FyZHtcclxucG9zaXRpb246IHN0aWNreTtcclxudG9wOiAwO1xyXG59XHJcbn1cclxuLmVycm9ye1xyXG4gIGNvbG9yOiByZWQ7XHJcbn0iLCJpb24tY2FyZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI4MDA4O1xufVxuXG4vKmNzcyBmb3JtKi9cbi8qIFN0eWxlIGlucHV0cyB3aXRoIHR5cGU9XCJ0ZXh0XCIsIHNlbGVjdCBlbGVtZW50cyBhbmQgdGV4dGFyZWFzICovXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKi9cbiAgcGFkZGluZzogMTJweDtcbiAgLyogU29tZSBwYWRkaW5nICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIC8qIEdyYXkgYm9yZGVyICovXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLyogUm91bmRlZCBib3JkZXJzICovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIE1ha2Ugc3VyZSB0aGF0IHBhZGRpbmcgYW5kIHdpZHRoIHN0YXlzIGluIHBsYWNlICovXG4gIG1hcmdpbi10b3A6IDZweDtcbiAgLyogQWRkIGEgdG9wIG1hcmdpbiAqL1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAvKiBCb3R0b20gbWFyZ2luICovXG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbi8qIFN0eWxlIHRoZSBzdWJtaXQgYnV0dG9uIHdpdGggYSBzcGVjaWZpYyBiYWNrZ3JvdW5kIGNvbG9yIGV0YyAqL1xuYnV0dG9uW3R5cGU9c3VibWl0XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFdoZW4gbW92aW5nIHRoZSBtb3VzZSBvdmVyIHRoZSBzdWJtaXQgYnV0dG9uLCBhZGQgYSBkYXJrZXIgZ3JlZW4gY29sb3IgKi9cbmJ1dHRvblt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xufVxuXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBzb21lIHBhZGRpbmcgYXJvdW5kIHRoZSBmb3JtICovXG4uY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG5Ac3VwcG9ydHMgKHBvc2l0aW9uOiBzdGlja3kpIHtcbiAgaW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICB9XG59XG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modif/modif.page.ts":
/*!*************************************!*\
  !*** ./src/app/modif/modif.page.ts ***!
  \*************************************/
/*! exports provided: ModifPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifPage", function() { return ModifPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");
/* harmony import */ var _modeles_register_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modeles/register.model */ "./src/app/modeles/register.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





// import swal from 'sweetalert';
let ModifPage = class ModifPage {
    // garant:GarantModel
    constructor(_aut, route, router) {
        this._aut = _aut;
        this.route = route;
        this.router = router;
        this.nomPattern = "^[A-Za-z]{2,}$";
        this.cniPattern = "^[0-9]{9}$";
        this.telephonePattern = "^((7(?=0|6|7|8))|(3(?=3)))[0-9]{8}$";
        this.datePattern = "^(0[1-9]|1[0-9]|2[0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}$";
        this.isValidFormSubmitted = false;
    }
    ngOnInit() {
        this.client = new _modeles_register_model__WEBPACK_IMPORTED_MODULE_3__["RegisterModel"]();
        this.id = this.route.snapshot.params['id'];
        this._aut.details(this.id).subscribe(data => {
            console.log(data);
            this.client = data;
        }, error => console.log(error));
    }
    update(form) {
        this.isValidFormSubmitted = false;
        if (form.invalid) {
            return;
        }
        this.isValidFormSubmitted = true;
        this.client = form.value;
        this._aut.update(this.id, this.client)
            .subscribe(data => console.log(data)
        // swal ("client modifié")
        , error => console.log(error));
        this.gotoList();
    }
    // onSubmit() {
    //   this.update(); 
    // }
    gotoList() {
        this.router.navigate(['/home']);
    }
};
ModifPage.ctorParameters = () => [
    { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ModifPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modif',
        template: __webpack_require__(/*! raw-loader!./modif.page.html */ "./node_modules/raw-loader/index.js!./src/app/modif/modif.page.html"),
        styles: [__webpack_require__(/*! ./modif.page.scss */ "./src/app/modif/modif.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], ModifPage);



/***/ })

}]);
//# sourceMappingURL=modif-modif-module-es2015.js.map