(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["default-src_app_base-modal_base-modal_page_ts"],{

/***/ 4541:
/*!***********************************************!*\
  !*** ./src/app/base-modal/base-modal.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseModalPage": () => (/* binding */ BaseModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_base_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./base-modal.page.html */ 8625);
/* harmony import */ var _base_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-modal.page.scss */ 4887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage */ 7489);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ 7482);
var BaseModalPage_1;








let BaseModalPage = BaseModalPage_1 = class BaseModalPage {
    constructor(modalController, localstore, service) {
        this.modalController = modalController;
        this.localstore = localstore;
        this.service = service;
        this.inboundClick = true;
        this.outboundClick = true;
        this.scrollDepthTriggered = false;
        this.optionsData = [];
        this.showHide = true;
        this.hideShow = false;
        this.clickData = 0;
    }
    funa() {
        console.log(this.service.productOption);
        console.log(this.optionsData);
    }
    ngOnInit() {
        // if (this.service.filterOptions.length != 0) {
        //   if(this.service.autoOpenPopup == true && this.service.autoOpenPopup2 == true ){
        //     this.service.productOption.forEach((element) => {
        //       if (element.id == this.service.filterOptions[0]['id']) {
        //         this.service.productOption.forEach((element2) => {
        //           if (element.variable_name == element2.variable_name)
        //             this.optionsData.push(element2);
        //         });
        //       }
        //     });
        //   }if(this.service.autoOpenPopup == false && this.service.autoOpenPopup2 == true ){
        //     this.service.productOption.forEach((element) => {
        //       if (element.id == this.service.filterOptions[1]['id']) {
        //         this.service.productOption.forEach((element2) => {
        //           if (element.variable_name == element2.variable_name)
        //             this.optionsData.push(element2);
        //         });
        //       }
        //     });
        //   }
        // } else {
        // option name filter from service productDetails response
        this.service.productOption.forEach((element) => {
            if (element.id == this.optionId) {
                this.service.productOption.forEach((element2) => {
                    if (element.variable_name == element2.variable_name)
                        this.optionsData.push(element2);
                });
            }
        });
        // }
    }
    get countSelect() {
        let c = 0;
        this.optionsData.forEach((modalvalue) => {
            if (this.service.selectedItem) {
                this.service.selectedItem.forEach((z) => {
                    if (z.id == modalvalue.id) {
                        c += 1;
                    }
                });
            }
        });
        return c;
    }
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: BaseModalPage_1,
                componentProps: {
                    optionId: this.optionId,
                    itemId: 'this.itemId',
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
    // ScrollToBottom() {
    //   this.content.scrollToBottom(1500);
    // }
    ScrollToTop() {
        this.content.scrollToTop(500);
    }
    logScrolling($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this.scrollDepthTriggered) {
                return;
            }
            if ($event.target.localName != 'ion-content') {
                return;
            }
            const scrollElement = yield $event.target.getScrollElement();
            const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
            // console.log({ scrollHeight });
            const currentScrollDepth = $event.detail.scrollTop;
            // console.log({ currentScrollDepth });
            const targetPercent = 90;
            let triggerDepth = (scrollHeight / 100) * targetPercent;
            // console.log({ triggerDepth });
            if (currentScrollDepth > triggerDepth) {
                // console.log('100%');
                this.showHide = false;
                this.hideShow = true;
            }
            if (currentScrollDepth == 0) {
                // console.log('0%');
                this.showHide = true;
                this.hideShow = false;
            }
        });
    }
    actionMethod() {
        this.content.scrollToBottom(500);
        this.showHide = false;
        //($event.target as HTMLButtonElement).hidden = true;
    }
    // async closeModel() {
    //   if (
    //     this.service.autoOpenPopup == true &&
    //     this.service.autoOpenPopup2 == true
    //   ) {
    //     this.service.autoOpenPopup = false;
    //     const close: string = 'Modal Removed';
    //     await this.modalController.dismiss(close);
    //     this.openModal();
    //   } else if (
    //     this.service.autoOpenPopup == false &&
    //     this.service.autoOpenPopup2 == true
    //   ) {
    //     this.service.autoOpenPopup2 = false;
    //     const close: string = 'Modal Removed';
    //     await this.modalController.dismiss(close);
    //     this.service.filterOptions = [];
    //   }
    // }
    // Item Option selection
    selectItem(data) {
        if (data.variable_name == "Size") {
            this.service.selectOptName = data.option_name;
            for (let i = 0; i < this.service.selectedItem.length; i++) {
                if (this.service.selectedItem[i].variable_name == "Protein") {
                    this.service.selectedItem.splice(i, 1);
                }
                if (this.service.selectedItem[i].variable_name == "Add Protein") {
                    this.service.selectedItem.splice(i, 1);
                }
            }
        }
        if (data.variable_name == "Protein") {
            this.service.selectProteinOption = data.option_name;
            for (let i = 0; i < this.service.selectedItem.length; i++) {
                if (this.service.selectedItem[i].variable_name == "Add Protein") {
                    this.service.selectedItem.splice(i, 1);
                }
            }
        }
        this.clickData = this.clickData + 1;
        if (this.service.containsObject(data, this.service.selectedItem) == false) {
            let existItem = false;
            let item;
            if (data['button_type'] == 'radio') {
                this.closeModel();
                this.service.selectedItem.forEach((element) => {
                    if (element.item_id == data['item_id'] &&
                        element.variable_name == data['variable_name']) {
                        existItem = true;
                        item = element;
                    }
                });
                if (existItem == false) {
                    this.service.selectedItem.push(data);
                }
                else {
                    for (let i = 0; i < this.service.selectedItem.length; i++) {
                        if (this.service.selectedItem[i] == item) {
                            const index1 = this.service.selectedItem.indexOf(this.service.selectedItem[i]);
                            if (index1 > -1) {
                                this.service.selectedItem.splice(index1, 1);
                            }
                        }
                    }
                    this.service.selectedItem.push(data);
                    existItem == false;
                }
            }
            else {
                this.service.selectedItem.push(data);
                if (this.countSelect == data.select_max) {
                    this.closeModel();
                }
            }
        }
        else {
            // If Select item exist it will delete the index
            if (this.service.selectedItem != null) {
                for (let i = 0; i < this.service.selectedItem.length; i++) {
                    if (this.service.selectedItem[i] == data) {
                        const index1 = this.service.selectedItem.indexOf(this.service.selectedItem[i]);
                        if (index1 > -1) {
                            this.service.selectedItem.splice(index1, 1);
                        }
                    }
                }
            }
        }
        this.selectVariable = this.service.selectedItem[0].variable_name;
        console.log(this.selectVariable);
    }
    get ItemOptionselect() {
        let a;
        a = this.service.selectOptName;
        //  console.log(a)
        return a;
    }
    get ProteinOptionselect() {
        let b;
        b = this.service.selectProteinOption;
        return b;
    }
    // get autoPopup(): any {
    //   if (this.autoOpenPopup == true && this.autoOpenPopup2 == true) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    closeModel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const close = 'Modal Removed';
            yield this.modalController.dismiss(close);
        });
    }
};
BaseModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService }
];
BaseModalPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, { static: false },] }],
    optionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    item_Id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
