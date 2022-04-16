(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["default-src_app_update-modal_update-modal_page_ts"],{

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

/***/ 926:
/*!***************************************************!*\
  !*** ./src/app/update-modal/update-modal.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateModalPage": () => (/* binding */ UpdateModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_update_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./update-modal.page.html */ 3109);
/* harmony import */ var _update_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-modal.page.scss */ 2706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage */ 7489);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ 7482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);









let UpdateModalPage = class UpdateModalPage {
    constructor(modalController, localstore, service, activeroute) {
        this.modalController = modalController;
        this.localstore = localstore;
        this.service = service;
        this.activeroute = activeroute;
        this.inboundClick = true;
        this.outboundClick = true;
        this.scrollDepthTriggered = false;
        this.optionsData = [];
        this.showHide = true;
        this.hideShow = false;
        this.editItem = [];
        this.options = [];
    }
    ngOnInit() {
        this.service.productOption.forEach((element) => {
            if (element.id == this.optionId) {
                this.service.productOption.forEach((element2) => {
                    if (element.variable_name == element2.variable_name)
                        this.optionsData.push(element2);
                });
            }
        });
        // <ng-container *ngFor="let i of editItem">
        // <ng-container *ngFor="let j of i.options">
        //   <ng-container *ngIf="j.id == optionId">
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
    closeModel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const close = 'Modal Removed';
            yield this.modalController.dismiss(close);
        });
    }
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
        console.log(this.service.selectProteinOption);
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
    }
    // get autoPopup(): any {
    //   if (this.autoOpenPopup == true && this.autoOpenPopup2 == true) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
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
        console.log(c);
        return c;
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
        console.log(b);
        return b;
    }
};
UpdateModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__.LocalStorageService },
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute }
];
UpdateModalPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, { static: false },] }],
    optionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    itemId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
UpdateModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-update-modal',
        template: _raw_loader_update_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_update_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UpdateModalPage);



/***/ }),

