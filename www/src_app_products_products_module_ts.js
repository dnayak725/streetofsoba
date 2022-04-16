(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["src_app_products_products_module_ts"],{

/***/ 986:
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageRoutingModule": () => (/* binding */ ProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.page */ 3854);




const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_0__.ProductsPage
    }
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductsPageRoutingModule);



/***/ }),

/***/ 8980:
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageModule": () => (/* binding */ ProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-routing.module */ 986);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page */ 3854);







let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsPageRoutingModule
        ],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_1__.ProductsPage]
    })
], ProductsPageModule);



/***/ }),

/***/ 3854:
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPage": () => (/* binding */ ProductsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./products.page.html */ 5974);
/* harmony import */ var _products_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page.scss */ 7451);
/* harmony import */ var _single_item_single_item_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../single-item/single-item.page */ 7892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.service */ 7482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage */ 7489);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);









let ProductsPage = class ProductsPage {
    constructor(service, route, localstore, modalController, activateroute) {
        this.service = service;
        this.route = route;
        this.localstore = localstore;
        this.modalController = modalController;
        this.activateroute = activateroute;
        this.segmentModel = this.service.itemIndex;
        this.tabIndex = 0;
        this.slideOpts = {
            initialSlide: 1,
            slidesPerView: 2,
            speed: 400,
            loop: false,
            autoplay: {
                delay: 4000,
            },
        };
    }
    ngOnInit() {
        // get id from item page product function
        this.activateroute.params.subscribe((params) => {
            this.service.itemIndex = params['index'];
        });
        this.items();
    }
    // single item modal open
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _single_item_single_item_page__WEBPACK_IMPORTED_MODULE_2__.SingleItemPage,
                componentProps: {
                    productId: this.productId,
                },
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned !== null) {
                    this.dataReturned = dataReturned.data;
                    //alert('Modal Sent Data :'+ dataReturned);
                }
            });
            return yield modal.present();
        });
    }
    // single item modal close
    closeModel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const close = 'Modal Removed';
            yield this.modalController.dismiss(close);
        });
    }
    segmentChanged(event) {
        console.log(event);
    }
    // all product item get from server
    items() {
        this.service.getApiResponcse().subscribe((res) => {
            this.allResponse = res;
            this.itemData = this.allResponse.data;
            // active tab product
            this.service.products = this.itemData[this.service.itemIndex].items;
        });
    }
    // click item tab to show item products
    itemProducts(i) {
        this.tabIndex = i;
        this.service.products = this.itemData[i].items;
    }
    // route from product page to product details
    productDetails(id, options) {
        if (options.length == 0) {
            this.productId = id;
            this.openModal();
        }
        else {
            this.route.navigate(['/product-details', { productId: id }]);
        }
    }
    orderList() {
        this.route.navigate(['/order-list']);
    }
    // For calculate total price
    get totalValue() {
        let singleItemtotal = 0;
        this.service.singleItemCart.forEach((element) => {
            if (element.cart == true) {
                singleItemtotal =
                    singleItemtotal + element.quantity * element.item.basic_price;
            }
        });
        return singleItemtotal;
    }
    //  product footer item list
    get itemCart() {
        for (let i = 0; i < this.service.itemCartFinal.length; i++) {
            this.service.itemCartFinal[i]['additional_price'] = 0;
            for (let j = 0; j < this.service.products.length; j++) {
                if (this.service.itemCartFinal[i]['item_id'] == this.service.products[j]['id']) {
                    this.service.itemCartFinal[i]['base_price'] = this.service.products[j]['basic_price'];
                    this.service.itemCartFinal[i]['item_name'] = this.service.products[j]['item_name'];
                    this.service.itemCartFinal[i]['image'] = this.service.products[j]['image'];
                }
            }
            for (let k = 0; k < this.service.itemCartFinal[i]['options'].length; k++) {
                this.service.itemCartFinal[i]['additional_price'] = (this.service.itemCartFinal[i]['additional_price'] + this.service.itemCartFinal[i]['options'][k]['additional_price']);
            }
        }
        return this.service.itemCartFinal;
    }
    get totalValues() {
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
    startOver() {
        this.route.navigate(["/home"]).then(() => {
            window.location.reload();
        });
    }
};
ProductsPage.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_3__.SharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__.LocalStorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
ProductsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-products',
        template: _raw_loader_products_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_products_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductsPage);



