(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["src_app_order-list_order-list_module_ts"],{

/***/ 3174:
/*!*********************************************************!*\
  !*** ./src/app/order-list/order-list-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListPageRoutingModule": () => (/* binding */ OrderListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-list.page */ 1978);




const routes = [
    {
        path: '',
        component: _order_list_page__WEBPACK_IMPORTED_MODULE_0__.OrderListPage
    }
];
let OrderListPageRoutingModule = class OrderListPageRoutingModule {
};
OrderListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderListPageRoutingModule);



/***/ }),

/***/ 2815:
/*!*************************************************!*\
  !*** ./src/app/order-list/order-list.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListPageModule": () => (/* binding */ OrderListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _order_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-list-routing.module */ 3174);
/* harmony import */ var _order_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-list.page */ 1978);







let OrderListPageModule = class OrderListPageModule {
};
OrderListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderListPageRoutingModule
        ],
        declarations: [_order_list_page__WEBPACK_IMPORTED_MODULE_1__.OrderListPage]
    })
], OrderListPageModule);



/***/ }),

/***/ 1978:
/*!***********************************************!*\
  !*** ./src/app/order-list/order-list.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderListPage": () => (/* binding */ OrderListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_order_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-list.page.html */ 1281);
/* harmony import */ var _order_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-list.page.scss */ 8372);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared.service */ 7482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ 7489);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 3760);








