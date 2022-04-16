(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["src_app_order-success_order-success_module_ts"],{

/***/ 212:
/*!***************************************************************!*\
  !*** ./src/app/order-success/order-success-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderSuccessPageRoutingModule": () => (/* binding */ OrderSuccessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _order_success_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-success.page */ 1837);




const routes = [
    {
        path: '',
        component: _order_success_page__WEBPACK_IMPORTED_MODULE_0__.OrderSuccessPage
    }
];
let OrderSuccessPageRoutingModule = class OrderSuccessPageRoutingModule {
};
OrderSuccessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderSuccessPageRoutingModule);



/***/ }),

/***/ 6440:
/*!*******************************************************!*\
  !*** ./src/app/order-success/order-success.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderSuccessPageModule": () => (/* binding */ OrderSuccessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _order_success_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-success-routing.module */ 212);
/* harmony import */ var _order_success_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-success.page */ 1837);







let OrderSuccessPageModule = class OrderSuccessPageModule {
};
OrderSuccessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_success_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderSuccessPageRoutingModule
        ],
        declarations: [_order_success_page__WEBPACK_IMPORTED_MODULE_1__.OrderSuccessPage]
    })
], OrderSuccessPageModule);



/***/ }),

/***/ 1837:
/*!*****************************************************!*\
  !*** ./src/app/order-success/order-success.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderSuccessPage": () => (/* binding */ OrderSuccessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_order_success_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-success.page.html */ 4391);
/* harmony import */ var _order_success_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-success.page.scss */ 7498);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared.service */ 7482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ 7489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/printer/ngx */ 7008);








let OrderSuccessPage = class OrderSuccessPage {
    constructor(localstore, printer, router, service) {
        this.localstore = localstore;
        this.printer = printer;
        this.router = router;
        this.service = service;
    }
    ngOnInit() {
        console.log(this.service.itemCartFinal);
        console.log(this.service.singleItemCart);
        setTimeout(() => {
            this.router.navigate(['/home']).then(() => {
                window.location.reload();
            });
            ;
        }, 80000);
        this.date = new Date();
        this.print();
    }
    // For calculate total price
    get totalValue() {
        let singleItemtotal = 0;
        let multiplItemtotal = 0;
        this.service.itemCartFinal.forEach(element => {
            multiplItemtotal += element.quantity * (element.base_price + element.additional_price);
        });
        this.service.singleItemCart.forEach((element) => {
            if (element.cart == true) {
                singleItemtotal =
                    singleItemtotal + element.quantity * element.item.basic_price;
            }
        });
        return singleItemtotal + multiplItemtotal;
    }
    print() {
        this.printer.isAvailable().then((onSuccess) => {
            let content = document.getElementById('printer').innerHTML;
            let options = {
                name: 'MyDocument',
                duplex: true,
                orientation: "portrait",
                monochrome: true
            };
            this.printer.print(content, options).then((value) => {
                console.log('value:', value);
            }, (error) => {
                console.log('eror:', error);
            });
        }, (err) => {
            console.log('err:', err);
        });
    }
};
OrderSuccessPage.ctorParameters = () => [
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService },
    { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_3__.Printer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService }
];
OrderSuccessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-order-success',
        template: _raw_loader_order_success_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_success_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderSuccessPage);



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

