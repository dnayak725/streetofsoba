(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["src_app_product-details_product-details_module_ts"],{

/***/ 6301:
/*!*******************************************************************!*\
  !*** ./src/app/product-details/product-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsPageRoutingModule": () => (/* binding */ ProductDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details.page */ 9277);




const routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsPage
    }
];
let ProductDetailsPageRoutingModule = class ProductDetailsPageRoutingModule {
};
ProductDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductDetailsPageRoutingModule);



/***/ }),

/***/ 6283:
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsPageModule": () => (/* binding */ ProductDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _product_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details-routing.module */ 6301);
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details.page */ 9277);







let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _product_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductDetailsPageRoutingModule
        ],
        declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_1__.ProductDetailsPage]
    })
], ProductDetailsPageModule);



/***/ }),

/***/ 9277:
/*!*********************************************************!*\
  !*** ./src/app/product-details/product-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailsPage": () => (/* binding */ ProductDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_product_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-details.page.html */ 5578);
/* harmony import */ var _product_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-details.page.scss */ 8243);
/* harmony import */ var _single_product_single_product_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../single-product/single-product.page */ 5997);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _base_modal_base_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-modal/base-modal.page */ 4541);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.service */ 7482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-webstorage */ 7489);











let ProductDetailsPage = class ProductDetailsPage {
    constructor(modalController, service, route, localstore, activeroute) {
        this.modalController = modalController;
        this.service = service;
        this.route = route;
        this.localstore = localstore;
        this.activeroute = activeroute;
        this.filterOptions = [];
        this.slecteArrayLength = [];
        this.optionName = [];
        this.flag = false;
        this.separation = false;
        this.separation2 = false;
    }
    ngOnInit() {
        //  this.openModal();
        // get product id throute route params
        this.activeroute.params.subscribe((params) => {
            this.productId = params['productId'];
        });
        this.productDetails();
        // Create default quantity
        let itemExist = false;
        for (let i = 0; i < this.service.itemCart.length; i++) {
            if (this.service.itemCart[i]['item_id'] == this.productId) {
                itemExist = true;
            }
        }
        if (itemExist == false) {
            this.service.itemCart.push({
                item_id: this.productId,
                quantity: 1,
                cart: false,
                options: [],
            });
        }
        else {
            itemExist = false;
        }
        // for reset selectedItem if not in the cart
        this.service.selectedItem = [];
    }
    // open base modal popup
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _base_modal_base_modal_page__WEBPACK_IMPORTED_MODULE_3__.BaseModalPage,
                componentProps: {
                    optionId: this.optionId,
                    itemId: this.itemId,
                },
                backdropDismiss: false,
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
    opensingleModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _single_product_single_product_page__WEBPACK_IMPORTED_MODULE_2__.SingleProductPage,
                componentProps: {},
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
    // show product and product options in product details page
    productDetails() {
        this.service.productDetails = [];
        this.service.products.forEach((element) => {
            if (element.id == this.productId) {
                this.service.productDetails.push(element);
            }
        });
        this.service.productOption = this.service.productDetails[0].options;
        this.filterOptions = this.service.productOption.reduce((accumalator, current) => {
            if (!accumalator.some((item) => item.variable_name === current.variable_name)) {
                accumalator.push(current);
            }
            return accumalator;
        }, []);
        this.service.filterOptions = this.filterOptions;
        this.openOptionModal(this.filterOptions[2].id, this.filterOptions[2].item_id, this.filterOptions[2].is_mandatory);
        if (this.filterOptions.length >= 2) {
            this.openOptionModal(this.filterOptions[1].id, this.filterOptions[1].item_id, this.filterOptions[1].is_mandatory);
        }
        this.openOptionModal(this.filterOptions[0].id, this.filterOptions[0].item_id, this.filterOptions[0].is_mandatory);
        console.log(this.filterOptions[3]);
    }
    // open base modal with option data of items
    openOptionModal(optionId, itemId, mandatory) {
        if (mandatory != 1) {
            this.optionId = optionId;
            this.itemId = itemId;
            this.openModal();
        }
    }
    addToCart() {
        this.service.itemCart.forEach((element) => {
            if (element.item_id == this.productId) {
                this.service.selectedItem.forEach((element2) => {
                    if (element2.item_id == element.item_id) {
                        element.options.push(element2);
                    }
                });
                element.cart = true;
            }
        });
        this.service.itemCart.forEach((element) => {
            if (element.cart == true) {
                this.service.itemCartFinal.push(element);
            }
        });
        if (this.service.addtionalPopup == true) {
            this.opensingleModal();
            this.service.addtionalPopup = false;
        }
        else {
            // for reset selectedItem if not in the cart and itemCart
            this.service.itemCart = [];
            this.service.selectedItem = [];
            this.route.navigate(['/products', { index: this.service.itemIndex }]);
        }
    }
    cartQuantity(operator) {
        this.service.itemCart.forEach((element) => {
            if (element.item_id == this.productId) {
                if (operator == '+') {
                    element.quantity = element.quantity + 1;
                }
                else {
                    if (element.quantity != 1) {
                        element.quantity = element.quantity - 1;
                    }
                }
            }
        });
    }
    backToProduct() {
        // for reset selectedItem if not in the cart and itemCart
        this.service.itemCart = [];
        this.service.selectedItem = [];
        this.route.navigate(['/products', { index: this.service.itemIndex }]);
    }
    // auto open poup
    // popupAutoOpen(popup1:any,popup2:any){
    //   {
    //     this.optionId = optionId;
    //     this.itemId = itemId;
    //     this.openModal();
    //   }
    // }
    // For calculat selected index
    // get ItemSelected():any{
    //   let x = []
    //   this.filterOptions.forEach(element => {
    //     this.service.selectedItem.forEach(element2 => {
    //       if(element2.variable_name == element.variable_name && element2.item_id == element.item_id){
    //         x.push(element2.option_name)
    //       }
    //     });
    //   });
    //   console.log(x)
    //   return
    // }
    // get countSelect(): any {
    //   this.optionsData =this.localstore.retrieve("finaloptiondata")
    //   let c = 0;
    //   if(this.optionsData != null){
    //   this.optionsData.forEach((modalvalue) => {
    //     if (this.service.selectedItem) {
    //       this.service.selectedItem.forEach((z) => {
    //         if (z.id == modalvalue.id) {
    //           c += 1;
    //         }
    //       });
    //     }
    //   });}
    //   console.log(c);
    //   return c;
    // }
    changeflag(data) {
        this.flag = data;
    }
    x(res) {
        this.separation = res;
    }
    y(res2) {
        this.separation2 = res2;
    }
    headmain() {
        console.log(this.service.selectedItem);
    }
};
ProductDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_4__.SharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__.LocalStorageService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
ProductDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-product-details',
        template: _raw_loader_product_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductDetailsPage);