/***/ }),

/***/ 7451:
/*!*********************************************!*\
  !*** ./src/app/products/products.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-poke-logo {\n  background: url('banner-11.png') no-repeat right top/100%;\n  font-size: 40px;\n  font-weight: 600;\n  padding: 60px 60px;\n}\n\n.product_footer ion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.product_footer ion-col ion-button {\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 34px;\n  height: 80px;\n  font-weight: 700;\n  letter-spacing: inherit;\n}\n\n.product-wrapper ion-label {\n  color: #fff;\n  display: block;\n  width: auto;\n  height: auto;\n  font-weight: 400;\n}\n\nion-row.product-wrapper {\n  text-align: center;\n}\n\n.product-wrapper ion-col {\n  margin-bottom: 20px;\n  margin-top: 15px;\n}\n\n.product-wrapper ion-img {\n  width: 140px;\n  height: 140px;\n  display: inline-block;\n}\n\n.productsegment ion-segment-button ion-img.md.hydrated {\n  height: 70px;\n}\n\nion-segment ~ ion-grid .product-wrapper ion-col:hover ion-img,\nion-segment ~ ion-grid .product-wrapper ion-col:focus ion-img {\n  border: #FDBB50 3px solid;\n}\n\nion-segment ~ ion-grid .product-wrapper ion-col:hover ion-label,\nion-segment ~ ion-grid .product-wrapper ion-col:hover ion-label {\n  color: #FDBB50;\n}\n\n.slideOpt p {\n  border: 1px solid #000;\n  padding: 5px 12px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.product_footer .slideOpt p {\n  width: calc(100% - 30px);\n  float: left;\n  margin: 5px 2px;\n}\n\n.swiper-container {\n  margin-left: 50px;\n  margin-right: 50px;\n}\n\n.btnPrev, .btnNext {\n  position: absolute;\n  width: 40px;\n  top: 7px;\n  background: transparent;\n}\n\nbutton.btnNext {\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBT0Q7O0FBTEE7RUFDSSxZQUFBO0FBUUo7O0FBTkE7O0VBRUkseUJBQUE7QUFTSjs7QUFQQTs7RUFFSSxjQUFBO0FBVUo7O0FBUkE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFXSjs7QUFUQTtFQUNJLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFZSjs7QUFWQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFhSjs7QUFYQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSx1QkFBQTtBQWNKOztBQVpBO0VBQ0ksUUFBQTtBQWVKIiwiZmlsZSI6InByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tcG9rZS1sb2dve1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2Jhbm5lci0xMS5wbmcpIG5vLXJlcGVhdCByaWdodCB0b3AgLyAxMDAlO1xuICAgIGZvbnQtc2l6ZTo0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzo2MHB4IDYwcHg7XG59XG4ucHJvZHVjdF9mb290ZXIgaW9uLWNvbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4ucHJvZHVjdF9mb290ZXIgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG59XG4ucHJvZHVjdC13cmFwcGVyIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24tcm93LnByb2R1Y3Qtd3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2R1Y3Qtd3JhcHBlciBpb24tY29sIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucHJvZHVjdC13cmFwcGVyIGlvbi1pbWd7XG5cdHdpZHRoOiAxNDBweDtcblx0aGVpZ2h0OiAxNDBweDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnByb2R1Y3RzZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiBpb24taW1nLm1kLmh5ZHJhdGVkIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG59XG5pb24tc2VnbWVudCB+IGlvbi1ncmlkIC5wcm9kdWN0LXdyYXBwZXIgaW9uLWNvbDpob3ZlciBpb24taW1nICxcbmlvbi1zZWdtZW50IH4gaW9uLWdyaWQgLnByb2R1Y3Qtd3JhcHBlciBpb24tY29sOmZvY3VzIGlvbi1pbWcge1xuICAgIGJvcmRlcjojRkRCQjUwIDNweCBzb2xpZDtcbn1cbmlvbi1zZWdtZW50IH4gaW9uLWdyaWQgLnByb2R1Y3Qtd3JhcHBlciBpb24tY29sOmhvdmVyIGlvbi1sYWJlbCxcbmlvbi1zZWdtZW50IH4gaW9uLWdyaWQgLnByb2R1Y3Qtd3JhcHBlciBpb24tY29sOmhvdmVyIGlvbi1sYWJlbHtcbiAgICBjb2xvcjojRkRCQjUwO1xufSBcbi5zbGlkZU9wdCBwe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4ucHJvZHVjdF9mb290ZXIgLnNsaWRlT3B0IHB7IFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDVweCAycHg7XG59XG4uc3dpcGVyLWNvbnRhaW5lcntcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG59XG4uYnRuUHJldiwgLmJ0bk5leHR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHRvcDogN3B4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSBcbmJ1dHRvbi5idG5OZXh0IHsgXG4gICAgcmlnaHQ6IDA7XG59XG4iXX0= */");

