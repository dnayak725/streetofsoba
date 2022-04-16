(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["src_app_add-snacks_add-snacks_module_ts"],{

/***/ 7988:
/*!*********************************************************!*\
  !*** ./src/app/add-snacks/add-snacks-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSnacksPageRoutingModule": () => (/* binding */ AddSnacksPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _add_snacks_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-snacks.page */ 1958);




const routes = [
    {
        path: '',
        component: _add_snacks_page__WEBPACK_IMPORTED_MODULE_0__.AddSnacksPage
    }
];
let AddSnacksPageRoutingModule = class AddSnacksPageRoutingModule {
};
AddSnacksPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AddSnacksPageRoutingModule);



/***/ }),

/***/ 6271:
/*!*************************************************!*\
  !*** ./src/app/add-snacks/add-snacks.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSnacksPageModule": () => (/* binding */ AddSnacksPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _add_snacks_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-snacks-routing.module */ 7988);
/* harmony import */ var _add_snacks_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-snacks.page */ 1958);







let AddSnacksPageModule = class AddSnacksPageModule {
};
AddSnacksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _add_snacks_routing_module__WEBPACK_IMPORTED_MODULE_0__.AddSnacksPageRoutingModule
        ],
        declarations: [_add_snacks_page__WEBPACK_IMPORTED_MODULE_1__.AddSnacksPage]
    })
], AddSnacksPageModule);



/***/ }),

/***/ 1958:
/*!***********************************************!*\
  !*** ./src/app/add-snacks/add-snacks.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSnacksPage": () => (/* binding */ AddSnacksPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_add_snacks_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./add-snacks.page.html */ 5601);
/* harmony import */ var _add_snacks_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-snacks.page.scss */ 3185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AddSnacksPage = class AddSnacksPage {
    constructor() { }
    ngOnInit() {
    }
};
AddSnacksPage.ctorParameters = () => [];
AddSnacksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-add-snacks',
        template: _raw_loader_add_snacks_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_add_snacks_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AddSnacksPage);



/***/ }),

