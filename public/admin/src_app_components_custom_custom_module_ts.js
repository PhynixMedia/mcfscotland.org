"use strict";
(self["webpackChunkspruha"] = self["webpackChunkspruha"] || []).push([["src_app_components_custom_custom_module_ts"],{

/***/ 31061:
/*!*****************************************************************!*\
  !*** ./src/app/components/custom/custom-page-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomPageRoutingModule: () => (/* binding */ CustomPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error404/error404.component */ 85624);
/* harmony import */ var _underconstruction_underconstruction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./underconstruction/underconstruction.component */ 82355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;





const routes = [{
  path: '',
  children: [{
    path: '404-Error',
    component: _error404_error404_component__WEBPACK_IMPORTED_MODULE_0__.Error404Component
  }, {
    path: 'under-construction',
    component: _underconstruction_underconstruction_component__WEBPACK_IMPORTED_MODULE_1__.UnderconstructionComponent
  }]
}];
class CustomPageRoutingModule {}
_class = CustomPageRoutingModule;
_class.ɵfac = function CustomPageRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomPageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 46537:
/*!************************************************************!*\
  !*** ./src/app/components/custom/custom-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomRoutingModule: () => (/* binding */ CustomRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _forget_forget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget/forget.component */ 69583);
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ 48498);
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset/reset.component */ 39960);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ 61525);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ 86239);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;








const routes = [{
  path: '',
  children: [{
    path: 'forgot-password',
    component: _forget_forget_component__WEBPACK_IMPORTED_MODULE_0__.ForgetComponent
  }, {
    path: 'lockscreen',
    component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_1__.LockscreenComponent
  }, {
    path: 'reset-password',
    component: _reset_reset_component__WEBPACK_IMPORTED_MODULE_2__.ResetComponent
  }, {
    path: 'signin',
    component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__.SigninComponent
  }, {
    path: 'signup',
    component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__.SignupComponent
  }]
}];
class CustomRoutingModule {}
_class = CustomRoutingModule;
_class.ɵfac = function CustomRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CustomRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 62348:
/*!****************************************************!*\
  !*** ./src/app/components/custom/custom.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomModule: () => (/* binding */ CustomModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 89650);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin/signin.component */ 61525);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ 86239);
/* harmony import */ var _forget_forget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forget/forget.component */ 69583);
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset/reset.component */ 39960);
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ 48498);
/* harmony import */ var _underconstruction_underconstruction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./underconstruction/underconstruction.component */ 82355);
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./error500/error500.component */ 21025);
/* harmony import */ var _custom_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-routing.module */ 46537);
/* harmony import */ var _error404_error404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error404/error404.component */ 85624);
/* harmony import */ var _custom_page_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-page-routing.module */ 31061);
/* harmony import */ var _custom500_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom500-routing.module */ 38133);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 70997);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;















class CustomModule {}
_class = CustomModule;
_class.ɵfac = function CustomModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _custom_routing_module__WEBPACK_IMPORTED_MODULE_7__.CustomRoutingModule, _custom_page_routing_module__WEBPACK_IMPORTED_MODULE_9__.CustomPageRoutingModule, _custom500_routing_module__WEBPACK_IMPORTED_MODULE_10__.Custom500RoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](CustomModule, {
    declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_0__.SigninComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent, _forget_forget_component__WEBPACK_IMPORTED_MODULE_2__.ForgetComponent, _reset_reset_component__WEBPACK_IMPORTED_MODULE_3__.ResetComponent, _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__.LockscreenComponent, _underconstruction_underconstruction_component__WEBPACK_IMPORTED_MODULE_5__.UnderconstructionComponent, _error500_error500_component__WEBPACK_IMPORTED_MODULE_6__.Error500Component, _error404_error404_component__WEBPACK_IMPORTED_MODULE_8__.Error404Component],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _custom_routing_module__WEBPACK_IMPORTED_MODULE_7__.CustomRoutingModule, _custom_page_routing_module__WEBPACK_IMPORTED_MODULE_9__.CustomPageRoutingModule, _custom500_routing_module__WEBPACK_IMPORTED_MODULE_10__.Custom500RoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 38133:
/*!***************************************************************!*\
  !*** ./src/app/components/custom/custom500-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Custom500RoutingModule: () => (/* binding */ Custom500RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _error500_error500_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error500/error500.component */ 21025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;




const routes = [{
  path: '',
  children: [{
    path: '500-Error',
    component: _error500_error500_component__WEBPACK_IMPORTED_MODULE_0__.Error500Component
  }]
}];
class Custom500RoutingModule {}
_class = Custom500RoutingModule;
_class.ɵfac = function Custom500RoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Custom500RoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 85624:
/*!******************************************************************!*\
  !*** ./src/app/components/custom/error404/error404.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Error404Component: () => (/* binding */ Error404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);