let OrderListPage = class OrderListPage {
    constructor(localstore, service, route, iab) {
        this.localstore = localstore;
        this.service = service;
        this.route = route;
        this.iab = iab;
        this.a = 1;
        this.singleItemTrue = [];
        this.filterSingleItem = [];
        this.filterMainItem = [];
        this.BothItems = [];
        this.finalArray = [];
        this.postRequestData = {};
    }
    ngOnInit() {
        // console.log(this.service.itemCartFinal)
        // // if (this.service.singleItemCart.length == 0) {
        // //   this.route.navigate(['/home']);
        // // }
        // console.log(this.service.itemCartFinal)
        // console.log(this.service.singleItemCart)
    }
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
        // console.log(this.service.itemCartFinal)
        return this.service.itemCartFinal;
    }
    singleCartIncrement(item) {
        this.service.singleItemCart.forEach((element) => {
            if (item == element.item) {
                element.quantity = element.quantity + 1;
            }
        });
    }
    singleCartDecrement(item) {
        this.service.singleItemCart.forEach((element) => {
            if (item == element.item) {
                if (element.quantity != 1) {
                    element.quantity = element.quantity - 1;
                }
            }
        });
    }
    deleteSingleItem(item) {
        this.service.singleItemCart.forEach((element) => {
            if (item == element.item) {
                element.cart = false;
                element.quantity = 1;
            }
        });
    }
    // For calculate total price
    get totalValue() {
        let singleItemtotal = 0;
        let multiplItemtotal = 0;
        this.service.itemCartFinal.forEach(element => {
            if (this.service.coupon == true && element.quantity >= 2) {
                multiplItemtotal += (element.quantity * (element.base_price + element.additional_price)) - (element.base_price + element.additional_price) * Math.floor((element.quantity / 2));
                // console.log(multiplItemtotal)
                // console.log((element.quantity * (element.base_price + element.additional_price)))
                console.log((element.base_price + element.additional_price) * Math.floor((element.quantity / 2)));
                console.log(element.quantity / 2);
                console.log(Math.floor((element.quantity / 2)));
            }
            else {
                multiplItemtotal += element.quantity * (element.base_price + element.additional_price);
            }
        });
        this.service.singleItemCart.forEach((element) => {
            if (element.cart == true) {
                singleItemtotal =
                    singleItemtotal + element.quantity * element.item.basic_price;
            }
        });
        return singleItemtotal + multiplItemtotal;
    }
    orderListBack() {
        if (this.service.coupon == true) {
            this.service.coupon = false;
        }
        this.route.navigate(['/products', { index: this.service.itemIndex }]);
    }
    removeCart(item) {
        for (let i = 0; i < this.service.itemCartFinal.length; i++) {
            if (this.service.itemCartFinal[i] == item) {
                const index1 = this.service.itemCartFinal.indexOf(this.service.itemCartFinal[i]);
                if (index1 > -1) {
                    this.service.itemCartFinal.splice(index1, 1);
                }
            }
        }
    }
    cartQuantity(index, operator) {
        if (this.service.coupon == true) {
            this.service.coupon = false;
        }
        if (operator == '+') {
            this.service.itemCartFinal[index]['quantity'] += 1;
        }
        else {
            if (this.service.itemCartFinal[index]['quantity'] != 1) {
                this.service.itemCartFinal[index]['quantity'] -= 1;
            }
        }
    }
    editItem(index) {
        if (this.service.coupon == true) {
            this.service.coupon = false;
        }
        this.route.navigate(['/update', { id: index }]);
    }
    checkout() {
        this.service.singleItemCart.forEach(element => {
            if (element.cart == true) {
                this.singleItemTrue.push(element);
            }
        });
        this.singleItemTrue.forEach(element2 => {
            element2.item['quantity'] = element2.quantity;
        });
        this.singleItemTrue.forEach(element2 => {
            this.filterSingleItem.push(element2.item);
        });
        this.itemCart.forEach(element3 => {
            let obj = { "id": element3.item_id, "basic_price": element3.base_price, "image": element3.image, "quantity": element3.quantity,
                "options": element3.options, "item_name": element3.item_name };
            this.filterMainItem.push(obj);
        });
        this.BothItems = this.filterMainItem.concat(this.filterSingleItem);
        this.finalArray = { items: this.BothItems, dining_title: this.service.dinigLocation, is_promo_applied: this.service.coupon };
        console.log("nayak");
        console.log(this.finalArray);
        this.service.postData(this.finalArray).subscribe((data) => {
            this.postRequestData = data;
            console.log(data);
            if (this.postRequestData.status == 'success') {
                const options = {
                    location: 'no',
                    hidden: 'no',
                    zoom: 'yes',
                    hideurlbar: 'yes', //Or 'no'
                };
                const browser = this.iab.create('http://poke-theory.quocent.com/receipt/' + data['data'], 'blank', options);
                browser.on('loadstop').subscribe(event => {
                    setTimeout(() => {
                        browser.close();
                        this.route.navigate(['/home'])
                            .then(() => {
                            window.location.reload();
                        });
                    }, 5000);
                });
                browser.on('exit').subscribe(event => {
                    browser.close();
                });
            }
        });
    }
    coupon() {
        this.route.navigate(['/coupon']);
    }
    test() {
        console.log(this.service.itemCartFinal);
    }
    sum(x) {
        this.sumdata = Math.floor(x / 2);
    }
};
OrderListPage.ctorParameters = () => [
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__.InAppBrowser }
];
OrderListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-order-list',
        template: _raw_loader_order_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderListPage);



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

