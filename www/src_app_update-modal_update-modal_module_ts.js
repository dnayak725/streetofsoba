(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["src_app_update-modal_update-modal_module_ts"],{

/***/ 2124:
/*!*************************************************************!*\
  !*** ./src/app/update-modal/update-modal-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateModalPageRoutingModule": () => (/* binding */ UpdateModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _update_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-modal.page */ 926);




const routes = [
    {
        path: '',
        component: _update_modal_page__WEBPACK_IMPORTED_MODULE_0__.UpdateModalPage
    }
];
let UpdateModalPageRoutingModule = class UpdateModalPageRoutingModule {
};
UpdateModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateModalPageRoutingModule);



/***/ }),

/***/ 2198:
/*!*****************************************************!*\
  !*** ./src/app/update-modal/update-modal.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateModalPageModule": () => (/* binding */ UpdateModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _update_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-modal-routing.module */ 2124);
/* harmony import */ var _update_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-modal.page */ 926);







let UpdateModalPageModule = class UpdateModalPageModule {
};
UpdateModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateModalPageRoutingModule
        ],
        declarations: [_update_modal_page__WEBPACK_IMPORTED_MODULE_1__.UpdateModalPage]
    })
], UpdateModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_update-modal_update-modal_module_ts.js.map