BaseModalPage = BaseModalPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-base-modal',
        template: _raw_loader_base_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_base_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BaseModalPage);



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

/***/ 4887:
/*!*************************************************!*\
  !*** ./src/app/base-modal/base-modal.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item.item-checkbox-checked {\n  border: 4px solid #FDBB50;\n  border-radius: 10px;\n  padding: 15px 0;\n}\n\n.base-modal-header h1 {\n  font-size: 50px;\n  margin: 20px 0 0 0;\n  font-weight: 600;\n}\n\n.base-modal-header p {\n  font-size: 34px;\n  margin: 10px 0 30px 0;\n}\n\n.modal-wrapper {\n  height: 40%;\n}\n\nion-item.item.md.ion-activatable {\n  padding: 15px 0;\n}\n\n.base-modal-body p {\n  font-size: 24px;\n  letter-spacing: inherit;\n  margin: 15px 0 30px 0;\n}\n\nion-item.item-checkbox-checked ~ p.p-title {\n  color: #FDBB50;\n}\n\n.base-modal-wrapper ion-button.md.button {\n  height: 90px;\n  overflow: auto;\n  font-size: 36px;\n  font-weight: 700;\n  text-transform: capitalize;\n  border-radius: 20px;\n  padding: 0 10px;\n  letter-spacing: inherit;\n}\n\nion-checkbox.md.in-item.interactive.hydrated {\n  opacity: 0;\n}\n\nion-img.ScrollTo {\n  width: 50px;\n  margin: 15px auto;\n}\n\n.specer20 {\n  padding: 30px;\n}\n\nion-button {\n  --border-radius: 10px;\n  height: 70px;\n  font-weight: 700;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFRSjs7QUFOQTtFQUNJLFVBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQVVKOztBQVJBO0VBQ0ksYUFBQTtBQVdKOztBQVRBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBWUoiLCJmaWxlIjoiYmFzZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS5pdGVtLWNoZWNrYm94LWNoZWNrZWQge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICNGREJCNTA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uYmFzZS1tb2RhbC1oZWFkZXIgaDF7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIG1hcmdpbjogMjBweCAwIDAgMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmJhc2UtbW9kYWwtaGVhZGVyIHB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIG1hcmdpbjogMTBweCAwIDMwcHggMDtcbn1cbi5tb2RhbC13cmFwcGVye1xuICAgIGhlaWdodDogNDAlO1xufVxuaW9uLWl0ZW0uaXRlbS5tZC5pb24tYWN0aXZhdGFibGUgIHtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uYmFzZS1tb2RhbC1ib2R5IHB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICAgIG1hcmdpbjoxNXB4IDAgMzBweCAwO1xufVxuaW9uLWl0ZW0uaXRlbS1jaGVja2JveC1jaGVja2VkIH4gcC5wLXRpdGxle1xuICAgIGNvbG9yOiAjRkRCQjUwO1xufVxuLmJhc2UtbW9kYWwtd3JhcHBlciBpb24tYnV0dG9uLm1kLmJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xufSAgXG5pb24tY2hlY2tib3gubWQuaW4taXRlbS5pbnRlcmFjdGl2ZS5oeWRyYXRlZCB7XG4gICAgb3BhY2l0eTogMDtcbn1cbmlvbi1pbWcuU2Nyb2xsVG8ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xufVxuLnNwZWNlcjIwe1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5pb24tYnV0dG9uIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 8625:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/base-modal/base-modal.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\" class=\"ion-padding base-modal-wrapper\" >\n\n  <ion-grid>\n    <ion-row class=\"ion-text-center base-modal-header\">\n      <ion-col size=\"12\">\n        <h1 (click)=\"funa()\">{{optionsData[0].variable_name}}</h1>\n        <p>Select item({{countSelect}}/{{optionsData[0].select_max}})</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"base-modal-body\">\n      <ng-container *ngFor =\"let modalvalue of optionsData\">\n        <ng-container\n         [ngTemplateOutlet]=\"modalvalue.variable_name === 'Protein' ? first : modalvalue.variable_name=== \n   'Add Protein' ? second : third\">\n      </ng-container>\n      \n      <ng-template #first>\n     \n        <ng-container *ngIf=\"modalvalue.size_type == ItemOptionselect || modalvalue.size_type==null \">\n        <ion-col size=\"3\" class=\"ion-text-center\" (click)=\"selectItem(modalvalue)\"> \n          <ion-item lines=\"none\">\n            <ion-img src=\"{{modalvalue.option_image}}\" class=\"img\"></ion-img> \n            <ng-container *ngFor=\"let k of service.selectedItem\">\n                <ion-checkbox checked=\"true\" *ngIf=\"k.id == modalvalue.id\"></ion-checkbox>\n            </ng-container>\n          </ion-item> \n          <p class=\"p-title\" >{{modalvalue.option_name}}<br>+ ${{modalvalue.additional_price | number : '1.2-2'}}</p>\n        </ion-col>\n      </ng-container>\n      </ng-template>\n      <ng-template #second>\n     \n        <ng-container *ngIf=\"modalvalue.size_type == ProteinOptionselect\">\n        <ion-col size=\"3\" class=\"ion-text-center\" (click)=\"selectItem(modalvalue)\"> \n          <ion-item lines=\"none\">\n            <ion-img src=\"{{modalvalue.option_image}}\" class=\"img\"></ion-img> \n            <ng-container *ngFor=\"let k of service.selectedItem\">\n                <ion-checkbox checked=\"true\" *ngIf=\"k.id == modalvalue.id\"></ion-checkbox>\n            </ng-container>\n          </ion-item> \n          <p class=\"p-title\" >{{modalvalue.option_name}}<br>+ ${{modalvalue.additional_price | number : '1.2-2'}}</p>\n        </ion-col>\n      </ng-container>\n      </ng-template>\n\n      <ng-template #third>\n        <ion-col size=\"3\" class=\"ion-text-center\" (click)=\"selectItem(modalvalue)\"> \n          <ion-item lines=\"none\">\n            <ion-img src=\"{{modalvalue.option_image}}\" class=\"img\"></ion-img> \n            <ng-container *ngFor=\"let k of service.selectedItem\">\n                <ion-checkbox checked=\"true\" *ngIf=\"k.id == modalvalue.id\"></ion-checkbox>\n            </ng-container>\n          </ion-item> \n          <p class=\"p-title\" >{{modalvalue.option_name}} <br>+ ${{modalvalue.additional_price | number : '1.2-2'}}</p>\n        </ion-col>\n      </ng-template>\n     \n      </ng-container>\n     \n   \n      <!-- <ion-col size=\"3\" class=\"ion-text-center\"> \n        <ion-item>\n          <ion-img src=\"../../assets/img/image.jpg\" class=\"img\"></ion-img> \n          <ion-checkbox ></ion-checkbox>\n        </ion-item> \n        <p class=\"p-title\">Light (75g)</p>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-center\"> \n        <ion-item>\n          <ion-img src=\"../../assets/img/image.jpg\" class=\"img\"></ion-img> \n          <ion-checkbox ></ion-checkbox>\n        </ion-item> \n        <p class=\"p-title\">Light (75g)</p>\n      </ion-col> -->\n    </ion-row>\n  </ion-grid>\n \n</ion-content>\n<ion-footer class=\"ion-no-border product_footer\"> \n  <ion-row>\n    <ion-col size=\"12\" *ngIf=\"optionsData.length > 4\">\n      <ion-img src=\"../../assets/img/up-arrow.png\" class=\"ScrollTo\" (click)=\"actionMethod()\" *ngIf=\"showHide\"></ion-img> \n      <ion-img src=\"../../assets/img/down-arrow.png\" class=\"ScrollTo\" (click)=\"ScrollToTop()\" *ngIf=\"hideShow\"></ion-img> \n    </ion-col>\n    <ion-col size=\"12\" style=\"padding-bottom:10px;\">\n      <ion-button expand=\"block\" (click)=\"closeModel()\"\n      [disabled]=\"(countSelect == 0 && optionsData[0].variable_name == 'Size') || (countSelect == 0 && optionsData[0].variable_name == 'Protein') || countSelect > optionsData[0].select_max\"\n      style=\"text-transform: capitalize;\">Next</ion-button>\n    </ion-col>\n  </ion-row> \n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_base-modal_base-modal_page_ts.js.map