/***/ 3185:
/*!*************************************************!*\
  !*** ./src/app/add-snacks/add-snacks.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-poke-logo {\n  background: url('banner-top.jpg') no-repeat right top/cover;\n}\n\n.product_footer ion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.product_footer ion-col ion-button {\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 60px;\n  height: 140px;\n  font-weight: 600;\n}\n\n.product-details-header h3 {\n  font-size: 60px;\n  font-weight: 700;\n}\n\nion-row.product-details-header {\n  padding: 0 70px;\n  margin-top: 30px;\n}\n\nion-row.count-prod {\n  padding: 0 70px;\n  margin-top: 15px;\n}\n\n.count-prod h1, .count-prod h2 {\n  font-size: 45px;\n  font-weight: 700;\n  margin-top: 0px;\n}\n\nion-button.remove {\n  text-transform: capitalize;\n  font-size: 50px;\n  min-height: 130px;\n  font-weight: 600;\n  border-radius: 16px;\n}\n\nion-button.view {\n  text-transform: capitalize;\n  font-size: 50px;\n  min-height: 130px;\n  font-weight: 600;\n  border-radius: 16px;\n  background: #fac93c;\n}\n\nion-button.view button {\n  --border-radius: 105px!important;\n}\n\n.count-prod h1 {\n  color: #fac93c;\n}\n\n.count-prod button {\n  font-size: 80px;\n  width: 100px;\n  height: 100px;\n  border-radius: 15px;\n}\n\n.count-prod ion-input {\n  font-size: 60px;\n  height: 100px;\n  text-align: center;\n  border: 2px solid #fac93c;\n  margin: 0 30px;\n  border-radius: 15px;\n  color: #fac93c;\n  font-weight: 700;\n}\n\nion-row.count-prod {\n  margin-top: 60px;\n  padding-bottom: 60px;\n}\n\nion-row.count-prod.separator {\n  border-bottom: 1px solid #fff;\n}\n\nion-row.data-footer {\n  height: 180px;\n}\n\n.data-footer h1 {\n  font-size: 60px;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zbmFja3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkRBQUE7QUFDSjs7QUFDQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQU9KOztBQUxBO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUUo7O0FBTkE7RUFDSSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVNKOztBQVBBO0VBQ0ksZ0NBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBWUo7O0FBVkE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFhSjs7QUFYQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUFjSjs7QUFaQTtFQUNJLDZCQUFBO0FBZUo7O0FBWkE7RUFDSSxhQUFBO0FBZUo7O0FBYkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFnQkoiLCJmaWxlIjoiYWRkLXNuYWNrcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLXBva2UtbG9nb3tcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXItdG9wLmpwZykgbm8tcmVwZWF0IHJpZ2h0IHRvcCAvIGNvdmVyXG59XG4ucHJvZHVjdF9mb290ZXIgaW9uLWNvbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4ucHJvZHVjdF9mb290ZXIgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufSBcbi5wcm9kdWN0LWRldGFpbHMtaGVhZGVyIGgze1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuaW9uLXJvdy5wcm9kdWN0LWRldGFpbHMtaGVhZGVye1xuICAgIHBhZGRpbmc6IDAgNzBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuaW9uLXJvdy5jb3VudC1wcm9ke1xuICAgIHBhZGRpbmc6IDAgNzBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNvdW50LXByb2QgaDEsIC5jb3VudC1wcm9kIGgye1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cbmlvbi1idXR0b24ucmVtb3ZlIHsgIFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcbiAgICBmb250LXdlaWdodDogNjAwOyBcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xufVxuaW9uLWJ1dHRvbi52aWV3IHsgIFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogI2ZhYzkzYztcbn1cbmlvbi1idXR0b24udmlldyBidXR0b257XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMDVweCFpbXBvcnRhbnQ7XG59XG4uY291bnQtcHJvZCBoMXtcbiAgICBjb2xvcjogI2ZhYzkzYztcbn1cbi5jb3VudC1wcm9kIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4uY291bnQtcHJvZCBpb24taW5wdXQge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmFjOTNjO1xuICAgIG1hcmdpbjogMCAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgY29sb3I6ICNmYWM5M2M7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn0gXG5pb24tcm93LmNvdW50LXByb2Qge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHhcbn1cbmlvbi1yb3cuY291bnQtcHJvZC5zZXBhcmF0b3IgeyBcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjsgXG59ICBcblxuaW9uLXJvdy5kYXRhLWZvb3RlciB7IFxuICAgIGhlaWdodDogMTgwcHg7IFxufVxuLmRhdGEtZm9vdGVyIGgxIHtcbiAgICBmb250LXNpemU6IDYwcHg7IFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */");

/***/ }),

