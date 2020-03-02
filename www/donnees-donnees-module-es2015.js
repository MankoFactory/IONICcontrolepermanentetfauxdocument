(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donnees-donnees-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/donnees/donnees.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/donnees/donnees.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <ion-header > \n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\"><ion-back-button></ion-back-button></ion-buttons>\n    <ion-buttons slot=\"end\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title style=\"text-align: center;\">Details</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n\n  <ion-content padding>\n    \n    <!-- \n    <ion-row>\n      <ion-col>\n      <ion-item>\n      <ion-label>telephone 1:</ion-label>\n      \n      </ion-item>\n      </ion-col>\n      <ion-col>\n      <ion-item>  \n      <ion-label>Telephone 2:</ion-label>  \n      \n      </ion-item>\n      </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n      <ion-item>\n        <ion-label>Nom</ion-label>\n        \n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <ion-item>\n        <ion-label>Prénom:</ion-label>\n        \n      </ion-item>\n    </ion-col>\n    </ion-row> \n    <ion-row>\n      <ion-col>\n    <ion-item>\n      <ion-label>Date naissance:</ion-label>\n      \n    </ion-item>\n  </ion-col>\n  <ion-col>\n    <ion-item>\n      <ion-label>Lieu de naissance:</ion-label>\n      \n    </ion-item>\n  </ion-col>\n  </ion-row> \n  <ion-row>\n    <ion-col>\n  <ion-item>\n    <ion-label>Adresse client:</ion-label>\n    \n  </ion-item>\n  </ion-col>\n  <ion-col>\n  <ion-item>\n    <ion-label>Activite:</ion-label>\n    \n  </ion-item>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n  <ion-col>\n  <ion-item>\n  <ion-label>CNI:</ion-label>\n \n  </ion-item>\n  </ion-col>\n  <ion-col>\n  <ion-item>\n  <ion-label>Agence:</ion-label>\n  \n  </ion-item>\n  </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-item>  \n      <ion-label>Genre:</ion-label>  \n      \n      </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n        <ion-label>Statut:</ion-label>\n        \n        </ion-item>\n        </ion-col>\n        \n  </ion-row>\n\n</div> -->\n<div *ngIf=\"client\">\n<div class=\"sc-user-profile\">\n  <img class=\"avatar\" src=\"assets/image/oo.jpg\"  />\n  <div class=\"username\">{{client.prenom}} {{client.nom}}</div>\n  <div class=\"bio\">\n    Agence: {{client.agence}}\n  </div>\n  <div class=\"description\">\n    Statut: {{client.statut}}\n  </div>\n  <div class=\"data\">\n    <span class=\"entypo-eye\"> Client Détails</span>\n  </div>\n  <div class=\"left\">Téléphone 1:</div>\n  <div class=\"right\">{{client.telephone}}</div>\n  <div class=\"left\">Téléphone 2:</div>\n  <div class=\"right\">{{client.telephone1}}</div>\n  <div class=\"left\">Email:</div>\n  <div class=\"right\">{{client.date_naissance}}</div>\n  <div class=\"left\">Genre:</div>\n  <div class=\"right\">{{client.sexe}}</div>\n  <div class=\"left\">CNI:</div>\n  <div class=\"right\">{{client.num_cni}}</div>\n  <div class=\"left\">Activité:</div>\n  <div class=\"right\">{{client.activite}}</div>\n  <div class=\"left\">Adresse:</div>\n  <div class=\"right\">{{client.adresse_client}}</div>\n  <div class=\"left\">Lieu De Naissance:</div>\n  <div class=\"right\">{{client.lieu_naissance}}</div>\n  <div class=\"left\">Date De Naissance:</div>\n  <div class=\"right\">{{client.date_naissance}}</div>\n  <div class=\"left\">Latitude:</div>\n  <div class=\"right\">{{client.date_naissance}}</div>\n  <div class=\"left\">Longitude:</div>\n  <div class=\"right\">{{client.date_naissance}}</div>\n  <div class=\"left\">Commentaire du client:</div>\n  <div class=\"right\">{{client.date_naissance}}</div>\n  <div class=\"left\">Commentaire de l'agent:</div>\n  <div class=\"right\">{{client.date_naissance}}</div>\n</div>\n</div>\n   </ion-content>\n\n\n"

/***/ }),