/***/ 8372:
/*!*************************************************!*\
  !*** ./src/app/order-list/order-list.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-poke-logo {\n  background: url('banner-11.png') no-repeat right top/88%;\n  font-size: 40px;\n  font-weight: 600;\n  padding: 60px 40px;\n}\n\n.product_footer ion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.product_footer ion-col ion-button {\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 34px;\n  height: 80px;\n  font-weight: 700;\n  letter-spacing: inherit;\n}\n\n.product-details-header h3 {\n  font-size: 40px;\n  font-weight: 600;\n  letter-spacing: inherit;\n}\n\nion-row.product-details-header {\n  padding: 0 70px;\n  margin-top: 30px;\n}\n\n.count-prod h1, .count-prod h2 {\n  font-size: 30px;\n  font-weight: 600;\n  margin: 0px;\n}\n\n.count-prod h2 {\n  margin-top: 5px;\n}\n\nion-button.remove {\n  text-transform: capitalize;\n  font-size: 30px;\n  min-height: 70px;\n  font-weight: 600;\n  border-radius: 15px;\n  letter-spacing: inherit;\n}\n\nion-button.view {\n  text-transform: capitalize;\n  font-size: 30px;\n  min-height: 70px;\n  font-weight: 600;\n  border-radius: 15px;\n  background: #FDBB50;\n}\n\nion-button.view button {\n  --border-radius: 105px!important;\n}\n\n.count-prod h1 {\n  color: #FDBB50;\n}\n\n.count-prod button {\n  font-size: 40px;\n  width: 70px;\n  height: 70px;\n  border-radius: 10px;\n}\n\n.count-prod span {\n  font-size: 34px;\n  height: 70px;\n  text-align: center;\n  border: 2px solid #FDBB50;\n  margin: 0 10px;\n  border-radius: 10px;\n  color: #FFF6EE;\n  font-weight: 600;\n  width: 70px;\n  line-height: 60px;\n}\n\nion-row.count-prod.separator {\n  border-bottom: 1px solid #fff;\n  margin: 30px;\n  padding-bottom: 20px;\n}\n\n.data-footer h1 {\n  font-size: 34px;\n  font-weight: 400;\n}\n\nion-item.item {\n  float: right;\n}\n\n.item-inner {\n  border-bottom: 0;\n}\n\n.coupon_add {\n  background-color: #FDBB50;\n  padding: 18px;\n  text-align: center;\n  margin: 40px;\n  color: #000;\n  font-weight: bold;\n  border-radius: 2px;\n}\n\n.discount-span {\n  border: none !important;\n  font-size: 28px !important;\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0RBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFFSjs7QUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7QUFPSjs7QUFMQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBUUo7O0FBTkE7RUFDSSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVNKOztBQVBBO0VBQ0ksZ0NBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBWUo7O0FBVkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFhSjs7QUFQQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFXSjs7QUFUQTtFQUNJLFlBQUE7QUFZSjs7QUFUQTtFQUNJLGdCQUFBO0FBWUo7O0FBVEE7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVlKOztBQVZBO0VBQ0ksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FBYUoiLCJmaWxlIjoib3JkZXItbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLXBva2UtbG9nb3tcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXItMTEucG5nKSBuby1yZXBlYXQgcmlnaHQgdG9wIC8gODglO1xuICAgIGZvbnQtc2l6ZTo0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzo2MHB4IDQwcHg7XG59XG4ucHJvZHVjdF9mb290ZXIgaW9uLWNvbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4ucHJvZHVjdF9mb290ZXIgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDM0cHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG59IFxuLnByb2R1Y3QtZGV0YWlscy1oZWFkZXIgaDN7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG59XG5pb24tcm93LnByb2R1Y3QtZGV0YWlscy1oZWFkZXJ7XG4gICAgcGFkZGluZzogMCA3MHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59IFxuLmNvdW50LXByb2QgaDEsIC5jb3VudC1wcm9kIGgye1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmNvdW50LXByb2QgaDJ7IFxuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbmlvbi1idXR0b24ucmVtb3ZlIHsgIFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbn1cbmlvbi1idXR0b24udmlldyB7ICBcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWluLWhlaWdodDogNzBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0ZEQkI1MDtcbn1cbmlvbi1idXR0b24udmlldyBidXR0b257XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMDVweCFpbXBvcnRhbnQ7XG59XG4uY291bnQtcHJvZCBoMXtcbiAgICBjb2xvcjogI0ZEQkI1MDtcbn1cbi5jb3VudC1wcm9kIGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNvdW50LXByb2Qgc3BhbiB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZEQkI1MDtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiAjRkZGNkVFO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG59IFxuLy8gaW9uLXJvdy5jb3VudC1wcm9kIHtcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4OyBcbi8vICAgICBwYWRkaW5nOiAwIDMwcHggMjBweCAzMHB4O1xuLy8gfVxuaW9uLXJvdy5jb3VudC1wcm9kLnNlcGFyYXRvciB7IFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmOyBcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uZGF0YS1mb290ZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMzRweDsgXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbmlvbi1pdGVtLml0ZW0ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgXG59XG4uaXRlbS1pbm5lcntcbiAgICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4uY291cG9uX2FkZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRCQjUwO1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNDBweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uZGlzY291bnQtc3BhbntcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDI4cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn0iXX0= */");

/***/ }),

