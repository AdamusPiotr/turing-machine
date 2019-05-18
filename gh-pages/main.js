(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-proper-simulator-component></app-proper-simulator-component>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'touring-machine-simulator';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipes_values_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/values.pipe */ "./src/app/pipes/values.pipe.ts");
/* harmony import */ var _pipes_unique_symbols_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/unique-symbols.pipe */ "./src/app/pipes/unique-symbols.pipe.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _pipes_current_form_value_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/current-form-value.pipe */ "./src/app/pipes/current-form-value.pipe.ts");
/* harmony import */ var _pipes_split_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/split.pipe */ "./src/app/pipes/split.pipe.ts");
/* harmony import */ var _components_proper_simulator_component_proper_simulator_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/proper-simulator-component/proper-simulator-component.component */ "./src/app/components/proper-simulator-component/proper-simulator-component.component.ts");
/* harmony import */ var _input_resize_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input-resize.directive */ "./src/app/input-resize.directive.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _pipes_values_pipe__WEBPACK_IMPORTED_MODULE_6__["ValuesPipe"],
                _pipes_unique_symbols_pipe__WEBPACK_IMPORTED_MODULE_7__["KeysPipe"],
                _pipes_current_form_value_pipe__WEBPACK_IMPORTED_MODULE_9__["CurrentFormValuePipe"],
                _pipes_split_pipe__WEBPACK_IMPORTED_MODULE_10__["SplitPipe"],
                _components_proper_simulator_component_proper_simulator_component_component__WEBPACK_IMPORTED_MODULE_11__["ProperSimulatorComponentComponent"],
                _input_resize_directive__WEBPACK_IMPORTED_MODULE_12__["InputResizeDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"row content-centered\">\n  <h1>Turing Machine Simulator</h1>\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/proper-simulator-component/proper-simulator-component.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/proper-simulator-component/proper-simulator-component.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<form [formGroup]=\"turingMachinePropertiesForm\" class=\"row mb-2\">\n  <div class=\"input-short\">\n    <label for=\"allowed-symbols\">Allowed symbols</label>\n    <input id=\"allowed-symbols\" formControlName=\"allowedSymbols\" class=\"form-control data-input\" placeholder=\"Allowed symbols\"/>\n  </div>\n  <div class=\"input-short ml-5\">\n    <label for=\"allowed-symbols\">Number of states</label>\n    <input id=\"number-of-states\" type=\"number\" formControlName=\"numberOfStates\" class=\"form-control data-input\"\n           placeholder=\"Number of states\"/>\n  </div>\n</form>\n\n\n<div class=\"row\" *ngIf=\"turingMachinePropertiesForm.valid && tableOfStatesForm; else badProperties\">\n  <table class=\"table\" [formGroup]=\"tableOfStatesForm\">\n    <tr>\n      <th>/</th>\n      <th *ngFor=\"let stateNumber of numberOfStatesArray$ | async;\" class=\"table__header\">q{{stateNumber}}</th>\n    </tr>\n    <tr *ngFor=\"let characterForm of tableOfStatesForm.controls | keyvalue\" [formGroup]=\"characterForm.value\">\n      <th class=\"table__header\">\n        {{ characterForm.key }}\n      </th>\n      <td *ngFor=\"let stateForm of characterForm.value.controls\" [formGroup]=\"stateForm\"\n          class=\"table__cell\"\n          [ngClass]=\"{'table__cell--active': stateForm.value.current}\">\n        <input type=\"text\" formControlName=\"nextState\" class=\"form-control text-input\" appInputResize>\n        /\n        <input type=\"text\" formControlName=\"symbol\" class=\"form-control text-input form-control--centered\" appInputResize>\n        /\n        <input type=\"text\" formControlName=\"direction\" class=\"form-control text-input form-control--centered\" appInputResize>\n      </td>\n    </tr>\n  </table>\n</div>\n\n<ng-template #badProperties>\n  <div class=\"my-lg-5\">\n    <h2>Table of states should contain at least 2 allowed symbols (excluding empty symbol #) and 2 states</h2>\n\n  </div>\n</ng-template>\n\n<div class=\"row mt-1\" [formGroup]=\"tapeForm\">\n  <div>\n    <label for=\"tapeSymbols\">Starting tape value</label>\n    <input id=\"tapeSymbols\" class=\"form-control input--short\" formControlName=\"tape\"/>\n  </div>\n</div>\n\n<div class=\"row tape mt-2\">\n  <div class=\"reversed-tape\">\n    <div class=\"tape-cell\" *ngFor=\"let leftSymbol of leftAddedSymbols\">\n      {{leftSymbol}}\n    </div>\n  </div>\n\n  <div class=\"original-tape-container\">\n    <div *ngFor=\"let symbol of tapeValue\" class=\" tape-cell\">\n      {{symbol}}\n    </div>\n    <div class=\"pointer\" [ngStyle]=\"{transform: 'translate(' + (tapeIndex * 35) +'px)'}\">\n    </div>\n  </div>\n\n\n  <div class=\"right-tape-container\">\n    <div class=\"tape-cell\" *ngFor=\"let rightSymbol of rightAddedSymbols\">\n      {{rightSymbol}}\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <button class=\"btn btn-info\" (click)=\"goToNextState()\"\n          [disabled]=\"isEnd || tableOfStatesForm.invalid || tapeForm.invalid || turingMachinePropertiesForm.invalid\">\n    Next\n  </button>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/proper-simulator-component/proper-simulator-component.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/proper-simulator-component/proper-simulator-component.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 0 10%;\n  min-width: 90vw;\n  height: 100vh;\n  padding: 0 15px; }\n\n.row {\n  flex-wrap: nowrap; }\n\n.table {\n  width: auto;\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n.table tr, .table td, .table th {\n    border: 1px solid pink; }\n\n.table__header {\n    text-align: center; }\n\n.table__cell {\n    white-space: nowrap;\n    height: 35px;\n    min-width: 130px;\n    align-content: center;\n    text-align: center; }\n\n.table__cell input {\n      width: 25px; }\n\n.table__cell--active {\n      background-color: green; }\n\n.table__cell.ng-invalid {\n      background-color: palevioletred; }\n\n.input--short {\n  max-width: 200px; }\n\n.form-control {\n  display: inline-flex;\n  padding: 3px; }\n\n.form-control--centered {\n    padding-left: 7px; }\n\n.arrow-down {\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid #f00; }\n\n.tape {\n  overflow: visible;\n  margin-bottom: 10px; }\n\n.original-tape-container {\n  display: flex;\n  overflow: visible;\n  position: relative;\n  padding-bottom: 10px;\n  transition: all; }\n\n.tape-cell {\n  white-space: nowrap;\n  width: 35px;\n  height: 35px;\n  border: 1px solid dimgray;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  font-weight: bold; }\n\n.pointer {\n  position: absolute;\n  left: 10px;\n  top: 35px;\n  width: 0;\n  height: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-bottom: 10px solid black;\n  transition: all 0.5s; }\n\n.reversed-tape {\n  display: flex;\n  flex-direction: row-reverse; }\n\n.right-tape-container {\n  display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waW90cmVrL3N0dWRpYS90b3VyaW5nLW1hY2hpbmUtc2ltdWxhdG9yL3NyYy9hcHAvY29tcG9uZW50cy9wcm9wZXItc2ltdWxhdG9yLWNvbXBvbmVudC9wcm9wZXItc2ltdWxhdG9yLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTs7QUFIbkI7SUFNSSxzQkFBc0IsRUFBQTs7QUFHeEI7SUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUE7O0FBTG5CO01BUUcsV0FDRixFQUFBOztBQUVBO01BQ0UsdUJBQXVCLEVBQUE7O0FBWjFCO01BZ0JHLCtCQUErQixFQUFBOztBQUtyQztFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLG9CQUFvQjtFQUNwQixZQUFZLEVBQUE7O0FBQ1o7SUFDRSxpQkFBaUIsRUFBQTs7QUFJckI7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1IsU0FBUztFQUNULG1DQUFtQztFQUNuQyxvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGFBQWE7RUFDYiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb3Blci1zaW11bGF0b3ItY29tcG9uZW50L3Byb3Blci1zaW11bGF0b3ItY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIDEwJTtcbiAgbWluLXdpZHRoOiA5MHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5yb3d7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4udGFibGUge1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG5cbiAgdHIsIHRkLCB0aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcGluaztcbiAgfVxuXG4gICZfX2hlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgJl9fY2VsbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbWluLXdpZHRoOiAxMzBweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDI1cHhcbiAgICB9XG5cbiAgICAmLS1hY3RpdmV7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICB9XG5cbiAgICAmLm5nLWludmFsaWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgICB9XG4gIH1cbn1cblxuLmlucHV0LS1zaG9ydCB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogM3B4O1xuICAmLS1jZW50ZXJlZCB7XG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIH1cbn1cblxuLmFycm93LWRvd24ge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNmMDA7XG59XG5cbi50YXBlIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5vcmlnaW5hbC10YXBlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGw7XG59XG5cbi50YXBlLWNlbGwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBkaW1ncmF5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBvaW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMzVweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCBibGFjaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5yZXZlcnNlZC10YXBlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4ucmlnaHQtdGFwZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/proper-simulator-component/proper-simulator-component.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/proper-simulator-component/proper-simulator-component.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProperSimulatorComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProperSimulatorComponentComponent", function() { return ProperSimulatorComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_nextState_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/nextState.validator */ "./src/app/helpers/nextState.validator.ts");
/* harmony import */ var _helpers_stateSymbol_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/stateSymbol.validator */ "./src/app/helpers/stateSymbol.validator.ts");
/* harmony import */ var _helpers_tapeValidator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/tapeValidator */ "./src/app/helpers/tapeValidator.ts");