/***/ 5601:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-snacks/add-snacks.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n      <ion-title class=\"ion-poke-logo\">\n      <ion-img src=\"../../assets/img/logo.png\"></ion-img>\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content > \n  <ion-row class=\"product-details-header\">\n    <ion-col size=\"12\">\n      <h3 class=\"ion-text-center\">Order List</h3>  \n    </ion-col> \n  </ion-row>\n  <ion-row class=\"count-prod separator\">\n    <ion-col size=\"6\"> \n        <h1>Coldpressed Juice\n        (Crimson Sunrise)</h1>\n        <h2>$12.90</h2> \n    </ion-col> \n    <ion-col size=\"6\"> \n        <ion-item no-lines>\n            <button ion-button>-</button>\n            <ion-input type=\"number\" text-center value=\"1\" min=\"1\" max=\"9\"></ion-input>                   \n            <button ion-button>+</button>\n          </ion-item> \n    </ion-col>\n    <ion-col size=\"6\"><ion-button color=\"light\" fill=\"outline\"  class=\"remove\" expand=\"block\" >Remove</ion-button></ion-col>\n    <ion-col size=\"6\"><ion-button color=\"primary\" class=\"view\" expand=\"block\" >View/Edit</ion-button> </ion-col>\n  </ion-row>\n  <ion-row class=\"count-prod separator\">\n    <ion-col size=\"6\"> \n        <h1>BYO Poke Bowl</h1>\n        <h2>$12.90</h2>\n    </ion-col> \n    <ion-col size=\"6\"> \n        <ion-item no-lines>\n            <button ion-button>-</button>\n            <ion-input type=\"number\" text-center value=\"1\" min=\"1\" max=\"9\"></ion-input>                   \n            <button ion-button>+</button>\n          </ion-item>\n    </ion-col>\n    <ion-col size=\"6\"><ion-button color=\"light\" fill=\"outline\"  class=\"remove\" expand=\"block\" >Remove</ion-button></ion-col>\n    <ion-col size=\"6\"><ion-button color=\"primary\" class=\"view\" expand=\"block\" >View/Edit</ion-button> </ion-col>\n  </ion-row>\n  <ion-row class=\"count-prod separator\">\n    <ion-col size=\"6\"> \n        <h1>O. G. Salmon</h1>\n        <h2>$12.90</h2>\n    </ion-col> \n    <ion-col size=\"6\"> \n        <ion-item no-lines>\n            <button ion-button>-</button>\n            <ion-input type=\"number\" text-center value=\"1\" min=\"1\" max=\"9\"></ion-input>                   \n            <button ion-button>+</button>\n          </ion-item>\n    </ion-col>\n    <ion-col size=\"6\"><ion-button color=\"light\" fill=\"outline\"  class=\"remove\" expand=\"block\" >Remove</ion-button></ion-col>\n    <ion-col size=\"6\"><ion-button color=\"primary\" class=\"view\" expand=\"block\" >View/Edit</ion-button> </ion-col>\n  </ion-row>\n  <ion-row class=\"count-prod separator\">\n    <ion-col size=\"6\"> \n        <h1>Coldpressed </h1>\n        <h2>$12.90</h2>\n    </ion-col> \n    <ion-col size=\"6\"> \n        <ion-item no-lines>\n            <button ion-button>-</button>\n            <ion-input type=\"number\" text-center value=\"1\" min=\"1\" max=\"9\"></ion-input>                   \n            <button ion-button>+</button>\n          </ion-item>\n    </ion-col> \n    <ion-col size=\"6\"><ion-button color=\"light\" fill=\"outline\"  class=\"remove\" expand=\"block\" >Remove</ion-button></ion-col>\n    <ion-col size=\"6\"><ion-button color=\"primary\" class=\"view\" expand=\"block\" >View/Edit</ion-button> </ion-col>\n  </ion-row>\n  <ion-row class=\"count-prod\">\n    <ion-col size=\"6\"> \n        <h1>O. G. Salmon</h1>\n        <h2>$12.90</h2>\n    </ion-col> \n    <ion-col size=\"6\"> \n        <ion-item no-lines>\n            <button ion-button>-</button>\n            <ion-input type=\"number\" text-center value=\"1\" min=\"1\" max=\"9\"></ion-input>                   \n            <button ion-button>+</button>\n          </ion-item>\n    </ion-col> \n    <ion-col size=\"6\"><ion-button color=\"light\" fill=\"outline\"  class=\"remove\" expand=\"block\" >Remove</ion-button></ion-col>\n    <ion-col size=\"6\"><ion-button color=\"primary\" class=\"view\" expand=\"block\" >View/Edit</ion-button> </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-footer class=\"ion-no-border product_footer \">\n  <ion-row class=\"data-footer\"> \n    <ion-col size=\"12\">\n      <h1 class=\"ion-text-center\">Total <strong>$25.80</strong></h1>\n    </ion-col> \n  </ion-row> \n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button color=\"medium\" expand=\"full\" >Back</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"primary\" expand=\"full\" >Checkout</ion-button>\n      </ion-col>\n    </ion-row> \n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_add-snacks_add-snacks_module_ts.js.map