/***/ }),

/***/ 8243:
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-poke-logo {\n  background: url('banner-11.png') no-repeat right top/88%;\n  font-size: 40px;\n  font-weight: 600;\n  padding: 60px 40px;\n}\n\n.product_footer ion-col {\n  margin: 0;\n  padding: 0;\n}\n\n.product_footer ion-col ion-button {\n  margin: 0;\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 34px;\n  height: 80px;\n  letter-spacing: inherit;\n  font-weight: 600;\n}\n\n.product-details ion-item ion-label {\n  border: 2px solid #FDBB50;\n  border-radius: 15px;\n  padding: 24px;\n  margin: 10px 50px;\n}\n\n.product-details ion-label:hover, .product-details ion-label:focus {\n  color: #FDBB50;\n  margin: 5px 0;\n}\n\n.product-details-header ion-avatar {\n  width: 170px;\n  height: 170px;\n  margin-top: 20px;\n}\n\n.product-details-header h3 {\n  font-size: 40px;\n  font-weight: 600;\n}\n\n.product-details-header p {\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 0;\n}\n\nion-row.product-details-header {\n  padding: 0 40px;\n  margin-top: 30px;\n}\n\n.count-prod button {\n  font-size: 60px;\n  width: 70px;\n  height: 70px;\n  border-radius: 10px;\n}\n\n.count-prod span {\n  font-size: 36px;\n  height: 70px;\n  text-align: center;\n  border: 2px solid #FDBB50;\n  margin: 0 10px;\n  border-radius: 10px;\n  line-height: 60px;\n  font-weight: 600;\n  width: 70px;\n}\n\n.ion-align-self-center {\n  left: 35%;\n  margin-bottom: 20px;\n}\n\n.product-details ion-item ion-label.added {\n  border: 2px solid #FDBB50;\n  background: #FDBB50;\n  color: black;\n  border-radius: 10px;\n  padding: 10px 15px;\n  margin: 5px 30px;\n}\n\n.product-details ion-item ion-label span {\n  font-weight: 700;\n  font-size: 30px;\n}\n\n.product-details ion-item ion-label h2 {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.one {\n  background-color: #FDBB50 !important;\n}\n\n.two {\n  background-color: #000000 !important;\n  color: white !important;\n}\n\n.three {\n  background-color: #fffdb4 !important;\n  border: 2px solid #fffdb4 !important;\n}\n\n.item .two, .item .two {\n  text-overflow: inherit;\n  white-space: inherit;\n  overflow: inherit;\n}\n\n.item .three, .item .three {\n  text-overflow: inherit;\n  white-space: inherit;\n  overflow: inherit;\n}\n\n.item .one, .item .one {\n  text-overflow: inherit;\n  white-space: inherit;\n  overflow: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3REFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUFLSjs7QUFIQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQU9KOztBQUxBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVJBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFXSjs7QUFUQTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtBQVlKOztBQVZBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFhSjs7QUFYQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQWNKOztBQVhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBY0o7O0FBWkE7RUFBSyxvQ0FBQTtBQWdCTDs7QUFmQTtFQUNLLG9DQUFBO0VBQXFDLHVCQUFBO0FBbUIxQzs7QUFsQkE7RUFDSyxvQ0FBQTtFQUFzQyxvQ0FBQTtBQXNCM0M7O0FBcEJBO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBdUJKOztBQXJCQTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUF5QkoiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tcG9rZS1sb2dve1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL2Jhbm5lci0xMS5wbmcpIG5vLXJlcGVhdCByaWdodCB0b3AgLyA4OCU7XG4gICAgZm9udC1zaXplOjQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOjYwcHggNDBweDtcbn1cbi5wcm9kdWN0X2Zvb3RlciBpb24tY29sIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cbi5wcm9kdWN0X2Zvb3RlciBpb24tY29sIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wcm9kdWN0LWRldGFpbHMgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkRCQjUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBtYXJnaW46IDEwcHggNTBweDtcbn0gIFxuLnByb2R1Y3QtZGV0YWlscyBpb24tbGFiZWw6aG92ZXIsIC5wcm9kdWN0LWRldGFpbHMgaW9uLWxhYmVsOmZvY3VzIHtcbiAgICBjb2xvcjojRkRCQjUwO1xuICAgIG1hcmdpbjogNXB4IDA7XG59IFxuLnByb2R1Y3QtZGV0YWlscy1oZWFkZXIgaW9uLWF2YXRhciB7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wcm9kdWN0LWRldGFpbHMtaGVhZGVyIGgze1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnByb2R1Y3QtZGV0YWlscy1oZWFkZXIgcHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuaW9uLXJvdy5wcm9kdWN0LWRldGFpbHMtaGVhZGVye1xuICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmNvdW50LXByb2QgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICBcbn1cbi5jb3VudC1wcm9kIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGREJCNTA7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiA3MHB4O1xufVxuLmlvbi1hbGlnbi1zZWxmLWNlbnRlciB7IFxuICAgIGxlZnQ6MzUlO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59IFxuLnByb2R1Y3QtZGV0YWlscyBpb24taXRlbSBpb24tbGFiZWwuYWRkZWQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGREJCNTA7XG4gICAgYmFja2dyb3VuZDojRkRCQjUwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBtYXJnaW46IDVweCAzMHB4O1xufVxuLnByb2R1Y3QtZGV0YWlscyBpb24taXRlbSBpb24tbGFiZWwgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgXG59XG4ucHJvZHVjdC1kZXRhaWxzIGlvbi1pdGVtIGlvbi1sYWJlbCBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59IFxuLm9uZXtiYWNrZ3JvdW5kLWNvbG9yOiAjRkRCQjUwICFpbXBvcnRhbnQ7fVxuLnR3b1xuICAgIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7fSBcbi50aHJlZVxuICAgIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGI0ICFpbXBvcnRhbnQ7IGJvcmRlcjogMnB4IHNvbGlkICNmZmZkYjQhaW1wb3J0YW50O30gXG5cbi5pdGVtIC50d28sIC5pdGVtIC50d297XG4gICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogaW5oZXJpdDtcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcbn1cbi5pdGVtIC50aHJlZSwgLml0ZW0gLnRocmVle1xuICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG4uaXRlbSAub25lLCAuaXRlbSAub25le1xuICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59Il19 */");

/***/ }),