var ProperSimulatorComponentComponent = /** @class */ (function () {
    function ProperSimulatorComponentComponent(fb) {
        this.fb = fb;
        this.isEnd = false;
        this.tapeIndex = 0;
        this.leftAddedSymbols = ['#', '#', '#'];
        this.rightAddedSymbols = ['#', '#', '#'];
        this.turingMachinePropertiesForm = this.generateTuringMachinePropertiesForm();
        this.tapeForm = this.generateTapeForm();
        this.allowedSymbolsArray$ = this.getAllowedSymbolsArrayObservable();
        this.numberOfStatesArray$ = this.getNumberOfStatesArrayObservable();
        this.getTuringMachinePropertiesValueChangesSubscription();
        this.getTapeFormValueChanges();
        this.getTableOfStatesValueChanges();
        this.tableOfStatesForm.patchValue({
            '#': [{ direction: 'P', nextState: 'q1', symbol: 'a' }, { nextState: 'SK' }],
            a: [{ direction: 'P', nextState: 'q0', symbol: 'd' }, { nextState: 'SK' }],
            d: [{ direction: 'P', nextState: 'q0', symbol: 'a' }, { nextState: 'SK' }]
        });
    }
    ProperSimulatorComponentComponent.prototype.ngOnDestroy = function () {
        this.turingMachinePropertiesFormValueChanges.unsubscribe();
    };
    ProperSimulatorComponentComponent.prototype.getTableOfStatesValueChanges = function () {
        var _this = this;
        this.tableOfStatesForm.valueChanges.subscribe(function (val) {
            if (!_this.currentState || _this.tableOfStatesForm.invalid) {
                return;
            }
            var _a = _this.currentState, row = _a.row, column = _a.column;
            _this.currentState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, val[row][column], { current: true, row: row,
                column: column });
        });
    };
    ProperSimulatorComponentComponent.prototype.getTapeFormValueChanges = function () {
        var _this = this;
        return this.tapeForm.valueChanges.subscribe(function (_a) {
            var tape = _a.tape;
            var _b;
            _this.tableOfStatesForm.patchValue(clearCurrentState(_this.tableOfStatesForm.value));
            _this.tapeIndex = 0;
            if (_this.tapeForm.valid) {
                _this.tapeValue = tape.split('');
                var firstTapeSymbol = tape.slice(0, 1);
                var tableOfStatesCopy = _this.tableOfStatesForm.value;
                var markedTableOfStatesCopy = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, tableOfStatesCopy, (_b = {}, _b[firstTapeSymbol] = [
                    tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, tableOfStatesCopy[firstTapeSymbol][0], { current: true })
                ].concat(tableOfStatesCopy[firstTapeSymbol].slice(1)), _b));
                _this.currentState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.tableOfStatesForm.value[firstTapeSymbol][0], { row: firstTapeSymbol, column: 0 });
                _this.tableOfStatesForm.patchValue(markedTableOfStatesCopy);
            }
        });
    };
    ProperSimulatorComponentComponent.prototype.getTuringMachinePropertiesValueChangesSubscription = function () {
        var _this = this;
        return this.turingMachinePropertiesFormValueChanges = this.turingMachinePropertiesForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])({
            allowedSymbols: 'ad',
            numberOfStates: 2
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (_a) {
            var numberOfStates = _a.numberOfStates;
            return numberOfStates < 1000;
        }))
            .subscribe(function (values) {
            _this.generateTableOfStatesForm(values);
        });
    };
    ProperSimulatorComponentComponent.prototype.getAllowedSymbolsArrayObservable = function () {
        return this.allowedSymbolsArray$ = this.turingMachinePropertiesForm.get('allowedSymbols').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(String.prototype.split));
    };
    ProperSimulatorComponentComponent.prototype.getNumberOfStatesArrayObservable = function () {
        return this.numberOfStatesArray$ = this.turingMachinePropertiesForm.get('numberOfStates').valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])('2'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (val) { return val < 1000; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (length) { return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["range"])(0, length); }));
    };
    ProperSimulatorComponentComponent.prototype.generateTuringMachinePropertiesForm = function () {
        return this.fb.group({
            allowedSymbols: ['ad', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            numberOfStates: [2, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(2)]]
        });
    };
    ProperSimulatorComponentComponent.prototype.generateTableOfStatesForm = function (_a) {
        var _this = this;
        var allowedSymbols = _a.allowedSymbols, numberOfStates = _a.numberOfStates;
        var generateStateSubFormsArray = function () { return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["range"])(numberOfStates).map(function () { return _this.fb.group({
            nextState: ['SK', [Object(_helpers_nextState_validator__WEBPACK_IMPORTED_MODULE_5__["nextStateValidator"])(numberOfStates)]],
            symbol: ['', [Object(_helpers_stateSymbol_validator__WEBPACK_IMPORTED_MODULE_6__["stateSymbolValidator"])(allowedSymbols + '#')]],
            direction: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[LP]{1}')],
            current: false
        }); }); };
        var tableOfStatesForm = ('#' + allowedSymbols).split('').reduce(function (acc, next) {
            var _a;
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, acc, (_a = {}, _a[next] = _this.fb.array(generateStateSubFormsArray()), _a)));
        }, {});
        this.tableOfStatesForm = this.fb.group(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, tableOfStatesForm));
    };
    ProperSimulatorComponentComponent.prototype.generateTapeForm = function () {
        return this.fb.group({
            tape: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, Object(_helpers_tapeValidator__WEBPACK_IMPORTED_MODULE_7__["tapeValidator"])('ad')]]
        });
    };
    ProperSimulatorComponentComponent.prototype.goToNextState = function () {
        var _a = this.currentState, symbol = _a.symbol, nextState = _a.nextState, direction = _a.direction, row = _a.row, column = _a.column;
        this.tableOfStatesForm.patchValue(clearCurrentState(this.tableOfStatesForm.value));
        console.log(clearCurrentState(this.tableOfStatesForm.value));
        if (nextState.toUpperCase() === 'SK') {
            !this.isEnd && window.alert('KONIEC');
            var newStateWithCurrent = this.tableOfStatesForm.value;
            newStateWithCurrent[row][column] = this.currentState;
            this.tableOfStatesForm.patchValue(newStateWithCurrent);
            this.isEnd = true;
            return;
        }
        this.changeProperSymbol(this.tapeIndex, symbol);
        direction.toUpperCase() === 'L' ? this.tapeIndex-- : this.tapeIndex++;
        var nextStateSymbol = this.selectProperSymbol(this.tapeIndex);
        this.currentState = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.tableOfStatesForm.value[nextStateSymbol][nextState.slice(1)], { current: true, row: nextStateSymbol, column: nextState.slice(1) });
        var nextStateValue = this.tableOfStatesForm.value;
        nextStateValue[nextStateSymbol][nextState.slice(1)] = this.currentState;
        this.tableOfStatesForm.patchValue(nextStateValue);
        this.generateAdditionalSymbols(this.tapeIndex);
    };
    ProperSimulatorComponentComponent.prototype.selectProperSymbol = function (tapeIndex) {
        if (tapeIndex >= 0 && tapeIndex < this.tapeValue.length) {
            return this.tapeValue[tapeIndex];
        }
        if (tapeIndex < 0) {
            return this.leftAddedSymbols[Math.abs(tapeIndex) - 1];
        }
        if (tapeIndex >= this.tapeValue.length) {
            return this.rightAddedSymbols[tapeIndex - this.tapeValue.length];
        }
    };
    ProperSimulatorComponentComponent.prototype.changeProperSymbol = function (tapeIndex, symbol) {
        if (tapeIndex >= 0 && tapeIndex < this.tapeValue.length) {
            this.tapeValue[tapeIndex] = symbol;
        }
        if (tapeIndex < 0) {
            this.leftAddedSymbols[Math.abs(tapeIndex) - 1] = symbol;
        }
        if (tapeIndex >= this.tapeValue.length) {
            this.rightAddedSymbols[tapeIndex - this.tapeValue.length] = symbol;
        }
    };
    ProperSimulatorComponentComponent.prototype.generateAdditionalSymbols = function (tapIndex) {
        if (tapIndex < 0 && this.leftAddedSymbols.length + tapIndex < 3) {
            this.leftAddedSymbols.push('#');
        }
        if (tapIndex > 0 && this.tapeValue.length + this.rightAddedSymbols.length - tapIndex < 3) {
            this.rightAddedSymbols.push('#');
        }
    };
    ProperSimulatorComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proper-simulator-component',
            template: __webpack_require__(/*! ./proper-simulator-component.component.html */ "./src/app/components/proper-simulator-component/proper-simulator-component.component.html"),
            styles: [__webpack_require__(/*! ./proper-simulator-component.component.scss */ "./src/app/components/proper-simulator-component/proper-simulator-component.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProperSimulatorComponentComponent);
    return ProperSimulatorComponentComponent;
}());