/***/ }),

/***/ 5974:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-poke-logo\">\n      Streets of Soba\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"productsegment\">\n  <ion-segment scrollable=\"true\" value=\"0\" mode=\"ios\" [(ngModel)]=\"segmentModel\" (ionChange)=\"segmentChanged($event)\">\n    <ng-container *ngFor=\"let data of itemData; let i = index\">\n      <ion-segment-button value=\"{{i}}\" (click)=\"itemProducts(i)\">\n        <ion-img src=\"{{data.full_image}}\"></ion-img>\n        <ion-label>{{data.category_name}}<br>\n        </ion-label>\n      </ion-segment-button>\n    </ng-container>\n  </ion-segment>\n  <ion-grid *ngIf=\"segmentModel == tabIndex || segmentModel == this.service.itemIndex\">\n    <ion-row class=\"product-wrapper\">\n      <ng-container *ngFor=\"let data of service.products; let i = index\">\n        <ion-col size=\"4\" (click)=\"productDetails(data.id,data.options)\">\n          <ion-img src=\"{{data.image}}\" class=\"img\"></ion-img>\n          <ion-label>{{data.item_name}}</ion-label>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer class=\"ion-no-border product_footer \">\n  <ion-row class=\"data-footer\">\n    <ion-col size=\"6\">\n      <h1>My order - {{service.dinigLocation}}</h1>\n    </ion-col>\n    <ion-col size=\"6\">\n      <h1 class=\"ion-text-end\">Total: ${{totalValues | number : '1.2-2'}}</h1>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h1 style=\"font-weight: 500;margin-top: 0px;\" *ngIf=\"service.singleItemCart.length == 0\">Your cart is empty</h1>\n      <ion-slides [options]=\"slideOpts\" class=\"slideOpt\">\n        <ng-container *ngFor=\"let i of itemCart\">\n          <ion-slide *ngIf=\"i.cart == true\">\n            <p>{{i.quantity}} × {{i.item_name}}</p>\n          \n          </ion-slide>\n        </ng-container>\n        <ng-container *ngFor=\"let i of service.singleItemCart\">\n       \n          <ion-slide *ngIf=\"i.cart == true\">\n            <p>{{i.quantity}} × {{i.item.item_name}}</p>\n          \n          </ion-slide>\n        </ng-container>\n      \n    \n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button color=\"medium\" expand=\"full\" (click)=\"startOver()\">Start Over</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button color=\"primary\" expand=\"full\" (click)=\"orderList()\">View Cart</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_products_products_module_ts.js.map