/***/ "./src/app/donnees/donnees-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/donnees/donnees-routing.module.ts ***!
  \***************************************************/
/*! exports provided: DonneesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonneesPageRoutingModule", function() { return DonneesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _donnees_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donnees.page */ "./src/app/donnees/donnees.page.ts");




const routes = [
    {
        path: '',
        component: _donnees_page__WEBPACK_IMPORTED_MODULE_3__["DonneesPage"]
    }
];
let DonneesPageRoutingModule = class DonneesPageRoutingModule {
};
DonneesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DonneesPageRoutingModule);



/***/ }),

/***/ "./src/app/donnees/donnees.module.ts":
/*!*******************************************!*\
  !*** ./src/app/donnees/donnees.module.ts ***!
  \*******************************************/
/*! exports provided: DonneesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonneesPageModule", function() { return DonneesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _donnees_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./donnees-routing.module */ "./src/app/donnees/donnees-routing.module.ts");
/* harmony import */ var _donnees_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donnees.page */ "./src/app/donnees/donnees.page.ts");







let DonneesPageModule = class DonneesPageModule {
};
DonneesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _donnees_routing_module__WEBPACK_IMPORTED_MODULE_5__["DonneesPageRoutingModule"]
        ],
        declarations: [_donnees_page__WEBPACK_IMPORTED_MODULE_6__["DonneesPage"]]
    })
], DonneesPageModule);



/***/ }),

