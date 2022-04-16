(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["src_app_single-item_single-item_module_ts"],{

/***/ 53:
/*!***********************************************************!*\
  !*** ./src/app/single-item/single-item-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleItemPageRoutingModule": () => (/* binding */ SingleItemPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _single_item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-item.page */ 7892);




const routes = [
    {
        path: '',
        component: _single_item_page__WEBPACK_IMPORTED_MODULE_0__.SingleItemPage
    }
];
let SingleItemPageRoutingModule = class SingleItemPageRoutingModule {
};
SingleItemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SingleItemPageRoutingModule);



/***/ }),

/***/ 5284:
/*!***************************************************!*\
  !*** ./src/app/single-item/single-item.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleItemPageModule": () => (/* binding */ SingleItemPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _single_item_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./single-item-routing.module */ 53);
/* harmony import */ var _single_item_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-item.page */ 7892);







let SingleItemPageModule = class SingleItemPageModule {
};
SingleItemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _single_item_routing_module__WEBPACK_IMPORTED_MODULE_0__.SingleItemPageRoutingModule
        ],
        declarations: [_single_item_page__WEBPACK_IMPORTED_MODULE_1__.SingleItemPage]
    })
], SingleItemPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_single-item_single-item_module_ts.js.map