function clearCurrentState(state) {
    console.log(state);
    console.log(Object.entries(state));
    return Object.entries(state).reduce(function (acc, _a) {
        var key = _a[0], value = _a[1];
        var _b;
        return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, acc, (_b = {}, _b[key] = value.map(function (formGroup) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, formGroup, { current: false })); }), _b)));
    }, {});
}


/***/ }),

/***/ "./src/app/helpers/nextState.validator.ts":
/*!************************************************!*\
  !*** ./src/app/helpers/nextState.validator.ts ***!
  \************************************************/
/*! exports provided: nextStateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextStateValidator", function() { return nextStateValidator; });
function nextStateValidator(highestState) {
    return function (control) {
        var controlValue = control.value;
        var isLastState = controlValue.toUpperCase() === 'SK';
        var nextStateNumber = +controlValue.slice(1);
        var isNextStateLowerThanMaxState = controlValue.slice(1) !== '' && !isNaN(nextStateNumber) && nextStateNumber < highestState;
        var isValidNextState = controlValue.charAt(0) === 'q' && isNextStateLowerThanMaxState;
        if (isValidNextState || isLastState) {
            return null;
        }
        return { notValidState: controlValue };
    };
}


/***/ }),

/***/ "./src/app/helpers/stateSymbol.validator.ts":
/*!**************************************************!*\
  !*** ./src/app/helpers/stateSymbol.validator.ts ***!
  \**************************************************/