/***/ "./src/app/donnees/donnees.page.scss":
/*!*******************************************!*\
  !*** ./src/app/donnees/donnees.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(http://weloveiconfonts.com/api/?family=entypo);\nion-card {\n  text-align: center;\n  background-color: #e28008;\n  color: white;\n}\n[class*=entypo-]:before {\n  font-family: \"entypo\", sans-serif;\n}\n.sc-user-profile {\n  margin: auto;\n  width: 25em;\n  background: #fff;\n  border-radius: 0.3em;\n}\n.sc-user-profile .left {\n  float: left;\n  padding: 0 15px 10px;\n  width: 60%;\n  font-weight: bold;\n}\n.sc-user-profile .right {\n  padding: 0 5px 10px;\n  width: 100%;\n}\n.sc-user-profile .username {\n  margin: auto;\n  margin-top: -4.4em;\n  margin-left: 5.8em;\n  color: #658585;\n  font-size: 1.53em;\n  font-family: \"Coda\", sans-serif;\n  font-weight: bold;\n}\n.sc-user-profile .bio {\n  margin: auto;\n  display: inline-block;\n  margin-left: 10.43em;\n  color: #e76043;\n  font-size: 0.87em;\n  font-family: \"varela round\", sans-serif;\n}\n.sc-user-profile > .description {\n  margin: auto;\n  margin-top: 1.35em;\n  margin-right: 4.43em;\n  width: 14em;\n  color: #c0c5c5;\n  font-size: 0.87em;\n  font-family: \"varela round\", sans-serif;\n}\n.sc-user-profile > img.avatar {\n  padding: 0.7em;\n  margin-left: 0.3em;\n  margin-top: 0.3em;\n  height: 6.23em;\n  width: 6.23em;\n  border-radius: 18em;\n}\n.sc-user-profile div.data {\n  margin: 2em auto 1em;\n  background: #e28008;\n  text-align: center;\n  border-radius: 0 0 0.3em 0.3em;\n}\n.sc-user-profile span {\n  font-family: \"varela round\", sans-serif;\n  color: #e3eeee;\n  white-space: nowrap;\n  font-size: 1.27em;\n  font-weight: bold;\n}\n.sc-user-profile span:hover {\n  color: #daebea;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ubmVlcy9DOlxcVXNlcnNcXFNleW5hYm91IE5kaWF5ZVxcbWFua28tYXBwLWlvbmljL3NyY1xcYXBwXFxkb25uZWVzXFxkb25uZWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZG9ubmVlcy9kb25uZWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNUSwwREFBQTtBQU5SO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNFSjtBREdBO0VBQ0UsaUNBQUE7QUNBRjtBREdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDQUY7QURHQTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQ0FGO0FER0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNBRjtBREdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURHQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7QUNBRjtBREdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7QUNBRjtBREdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQUY7QURHQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDQUY7QURHQTtFQUNFLHVDQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0FGO0FER0E7RUFDRSxjQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9kb25uZWVzL2Rvbm5lZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI4MDA4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5AaW1wb3J0IHVybChodHRwOi8vd2Vsb3ZlaWNvbmZvbnRzLmNvbS9hcGkvP2ZhbWlseT1lbnR5cG8pO1xyXG5cclxuW2NsYXNzKj1cImVudHlwby1cIl06YmVmb3JlIHtcclxuICBmb250LWZhbWlseTogJ2VudHlwbycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zYy11c2VyLXByb2ZpbGUge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMjVlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XHJcbn1cclxuXHJcbi5zYy11c2VyLXByb2ZpbGUgLmxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDAgMTVweCAxMHB4O1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zYy11c2VyLXByb2ZpbGUgLnJpZ2h0IHtcclxuICBwYWRkaW5nOiAwIDVweCAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2MtdXNlci1wcm9maWxlIC51c2VybmFtZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IC00LjQwZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDUuODBlbTtcclxuICBjb2xvcjogIzY1ODU4NTtcclxuICBmb250LXNpemU6IDEuNTNlbTtcclxuICBmb250LWZhbWlseTogXCJDb2RhXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zYy11c2VyLXByb2ZpbGUgLmJpbyB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMTAuNDNlbTtcclxuICBjb2xvcjogI2U3NjA0MztcclxuICBmb250LXNpemU6IC44N2VtO1xyXG4gIGZvbnQtZmFtaWx5OiBcInZhcmVsYSByb3VuZFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uc2MtdXNlci1wcm9maWxlID4gLmRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMS4zNWVtO1xyXG4gIG1hcmdpbi1yaWdodDogNC40M2VtO1xyXG4gIHdpZHRoOiAxNGVtO1xyXG4gIGNvbG9yOiAjYzBjNWM1O1xyXG4gIGZvbnQtc2l6ZTogLjg3ZW07XHJcbiAgZm9udC1mYW1pbHk6IFwidmFyZWxhIHJvdW5kXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5zYy11c2VyLXByb2ZpbGUgPiBpbWcuYXZhdGFyIHtcclxuICBwYWRkaW5nOiAuN2VtO1xyXG4gIG1hcmdpbi1sZWZ0OiAuM2VtO1xyXG4gIG1hcmdpbi10b3A6IC4zZW07XHJcbiAgaGVpZ2h0OiA2LjIzZW07XHJcbiAgd2lkdGg6IDYuMjNlbTtcclxuICBib3JkZXItcmFkaXVzOiAxOGVtO1xyXG59XHJcblxyXG4uc2MtdXNlci1wcm9maWxlIGRpdi5kYXRhIHtcclxuICBtYXJnaW46IDJlbSBhdXRvIDFlbTtcclxuICBiYWNrZ3JvdW5kOiAjZTI4MDA4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgLjNlbSAuM2VtO1xyXG59XHJcblxyXG4uc2MtdXNlci1wcm9maWxlIHNwYW4ge1xyXG4gIGZvbnQtZmFtaWx5OiBcInZhcmVsYSByb3VuZFwiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZTNlZWVlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC1zaXplOiAxLjI3ZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zYy11c2VyLXByb2ZpbGUgc3Bhbjpob3ZlciB7XHJcbiAgY29sb3I6ICNkYWViZWE7XHJcbn0iLCJAaW1wb3J0IHVybChodHRwOi8vd2Vsb3ZlaWNvbmZvbnRzLmNvbS9hcGkvP2ZhbWlseT1lbnR5cG8pO1xuaW9uLWNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMjgwMDg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuW2NsYXNzKj1lbnR5cG8tXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJlbnR5cG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnNjLXVzZXItcHJvZmlsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDI1ZW07XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuXG4uc2MtdXNlci1wcm9maWxlIC5sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDAgMTVweCAxMHB4O1xuICB3aWR0aDogNjAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNjLXVzZXItcHJvZmlsZSAucmlnaHQge1xuICBwYWRkaW5nOiAwIDVweCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNjLXVzZXItcHJvZmlsZSAudXNlcm5hbWUge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IC00LjRlbTtcbiAgbWFyZ2luLWxlZnQ6IDUuOGVtO1xuICBjb2xvcjogIzY1ODU4NTtcbiAgZm9udC1zaXplOiAxLjUzZW07XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGFcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zYy11c2VyLXByb2ZpbGUgLmJpbyB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTAuNDNlbTtcbiAgY29sb3I6ICNlNzYwNDM7XG4gIGZvbnQtc2l6ZTogMC44N2VtO1xuICBmb250LWZhbWlseTogXCJ2YXJlbGEgcm91bmRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnNjLXVzZXItcHJvZmlsZSA+IC5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMS4zNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDQuNDNlbTtcbiAgd2lkdGg6IDE0ZW07XG4gIGNvbG9yOiAjYzBjNWM1O1xuICBmb250LXNpemU6IDAuODdlbTtcbiAgZm9udC1mYW1pbHk6IFwidmFyZWxhIHJvdW5kXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5zYy11c2VyLXByb2ZpbGUgPiBpbWcuYXZhdGFyIHtcbiAgcGFkZGluZzogMC43ZW07XG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcbiAgbWFyZ2luLXRvcDogMC4zZW07XG4gIGhlaWdodDogNi4yM2VtO1xuICB3aWR0aDogNi4yM2VtO1xuICBib3JkZXItcmFkaXVzOiAxOGVtO1xufVxuXG4uc2MtdXNlci1wcm9maWxlIGRpdi5kYXRhIHtcbiAgbWFyZ2luOiAyZW0gYXV0byAxZW07XG4gIGJhY2tncm91bmQ6ICNlMjgwMDg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAuM2VtIDAuM2VtO1xufVxuXG4uc2MtdXNlci1wcm9maWxlIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJ2YXJlbGEgcm91bmRcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNlM2VlZWU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMS4yN2VtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNjLXVzZXItcHJvZmlsZSBzcGFuOmhvdmVyIHtcbiAgY29sb3I6ICNkYWViZWE7XG59Il19 */"

