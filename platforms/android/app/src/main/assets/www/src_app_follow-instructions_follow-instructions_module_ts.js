(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["src_app_follow-instructions_follow-instructions_module_ts"],{

/***/ 9864:
/*!***************************************************************************!*\
  !*** ./src/app/follow-instructions/follow-instructions-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowInstructionsPageRoutingModule": () => (/* binding */ FollowInstructionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _follow_instructions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow-instructions.page */ 5824);




const routes = [
    {
        path: '',
        component: _follow_instructions_page__WEBPACK_IMPORTED_MODULE_0__.FollowInstructionsPage
    }
];
let FollowInstructionsPageRoutingModule = class FollowInstructionsPageRoutingModule {
};
FollowInstructionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FollowInstructionsPageRoutingModule);



/***/ }),

/***/ 78:
/*!*******************************************************************!*\
  !*** ./src/app/follow-instructions/follow-instructions.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowInstructionsPageModule": () => (/* binding */ FollowInstructionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _follow_instructions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow-instructions-routing.module */ 9864);
/* harmony import */ var _follow_instructions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-instructions.page */ 5824);







let FollowInstructionsPageModule = class FollowInstructionsPageModule {
};
FollowInstructionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _follow_instructions_routing_module__WEBPACK_IMPORTED_MODULE_0__.FollowInstructionsPageRoutingModule
        ],
        declarations: [_follow_instructions_page__WEBPACK_IMPORTED_MODULE_1__.FollowInstructionsPage]
    })
], FollowInstructionsPageModule);



/***/ }),

/***/ 5824:
/*!*****************************************************************!*\
  !*** ./src/app/follow-instructions/follow-instructions.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowInstructionsPage": () => (/* binding */ FollowInstructionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_follow_instructions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./follow-instructions.page.html */ 4710);
/* harmony import */ var _follow_instructions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-instructions.page.scss */ 240);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let FollowInstructionsPage = class FollowInstructionsPage {
    constructor() { }
    ngOnInit() {
    }
};
FollowInstructionsPage.ctorParameters = () => [];
FollowInstructionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-follow-instructions',
        template: _raw_loader_follow_instructions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_follow_instructions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FollowInstructionsPage);



/***/ }),

/***/ 240:
/*!*******************************************************************!*\
  !*** ./src/app/follow-instructions/follow-instructions.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-logo {\n  margin-top: 40px;\n}\n\nh3.dini-location {\n  text-align: center;\n  font-size: 60px;\n  font-weight: 600;\n}\n\nh3.dini-location span {\n  display: block;\n  margin-top: 30px;\n  font-size: 80px;\n}\n\n.order-success h2 {\n  text-align: center;\n  font-size: 80px;\n  font-weight: 700;\n  margin-top: 120px;\n  margin-bottom: 50px;\n  color: #fac93c;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvbGxvdy1pbnN0cnVjdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFJSiIsImZpbGUiOiJmb2xsb3ctaW5zdHJ1Y3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tbG9nb3tcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufSBcbmgzLmRpbmktbG9jYXRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgXG59XG5oMy5kaW5pLWxvY2F0aW9uIHNwYW57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBmb250LXNpemU6IDgwcHg7XG59XG4ub3JkZXItc3VjY2VzcyBoMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLXRvcDoxMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGNvbG9yOiAjZmFjOTNjO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */");

/***/ }),

/***/ 4710:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/follow-instructions/follow-instructions.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title class=\"ion-logo\">\n        <ion-img src=\"../../assets/img/logo.png\"></ion-img>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-row class=\"order-success\">\n    <ion-col size=\"12\">\n      <ion-text color=\"light\">\n        <h2>Thank YOU!</h2>\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-text color=\"light\">\n        <h3 class=\"dini-location\">Your order number is <span>123</span></h3>\n      </ion-text>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_follow-instructions_follow-instructions_module_ts.js.map