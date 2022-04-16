(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["default-src_app_single-item_single-item_page_ts"],{

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

/***/ 7892:
/*!*************************************************!*\
  !*** ./src/app/single-item/single-item.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleItemPage": () => (/* binding */ SingleItemPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_single_item_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./single-item.page.html */ 8522);
/* harmony import */ var _single_item_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-item.page.scss */ 5526);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared.service */ 7482);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage */ 7489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);








let SingleItemPage = class SingleItemPage {
    constructor(modalController, localstore, service, router) {
        this.modalController = modalController;
        this.localstore = localstore;
        this.service = service;
        this.router = router;
        this.singleProduct = [];
    }
    ngOnInit() {
        this.singleDetails();
    }
    // single product get from service
    singleDetails() {
        let checkItem = false;
        this.service.productDetails = [];
        this.service.products.forEach((element) => {
            if (element.id == this.productId) {
                this.singleProduct.push(element);
                this.service.singleItemCart.forEach((element2) => {
                    if (element == element2.item) {
                        checkItem = true;
                    }
                });
                if (checkItem == false) {
                    this.service.singleItemCart.push({
                        quantity: 1,
                        item: element,
                        cart: false,
                    });
                }
                // if item is not added and only increment the quantity it will reset the quantity
                this.service.singleItemCart.forEach((e) => {
                    if (e.cart == false) {
                        e.quantity = 1;
                    }
                });
            }
        });
    }
    // add to cart to single product
    singleProductCart(singleProduct) {
        this.service.singleItemCart.forEach((element) => {
            if (singleProduct[0] == element.item) {
                element.cart = true;
            }
        });
        this.closeSingleItemModel();
        // this.localstore.store("singleCart", this.service.singleItemCart)
    }
    // single item quantity
    increament(item) {
        this.service.singleItemCart.forEach((element) => {
            if (item == element.item) {
                element.quantity = element.quantity + 1;
            }
        });
    }
    decreament(item) {
        this.service.singleItemCart.forEach((element) => {
            if (item == element.item) {
                if (element.quantity != 1) {
                    element.quantity = element.quantity - 1;
                }
            }
        });
    }
    mainhead() {
        console.log(this.service.singleItemCart);
    }
    closeSingleItemModel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const close = 'Modal Removed';
            yield this.modalController.dismiss(close);
        });
    }
};
SingleItemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
SingleItemPage.propDecorators = {
    productId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
SingleItemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-single-item',
        template: _raw_loader_single_item_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_single_item_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SingleItemPage);



/***/ }),