var _class;


class Error404Component {
  constructor() {}
  ngOnInit() {}
}
_class = Error404Component;
_class.ɵfac = function Error404Component_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-error404"]],
  decls: 14,
  vars: 0,
  consts: [[1, "page", "main-signin-wrapper", "bg-primary", "construction"], [1, "container"], [1, "construction1", "text-center", "details", "text-white"], [1, "row", "align-items-center"], [1, "col-lg-12"], [1, "tx-140", "mb-0"], [1, "tx-15", "mt-3", "mb-4", "text-white-50"], ["routerLink", "/dashboard", 1, "btn", "ripple", "btn-success", "text-center"]],
  template: function Error404Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Oops.The Page you are looking for doesn't exit..");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "You may have mistyped the address or the page may have moved. Try searching below.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back to Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 21025:
/*!******************************************************************!*\
  !*** ./src/app/components/custom/error500/error500.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Error500Component: () => (/* binding */ Error500Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);
var _class;


class Error500Component {
  constructor() {}
  ngOnInit() {}
}
_class = Error500Component;
_class.ɵfac = function Error500Component_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-error500"]],
  decls: 14,
  vars: 0,
  consts: [[1, "row", "sidemenu-height", "error-bg"], [1, "col-md-12"], [1, "construction1", "text-center", "details"], [1, "row", "align-items-center"], [1, "col-lg-12"], [1, "tx-140", "mb-0"], [1, "tx-15", "mt-3", "mb-4", "text-muted"], ["routerLink", "/dashboard", 1, "btn", "ripple", "btn-success", "text-center"]],
  template: function Error500Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "500");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Oops.The Page you are looking for doesn't exit..");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "You may have mistyped the address or the page may have moved. Try searching below.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back to Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: [".construction1.text-center.details {\n  margin-top: 140px;\n}\n@media (max-width: 340px) {\n    .btn.ripple.btn-success.text-center {\n    margin-bottom: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jdXN0b20vZXJyb3I1MDAvZXJyb3I1MDAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxpQkFBQTtBQURSO0FBSUk7RUFDSTtJQUNJLG1CQUFBO0VBRlY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcHtcclxuXHJcbiAgICAuY29uc3RydWN0aW9uMS50ZXh0LWNlbnRlci5kZXRhaWxze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6MzQwcHgpe1xyXG4gICAgICAgIC5idG4ucmlwcGxlLmJ0bi1zdWNjZXNzLnRleHQtY2VudGVye1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 69583:
/*!**************************************************************!*\
  !*** ./src/app/components/custom/forget/forget.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgetComponent: () => (/* binding */ ForgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 70997);
var _class;



