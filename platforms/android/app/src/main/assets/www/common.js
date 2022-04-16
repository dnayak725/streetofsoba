(self["webpackChunkPokeTheory1"] = self["webpackChunkPokeTheory1"] || []).push([["common"],{

/***/ 8225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 3150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 9461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 7330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 2377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 1269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let DataService = class DataService {
    constructor() {
        this.messages = [
            {
                fromName: 'Matt Chorsey',
                subject: 'New event: Trip to Vegas',
                date: '9:32 AM',
                id: 0,
                read: false
            },
            {
                fromName: 'Lauren Ruthford',
                subject: 'Long time no chat',
                date: '6:12 AM',
                id: 1,
                read: false
            },
            {
                fromName: 'Jordan Firth',
                subject: 'Report Results',
                date: '4:55 AM',
                id: 2,
                read: false
            },
            {
                fromName: 'Bill Thomas',
                subject: 'The situation',
                date: 'Yesterday',
                id: 3,
                read: false
            },
            {
                fromName: 'Joanne Pollan',
                subject: 'Updated invitation: Swim lessons',
                date: 'Yesterday',
                id: 4,
                read: false
            },
            {
                fromName: 'Andrea Cornerston',
                subject: 'Last minute ask',
                date: 'Yesterday',
                id: 5,
                read: false
            },
            {
                fromName: 'Moe Chamont',
                subject: 'Family Calendar - Version 1',
                date: 'Last Week',
                id: 6,
                read: false
            },
            {
                fromName: 'Kelly Richardson',
                subject: 'Placeholder Headhots',
                date: 'Last Week',
                id: 7,
                read: false
            }
        ];
    }
    getMessages() {
        return this.messages;
    }
    getMessageById(id) {
        return this.messages[id];
    }
};
DataService.ctorParameters = () => [];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 5997:
/*!*******************************************************!*\
  !*** ./src/app/single-product/single-product.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleProductPage": () => (/* binding */ SingleProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_single_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./single-product.page.html */ 6617);
/* harmony import */ var _single_product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-product.page.scss */ 6488);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage */ 7489);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared.service */ 7482);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);








let SingleProductPage = class SingleProductPage {
    constructor(service, router, modalController, localstore) {
        this.service = service;
        this.router = router;
        this.modalController = modalController;
        this.localstore = localstore;
        this.itemData = [];
        this.singleProduct = [];
        this.selectedSingleItem = [];
    }
    ngOnInit() {
        this.service.getApiResponcse().subscribe((res) => {
            this.allResponse = res;
            this.itemData = this.allResponse.data;
            this.itemData.forEach((element) => {
                element.items.forEach((element2) => {
                    if (element2.category_id == 4) {
                        this.singleProduct.push(element2);
                    }
                });
            });
            // active tab product
            let checkItem = false;
            this.singleProduct.forEach((el) => {
                this.service.singleItemCart.forEach((el2) => {
                    if (el == el2.item) {
                        checkItem = true;
                    }
                });
                if (checkItem == false) {
                    this.service.singleItemCart.push({
                        quantity: 1,
                        item: el,
                        cart: false,
                    });
                }
                else {
                    checkItem = false;
                }
            });
        });
    }
    closesingleModel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const close = 'Modal Removed';
            yield this.modalController.dismiss(close);
            this.router.navigate(['/products', { index: this.service.itemIndex }]);
        });
    }
    selectSingleItem(data) {
        if (this.service.containsObject(data, this.selectedSingleItem) == false) {
            this.selectedSingleItem.push(data);
        }
        else {
            for (let i = 0; i < this.selectedSingleItem.length; i++) {
                if (this.selectedSingleItem[i] == data) {
                    const index1 = this.selectedSingleItem.indexOf(this.selectedSingleItem[i]);
                    if (index1 > -1) {
                        this.selectedSingleItem.splice(index1, 1);
                    }
                }
            }
        }
    }
    singleProductCart() {
        this.service.singleItemCart.forEach((element) => {
            this.selectedSingleItem.forEach((element2) => {
                if (element.item == element2) {
                    element.cart = true;
                }
            });
        });
        // for reset selectedItem if not in the cart and itemCart
        this.closesingleModel();
        this.service.itemCart = [];
        this.service.selectedItem = [];
        this.router.navigate(['/products', { index: this.service.itemIndex }]);
        // console.log(this.service.itemCartFinal);
    }
    cancelSingleItem() {
        this.closesingleModel();
        this.service.itemCart = [];
        this.service.selectedItem = [];
        this.router.navigate(['/products', { index: this.service.itemIndex }]);
    }
};
SingleProductPage.ctorParameters = () => [
    { type: _shared_service__WEBPACK_IMPORTED_MODULE_2__.SharedService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__.LocalStorageService }
];
SingleProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-single-product',
        template: _raw_loader_single_product_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_single_product_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SingleProductPage);



/***/ }),