/***/ 7498:
/*!*******************************************************!*\
  !*** ./src/app/order-success/order-success.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".hide {\n  display: none;\n}\n\n.thanku h1 {\n  margin-top: 320px;\n  font-size: 50px;\n  letter-spacing: inherit;\n  font-weight: 700;\n  color: #FFCB1F;\n}\n\n.thanku p {\n  font-size: 30px;\n  letter-spacing: inherit;\n  font-weight: 600;\n}\n\n.thanku p span {\n  display: block;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLXN1Y2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EQTtFQUNJLGFBQUE7QUFsREo7O0FBcURBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFsREo7O0FBb0RBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFqREo7O0FBbURBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBaERKIiwiZmlsZSI6Im9yZGVyLXN1Y2Nlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLnByaW50LW91dCB7XG4vLyAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuLy8gICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4vLyAgICAgY29sb3I6ICMwMDA7XG4vLyAgICAgcGFkZGluZzogNTBweDtcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xuLy8gICAgIGJvcmRlcjogM3B4IHNvbGlkICMxODE4MTg7XG4vLyB9XG4vLyAuY2F0ZWdvcnlfc2VjIHtcbi8vICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuLy8gfVxuLy8gLmNhdGVnb3J5X3NlYyBoMyB7XG4vLyAgICAgbWFyZ2luOiAwIDAgNXB4IDAgO1xuLy8gICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbi8vICAgICBmb250LXNpemU6IDI0cHg7XG4vLyB9XG4vLyAuY2F0ZWdvcnlfaGVhZF9zZWMgaDIge1xuLy8gICAgIG1hcmdpbjogMDsgXG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbi8vICAgICBmb250LXNpemU6IDI0cHg7XG4vLyB9XG4vLyAuY2F0ZWdvcnlfc2VjIGgxIHtcbi8vICAgICBtYXJnaW46IDA7IFxuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgICAgZm9udC1zaXplOiAzMHB4O1xuLy8gfVxuLy8gLmNhdGVnb3J5X3NlYyBwe1xuLy8gICAgIG1hcmdpbjogMCAwIDVweCAwIDsgXG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbi8vICAgICBmb250LXNpemU6IDIwcHg7XG4vLyB9XG4vLyAuY2F0ZWdvcnlfaGVhZF9zZWMge1xuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCAjMDAwIGRhc2hlZDtcbi8vICAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICMwMDA7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbi8vIH1cbi8vIC5jYXRlZ29yeV90b3Rfc2VjIHtcbi8vICAgICBib3JkZXItYm90dG9tOiAxcHggIzAwMCBkYXNoZWQ7XG4vLyAgICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjMDAwO1xuLy8gICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4vLyB9XG4vLyAuY2F0ZWdvcnlfdG90X3NlYyBoMSB7XG4vLyAgICAgbWFyZ2luOiAwOyBcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xuLy8gICAgIGZvbnQtc2l6ZTogMzBweDtcbi8vICAgICBwYWRkaW5nOiAxNXB4IDA7XG4vLyB9XG4vLyAubG9nb193cmFwIGltZ3tcbi8vICAgICBoZWlnaHQ6IDE3MHB4O1xuLy8gfVxuLmhpZGV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRoYW5rdSBoMXtcbiAgICBtYXJnaW4tdG9wOiAzMjBweDtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogI0ZGQ0IxRjtcbn1cbi50aGFua3UgcHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xufVxuLnRoYW5rdSBwIHNwYW57XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ 4391:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-success/order-success.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-row class=\"ion-text-center thanku\">\n    <ion-col size=\"12\">\n      <h1>THANK YOU FOR YOUR ORDER!</h1>\n      <!-- <p>Your order number is <span>345</span></p> -->\n    </ion-col>\n  </ion-row>\n\n\n  <div id=\"printer\" >\n    <div style=\"background: #fff !important;\n    min-height: 100%; font-size: 10px !important;\n    color: #000; margin: 2px;\n    border: 1px solid #181818;\">\n      <div style=\"padding-top: 30px;\">\n        <ion-row class=\"ion-text-center\">\n          <ion-col size=\"12\">\n            <center>\n              <img src=\"https://poke-theory.quocent.com/assets/images/poke-theory-white-logo.png\"\n                style=\"height: 50px;\" />\n            </center>\n          </ion-col>\n          <center>\n            <ion-col size=\"12\">\n              <h1>Poke Theory</h1>\n            </ion-col>\n            <ion-col size=\"12\">\n              <p>111 Somerset Rd, #1-04, Singapore 238164</p>\n              <p>*Please Make The Payment At The Counter*</p>\n            </ion-col>\n          </center>\n\n        </ion-row>\n      </div>\n      <div style=\"border-bottom: 1px #000 dashed;\n      border-top: 1px dashed #000;\n      margin-bottom: 30px;\">\n        <center>\n          <ion-col size=\"12\">\n            <h2 style=\"margin: 0;font-weight: 600;font-size: 16px;\">{{service.dinigLocation}}</h2>\n          </ion-col>\n        </center>\n      </div>\n      <div style=\"margin-bottom: 30px;font-size: 10px !important;\" *ngFor=\"let i of service.itemCartFinal\">\n        <table  width=\"100%\">\n          <tr>\n            <td>\n              <p style=\"font-size: 10px;font-weight: 200;\">{{i.quantity}} x {{i.item_name}}</p>\n            </td>\n            <td>\n              <p style=\"text-align: end;font-size: 10px;font-weight: 200;\">\n           \n              \n                    {{i.base_price * i.quantity | number}}\n                \n              </p>\n            </td>\n          </tr>\n          \n        </table>\n        <ng-container *ngFor=\"let j of i.options\">\n       \n            <table width=\"100%\">\n              <tr>\n                <td>\n                  <p style=\"font-size: 10px;\">{{i.quantity}} x {{j.option_name}}</p>\n                </td>\n                <td>\n                  <p style=\"text-align: end;font-size: 10px;\">{{i.quantity * j.additional_price}}</p>\n                </td>\n              </tr>\n            </table>\n      \n        </ng-container>\n      </div>\n      <div>\n        <ng-container *ngFor=\"let i of service.singleItemCart\">\n       \n        <table  *ngIf=\"i.cart == true\" width=\"100%\">\n          <tr>\n            <td>\n              <p style=\"font-size: 10px;font-weight: 200;\">{{i.quantity}} x {{i.item.item_name}}</p>\n            </td>\n            <td>\n              <p style=\"text-align: end;font-size: 10px;font-weight: 200;\">{{i.quantity * i.item.basic_price | number : '1.2-2'}}</p>\n            </td>\n          </tr>\n        </table>\n     \n      </ng-container>\n      </div>\n      <div style=\"border-bottom: 1px #000 dashed;\n      border-top: 1px dashed #000;font-size: 10px !important;\n      margin-bottom: 30px; margin-top: 30px;\">\n      <table width=\"100%\">\n        <tr>\n          <td>\n            <h3 style=\"font-size: 10px;\">Total</h3>\n          </td>\n          <td>\n            <h3 style=\"text-align: end;font-size: 10px;\">{{totalValue |number}}</h3>\n          </td>\n        </tr>\n      </table>\n      </div>\n      <div>\n        <ion-row>\n          <ion-col size=\"12\">\n            <center>\n              <p>*Please Make The Payment At The Counter*</p>\n            </center>\n            <p style=\"margin: 0 0 5px 0; \n            font-weight: 600;\n            font-size: 10px;\">{{date | date: 'dd'}}/{{date | date:'MM'}}/{{date | date: 'yyyy'}} {{date | date: 'HH'}}:{{date | date: 'mm'}}</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_order-success_order-success_module_ts.js.map