/*! exports provided: stateSymbolValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateSymbolValidator", function() { return stateSymbolValidator; });
function stateSymbolValidator(allowedSymbols) {
    return function (control) {
        var controlValue = control.value;
        return allowedSymbols.includes(controlValue) ? null : { stateSymbol: 'Not allowed symbol' };
    };
}


/***/ }),

/***/ "./src/app/helpers/tapeValidator.ts":
/*!******************************************!*\
  !*** ./src/app/helpers/tapeValidator.ts ***!
  \******************************************/
/*! exports provided: tapeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tapeValidator", function() { return tapeValidator; });
function tapeValidator(allowedSymbols) {
    return function (control) {
        var controlValue = control.value;
        var isAllowedSymbolsContaintAllLetters = controlValue.split('').every(function (char) { return allowedSymbols.includes(char); });
        return isAllowedSymbolsContaintAllLetters ? null : { tape: 'Has don\'t allowed characters' };
    };
}


/***/ }),

/***/ "./src/app/input-resize.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/input-resize.directive.ts ***!
  \*******************************************/
/*! exports provided: InputResizeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputResizeDirective", function() { return InputResizeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputResizeDirective = /** @class */ (function () {
    function InputResizeDirective() {
        this.width = 30;
    }
    InputResizeDirective.prototype.changeWidth = function (value) {
        this.width = 25 + String(value).length * 9;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.width.px'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputResizeDirective.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event.target.value']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], InputResizeDirective.prototype, "changeWidth", null);
    InputResizeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appInputResize]'
        })
    ], InputResizeDirective);
    return InputResizeDirective;
}());