/***/ 6488:
/*!*********************************************************!*\
  !*** ./src/app/single-product/single-product.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item.item-checkbox-checked {\n  border: 4px solid #FDBB50;\n  border-radius: 10px;\n}\n\n.base-modal-header h1 {\n  font-size: 30px;\n  margin: 30px 0 20px 0;\n  font-weight: 600;\n}\n\n.base-modal-header p {\n  font-size: 34px;\n  margin: 10px 0 30px 0;\n}\n\n.modal-wrapper {\n  height: 40%;\n}\n\nion-item.item.md.ion-activatable {\n  padding: 15px 0;\n}\n\n.base-modal-body p {\n  font-size: 24px;\n  letter-spacing: inherit;\n  margin: 15px 0 30px 0;\n}\n\nion-item.item-checkbox-checked ~ p.p-title {\n  color: #FDBB50;\n}\n\n.base-modal-wrapper ion-button.md.button {\n  height: 90px;\n  overflow: auto;\n  font-size: 36px;\n  font-weight: 700;\n  text-transform: capitalize;\n  border-radius: 20px;\n  padding: 0 10px;\n  letter-spacing: inherit;\n}\n\nion-checkbox.md.in-item.interactive.hydrated {\n  opacity: 0;\n}\n\nion-img.ScrollTo {\n  width: 50px;\n  margin: 15px auto;\n}\n\nion-button.remove {\n  text-transform: capitalize;\n  font-size: 30px;\n  min-height: 70px;\n  font-weight: 600;\n  border-radius: 15px;\n  letter-spacing: inherit;\n}\n\nion-button.view {\n  text-transform: capitalize;\n  font-size: 30px;\n  min-height: 70px;\n  font-weight: 600;\n  border-radius: 15px;\n  letter-spacing: inherit;\n  background: #FDBB50;\n}\n\nion-button.view button {\n  --border-radius: 105px!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFRSjs7QUFOQTtFQUNJLFVBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQVVKOztBQVJBO0VBQ0ksMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFXSjs7QUFUQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFZSjs7QUFWQTtFQUNJLGdDQUFBO0FBYUoiLCJmaWxlIjoic2luZ2xlLXByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0uaXRlbS1jaGVja2JveC1jaGVja2VkIHtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjRkRCQjUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYmFzZS1tb2RhbC1oZWFkZXIgaDF7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbjogMzBweCAwIDIwcHggMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmJhc2UtbW9kYWwtaGVhZGVyIHB7XG4gICAgZm9udC1zaXplOiAzNHB4O1xuICAgIG1hcmdpbjogMTBweCAwIDMwcHggMDtcbn1cbi5tb2RhbC13cmFwcGVye1xuICAgIGhlaWdodDogNDAlO1xufVxuaW9uLWl0ZW0uaXRlbS5tZC5pb24tYWN0aXZhdGFibGUgIHtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG59XG4uYmFzZS1tb2RhbC1ib2R5IHB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xuICAgIG1hcmdpbjoxNXB4IDAgMzBweCAwO1xufVxuaW9uLWl0ZW0uaXRlbS1jaGVja2JveC1jaGVja2VkIH4gcC5wLXRpdGxle1xuICAgIGNvbG9yOiAjRkRCQjUwO1xufVxuLmJhc2UtbW9kYWwtd3JhcHBlciBpb24tYnV0dG9uLm1kLmJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xufSAgXG5pb24tY2hlY2tib3gubWQuaW4taXRlbS5pbnRlcmFjdGl2ZS5oeWRyYXRlZCB7XG4gICAgb3BhY2l0eTogMDtcbn1cbmlvbi1pbWcuU2Nyb2xsVG8ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xufVxuaW9uLWJ1dHRvbi5yZW1vdmUgeyAgXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiBpbmhlcml0O1xufVxuaW9uLWJ1dHRvbi52aWV3IHsgIFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiAjRkRCQjUwO1xufVxuaW9uLWJ1dHRvbi52aWV3IGJ1dHRvbntcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwNXB4IWltcG9ydGFudDtcbn0gIl19 */");

/***/ }),

/***/ 6617:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/single-product/single-product.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-text-center base-modal-header\">\n      <ion-col size=\"12\">\n        <h1>Complete Your Meal with Drinks</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"base-modal-body\">\n      <ng-container *ngFor=\"let data of singleProduct; let i = index\">\n          <ion-col size=\"3\" class=\"ion-text-center\" (click)=\"selectSingleItem(data)\">\n            <ion-item lines=\"none\">\n              <ion-img src=\"{{data.image}}\" class=\"img\"></ion-img>\n              <ion-checkbox ></ion-checkbox>\n            </ion-item>\n            <p class=\"p-title\">{{data.item_name}}</p>\n          </ion-col>\n      </ng-container>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer class=\"ion-no-border product_footer\">\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button color=\"light\" fill=\"outline\" class=\"remove\" expand=\"block\" (click)=\"cancelSingleItem()\">No, thanks</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button color=\"primary\" class=\"view\" expand=\"block\" (click)=\"singleProductCart()\">Add to Cart</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=common.js.map