/***/ 5526:
/*!***************************************************!*\
  !*** ./src/app/single-item/single-item.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".product-details-header h3 {\n  font-size: 50px;\n  font-weight: 700;\n}\n\nion-row.product-details-header {\n  padding: 0 70px;\n  margin-top: 30px;\n}\n\nion-row.count-prod {\n  padding: 0 15px;\n  margin-top: 15px;\n}\n\n.count-prod h1 {\n  font-size: 30px;\n  font-weight: 400;\n  margin-top: 0px;\n  margin-left: 10px;\n}\n\n.count-prod h2 {\n  font-size: 30px;\n  font-weight: 600;\n  margin-top: 0px;\n  margin-left: 10px;\n}\n\nion-button.remove {\n  text-transform: capitalize;\n  font-size: 30px;\n  min-height: 70px;\n  font-weight: 600;\n  border-radius: 15px;\n  letter-spacing: inherit;\n}\n\nion-button.view {\n  text-transform: capitalize;\n  font-size: 30px;\n  min-height: 70px;\n  font-weight: 600;\n  border-radius: 15px;\n  letter-spacing: inherit;\n  background: #fac93c;\n}\n\nion-button.view button {\n  --border-radius: 105px!important;\n}\n\n.count-prod button {\n  font-size: 40px;\n  width: 60px;\n  height: 60px;\n  border-radius: 15px;\n  font-weight: 600;\n}\n\n.count-prod span {\n  font-size: 30px;\n  height: 60px;\n  text-align: center;\n  border: 2px solid #fac93c;\n  margin: 0 10px;\n  border-radius: 10px;\n  color: #fac93c;\n  font-weight: 600;\n  width: 60px;\n  line-height: 54px;\n}\n\nion-row.count-prod {\n  margin-top: 60px;\n  padding-bottom: 60px;\n}\n\nion-row.count-prod.separator {\n  border-bottom: 1px solid #fff;\n}\n\nion-row.data-footer {\n  height: 180px;\n}\n\n.data-footer h1 {\n  font-size: 60px;\n  font-weight: 400;\n}\n\nion-item.item {\n  float: right;\n}\n\nion-button {\n  --border-radius: 10px;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1pdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUtKOztBQUhBO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpBO0VBQ0ksZ0NBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFRSjs7QUFOQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQVNKOztBQVBBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQVVKOztBQVJBO0VBQ0ksNkJBQUE7QUFXSjs7QUFSQTtFQUNJLGFBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQVlKOztBQVZBO0VBQ0ksWUFBQTtBQWFKOztBQVhBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0FBY0oiLCJmaWxlIjoic2luZ2xlLWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgXG4ucHJvZHVjdC1kZXRhaWxzLWhlYWRlciBoM3tcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbmlvbi1yb3cucHJvZHVjdC1kZXRhaWxzLWhlYWRlcntcbiAgICBwYWRkaW5nOiAwIDcwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmlvbi1yb3cuY291bnQtcHJvZHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5jb3VudC1wcm9kIGgxe1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5jb3VudC1wcm9kIGgye1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmlvbi1idXR0b24ucmVtb3ZlIHsgIFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbn1cbmlvbi1idXR0b24udmlldyB7ICBcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWluLWhlaWdodDogNzBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogI2ZhYzkzYztcbn1cbmlvbi1idXR0b24udmlldyBidXR0b257XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMDVweCFpbXBvcnRhbnQ7XG59IFxuLmNvdW50LXByb2QgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jb3VudC1wcm9kIHNwYW57XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZhYzkzYztcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiAjZmFjOTNjO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDU0cHg7XG59IFxuaW9uLXJvdy5jb3VudC1wcm9kIHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4XG59XG5pb24tcm93LmNvdW50LXByb2Quc2VwYXJhdG9yIHsgXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7IFxufSAgXG5cbmlvbi1yb3cuZGF0YS1mb290ZXIgeyBcbiAgICBoZWlnaHQ6IDE4MHB4OyBcbn1cbi5kYXRhLWZvb3RlciBoMSB7XG4gICAgZm9udC1zaXplOiA2MHB4OyBcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuaW9uLWl0ZW0uaXRlbSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogNzBweDtcbn0iXX0= */");

/***/ }),

/***/ 8522:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/single-item/single-item.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-row class=\"product-details-header\" (click)=\"mainhead()\">\n    <ion-col size=\"12\">\n      <!-- <h3 class=\"ion-text-center\">Snacks and beverages</h3>   -->\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"count-prod\" *ngFor=\"let i of singleProduct\">\n    <ion-col size=\"3\">\n      <ion-img src=\"{{i.image}}\"></ion-img>\n    </ion-col>\n    <ion-col size=\"5\">\n      <h1>{{i.item_name}}</h1>\n      <h2>{{i.basic_price | number : '1.2-2'}}</h2>\n    </ion-col>\n    <ng-container>\n      <ng-container>\n        <ion-col size=\"4\">\n          <ion-item lines=\"none\" class=\"counter\">\n            <ng-container *ngFor=\"let j of service.singleItemCart\">\n              <ng-container *ngIf=\"i == j.item\">\n                <button ion-button (click)=\"decreament(j.item)\"><ion-img src=\"../assets/img/minus.png\"></ion-img></button>\n                <span>{{j.quantity}}</span>\n                <button ion-button (click)=\"increament(j.item)\"><ion-img src=\"../assets/img/plus.png\"></ion-img></button>\n              </ng-container>\n            </ng-container>\n          </ion-item>\n        </ion-col>\n      </ng-container>\n    </ng-container>\n  \n  </ion-row>\n</ion-content>\n\n<ion-footer class=\"ion-no-border product_footer\"> \n  <ion-row>\n    <ion-col size=\"6\"><ion-button color=\"light\" fill=\"outline\"  class=\"remove\" expand=\"block\" (click)=\"closeSingleItemModel()\">Close</ion-button></ion-col>\n    <ion-col size=\"6\"><ion-button color=\"primary\" class=\"view\" expand=\"block\" (click)=\"singleProductCart(singleProduct)\">Add to Cart</ion-button> </ion-col>\n  </ion-row> \n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_single-item_single-item_page_ts.js.map