class ForgetComponent {
  constructor() {}
  ngOnInit() {}
}
_class = ForgetComponent;
_class.ɵfac = function ForgetComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-forget"]],
  decls: 38,
  vars: 0,
  consts: [[1, "page", "main-signin-wrapper"], [1, "row", "signpages", "text-center"], [1, "col-md-12"], [1, "card"], [1, "row", "row-sm"], [1, "col-lg-6", "col-xl-5", "d-none", "d-lg-block", "text-center", "bg-primary", "details"], [1, "mt-3", "pt-3", "p-2", "pos-absolute"], ["src", "../../assets/img/brand/logo-light.png", "alt", "logo", 1, "header-brand-img", "mb-4"], [1, "clearfix"], ["src", "../../assets/img/svgs/user.svg", "alt", "user", 1, "ht-100", "mb-0"], [1, "mt-4", "text-white"], [1, "tx-white-6", "tx-13", "mb-5", "mt-xl-0"], [1, "col-lg-6", "col-xl-7", "col-xs-12", "col-sm-12", "login_form"], [1, "container-fluid"], [1, "card-body", "mt-2", "mb-2"], ["src", "../../assets/img/brand/logo.png", "alt", "logo", 1, "d-lg-none", "header-brand-img", "text-left", "float-left", "mb-4"], [1, "text-left", "mb-2"], [1, "mb-4", "text-muted", "tx-13", "ml-0", "text-left"], [1, "form-group", "text-left"], ["placeholder", "Enter your email", "type", "text", "value", "", 1, "form-control"], [1, "btn", "ripple", "btn-main-primary", "btn-block"], [1, "card-footer", "border-top-0", "pl-0", "mt-3", "text-left"], [1, "mb-0"], ["routerLink", "/custom/signin"]],
  template: function ForgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7)(8, "div", 8)(9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Reset Your Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Signup to create, discover and connect with the global community");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "div", 4)(17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15)(19, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Forgot Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "It's free to signup and only takes a minute.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form")(25, "div", 18)(26, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Request reset link");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21)(32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Did you remembered your password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Try to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Signin");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 48498:
/*!**********************************************************************!*\
  !*** ./src/app/components/custom/lockscreen/lockscreen.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockscreenComponent: () => (/* binding */ LockscreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 70997);
var _class;



class LockscreenComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {}
  onClick() {
    this.router.navigate(['/dashboard']);
  }
}
_class = LockscreenComponent;
_class.ɵfac = function LockscreenComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-lockscreen"]],
  decls: 40,
  vars: 0,
  consts: [[1, "page", "main-signin-wrapper"], [1, "row", "signpages", "text-center"], [1, "col-md-12"], [1, "card"], [1, "row", "row-sm"], [1, "col-lg-6", "col-xl-5", "d-none", "d-lg-block", "bg-primary", "details"], [1, "mt-4", "pt-4", "pl-5", "ml-3", "pr-5", "pos-absolute"], ["src", "../../assets/img/brand/logo-light.png", "alt", "logo", 1, "header-brand-img", "mb-4"], [1, "clearfix"], ["src", "../../assets/img/svgs/user.svg", "alt", "user", 1, "ht-100", "mb-0"], [1, "mt-4", "text-white"], [1, "tx-white-6", "tx-13", "mb-5", "mt-xl-0"], [1, "col-lg-6", "col-xl-7", "col-xs-12", "col-sm-12", "login_form"], [1, "container-fluid"], [1, "card-body", "main-profile-overview", "mt-3", "mb-3"], ["src", "../../assets/img/brand/logo.png", "alt", "logo", 1, "d-lg-none", "header-brand-img", "text-left", "float-left", "mb-4"], [1, "text-left", "mb-2"], [1, "mb-4", "text-muted", "tx-13", "ml-0", "text-left"], [1, "text-left", "d-flex", "float-left", "mb-4", "user-lock"], ["alt", "avatar avatar-sm", "src", "../../assets/img/users/1.jpg", 1, "rounded-circle", "mb-0"], [1, "my-auto"], [1, "font-weight-semibold", "my-auto", "ml-2", "text-uppercase"], [1, "form-group"], ["placeholder", "Enter your password", "type", "password", 1, "form-control"], [1, "text-left"], [1, "custom-switch"], ["type", "checkbox", "name", "custom-switch-checkbox", 1, "custom-switch-input"], [1, "custom-switch-indicator"], [1, "custom-switch-description"], [1, "btn", "ripple", "btn-main-primary", "btn-block", "mt-4", 3, "click"]],
  template: function LockscreenComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7)(8, "div", 8)(9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Unlock");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Enter your password to access the admin.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "div", 4)(17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15)(19, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lockscreen");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Unlock your screen by entering password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form")(25, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20)(28, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sonia Taylor");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24)(33, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 26)(35, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "show password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LockscreenComponent_Template_button_click_38_listener() {
        return ctx.onClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Unlock");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 39960:
/*!************************************************************!*\
  !*** ./src/app/components/custom/reset/reset.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResetComponent: () => (/* binding */ ResetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 70997);