/***/ }),

/***/ "./src/app/pipes/current-form-value.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/pipes/current-form-value.pipe.ts ***!
  \**************************************************/
/*! exports provided: CurrentFormValuePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentFormValuePipe", function() { return CurrentFormValuePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CurrentFormValuePipe = /** @class */ (function () {
    function CurrentFormValuePipe() {
    }
    CurrentFormValuePipe.prototype.transform = function (value, _a) {
        var formIndex = _a[0], subFormIndex = _a[1];
        var properIndex = Object.keys(value)[formIndex];
        return value[properIndex][subFormIndex].current;
    };
    CurrentFormValuePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'currentFormValue'
        })
    ], CurrentFormValuePipe);
    return CurrentFormValuePipe;
}());



/***/ }),

/***/ "./src/app/pipes/split.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/pipes/split.pipe.ts ***!
  \*************************************/
/*! exports provided: SplitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitPipe", function() { return SplitPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SplitPipe = /** @class */ (function () {
    function SplitPipe() {
    }
    SplitPipe.prototype.transform = function (value, separator) {
        if (separator === void 0) { separator = ''; }
        return value.split(separator);
    };
    SplitPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'split'
        })
    ], SplitPipe);
    return SplitPipe;
}());



/***/ }),

/***/ "./src/app/pipes/unique-symbols.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/unique-symbols.pipe.ts ***!
  \**********************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, index) {
        return Object.keys(value)[index];
    };
    KeysPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'keys'
        })
    ], KeysPipe);
    return KeysPipe;
}());



/***/ }),

/***/ "./src/app/pipes/values.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/values.pipe.ts ***!
  \**************************************/
/*! exports provided: ValuesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesPipe", function() { return ValuesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValuesPipe = /** @class */ (function () {
    function ValuesPipe() {
    }
    ValuesPipe.prototype.transform = function (value) {
        console.log(Object.values(value));
        return Object.values(value);
    };
    ValuesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'values',
            pure: false
        })
    ], ValuesPipe);
    return ValuesPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/piotrek/studia/touring-machine-simulator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map