/***/ }),

/***/ "./src/app/donnees/donnees.page.ts":
/*!*****************************************!*\
  !*** ./src/app/donnees/donnees.page.ts ***!
  \*****************************************/
/*! exports provided: DonneesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonneesPage", function() { return DonneesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authent.service */ "./src/app/services/authent.service.ts");
/* harmony import */ var _modeles_register_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modeles/register.model */ "./src/app/modeles/register.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DonneesPage = class DonneesPage {
    constructor(_aut, route, router) {
        this._aut = _aut;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.client = new _modeles_register_model__WEBPACK_IMPORTED_MODULE_3__["RegisterModel"]();
        this.id = this.route.snapshot.params['id'];
        this._aut.details(this.id).subscribe(data => {
            console.log(data);
            this.client = data;
        }, error => console.log(error));
    }
};
DonneesPage.ctorParameters = () => [
    { type: _services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
DonneesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donnees',
        template: __webpack_require__(/*! raw-loader!./donnees.page.html */ "./node_modules/raw-loader/index.js!./src/app/donnees/donnees.page.html"),
        styles: [__webpack_require__(/*! ./donnees.page.scss */ "./src/app/donnees/donnees.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authent_service__WEBPACK_IMPORTED_MODULE_2__["AuthentService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], DonneesPage);

// details(id){
//   this._aut.details(id).subscribe(
//     res =>{ this.listuser =res
//       console.log(res)
//      } ,
//     error => console.log(error)
//   )
// }


/***/ })

}]);
//# sourceMappingURL=donnees-donnees-module-es2015.js.map