/***/ 5578:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"ion-poke-logo\" (click)=\"headmain()\" >\n      Streets of Soba\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row class=\"product-details-header\" *ngFor=\"let i of service.productDetails\">\n    <ion-col size=\"3\">\n    \n        <img src=\"{{i.image}}\" style=\"padding: 5px;\">\n     \n    </ion-col>\n    <ion-col>\n      <h3>{{i.item_name}}</h3>\n      <p>{{i.item_desc}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-list class=\"product-details\" lines=\"none\">\n    <ng-container *ngFor=\"let option of filterOptions\">\n      <ion-item>\n        <ion-label class=\"added\" (click)=\"openOptionModal(option.id,option.item_id,option.is_mandatory)\"\n          [ngClass]=\"option.color_code === '0' && option.is_mandatory === '1' ? 'two' : option.color_code === '0' && option.is_mandatory === '0'  ? 'one' : option.color_code === '0' && option.is_mandatory === '1' ? 'two' : 'three'\">\n          <h2><span>{{option.variable_name}}\n\n\n\n            </span>\n            <ng-container *ngIf=\"option.is_mandatory == '1'\">-\n              <ng-container *ngFor=\"let i of service.productOption\">\n                <ng-container *ngIf=\"i.variable_name == option.variable_name\">\n\n                  <ng-container *ngIf=\"flag == true\">,</ng-container>\n                  {{changeflag(true)}}\n\n                  {{i.option_name}}\n\n\n                </ng-container>\n              </ng-container>\n              {{changeflag(false)}}\n            </ng-container>\n            <ng-container *ngFor=\"let z of service.selectedItem; let index=index\">\n              <ng-container *ngIf=\"z.variable_name == option.variable_name && z.item_id == option.item_id\">\n\n                <ng-container *ngIf=\"separation == false\">-\n                  {{x(true)}}\n                </ng-container>\n                 <ng-container *ngIf=\"flag == true\">,</ng-container>\n                {{changeflag(true)}}\n                {{z.option_name }}\n\n              </ng-container>\n          \n\n            </ng-container>\n            {{x(false)}}\n\n            {{changeflag(false)}}\n          </h2>\n        </ion-label>\n      </ion-item>\n    </ng-container>\n\n  </ion-list>\n\n  <ion-row class=\"count-prod\">\n    <ion-col size=\"6\" class=\"ion-align-self-center\">\n      <ng-container *ngFor=\"let i of service.itemCart\">\n        <ng-container *ngIf=\"i.item_id == productId\">\n          <ion-item no-lines lines=\"none\" class=\"counter\">\n            <button ion-button (click)=\"cartQuantity('-')\">\n              <ion-img src=\"../assets/img/minus.png\"></ion-img>\n            </button>\n            <ng-container>\n              <span>\n                {{i.quantity}}\n              </span>\n            </ng-container>\n            <button ion-button (click)=\"cartQuantity('+')\">\n              <ion-img src=\"../assets/img/plus.png\"></ion-img>\n            </button>\n          </ion-item>\n        </ng-container>\n      </ng-container>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-footer class=\"ion-no-border product_footer \">\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button color=\"medium\" expand=\"full\" (click)=\"backToProduct()\">Back</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button color=\"primary\" expand=\"full\" (click)=\"addToCart()\">Add to Cart</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n\n\n\n\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_product-details_product-details_module_ts.js.map