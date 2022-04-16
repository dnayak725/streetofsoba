(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["src_app_payment-type_payment-type_module_ts"],{

/***/ 4069:
/*!*************************************************************!*\
  !*** ./src/app/payment-type/payment-type-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentTypePageRoutingModule": () => (/* binding */ PaymentTypePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _payment_type_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-type.page */ 4141);




const routes = [
    {
        path: '',
        component: _payment_type_page__WEBPACK_IMPORTED_MODULE_0__.PaymentTypePage
    }
];
let PaymentTypePageRoutingModule = class PaymentTypePageRoutingModule {
};
PaymentTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentTypePageRoutingModule);



/***/ }),

/***/ 4554:
/*!*****************************************************!*\
  !*** ./src/app/payment-type/payment-type.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentTypePageModule": () => (/* binding */ PaymentTypePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _payment_type_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-type-routing.module */ 4069);
/* harmony import */ var _payment_type_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-type.page */ 4141);







let PaymentTypePageModule = class PaymentTypePageModule {
};
PaymentTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_type_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentTypePageRoutingModule
        ],
        declarations: [_payment_type_page__WEBPACK_IMPORTED_MODULE_1__.PaymentTypePage]
    })
], PaymentTypePageModule);



/***/ }),

/***/ 4141:
/*!***************************************************!*\
  !*** ./src/app/payment-type/payment-type.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentTypePage": () => (/* binding */ PaymentTypePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_payment_type_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./payment-type.page.html */ 1236);
/* harmony import */ var _payment_type_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-type.page.scss */ 366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PaymentTypePage = class PaymentTypePage {
    constructor() { }
    ngOnInit() {
    }
};
PaymentTypePage.ctorParameters = () => [];
PaymentTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-payment-type',
        template: _raw_loader_payment_type_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payment_type_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymentTypePage);



/***/ }),

/***/ 366:
/*!*****************************************************!*\
  !*** ./src/app/payment-type/payment-type.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-logo {\n  margin-top: 40px;\n}\n\n.eatin-card ion-card-title {\n  color: #fff;\n  font-size: 60px;\n  font-weight: 700;\n}\n\n.takeout-card ion-card-title {\n  color: #000;\n  font-size: 60px;\n  font-weight: 700;\n}\n\nion-card.takeout-card {\n  background: #fac93c;\n  border: 2px solid #fac93c;\n  text-align: center;\n  padding: 100px 0;\n  border-radius: 15px;\n  margin-right: 40px;\n}\n\nion-card.eatin-card {\n  border: 2px solid #fac93c;\n  text-align: center;\n  padding: 100px 0;\n  border-radius: 15px;\n  margin-left: 40px;\n}\n\n.takeout-card img {\n  width: 270px;\n  border-radius: 100%;\n  height: 270px;\n  margin-top: 20px;\n  margin-bottom: 50px;\n  border: 3px solid #000;\n}\n\n.eatin-card img {\n  width: 270px;\n  border-radius: 100%;\n  height: 270px;\n  margin-top: 20px;\n  border: 3px solid #fff;\n  margin-bottom: 50px;\n}\n\nh3.dini-location {\n  text-align: center;\n  font-size: 60px;\n  font-weight: 700;\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtdHlwZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBTUo7O0FBSkE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUUoiLCJmaWxlIjoicGF5bWVudC10eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tbG9nb3tcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmVhdGluLWNhcmQgaW9uLWNhcmQtdGl0bGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLnRha2VvdXQtY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5pb24tY2FyZC50YWtlb3V0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNmYWM5M2M7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZhYzkzYztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTAwcHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDo0MHB4O1xufVxuaW9uLWNhcmQuZWF0aW4tY2FyZCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZhYzkzYztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTAwcHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLnRha2VvdXQtY2FyZCBpbWcge1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGhlaWdodDogMjcwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xufVxuLmVhdGluLWNhcmQgaW1nIHtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBoZWlnaHQ6IDI3MHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuaDMuZGluaS1sb2NhdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59Il19 */");

/***/ }),

/***/ 1236:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment-type/payment-type.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-header>\n    <ion-toolbar>\n      <ion-title class=\"ion-logo\">\n        <ion-img src=\"../../assets/img/logo.png\"></ion-img>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-text color=\"light\">\n        <h3 class=\"dini-location\">Payment Type</h3>\n      </ion-text>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-card  class=\"eatin-card\" routerLink=\"/order-success\">\n        <img src=\"../../assets/img/cash.png\" />\n        <ion-card-header>\n          <ion-card-title>Cash</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n    \n    <ion-col size=\"6\">\n      <ion-card class=\"takeout-card\">\n        <img src=\"../../assets/img/card.png\" />\n        <ion-card-header>\n          <ion-card-title>Debit/Credit</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_payment-type_payment-type_module_ts.js.map