/***/ 1281:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-list/order-list.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n      <ion-title class=\"ion-poke-logo\">\n        Streets of Soba\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row class=\"product-details-header\" >\n    <ion-col size=\"12\">\n      <h3 class=\"ion-text-center\">Order List</h3>\n    </ion-col>\n  </ion-row>\n  <ng-container *ngFor=\"let i of itemCart; let index = index\">\n  \n      <ion-row class=\"count-prod separator\">\n        <ion-col size=\"6\">\n          <h1>{{i.item_name}}\n          </h1>\n          <!-- <h2 *ngIf=\"service.coupon == false\">{{i.quantity * (i.base_price + i.additional_price ) | number : '1.2-2'}}</h2> -->\n          <ng-container>\n            {{sum(i.quantity)}}\n          </ng-container>\n          <ng-container *ngIf=\"service.coupon == true && i.quantity>=2; else elseNotDone\">\n            <h2><span class=\"discount-span\">{{i.quantity * (i.base_price + i.additional_price ) | number : '1.2-2'}}</span>{{i.quantity * (i.base_price + i.additional_price )-(i.base_price + i.additional_price )*sumdata | number : '1.2-2'}}</h2>\n          </ng-container>\n      \n          <ng-template #elseNotDone>\n                      <h2>{{i.quantity * (i.base_price + i.additional_price ) | number : '1.2-2'}}</h2>\n\n          </ng-template>\n          <!-- <h2 *ngIf=\"service.coupon == true && i.quantity>=2\">{{i.quantity * (i.base_price + i.additional_price )-(i.base_price + i.additional_price )*sumdata | number : '1.2-2'}}<span class=\"discount-span\">{{i.quantity * (i.base_price + i.additional_price ) | number : '1.2-2'}}</span></h2> -->\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item lines=\"none\" class=\"counter\">\n            <button ion-button (click)=\"cartQuantity(index,'-')\"><ion-img src=\"../assets/img/minus.png\"></ion-img></button>\n            <span>{{i.quantity}}</span>\n            <button ion-button (click)=\"cartQuantity(index,'+')\"><ion-img src=\"../assets/img/plus.png\"></ion-img></button>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button color=\"light\" fill=\"outline\" class=\"remove\" expand=\"block\" (click)=\"removeCart(i)\">Remove</ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button color=\"primary\" class=\"view\" expand=\"block\" (click)=\"editItem(index )\">View/Edit</ion-button>\n        </ion-col>\n        </ion-row>\n      \n  </ng-container>\n  <ng-container *ngFor=\"let i of service.singleItemCart\">\n    <ng-container *ngIf=\"i.cart == true\">\n      <ion-row class=\"count-prod separator\">\n        <ion-col size=\"6\">\n          <h1>{{i.item.item_name}}\n          </h1>\n          <h2>{{i.quantity * i.item.basic_price | number : '1.2-2'}}</h2>\n         \n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item lines=\"none\" class=\"counter\">\n            <button ion-button (click)=\"singleCartDecrement(i.item)\"><ion-img src=\"../assets/img/minus.png\"></ion-img></button>\n            <span>{{i.quantity}}</span>\n            <button ion-button (click)=\"singleCartIncrement(i.item)\"><ion-img src=\"../assets/img/plus.png\"></ion-img></button>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button color=\"light\" fill=\"outline\" class=\"remove\" expand=\"block\" (click)=\"deleteSingleItem(i.item)\">\n            Remove</ion-button>\n        </ion-col>\n       \n      </ion-row>\n     \n    </ng-container>\n  </ng-container>\n  \n  <h1 *ngIf=\"totalValue == 0\" style=\"    text-align: center;margin-top: 100px;\">No Item In Your Cart</h1>\n</ion-content>\n\n<ion-footer class=\"ion-no-border product_footer\">\n  <h1 (click)=\"coupon()\" class=\"coupon_add\">Apply Promotion</h1>\n  <ion-row class=\"data-footer\">\n    <ion-col size=\"12\">\n      <h1 class=\"ion-text-center\">Total <strong>${{totalValue | number : '1.2-2'}}</strong></h1>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button color=\"medium\" expand=\"full\" (click)=\"orderListBack()\">Back</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button color=\"primary\" expand=\"full\" (click)=\"checkout()\">Checkout</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_order-list_order-list_module_ts.js.map