(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["src_app_items_items_module_ts"],{

/***/ 4228:
/*!***********************************************!*\
  !*** ./src/app/items/items-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPageRoutingModule": () => (/* binding */ ItemsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items.page */ 9236);




const routes = [
    {
        path: '',
        component: _items_page__WEBPACK_IMPORTED_MODULE_0__.ItemsPage
    }
];
let ItemsPageRoutingModule = class ItemsPageRoutingModule {
};
ItemsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ItemsPageRoutingModule);



/***/ }),

/***/ 2029:
/*!***************************************!*\
  !*** ./src/app/items/items.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPageModule": () => (/* binding */ ItemsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _items_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items-routing.module */ 4228);
/* harmony import */ var _items_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.page */ 9236);







let ItemsPageModule = class ItemsPageModule {
};
ItemsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _items_routing_module__WEBPACK_IMPORTED_MODULE_0__.ItemsPageRoutingModule
        ],
        declarations: [_items_page__WEBPACK_IMPORTED_MODULE_1__.ItemsPage]
    })
], ItemsPageModule);



/***/ }),

/***/ 9236:
/*!*************************************!*\
  !*** ./src/app/items/items.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsPage": () => (/* binding */ ItemsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_items_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./items.page.html */ 8691);
/* harmony import */ var _items_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items.page.scss */ 7220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ 7482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ 7489);







let ItemsPage = class ItemsPage {
    constructor(service, route, localstore) {
        this.service = service;
        this.route = route;
        this.localstore = localstore;
        this.itemData = [];
    }
    ngOnInit() {
        this.items();
    }
    // subscribe all api response
    items() {
        this.service.getApiResponcse().subscribe(res => {
            this.allResponse = res;
            this.itemData = this.allResponse.data;
        });
    }
    //  route to product page take the id of items
    products(i) {
        this.service.itemIndex = i;
        this.route.navigate(["/products", { index: i }]);
    }
};
ItemsPage.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService }
];
ItemsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-items',
        template: _raw_loader_items_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_items_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ItemsPage);



/***/ }),

/***/ 7482:
/*!***********************************!*\
  !*** ./src/app/shared.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedService": () => (/* binding */ SharedService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage */ 7489);




let SharedService = class SharedService {
    constructor(http, localstore) {
        this.http = http;
        this.localstore = localstore;
        // for single item
        this.singleItemCart = [];
        this.itemCart = [];
        this.itemCartFinal = [];
        this.autoOpenPopup = true;
        this.autoOpenPopup2 = true;
        this.products = [];
        this.productDetails = [];
        this.selectedItem = [];
        this.allSingleProduct = [];
        this.itemIndex = 0;
        this.filterOptions = [];
        this.addtionalPopup = true;
        this.editOption = [];
        this.coupon = false;
    }
    // all api response from server
    getApiResponcse() {
        // let url = 'http://127.0.0.1:8000/api/products';
        let url = 'https://poke-theory.quocent.com/api/products1';
        return this.http.get(url);
    }
    // post data
    postData(data) {
        console.log(data);
        // let url = 'http://127.0.0.1:8000/api/order';
        let url = 'https://poke-theory-2.quocent.com/api/order';
        return this.http.post(url, data);
    }
    containsObject(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }
        return false;
    }
};
SharedService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService }
];
SharedService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], SharedService);



/***/ }),

/***/ 7220:
/*!***************************************!*\
  !*** ./src/app/items/items.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".items-page ion-item ion-label {\n  border: 2px solid #FDBB50;\n  border-radius: 15px;\n  padding: 20px;\n  margin: 5px 50px;\n}\n\n.items-page .sc-ion-label-md-s h2 {\n  font-weight: 600;\n  font-size: 30px;\n}\n\n.items-page ion-label:hover, .items-page ion-label:focus {\n  color: #FDBB50;\n  margin: 5px 0;\n}\n\nion-list.list-md {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZW1zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFISjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUlBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUFESjs7QUFHQTtFQUNJLGdCQUFBO0FBQUoiLCJmaWxlIjoiaXRlbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyAuaW9uLWxvZ297XG4vLyAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4vLyB9XG4uaXRlbXMtcGFnZSBpb24taXRlbSBpb24tbGFiZWwge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGREJCNTA7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogNXB4IDUwcHg7XG59IFxuLml0ZW1zLXBhZ2UgLnNjLWlvbi1sYWJlbC1tZC1zIGgyIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5pdGVtcy1wYWdlIGlvbi1sYWJlbDpob3ZlciwgLml0ZW1zLXBhZ2UgaW9uLWxhYmVsOmZvY3VzIHtcbiAgICBjb2xvcjojRkRCQjUwO1xuICAgIG1hcmdpbjogNXB4IDA7XG59XG5pb24tbGlzdC5saXN0LW1kIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuIl19 */");

/***/ }),

/***/ 8691:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/items/items.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-logo\">\n      Streets of Soba\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"items-page\"> \n  <!-- <ion-row>\n    <ion-col size=\"12\">\n      <ion-title class=\"ion-logo\">\n        <ion-img src=\"../../assets/img/logo.png\"></ion-img>\n      </ion-title>\n    </ion-col>\n   </ion-row> -->\n  <ion-list lines=\"none\" >  \n      <ion-item *ngFor =\"let data of itemData; let i = index\">\n        <ion-label (click)=\"products(i)\" [style.background]=\"'url('+data.image+') center right / 190px no-repeat'\">\n          <h2>{{data.category_name}}</h2> \n        </ion-label>\n      </ion-item>  \n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_items_items_module_ts.js.map