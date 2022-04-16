(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["src_app_print-out_print-out_module_ts"],{

/***/ 2483:
/*!*******************************************************!*\
  !*** ./src/app/print-out/print-out-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintOutPageRoutingModule": () => (/* binding */ PrintOutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _print_out_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-out.page */ 5037);




const routes = [
    {
        path: '',
        component: _print_out_page__WEBPACK_IMPORTED_MODULE_0__.PrintOutPage
    }
];
let PrintOutPageRoutingModule = class PrintOutPageRoutingModule {
};
PrintOutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrintOutPageRoutingModule);



/***/ }),

/***/ 8175:
/*!***********************************************!*\
  !*** ./src/app/print-out/print-out.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintOutPageModule": () => (/* binding */ PrintOutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _print_out_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-out-routing.module */ 2483);
/* harmony import */ var _print_out_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-out.page */ 5037);







let PrintOutPageModule = class PrintOutPageModule {
};
PrintOutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _print_out_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrintOutPageRoutingModule
        ],
        declarations: [_print_out_page__WEBPACK_IMPORTED_MODULE_1__.PrintOutPage]
    })
], PrintOutPageModule);



/***/ }),

/***/ 5037:
/*!*********************************************!*\
  !*** ./src/app/print-out/print-out.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintOutPage": () => (/* binding */ PrintOutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_print_out_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./print-out.page.html */ 8998);
/* harmony import */ var _print_out_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-out.page.scss */ 4212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PrintOutPage = class PrintOutPage {
    constructor() { }
    ngOnInit() {
    }
};
PrintOutPage.ctorParameters = () => [];
PrintOutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-print-out',
        template: _raw_loader_print_out_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_print_out_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrintOutPage);



/***/ }),

/***/ 4212:
/*!***********************************************!*\
  !*** ./src/app/print-out/print-out.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".print-out {\n  background: #fff !important;\n  min-height: 100%;\n  color: #000;\n  padding: 50px;\n  font-weight: 600;\n  border: 3px solid #181818;\n}\n\n.category_sec {\n  margin-bottom: 30px;\n}\n\n.category_sec h3 {\n  margin: 0 0 5px 0;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 24px;\n}\n\n.category_head_sec h2 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 24px;\n}\n\n.category_sec h1 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 30px;\n}\n\n.category_sec p {\n  margin: 0 0 5px 0;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.category_head_sec {\n  border-bottom: 1px #000 dashed;\n  border-top: 1px dashed #000;\n  margin-bottom: 30px;\n}\n\n.category_tot_sec {\n  border-bottom: 1px #000 dashed;\n  border-top: 1px dashed #000;\n  margin-bottom: 30px;\n}\n\n.category_tot_sec h1 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 30px;\n  padding: 15px 0;\n}\n\n.logo_wrap img {\n  height: 170px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LW91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFNSjs7QUFKQTtFQUNJLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUxBO0VBQ0ksOEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBUUo7O0FBTkE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVNKOztBQVBBO0VBQ0ksYUFBQTtBQVVKIiwiZmlsZSI6InByaW50LW91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbnQtb3V0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzE4MTgxODtcbn1cbi5jYXRlZ29yeV9zZWMge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uY2F0ZWdvcnlfc2VjIGgzIHtcbiAgICBtYXJnaW46IDAgMCA1cHggMCA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5jYXRlZ29yeV9oZWFkX3NlYyBoMiB7XG4gICAgbWFyZ2luOiAwOyBcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5jYXRlZ29yeV9zZWMgaDEge1xuICAgIG1hcmdpbjogMDsgXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG4uY2F0ZWdvcnlfc2VjIHB7XG4gICAgbWFyZ2luOiAwIDAgNXB4IDAgOyBcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jYXRlZ29yeV9oZWFkX3NlYyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4ICMwMDAgZGFzaGVkO1xuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgIzAwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNhdGVnb3J5X3RvdF9zZWMge1xuICAgIGJvcmRlci1ib3R0b206IDFweCAjMDAwIGRhc2hlZDtcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICMwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5jYXRlZ29yeV90b3Rfc2VjIGgxIHtcbiAgICBtYXJnaW46IDA7IFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDE1cHggMDtcbn1cbi5sb2dvX3dyYXAgaW1ne1xuICAgIGhlaWdodDogMTcwcHg7XG59Il19 */");

/***/ }),

/***/ 8998:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/print-out/print-out.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content >\n  <div class=\"print-out\">\n    <div class=\"category_sec logo_wrap\">\n      <ion-row class=\"ion-text-center\">\n        <ion-col size=\"12\"><img src=\"../../assets/img/print-logo.png\" /></ion-col> \n        <ion-col size=\"12\"><h1>Poke Theory</h1></ion-col> \n        <ion-col size=\"12\">\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n          <p>*Please make the payment at the counter*</p>\n        </ion-col> \n      </ion-row> \n    </div>\n    <div class=\"category_head_sec\">\n      <ion-col size=\"12\"><h2>Dine In</h2></ion-col> \n    </div>\n    <div class=\"category_sec\">\n      <ion-row> \n        <ion-col size=\"9\"><h3>2 x O.G. Salmon</h3></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><h3>25.80</h3></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>2 x O.G. Salmon</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p>25.80</p></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>2 x O.G. Salmon</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p>25.80</p></ion-col>\n      </ion-row>\n    </div>\n    <div class=\"category_sec\">\n      <ion-row> \n        <ion-col size=\"9\"><h3>Green Tea</h3></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><h3>3.00</h3></ion-col>\n      </ion-row> \n    </div>\n    <div class=\"category_sec\">\n      <ion-row> \n        <ion-col size=\"9\"><h3>The Original Ganador</h3></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><h3>25.80</h3></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>2 x O.G. Salmon</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p>25.80</p></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>2 x O.G. Salmon</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p>25.80</p></ion-col>\n      </ion-row>\n    </div>\n    <div class=\"category_sec\">\n      <ion-row> \n        <ion-col size=\"9\"><h3>BYO Poke Bowls</h3></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><h3>25.80</h3></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>1 x Large</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p>+5.09</p></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>1 x Signature Sushi Rice</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p> </p></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>1 x Signature Sushi Rice</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p> </p></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>1 x Signature Sushi Rice</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p> </p></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>1 x Signature Sushi Rice</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p> </p></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>1 x Signature Sushi Rice</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p> </p></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>1 x Signature Sushi Rice</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p> </p></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>1 x Signature Sushi Rice</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p> </p></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>1 x Signature Sushi Rice</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p> </p></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>1 x Signature Sushi Rice</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p> </p></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>1 x Signature Sushi Rice</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p> </p></ion-col>\n      </ion-row>\n      <ion-row> \n        <ion-col size=\"9\"><p>1 x Signature Sushi Rice</p></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><p> </p></ion-col>\n      </ion-row>\n    </div>\n    <div class=\"category_tot_sec \">\n      <ion-row> \n        <ion-col size=\"9\"><h1>Total</h1></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-end\"><h1>69.60</h1></ion-col>\n      </ion-row> \n    </div>\n    <div class=\"category_sec\">\n      <ion-row> \n        <ion-col size=\"12\"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></ion-col> \n      </ion-row> \n    </div>\n  </div> \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_print-out_print-out_module_ts.js.map