/***/ 2706:
/*!*****************************************************!*\
  !*** ./src/app/update-modal/update-modal.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item.item-checkbox-checked {\n  border: 4px solid #FDBB50;\n  border-radius: 10px;\n  padding: 15px 0;\n}\n\n.base-modal-header h1 {\n  font-size: 50px;\n  margin: 20px 0 0 0;\n  font-weight: 600;\n}\n\n.base-modal-header p {\n  font-size: 34px;\n  margin: 10px 0 30px 0;\n}\n\n.modal-wrapper {\n  height: 40%;\n}\n\nion-item.item.md.ion-activatable {\n  padding: 15px 0;\n}\n\n.base-modal-body p {\n  font-size: 24px;\n  letter-spacing: inherit;\n  margin: 15px 0 30px 0;\n}\n\nion-item.item-checkbox-checked ~ p.p-title {\n  color: #FDBB50;\n}\n\n.base-modal-wrapper ion-button.md.button {\n  height: 90px;\n  overflow: auto;\n  font-size: 36px;\n  font-weight: 700;\n  text-transform: capitalize;\n  border-radius: 20px;\n  padding: 0 10px;\n  letter-spacing: inherit;\n}\n\nion-checkbox.md.in-item.interactive.hydrated {\n  opacity: 0;\n}\n\nion-img.ScrollTo {\n  width: 50px;\n  margin: 15px auto;\n}\n\n.specer20 {\n  padding: 30px;\n}\n\nion-button {\n  --border-radius: 10px;\n  height: 70px;\n  font-weight: 700;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQVFKOztBQU5BO0VBQ0ksVUFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBVUo7O0FBUkE7RUFDSSxhQUFBO0FBV0o7O0FBVEE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFZSiIsImZpbGUiOiJ1cGRhdGUtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0uaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjRkRCQjUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTVweCAwO1xufVxuLmJhc2UtbW9kYWwtaGVhZGVyIGgxe1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5iYXNlLW1vZGFsLWhlYWRlciBwe1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICBtYXJnaW46IDEwcHggMCAzMHB4IDA7XG59XG4ubW9kYWwtd3JhcHBlcntcbiAgICBoZWlnaHQ6IDQwJTtcbn1cbmlvbi1pdGVtLml0ZW0ubWQuaW9uLWFjdGl2YXRhYmxlICB7XG4gICAgcGFkZGluZzogMTVweCAwO1xufVxuLmJhc2UtbW9kYWwtYm9keSBwe1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgICBtYXJnaW46MTVweCAwIDMwcHggMDtcbn1cbmlvbi1pdGVtLml0ZW0tY2hlY2tib3gtY2hlY2tlZCB+IHAucC10aXRsZXtcbiAgICBjb2xvcjogI0ZEQkI1MDtcbn1cbi5iYXNlLW1vZGFsLXdyYXBwZXIgaW9uLWJ1dHRvbi5tZC5idXR0b24ge1xuICAgIGhlaWdodDogOTBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbn0gIFxuaW9uLWNoZWNrYm94Lm1kLmluLWl0ZW0uaW50ZXJhY3RpdmUuaHlkcmF0ZWQge1xuICAgIG9wYWNpdHk6IDA7XG59XG5pb24taW1nLlNjcm9sbFRvIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbn1cbi5zcGVjZXIyMHtcbiAgICBwYWRkaW5nOiAzMHB4O1xufVxuaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ 3109:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-modal/update-modal.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\" class=\"ion-padding base-modal-wrapper\">\n\n  <ion-grid>\n    <ion-row class=\"ion-text-center base-modal-header\">\n      <ion-col size=\"12\">\n        <h1>{{optionsData[0].variable_name}}</h1>\n        <p>Select item({{countSelect}}/{{optionsData[0].select_max}})</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"base-modal-body\">\n      <ng-container *ngFor=\"let modalvalue of optionsData\">\n        <ng-container\n        [ngTemplateOutlet]=\"modalvalue.variable_name === 'Protein' ? first : modalvalue.variable_name=== \n  'Add Protein' ? second : third\">\n  \n     </ng-container>\n     <ng-template #first>\n     \n      <ng-container *ngIf=\"modalvalue.size_type == ItemOptionselect || modalvalue.size_type==null \">\n        <ion-col size=\"3\" class=\"ion-text-center\" (click)=\"selectItem(modalvalue)\">\n          <ion-item lines=\"none\">\n            <ion-img src=\"{{modalvalue.option_image}}\" class=\"img\"></ion-img> \n            <ng-container *ngFor=\"let k of service.selectedItem\">\n              <ion-checkbox checked=\"true\" *ngIf=\"k.id == modalvalue.id\"></ion-checkbox>\n            </ng-container>\n          </ion-item>\n          <p class=\"p-title\">{{modalvalue.option_name}} <br>+ ${{modalvalue.additional_price | number : '1.2-2'}}</p>\n        </ion-col>\n      </ng-container>\n      </ng-template>\n      <ng-template #second>\n     \n        <ng-container *ngIf=\"modalvalue.size_type == ProteinOptionselect\">\n          <ion-col size=\"3\" class=\"ion-text-center\" (click)=\"selectItem(modalvalue)\">\n            <ion-item lines=\"none\">\n              <ion-img src=\"{{modalvalue.option_image}}\" class=\"img\"></ion-img> \n              <ng-container *ngFor=\"let k of service.selectedItem\">\n                <ion-checkbox checked=\"true\" *ngIf=\"k.id == modalvalue.id\"></ion-checkbox>\n              </ng-container>\n            </ion-item>\n            <p class=\"p-title\">{{modalvalue.option_name}} <br>+ ${{modalvalue.additional_price | number : '1.2-2'}}</p>\n          </ion-col>\n        </ng-container>\n        </ng-template>\n        <ng-template #third>\n     \n        \n            <ion-col size=\"3\" class=\"ion-text-center\" (click)=\"selectItem(modalvalue)\">\n              <ion-item lines=\"none\">\n                <ion-img src=\"{{modalvalue.option_image}}\" class=\"img\"></ion-img> \n                <ng-container *ngFor=\"let k of service.selectedItem\">\n                  <ion-checkbox checked=\"true\" *ngIf=\"k.id == modalvalue.id\"></ion-checkbox>\n                </ng-container>\n              </ion-item>\n              <p class=\"p-title\">{{modalvalue.option_name}} <br>+ ${{modalvalue.additional_price | number : '1.2-2'}}</p>\n            </ion-col>\n        \n          </ng-template>\n</ng-container>\n      <!-- <ion-col size=\"3\" class=\"ion-text-center\"> \n        <ion-item>\n          <ion-img src=\"../../assets/img/image.jpg\" class=\"img\"></ion-img> \n          <ion-checkbox ></ion-checkbox>\n        </ion-item> \n        <p class=\"p-title\">Light (75g)</p>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-center\"> \n        <ion-item>\n          <ion-img src=\"../../assets/img/image.jpg\" class=\"img\"></ion-img> \n          <ion-checkbox ></ion-checkbox>\n        </ion-item> \n        <p class=\"p-title\">Light (75g)</p>\n      </ion-col> -->\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n<ion-footer class=\"ion-no-border product_footer\"> \n  <ion-row>\n    <ion-col size=\"12\" *ngIf=\"optionsData.length > 4\">\n      <ion-img src=\"../../assets/img/up-arrow.png\" class=\"ScrollTo\" (click)=\"actionMethod()\" *ngIf=\"showHide\"></ion-img> \n      <ion-img src=\"../../assets/img/down-arrow.png\" class=\"ScrollTo\" (click)=\"ScrollToTop()\" *ngIf=\"hideShow\"></ion-img> \n    </ion-col>\n    <ion-col size=\"12\" style=\"padding-bottom:10px;\">\n      <ion-button expand=\"block\" (click)=\"closeModel()\"\n      [disabled]=\"(countSelect == 0 && optionsData[0].variable_name == 'Size') || (countSelect == 0 && optionsData[0].variable_name == 'Protein') || countSelect > optionsData[0].select_max\"\n      style=\"text-transform: capitalize;\">Next</ion-button>\n    </ion-col>\n  </ion-row> \n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_update-modal_update-modal_page_ts.js.map