var _class;


class ResetComponent {
  constructor() {}
  ngOnInit() {}
}
_class = ResetComponent;
_class.ɵfac = function ResetComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-reset"]],
  decls: 39,
  vars: 0,
  consts: [[1, "page", "main-signin-wrapper"], [1, "row", "signpages", "text-center"], [1, "col-md-12"], [1, "card"], [1, "row", "row-sm"], [1, "col-lg-6", "col-xl-5", "d-none", "d-lg-block", "text-center", "bg-primary", "details"], [1, "mt-4", "pt-5", "p-2", "pos-absolute"], ["src", "../../assets/img/brand/logo-light.png", "alt", "logo", 1, "header-brand-img", "mb-4"], [1, "clearfix"], ["src", "../../assets/img/svgs/user.svg", "alt", "user", 1, "ht-100", "mb-0"], [1, "mt-4", "text-white"], [1, "tx-white-6", "tx-13", "mb-5", "mt-xl-0"], [1, "col-lg-6", "col-xl-7", "col-xs-12", "col-sm-12", "login_form"], [1, "container-fluid"], [1, "card-body", "mt-2", "mb-2"], ["src", "../../assets/img/brand/logo.png", "alt", "logo", 1, "d-lg-none", "header-brand-img", "text-left", "float-left", "mb-4"], [1, "text-left", "mb-2"], [1, "mb-4", "text-muted", "tx-13", "ml-0", "text-left"], [1, "form-group", "text-left"], ["placeholder", "Enter your email", "type", "text", 1, "form-control"], ["placeholder", "Enter your password", "type", "password", 1, "form-control"], [1, "btn", "ripple", "btn-main-primary", "btn-block"]],
  template: function ResetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7)(8, "div", 8)(9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Reset Your Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Signup to create, discover and connect with the global community");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "div", 4)(17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15)(19, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Reset Your Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "It's free to signup and only takes a minute.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form")(25, "div", 18)(26, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18)(30, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "New Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18)(34, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Confirm Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Reset Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 61525:
/*!**************************************************************!*\
  !*** ./src/app/components/custom/signin/signin.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SigninComponent: () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 70997);
var _class;



class SigninComponent {
  constructor() {}
  ngOnInit() {}
}
_class = SigninComponent;
_class.ɵfac = function SigninComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-signin"]],
  decls: 43,
  vars: 0,
  consts: [[1, "page", "main-signin-wrapper"], [1, "row", "signpages", "text-center"], [1, "col-md-12"], [1, "card"], [1, "row", "row-sm"], [1, "col-lg-6", "col-xl-5", "d-none", "d-lg-block", "text-center", "bg-primary", "details"], [1, "mt-5", "pt-4", "p-2", "pos-absolute"], ["src", "../../assets/img/brand/logo-light.png", "alt", "logo", 1, "header-brand-img", "mb-4"], [1, "clearfix"], ["src", "../../assets/img/svgs/user.svg", "alt", "user", 1, "ht-100", "mb-0"], [1, "mt-4", "text-white"], [1, "tx-white-6", "tx-13", "mb-5", "mt-xl-0"], [1, "col-lg-6", "col-xl-7", "col-xs-12", "col-sm-12", "login_form"], [1, "container-fluid"], [1, "card-body", "mt-2", "mb-2"], ["src", "../../assets/img/brand/logo.png", "alt", "logo", 1, "d-lg-none", "header-brand-img", "text-left", "float-left", "mb-4"], [1, "text-left", "mb-2"], [1, "mb-4", "text-muted", "tx-13", "ml-0", "text-left"], [1, "form-group", "text-left"], ["placeholder", "Enter your email", "type", "text", 1, "form-control"], ["placeholder", "Enter your password", "type", "password", 1, "form-control"], [1, "btn", "ripple", "btn-main-primary", "btn-block"], [1, "text-left", "mt-5", "ml-0"], [1, "mb-1"], ["href", "javascript:;", "routerLink", "/custom/forgot-password"], ["href", "javascript:;", "routerLink", "/custom/signup"]],
  template: function SigninComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7)(8, "div", 8)(9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "User Account Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Signup to create, discover and connect with the global community");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "div", 4)(17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15)(19, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form")(21, "h5", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Signin to Your Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Signin to create, discover and connect with the global community");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18)(26, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18)(30, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sign In");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22)(36, "div", 23)(37, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Forgot password?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Don't have an account? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Register Here");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 86239:
/*!**************************************************************!*\
  !*** ./src/app/components/custom/signup/signup.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupComponent: () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 82454);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 70997);
var _class;



class SignupComponent {
  constructor() {}
  ngOnInit() {}
}
_class = SignupComponent;
_class.ɵfac = function SignupComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-signup"]],
  decls: 44,
  vars: 0,
  consts: [[1, "page", "main-signin-wrapper"], [1, "row", "signpages", "text-center"], [1, "col-md-12"], [1, "card"], [1, "row", "row-sm"], [1, "col-lg-6", "col-xl-5", "d-none", "d-lg-block", "text-center", "bg-primary", "details"], [1, "mt-5", "pt-5", "p-2", "pos-absolute"], ["src", "../../assets/img/brand/logo-light.png", "alt", "logo", 1, "header-brand-img", "mb-4"], [1, "clearfix"], ["src", "../../assets/img/svgs/user.svg", "alt", "user", 1, "ht-100", "mb-0"], [1, "mt-4", "text-white"], [1, "tx-white-6", "tx-13", "mb-5", "mt-xl-0"], [1, "col-lg-6", "col-xl-7", "col-xs-12", "col-sm-12", "login_form"], [1, "container-fluid"], [1, "card-body", "mt-2", "mb-2"], ["src", "../../assets/img/brand/logo.png", "alt", "logo", 1, "d-lg-none", "header-brand-img", "text-left", "float-left", "mb-4"], [1, "text-left", "mb-2"], [1, "mb-4", "text-muted", "tx-13", "ml-0", "text-left"], [1, "form-group", "text-left"], ["placeholder", "Enter your Name", "type", "text", 1, "form-control"], ["placeholder", "Enter your email", "type", "text", 1, "form-control"], ["placeholder", "Enter your password", "type", "password", 1, "form-control"], [1, "btn", "ripple", "btn-main-primary", "btn-block"], [1, "text-left", "mt-5", "ml-0"], [1, "mb-0"], ["routerLink", "/custom/signin"]],
  template: function SignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7)(8, "div", 8)(9, "img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "User Create Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Signup to create, discover and connect with the global community");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12)(15, "div", 13)(16, "div", 4)(17, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15)(19, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Signup for Free");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "It's free to signup and only takes a minute.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form")(25, "div", 18)(26, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18)(30, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18)(34, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Create Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23)(40, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Already have an account? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Sign In");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 82355:
/*!************************************************************************************!*\
  !*** ./src/app/components/custom/underconstruction/underconstruction.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnderconstructionComponent: () => (/* binding */ UnderconstructionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 51197);
var _class;

class UnderconstructionComponent {
  constructor() {}
  ngOnInit() {
    let countDown = new Date('Dec 1, 2022 00:00:00').getTime();
    let time = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDown - now;
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      this.minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      this.seconds = Math.floor(distance % (1000 * 60) / 1000);
      if (distance < 0) {
        clearInterval(time);
      }
    }, 1000);
  }
}
_class = UnderconstructionComponent;
_class.ɵfac = function UnderconstructionComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-underconstruction"]],
  decls: 40,
  vars: 4,
  consts: [[1, "page", "main-signin-wrapper", "bg-primary", "construction"], [1, "container"], [1, "construction1", "text-center", "details", "text-white"], [1, ""], ["src", "../../assets/img/brand/logo-light.png", "alt", "logo", 1, "mb-5"], [1, "text-center", "text-white", "font-weight-bold"], [1, "text-white-50", "tx-15"], ["id", "launch_date"], [1, "countdown"], [1, "time"], [1, "title"], [1, "text-center"], ["href", "https://www.spruko.com/", 1, "text-white-50"]],
  template: function UnderconstructionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We are Coming soon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We're making the system more awesome.we'll be back shortly.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "ul", 8)(11, "li")(12, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li")(18, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Hours");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li")(24, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Minutes");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Seconds");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00A9 2021 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Spruko");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " All rights reserved.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.days);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hours);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.minutes);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.seconds);
    }
  },
  styles: ["#launch_date[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.countdown-rtl[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n\n.countdown-holding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #888;\n}\n\n.countdown-row[_ngcontent-%COMP%] {\n  clear: both;\n  width: 100%;\n  padding: 0px 2px;\n  text-align: center;\n}\n\n.countdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 13px;\n  font-weight: 300;\n  width: 126px;\n  height: 84px;\n  border-radius: 0px;\n  line-height: 22px;\n  padding: 20px;\n  text-align: center;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  box-shadow: 0 8px 16px 0 rgba(29, 29, 31, 0.08);\n  color: #fff;\n}\n.countdown[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-size: 1.83rem;\n  padding-top: 2px;\n  font-weight: bold;\n}\n\n@media (max-width: 991px) {\n  .countdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 20px 10px 10px 10px;\n  }\n  .is-countdown[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n@media (min-width: 992px) {\n  .countdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 30px 10px 5px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jdXN0b20vdW5kZXJjb25zdHJ1Y3Rpb24vdW5kZXJjb25zdHJ1Y3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxTQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxjQUFBO0FBRUQ7O0FBQ0M7RUFDQyxXQUFBO0FBRUY7O0FBQ0E7RUFDQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRDs7QUFDQztFQUNDLHFCQUFBO0VBQ00sZUFBQTtFQUNBLGdCQUFBO0VBQ04sWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtFQUNBLFdBQUE7QUFFRjtBQUFDO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNNLGlCQUFBO0FBRVI7O0FBQ0E7RUFFRTtJQUNDLDJCQUFBO0VBQ0Q7RUFFRDtJQUNDLGdCQUFBO0VBQUE7QUFDRjtBQUVBO0VBRUU7SUFDQyx1QkFBQTtFQUREO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIjbGF1bmNoX2RhdGUge1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG4uY291bnRkb3duLXJ0bCB7XHJcblx0ZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuLmNvdW50ZG93bi1ob2xkaW5nIHtcclxuXHRzcGFuIHtcclxuXHRcdGNvbG9yOiAjODg4O1xyXG5cdH1cclxufVxyXG4uY291bnRkb3duLXJvdyB7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cGFkZGluZzogMHB4IDJweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmNvdW50ZG93biB7XHJcblx0bGkge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1x0XHRcclxuXHRcdHdpZHRoOiAxMjZweDtcclxuXHRcdGhlaWdodDogODRweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cdFx0cGFkZGluZzogMjBweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHRcdHotaW5kZXg6IDE7XHJcblx0XHRib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgyOSwgMjksIDMxICwgMC4wOCk7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcblx0LnRpbWUge1xyXG5cdFx0Zm9udC1zaXplOiAxLjgzcmVtO1xyXG5cdFx0cGFkZGluZy10b3A6IDJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHR9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpIHtcclxuXHQuY291bnRkb3duIHtcclxuXHRcdGxpIHtcclxuXHRcdFx0bWFyZ2luOiAyMHB4IDEwcHggMTBweCAxMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQuaXMtY291bnRkb3duIHtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0fVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjk5MnB4KSB7XHJcblx0LmNvdW50ZG93biB7XHJcblx0XHRsaSB7XHJcblx0XHRcdG1hcmdpbjogMzBweCAxMHB4IDVweCAwO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_components_custom_custom_module_ts.js.map