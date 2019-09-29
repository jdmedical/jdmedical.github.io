(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-footer/app-footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-footer/app-footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"footer-background mt30\">\r\n  <div class=\"container\">\r\n    <div class=\"col-md-12 text-center\" style=\"padding: 20px 10px;\">\r\n      <img src=\"../../assets/footer-logo.png\" alt=\"logo\">\r\n    </div>\r\n    <div class=\"col-md-12 text-center\">\r\n        <div class=\"social_icons\">\r\n            <ul>\r\n              <li>\r\n                <a href=\"#\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n    </div>\r\n    <div class=\"col-md-12 color-white pt15 pb15\">\r\n        <div class=\"text-center\">Copyright © 2019. All Rights Reserved. \r\n          <a class=\"color-white\" target=\"_blank\" [routerLink]=\"['/home']\">North Texas Comprehensive Spine and Pain.</a>          \r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- header -->\r\n<app-header class=\"bg-white\"></app-header>\r\n<app-scroll-to-top></app-scroll-to-top>\r\n<router-outlet (deactivate)=\"onDeactivate()\"></router-outlet>\r\n<app-app-footer></app-app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-white d-none d-none d-lg-block\" id=\"firstDetails\">\r\n  <div class=\"container\">\r\n    <div class=\"col-md-12 border-bottom pb5 row\">\r\n      <div class=\"col-md-10\">\r\n        <span>\r\n          <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\r\n          <a class=\"mr10 ml10\" href=\"tel:(903)8921999\">(903) 892 1999</a>\r\n        </span>\r\n        <span class=\"bl-br\">\r\n          <i class=\"fa fa-map-marker mr10 ml10\" aria-hidden=\"true\"></i>\r\n          <span class=\"mr10\">\r\n            1001 Sara Swamy Dr. #220, Sherman, TX 75090\r\n          </span>\r\n        </span>\r\n        <span class=\"\">\r\n          <i class=\"fa fa-clock-o ml10 mr10\" aria-hidden=\"true\"></i>\r\n          <span>\r\n            Mon - Thu : 8am - 4pm &amp; Fri: 8am - noon\r\n          </span>\r\n        </span>\r\n      </div>\r\n      <div class=\"col-md-2 text-right\">\r\n        <span>\r\n          <a href=\"javaScript:void(0)\" target=\"_blank\" aria-label=\"facebook\">\r\n            <i class=\"fa fa-facebook\"></i></a>\r\n        </span>\r\n        <span class=\"bl-br mr10 ml10 pr10 pl10\">\r\n          <a href=\"javaScript:void(0)\" target=\"_blank\" aria-label=\"twitter\">\r\n            <i class=\"fa fa-twitter\"></i></a>\r\n        </span>\r\n        <span class=\"border-right pr10\">\r\n          <a href=\"javaScript:void(0)\" target=\"_blank\" aria-label=\"google plus\">\r\n            <i class=\"fa fa-google-plus\"></i></a>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<nav class=\"navbar sticky-top navbar-expand-lg navbar-custom\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\r\n      <img src=\"assets\\logo.png\" class=\"d-block w-100\" alt=\"...\" />\r\n    </a>\r\n    <a #hamBurger id=\"offcanvas-toggler\" class=\"d-lg-none d-xl-none\" aria-label=\"Menu\" href=\"javaScript:void(0)\"\r\n      (click)=\"openSideNav()\"><i class=\"fa fa-bars\" aria-hidden=\"true\" title=\"Menu\"></i></a>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n      <ul class=\"navbar-nav m-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/home']\" routerLinkActive=\"active-link\">Home<span\r\n              class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a [routerLink]=\"['/dr1-detail']\" class=\"nav-link\" routerLinkActive=\"active-link\">Meet Dr.Vattam</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a [routerLink]=\"['/dr2-detail']\" class=\"nav-link\" routerLinkActive=\"active-link\">Meet Dr. Nocerini</a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n            <a [routerLink]=\"['/doctor-team']\" class=\"nav-link\" routerLinkActive=\"active-link\">Doctor Team</a>\r\n          </li>\r\n        <!-- <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" id=\"ourTeamMenuLink\" [routerLink]=\"['/doctor-team']\" role=\"button\"\r\n            data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" routerLinkActive=\"active-link\">\r\n            Our Team\r\n          </a>\r\n          <div class=\"dropdown-menu staff-list\" aria-labelledby=\"ourTeamMenuLink\">\r\n            <a [routerLink]=\"['/doctor-detail']\" class=\"dropdown-item\">Doctor Detail</a>\r\n            <a [routerLink]=\"['/doctor-team']\" class=\"dropdown-item\">Doctor Team</a>\r\n          </div>\r\n        </li> -->\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" id=\"servicesMenuLink\" [routerLink]=\"['/med-services']\"\r\n            routerLinkActive=\"active-link\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n            aria-expanded=\"false\">\r\n            Services\r\n          </a>\r\n          <div class=\"dropdown-menu services-list\" aria-labelledby=\"servicesMenuLink\">\r\n            <ng-container *ngFor=\"let service of medicalServices\">\r\n              <a [routerLink]=\"['/med-services']\" [queryParams]=\"{ selectedServiceId: service.id }\"\r\n                class=\"dropdown-item\">{{service.serviceName}}</a>\r\n            </ng-container>\r\n          </div>\r\n        </li>\r\n        <!-- do not remove below commented code -->\r\n\r\n        <!-- <li class=\"nav-item dropdown\">\r\n\r\n            <a class=\"nav-link dropdown-toggle\" id=\"servicesMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Forms\r\n            </a>\r\n            <div class=\"dropdown-menu services-list\" aria-labelledby=\"servicesMenuLink\">\r\n              <li class=\"nav-item dropdown\">\r\n                  <a href=\"javaScript:void(0)\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" href=\"javaScript:void(0)\" class=\"dropdown-item subLink\">Departments</a>\r\n                  <div class=\"dropdown-menu subMenu\">\r\n                    <a href=\"javaScript:void(0)\" class=\"dropdown-item\">All Departments</a>\r\n                    <a href=\"javaScript:void(0)\" class=\"dropdown-item\">Department Details</a>\r\n                  </div>\r\n              </li>\r\n              \r\n              <a href=\"javaScript:void(0)\" class=\"dropdown-item\">Doctors</a>\r\n              <a href=\"javaScript:void(0)\" class=\"dropdown-item\">Locate Hospital</a>\r\n              <a href=\"javaScript:void(0)\" class=\"dropdown-item\">FAQ</a>\r\n              <a href=\"javaScript:void(0)\" class=\"dropdown-item\">Login/Register</a>\r\n              <a href=\"javaScript:void(0)\" class=\"dropdown-item\">404 Page</a>\r\n              <a href=\"javaScript:void(0)\" class=\"dropdown-item\">Coming Soon</a>\r\n            </div>\r\n          </li> -->\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/forms']\" routerLinkActive=\"active-link\">Forms</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/contact-us']\" routerLinkActive=\"active-link\">Contact us</a>\r\n        </li>\r\n        <!-- <li class=\"nav-item\">\r\n        <button class=\"btn  btn-primary\" type=\"button\">Request Appointment</button>\r\n    </li> -->\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div id=\"mySidenav\" #sideNav class=\"sidenav d-lg-none d-xl-none\">\r\n  <div class=\"btn-container\">\r\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeSideNav()\">&times;</a>\r\n</div>\r\n\r\n<div class=\"links-container mt3\">\r\n    <ul class=\"list-group\">\r\n        <li class=\"list-group-item sidenav-links border-remove\"  [routerLink]=\"['/home']\" routerLinkActive=\"active-link\" (click)=\"closeSideNav()\">Home<span\r\n          class=\"sr-only\">(current)</span></li>\r\n        <li class=\"list-group-item sidenav-links  border-remove\"[routerLink]=\"['/dr1-detail']\" routerLinkActive=\"active-link\"  (click)=\"closeSideNav()\">Meet Dr.Vattam</li>\r\n        <li class=\"list-group-item sidenav-links  border-remove\"[routerLink]=\"['/dr2-detail']\" routerLinkActive=\"active-link\"  (click)=\"closeSideNav()\">Meet Dr. Nocerini</li>\r\n        <li class=\"list-group-item sidenav-links  border-remove\"[routerLink]=\"['/doctor-team']\" routerLinkActive=\"active-link\"  (click)=\"closeSideNav()\">Doctor Team</li>\r\n            <!-- <div id=\"accordion\"  data-toggle=\"collapse\" class=\"collapsed\" data-target=\"#collapseOne\">\r\n                <div class=\"headingOne\" [class.active-link]=\"rla1.isActive || rla2.isActive\">\r\n              \r\n                    Our Team <i id=\"chev-icon\" class=\"fa pull-right\"></i></div>\r\n        \r\n                <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n                  <ul class=\"list-group\"> \r\n                    <li class=\"list-group-item sidenav-links border-remove\" [routerLink]=\"['/doctor-detail']\" routerLinkActive=\"active-link\"  #rla1=\"routerLinkActive\" (click)=\"closeSideNav()\">Doctor Detail</li>\r\n                    <li class=\"list-group-item sidenav-links border-0\" [routerLink]=\"['/doctor-team']\"  routerLinkActive=\"active-link\"   #rla2=\"routerLinkActive\" (click)=\"closeSideNav()\">Doctor Team</li>\r\n                  </ul>\r\n                </div>\r\n            </div> -->\r\n\r\n            <div id=\"accordion2\">\r\n                <a class=\"services-link collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" href=\"#collapseTwo\"> <span>services</span>\r\n                    <i  id=\"chev-icon\"  class=\"fa pull-right\"></i>\r\n                </a>\r\n                   <!-- <a  data-toggle=\"collapse\" class=\"collapsed\" data-target=\"#collapseTwo\" href=\"#collapseTwo\" [class.active-link]=\"serviceActive\">services  <i  id=\"chev-icon\"  class=\"fa pull-right\"></i></a> -->\r\n                \r\n                <div id=\"collapseTwo\" class=\"collapse\"  data-parent=\"#accordion2\">\r\n                  <ul class=\"list-group\">\r\n                      <ng-container *ngFor=\"let service of medicalServices; last as isLast\">\r\n                          <li class=\"list-group-item sidenav-links\" (click)=\"closeSideNav()\" [ngClass]=\"{ 'border-remove' : !isLast }\" [routerLink]=\"['/med-services']\" [queryParams]=\"{ selectedServiceId: service.id }\"\r\n                          routerLinkActive=\"active-link\"  #rla3=\"routerLinkActive\">{{service.serviceName}} {{test(rla3)}}</li>\r\n                        </ng-container>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            \r\n        <li class=\"list-group-item sidenav-links\"  [routerLink]=\"['/contact-us']\" routerLinkActive=\"active-link\" (click)=\"closeSideNav()\">Contact us</li>\r\n      </ul>\r\n</div>\r\n  \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/med-services/med-services.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/med-services/med-services.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"sp-page-title\">\r\n  <div class=\"row\">\r\n    <div id=\"sp-title\" class=\"col-sm-12 col-md-12\">\r\n      <div class=\"sp-column \">\r\n        <div class=\"sp-page-title\">\r\n          <div class=\"container\">\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 pull-left\" style=\"padding: 40px 0px;\">\r\n              <h2>Services</h2>\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-12 pull-right text-right\" style=\"padding: 40px 0px;\">\r\n              <ol class=\"breadcrumb float-right\">\r\n                <span>You are here: &nbsp;</span>\r\n                <li class=\"breadcrumb-item\"><a href=\"/home\">Home</a></li>\r\n                <li class=\"breadcrumb-item\"><a href=\"/med-services\">Services</a></li>\r\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">\r\n                  {{selectedService}}\r\n                </li>\r\n              </ol>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"container\">\r\n  <h3 class=\"text-center header\">Our medical Services</h3>\r\n  <!-- <div class=\"icon text-center\"></div> -->\r\n  <!-- <p class=\"text-center\">one Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu\r\n    pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id</p> -->\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-md-9\">\r\n      <iframe *ngIf=\"false\" style=\"width: 100%; height:100%\" src=\"../../assets/img3_Joom.jpg\" frameborder=\"0\"></iframe>\r\n      <ng-container *ngFor=\"let service of services\">\r\n        <ng-container *ngIf=\"service.serviceName === selectedService\">\r\n          <div class=\"description-grid\">\r\n            <div class=\"grid-item icon2\"></div>\r\n            <div class=\"grid-item\">\r\n              <p [innerHTML]='service.description_one'></p>\r\n              <p>{{service.description_two}}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"approach\">\r\n            <h3 class=\"header\">Our Approach</h3>\r\n            <p>{{service.approach}}</p>\r\n          </div>\r\n          <div class=\"important-things\">\r\n            <h3 class=\" header\">Important Things</h3>\r\n            <p>{{service.important_things}}</p>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <ul class=\"list-group\">\r\n        <ng-container *ngFor=\"let service of services\">\r\n          <li class=\"list-group-item\" [ngClass]=\"{'selected-item': service.serviceName === selectedService}\"\r\n            (click)=\"selectService(service.serviceName)\">{{service.serviceName}}</li>\r\n        </ng-container>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container text-center mt30\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"contactNav()\">Contact us</button>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scroll-to-top/scroll-to-top.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scroll-to-top/scroll-to-top.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Scroll to top-->\n<div class=\"scroll-to-top\" [ngClass]=\"{'show-scrollTop': windowScrolled}\">\n    <button class=\"scroll-button\" (click)=\"scrollToTop()\">\n        <i class=\"fa fa-chevron-up\"></i>\n    </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-footer/app-footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/app-footer/app-footer.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-background {\r\n    background-color: #a578ff;\r\n}\r\n.social_icons ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n.social_icons ul li {\r\n    margin: 2px 5px;\r\n    min-width: 60px;\r\n    min-height: 60px;\r\n    display: inline-block;\r\n    border-radius: 100%;\r\n    -webkit-border-radius: 100%;\r\n    border: 1px solid #fff !important;\r\n}\r\n.social_icons ul li a .fa {\r\n    font-size: 32px;\r\n    line-height: 58px;\r\n}\r\n.social_icons a {\r\n    color: #fff;\r\n}\r\n.footer-background a:hover {\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWZvb3Rlci9hcHAtZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztBQUNiO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixpQ0FBaUM7QUFDckM7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLWZvb3Rlci9hcHAtZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E1NzhmZjtcclxufVxyXG4uc29jaWFsX2ljb25zIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc29jaWFsX2ljb25zIHVsIGxpIHtcclxuICAgIG1hcmdpbjogMnB4IDVweDtcclxuICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc29jaWFsX2ljb25zIHVsIGxpIGEgLmZhIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1OHB4O1xyXG59XHJcblxyXG4uc29jaWFsX2ljb25zIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmZvb3Rlci1iYWNrZ3JvdW5kIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app-footer/app-footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-footer/app-footer.component.ts ***!
  \****************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppFooterComponent = class AppFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app-footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-footer/app-footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app-footer.component.css */ "./src/app/app-footer/app-footer.component.css")).default]
    })
], AppFooterComponent);



/***/ }),

/***/ "./src/app/app-footer/app-footer.module.ts":
/*!*************************************************!*\
  !*** ./src/app/app-footer/app-footer.module.ts ***!
  \*************************************************/
/*! exports provided: AppFooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterModule", function() { return AppFooterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-footer.component */ "./src/app/app-footer/app-footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AppFooterModule = class AppFooterModule {
};
AppFooterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        exports: [
            _app_footer_component__WEBPACK_IMPORTED_MODULE_3__["AppFooterComponent"]
        ],
        declarations: [_app_footer_component__WEBPACK_IMPORTED_MODULE_3__["AppFooterComponent"]]
    })
], AppFooterModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | src-app-home-page-home-page-module */ "src-app-home-page-home-page-module").then(__webpack_require__.bind(null, /*! src/app/home-page/home-page.module */ "./src/app/home-page/home-page.module.ts")).then(mod => mod.HomePageModule) },
    { path: 'contact-us', loadChildren: () => __webpack_require__.e(/*! import() | src-app-contact-us-contact-us-module */ "src-app-contact-us-contact-us-module").then(__webpack_require__.bind(null, /*! src/app/contact-us/contact-us.module */ "./src/app/contact-us/contact-us.module.ts")).then(mod => mod.ContactUsModule) },
    { path: 'med-services', loadChildren: () => __webpack_require__.e(/*! import() | src-app-med-services-med-services-module */ "src-app-med-services-med-services-module").then(__webpack_require__.bind(null, /*! src/app/med-services/med-services.module */ "./src/app/med-services/med-services.module.ts")).then(mod => mod.MedServicesModule) },
    { path: 'meet-dr', loadChildren: () => __webpack_require__.e(/*! import() | src-app-meet-doctor-meet-doctor-module */ "src-app-meet-doctor-meet-doctor-module").then(__webpack_require__.bind(null, /*! src/app/meet-doctor/meet-doctor.module */ "./src/app/meet-doctor/meet-doctor.module.ts")).then(mod => mod.MeetDoctorModule) },
    { path: 'doctor-team', loadChildren: () => __webpack_require__.e(/*! import() | src-app-doctor-team-doctor-team-module */ "src-app-doctor-team-doctor-team-module").then(__webpack_require__.bind(null, /*! src/app/doctor-team/doctor-team.module */ "./src/app/doctor-team/doctor-team.module.ts")).then(mod => mod.DoctorTeamModule) },
    { path: 'dr1-detail', loadChildren: () => __webpack_require__.e(/*! import() | src-app-doctor-detail-doctor-detail-module */ "src-app-doctor-detail-doctor-detail-module").then(__webpack_require__.bind(null, /*! src/app/doctor-detail/doctor-detail.module */ "./src/app/doctor-detail/doctor-detail.module.ts")).then(mod => mod.DoctorDetailModule) },
    { path: 'forms', loadChildren: () => __webpack_require__.e(/*! import() | src-app-forms-forms-module */ "src-app-forms-forms-module").then(__webpack_require__.bind(null, /*! src/app/forms/forms.module */ "./src/app/forms/forms.module.ts")).then(mod => mod.FormsModule) },
    { path: 'dr2-detail', loadChildren: () => __webpack_require__.e(/*! import() | src-app-doctor2-detail-doctor2-detail-module */ "src-app-doctor2-detail-doctor2-detail-module").then(__webpack_require__.bind(null, /*! src/app/doctor2-detail/doctor2-detail.module */ "./src/app/doctor2-detail/doctor2-detail.module.ts")).then(mod => mod.Doctor2DetailModule) }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'med-project';
    }
    onActivate(e, scrollContainer) {
        scrollContainer.scrollTop = 0;
    }
    onDeactivate() {
        document.body.scrollTop = 0;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _app_footer_app_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-footer/app-footer.module */ "./src/app/app-footer/app-footer.module.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scroll-to-top/scroll-to-top.component */ "./src/app/scroll-to-top/scroll-to-top.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _scroll_to_top_scroll_to_top_component__WEBPACK_IMPORTED_MODULE_7__["ScrollToTopComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _header_header_module__WEBPACK_IMPORTED_MODULE_2__["HeaderModule"],
            _app_footer_app_footer_module__WEBPACK_IMPORTED_MODULE_1__["AppFooterModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bl-br {\r\n  border-left: 1px solid #ebebeb;\r\n  border-right: 1px solid #ebebeb;\r\n}\r\n.display-block {\r\n  display: block;\r\n}\r\na {\r\n  color: black;\r\n}\r\na:hover {\r\n  color: #4593ff \r\n}\r\n.active-link {\r\n  color: #4593ff \r\n}\r\n.navbar-light .navbar-nav .nav-link:hover {\r\n  color: #4593ff !important;\r\n}\r\n.nav-item:hover {\r\n  color: #4593ff !important;\r\n}\r\n.nav-item {\r\n  padding-right: 5px !important;\r\n}\r\n.dropdown:hover > .dropdown-menu {\r\n  display: block;\r\n  /* margin-top: 0; */\r\n  padding-top: 0;\r\n  /* padding-bottom: 0; */\r\n}\r\n.dropdown-menu {\r\n  margin-top: 0px;\r\n  border-top: 3px solid #4593ff;\r\n  border-radius: 0;\r\n  min-width: 250px !important;\r\n}\r\n.dropdown-menu.show {\r\n  display: none;\r\n}\r\n.services-list a:last-child,\r\n.staff-list a:last-child {\r\n  border-bottom: 0;\r\n}\r\n.dropdown-item {\r\n  line-height: normal;\r\n  padding: 0.5rem 1rem;\r\n  border-bottom: 1px dashed #d7d4d4;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.dropdown-item:hover {\r\n  background-color: #4593ff !important;\r\n  padding-left: 20px;\r\n}\r\n.show {\r\n  padding-top: 0;\r\n}\r\n.navbar-custom {\r\n  background-color: #ffff !important;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\r\n}\r\n.sidenav {\r\n  height: 100%;\r\n  width: 0;\r\n  position: fixed;\r\n  z-index: 9999;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: white;\r\n  overflow-x: hidden;\r\n  transition: 0.5s;\r\n  padding-top: 60px;\r\n}\r\n.btn-container a {\r\n  padding: 8px 8px 8px 32px;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color: #818181;\r\n  display: block;\r\n  transition: 0.3s;\r\n}\r\n.list-group-item {\r\n border : 0\r\n}\r\n.border-remove {\r\n  border-bottom : 2px solid rgba(0,0,0,0.1);\r\n}\r\n.headingOne {\r\n  position: relative;\r\n    display: block;\r\n    padding: 0.75rem 1.25rem;\r\n    margin-bottom: -1px;\r\n    background-color: #fff;\r\n    border-bottom : 2px solid rgba(0,0,0,0.1);\r\n}\r\n.services-link {\r\n  display: block;\r\n  padding: 0.75rem 1.25rem;\r\n  text-decoration: none;\r\n  border-bottom : 2px solid rgba(0,0,0,0.1);\r\n}\r\n.headingOne:hover {\r\n  color: #4593ff;\r\n}\r\n.list-container a {\r\n  padding: 8px 8px 8px 32px;\r\n  text-decoration: none;\r\n  display: block;\r\n  transition: 0.3s;\r\n}\r\n/* .sidenav a:hover {\r\n  color: #f1f1f1;\r\n} */\r\n.sidenav .closebtn {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 25px;\r\n  font-size: 36px;\r\n  margin-left: 50px;\r\n  background-color: #4593ff ;\r\n  text-align: center;\r\n  padding: 0 1rem;\r\n  margin-top: 0.5rem\r\n}\r\n.subLink:after {\r\n  font-family: \"FontAwesome\";\r\n  content: \" \\f105\";\r\n  float: right;\r\n}\r\n.sidenav-links:hover {\r\n  color :#4593ff \r\n}\r\n.dropdown:hover > .subMenu {\r\n  display: block;\r\n  padding-top: 0;\r\n}\r\n.subMenu {\r\n  top: 0%;\r\n  left: 100%;\r\n}\r\n#chev-icon {\r\n  color: #4593ff;\r\n  font-size: 1.5em;\r\n}\r\n[data-toggle=\"collapse\"] .fa:before {   \r\n  content: \"\\f139\";\r\n}\r\n[data-toggle=\"collapse\"].collapsed .fa:before {\r\n  content: \"\\f13a\";\r\n}\r\n.list-group-item:hover {\r\n  cursor: pointer;\r\n}\r\n.headingOne:hover {\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRTtBQUNGO0FBRUE7RUFDRTtBQUNGO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGlDQUFpQztFQUdqQyxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxzQ0FBc0M7QUFDeEM7QUFFQTtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsZUFBZTtFQUNmLGFBQWE7RUFDYixNQUFNO0VBQ04sUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtDQUNDO0FBQ0Q7QUFFQTtFQUNFLHlDQUF5QztBQUMzQztBQUNBO0VBQ0Usa0JBQWtCO0lBQ2hCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix5Q0FBeUM7QUFDN0M7QUFFQTtFQUNFLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlDQUF5QztBQUMzQztBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7O0dBRUc7QUFFSDtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Y7QUFDRjtBQUdBO0VBQ0UsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFFQTtFQUNFO0FBQ0Y7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxPQUFPO0VBQ1AsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibC1iciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmViZWI7XHJcbn1cclxuLmRpc3BsYXktYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiAjNDU5M2ZmIFxyXG59XHJcblxyXG4uYWN0aXZlLWxpbmsge1xyXG4gIGNvbG9yOiAjNDU5M2ZmIFxyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlciB7XHJcbiAgY29sb3I6ICM0NTkzZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1pdGVtOmhvdmVyIHtcclxuICBjb2xvcjogIzQ1OTNmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgPiAuZHJvcGRvd24tbWVudSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLyogbWFyZ2luLXRvcDogMDsgKi9cclxuICBwYWRkaW5nLXRvcDogMDtcclxuICAvKiBwYWRkaW5nLWJvdHRvbTogMDsgKi9cclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgIzQ1OTNmZjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxufVxyXG4uZHJvcGRvd24tbWVudS5zaG93IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2VydmljZXMtbGlzdCBhOmxhc3QtY2hpbGQsXHJcbi5zdGFmZi1saXN0IGE6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZDdkNGQ0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU5M2ZmICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi5uYXZiYXItY3VzdG9tIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuLmJ0bi1jb250YWluZXIgYSB7XHJcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjODE4MTgxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gYm9yZGVyIDogMFxyXG59XHJcblxyXG4uYm9yZGVyLXJlbW92ZSB7XHJcbiAgYm9yZGVyLWJvdHRvbSA6IDJweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuLmhlYWRpbmdPbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tIDogMnB4IHNvbGlkIHJnYmEoMCwwLDAsMC4xKTtcclxufVxyXG5cclxuLnNlcnZpY2VzLWxpbmsge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbSA6IDJweCBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7XHJcbn1cclxuLmhlYWRpbmdPbmU6aG92ZXIge1xyXG4gIGNvbG9yOiAjNDU5M2ZmO1xyXG59XHJcblxyXG4ubGlzdC1jb250YWluZXIgYSB7XHJcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLyogLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbn0gKi9cclxuXHJcbi5zaWRlbmF2IC5jbG9zZWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1OTNmZiA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW1cclxufVxyXG5cclxuXHJcbi5zdWJMaW5rOmFmdGVyIHtcclxuICBmb250LWZhbWlseTogXCJGb250QXdlc29tZVwiO1xyXG4gIGNvbnRlbnQ6IFwiIFxcZjEwNVwiO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnNpZGVuYXYtbGlua3M6aG92ZXIge1xyXG4gIGNvbG9yIDojNDU5M2ZmIFxyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgPiAuc3ViTWVudSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbi5zdWJNZW51IHtcclxuICB0b3A6IDAlO1xyXG4gIGxlZnQ6IDEwMCU7XHJcbn1cclxuI2NoZXYtaWNvbiB7XHJcbiAgY29sb3I6ICM0NTkzZmY7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0gLmZhOmJlZm9yZSB7ICAgXHJcbiAgY29udGVudDogXCJcXGYxMzlcIjtcclxufVxyXG5cclxuW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0uY29sbGFwc2VkIC5mYTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXFxmMTNhXCI7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaGVhZGluZ09uZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _med_services_med_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../med-services/med-services.component */ "./src/app/med-services/med-services.component.ts");




let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.isScrolled = false;
        this.medicalServices = [];
        this.serviceActive = false;
    }
    onScrollEvent($event) {
        if (document.getElementById('navBar')) {
            if (document.documentElement.scrollTop > 50) {
                document.getElementById('navBar').classList.add('fixed-top');
            }
            else {
                document.getElementById('navBar').classList.remove('fixed-top');
            }
        }
    }
    onClick(targetElement) {
        const clickedInside = this.sideNavRef.nativeElement.contains(targetElement);
        const isHamBurgerIconClicked = this.hamBurgerRef.nativeElement.contains(targetElement);
        if (!clickedInside && !isHamBurgerIconClicked) {
            this.closeSideNav();
        }
    }
    ngOnInit() {
        this.medicalServices = Object(_med_services_med_services_component__WEBPACK_IMPORTED_MODULE_3__["getServices"])();
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (!event.url.includes('med-services')) {
                    this.serviceActive = false;
                }
            }
        });
    }
    openSideNav() {
        document.getElementById("mySidenav").style.width = "50%";
    }
    closeSideNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    navigateToServices(id) {
        this.router.navigate(['med-services'], { queryParams: { selectedServiceId: id } });
    }
    isActive(url) {
        if (this.router.url.includes(url)) {
            return 'active-link';
        }
    }
    test(rla) {
        if (rla && rla.isActive) {
            this.serviceActive = true;
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sideNav', { static: false })
], HeaderComponent.prototype, "sideNavRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hamBurger', { static: false })
], HeaderComponent.prototype, "hamBurgerRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], HeaderComponent.prototype, "onScrollEvent", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event.target'])
], HeaderComponent.prototype, "onClick", null);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HeaderModule = class HeaderModule {
};
HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        exports: [
            _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
        ],
        declarations: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]]
    })
], HeaderModule);



/***/ }),

/***/ "./src/app/med-services/med-services.component.css":
/*!*********************************************************!*\
  !*** ./src/app/med-services/med-services.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon {\r\n    display: block;\r\n    width: 32px;\r\n    height: 32px;\r\n    margin: auto;\r\n    background: url('lifeline-in-a-heart-outline.png');\r\n    padding: 1rem 0\r\n}\r\n\r\n.header {\r\n    padding: 1rem 0.5rem;\r\n    font-family: Lato, sans-serif;\r\n    font-size: 30px;\r\n    font-weight: normal\r\n}\r\n\r\n.description-grid {\r\n    display: grid;\r\n    grid-template-columns: 10% auto;\r\n    margin-top : 2rem;\r\n    margin-bottom: 2rem\r\n}\r\n\r\n.icon2 {\r\n    display: block;\r\n    width: 32px;\r\n    height: 32px;\r\n    background: url('lifeline-in-a-heart-outline.png');\r\n    padding: 1rem 1rem;\r\n    text-align: center\r\n}\r\n\r\n.approach, .important-things {\r\n    margin-top: 2rem;\r\n}\r\n\r\np {\r\n    font-family: Lato, sans-serif;\r\n    font-size: 16px;\r\n    font-weight: normal\r\n}\r\n\r\n.list-group-item:hover {\r\n    background-color: #a578ff\r\n}\r\n\r\n.selected-item {\r\n    background-color: #a578ff \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkLXNlcnZpY2VzL21lZC1zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtEQUErRDtJQUMvRDtBQUNKOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixrREFBK0Q7SUFDL0Qsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21lZC1zZXJ2aWNlcy9tZWQtc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9saWZlbGluZS1pbi1hLWhlYXJ0LW91dGxpbmUucG5nJyk7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDBcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbFxyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgYXV0bztcclxuICAgIG1hcmdpbi10b3AgOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbVxyXG59XHJcblxyXG4uaWNvbjIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2xpZmVsaW5lLWluLWEtaGVhcnQtb3V0bGluZS5wbmcnKTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4uYXBwcm9hY2gsIC5pbXBvcnRhbnQtdGhpbmdzIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsXHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E1NzhmZlxyXG59XHJcbi5zZWxlY3RlZC1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNTc4ZmYgXHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/med-services/med-services.component.ts":
/*!********************************************************!*\
  !*** ./src/app/med-services/med-services.component.ts ***!
  \********************************************************/
/*! exports provided: getServices, MedServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return getServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedServicesComponent", function() { return MedServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




function getServices() {
    return [{
            "id": "1",
            "serviceName": 'Cervical/Lumbar Medial Branch Nerve Blocks (MBNB)',
            "header": "one Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tinc",
            'description_one': "Medial branch nerve blocks are usually used as a diagnostic procedure to determine if the facet joints in your spine are causing pain. Facet joints are located in the back of the spine from the neck to the lower back. It is common for facet joints to become arthritic and painful, sometimes as early as in a person’s 20s. Facet joint pain is typically located in the low back or neck, sometimes with radiation to the buttocks or shoulders. It is usually made worse by bending backwards at the waist or leaning forward, such as when standing at a sink. A medial branch nerve block is a procedure in which an anesthetic is injected near the nerves connected to your facet joints. Typically several levels of the spine are injected in one procedure. If you experience significant pain relief immediately after the injection, then the facet joint is likely to be the source of the your pain.",
            "description_two": "The procedure is primarily diagnostic, meaning that if you have pain relief after the medial branch nerve block, then you may be a candidate for a subsequent procedure called a Radiofrequency Ablation for longer pain relief.",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
            "important_things": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
        },
        {
            "id": "2",
            "serviceName": "Facet Joint Injections",
            "header": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincunt ",
            "description_one": "Another way of treating facet joint pain is to directly inject numbing medication and steroid into the facet joint. ",
            "description_two": "",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
            "important_things": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming  quod mazim placerat facer possim assum."
        },
        {
            "id": "3",
            "serviceName": "Radiofrequency Ablation (RFA)",
            "header": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
            "description_one": "Radiofrequency ablation is a therapy that uses radiofrequency waves to deliver heat to targeted nerve tissues. This can help reduce chronic pain symptoms that are associated with various conditions by destroying ablating the nerve to the painful area. It is usually used on nerves that will eventually grow back, so many people will periodically repeat the procedure.",
            "description_two": "",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
            "important_things": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
        },
        {
            "id": "4",
            "serviceName": "Epidural Steroid Injections (ESI)",
            "header": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
            "description_one": "Epidural steroid injections (ESIs) are a common treatment option for low back and leg pain along with neck and arm pain. Sometimes the injection alone is sufficient to provide relief, but commonly an epidural steroid injection is used in combination with a physical therapy to provide longer lasting benefit. An epidural steroid injection can be very beneficial during an acute episode of back/leg pain or neck/arm pain. Epidural steroid injections also may be used to treat similar conditions in the thoracic spine.",
            "description_two": "Epidural steroid injections may be performed with an interlaminar approach, which targets multiple affected nerves, or with a transforaminal, or selective nerve root approach, to target specific nerve roots. Additionally, a caudal epidural steroid injection may target multiple nerves or specific nerves by using a catheter.",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
            "important_things": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
        },
        {
            "id": "5",
            "serviceName": "Superion",
            "header": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
            "description_one": "The Superion implant is used to treat pain in the back and legs from lumbar spinal stenosis. Individuals with spinal stenosis commonly experience relief by bending forward or sitting. It acts as an indirect decompression device, recreating this spinal position and relieving pressure on the affected nerves. Superion can be used to provide patients with an alternative when conservative treatment has failed and laminectomy is too aggressive.",
            "description_two": "",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
            "important_things": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
        },
        {
            "id": "6",
            "serviceName": "Sacroiliac Joint Fusion",
            "header": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
            "description_one": "Sacroiliac Joint Anatomy and Function<br>The sacroiliac (SI) joint is a low-motion joint that connects the pelvis to either side of the sacrum (tailbone), acting primarily as a shock-absorber between the lower body and torso. This joint is the point where the base of the spine connects to the pelvis.<br>Dysfunction in the SI joint can produce significant lower back pain, as well as hip pain. Sacroiliac joint dysfunction can be the result of too much motion, too little motion, or inflammation of the joint.<br>There is evidence that those who have undergone a lumbar spinal fusion are at a heightened risk for SI joint pain.",
            "description_two": "In a sacroiliac joint fusion, your doctor makes two small incisions over the sacroiliac joint and places two small bone grafts in the sacroiliac joint to stabilize it and prevent movement, thereby reducing pain from the joint. There are no screws or metal hardware placed in the joint or pelvis with this procedure. The recovery period is brief, typically less than one week.",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
            "important_things": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
        },
        {
            "id": "7",
            "serviceName": "Spinal Cord Stimulation (SCS)",
            "header": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
            "description_one": " Spinal Cord Stimulation (SCS) has been in use for nearly 50 years. SCS systems use a small battery and thin, flexible wires called leads. The stimulator delivers a mild electric current through the leads to mask pain signals from reaching the brain.  A remote control allows you to increase or decrease the level of stimulation, turn it on and off, and target different areas in your back, legs, neck, or arms using programs specifically designed for you. This stimulation does not get rid of what is causing the pain. It changes the way the brain perceives it. SCS therapy may use a gentle tingling sensation, called paresthesias, to replace the pain. Other forms of SCS use higher frequencies that do not create any paresthesia. The amount of pain relief achieved is different for everyone, but the therapy is considered successful if it reduces your pain by at least 50%, improves your level of function by 50%, or if you are able to reduce medication use by 50%.",
            "description_two": "",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
            "important_things": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
        },
        {
            "id": "8",
            "serviceName": "Kyphoplasty",
            "header": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
            "description_one": "Kyphoplasty is a minimally invasive procedure used to treat vertebral compression fractures. A needle is placed in the collapsed vertebral body under x-ray guidance, and a balloon is inflated. This restores some of the lost height from the fracture. The balloon is removed, and bone cement is injected in the space to stabilize the fractured vertebral body and subsequently reduce pain.",
            "description_two": "",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinc unt ut laoreet dolore magna aliquam erat volutpat",
            "important_things": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
        },
        {
            "id": "9",
            "serviceName": "Discography",
            "header": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
            "description_one": "Discography is a procedure used to determine is specific vertebral discs are a source of pain. Discography is performed by injecting contrast material into a disc under x-ray guidance. A surgeon may request discography when planning spine surgery to determine which disc levels will require surgery.",
            "description_two": "",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
            "important_things": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
        },
        {
            "id": "10",
            "serviceName": "Trigger Point Injections",
            "header": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
            "description_one": "Trigger points are tender areas in muscle that cause pain and reduce range of motion and function.  The pain may be localized, or it may radiate to other areas. Trigger points are commonly seen in chronic musculoskeletal disorders such as neck and low back pain. Trigger point injections are used to temporarily reduce muscle pain, and also to allow better participation in a physical therapy program.",
            "description_two": "",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
            "important_things": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
        },
        {
            "id": "11",
            "serviceName": "Sympathetic nerve blocks",
            "header": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
            "description_one": "Sympathetic nerve blocks reduce the transmission of pain signals from sympathetic nerve roots to treat chronic pain. This type of block is typically performed if conventional treatment methods such as over-the-counter pain medication or steroid injections have not been effective. Sympathetic nerve blocks are typically used to treat chronic abdominal, pelvic, or rectal pain, and they are also used to treat Complex Regional Pain Syndrome (CRPS), also known as Reflex Sympathetic Dystrophy (RSD) in the arms or legs. These injections do not usually use steroids, so they can be administered more frequently, if needed, to control pain. In some cases, sympathetic nerve blocks may also be used diagnostically to see if someone might be a good candidate for a spinal cord stimulator.",
            "description_two": "",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
            "important_things": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
        },
        {
            "id": "12",
            "serviceName": "Knee/Hip/Shoulder Injections",
            "header": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
            "description_one": "If you have osteoarthritis in your knee or hip, corticosteroids may provide temporary pain relief. Intra-articular joint injections are most commonly performed in the knee, hip, and shoulder, but they can be performed in other joints as well. This procedure involves the injection of corticosteroids into the affected joint. This can provide quick and sometimes long-lasting pain relief.",
            "description_two": "",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
            "important_things": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
        },
        {
            "id": "13",
            "serviceName": "Selective nerve root blocks",
            "header": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
            "description_one": "Selective nerve root block injections are used to treat an inflamed spinal nerve root. This may be caused by a herniated disc, or by degenerative changes in the spine, such as bone spurs, thickening of spinal ligaments, or misalignment of the spine. In these conditions, there may be a chemical irritation or pinching of the nerve due to mechanical compression. Multiple nerve blocks may be performed if more than one nerve is suspected of causing pain.",
            "description_two": "",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
            "important_things": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
        },
        {
            "id": "14",
            "serviceName": "Trigeminal Nerve Pain",
            "header": "Facial Injections Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
            "description_one": "The Gasserian ganglion is a small collection of nerve cells and fibers found at the base of the skull. It has three nerve branches known as the Trigeminal Nerves. These three branches are responsible for sensation on the side of the face. The Gasserian ganglion or trigeminal ganglion injection is a brief, minimally invasive procedure that is performed using local anesthetic to inhibit the signals from going through those nerves in order to control facial pain. Sometimes steroid is also used for this procedure.",
            "description_two": "",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
            "important_things": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
        },
        {
            "id": "15",
            "serviceName": 'Intrarticular joint injections',
            "header": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit",
            "description_one": "Radiofrequency ablation is a therapy that uses radio waves to create an electrical current through the body. This current delivers heat to targeted nerve tissues. And this can help reduce your chronic pain symptoms that are associated with various conditions. This is because the heat is applied to the nerve tissue in a way that impairs or destroys the nerves. This can result in a semi-permanent disturbance of the transmission of pain signals from the spinal column to the brain.",
            "description_two": "Radiofrequency ablation intially discovered to be an effective treatment for the relief of chronic pain in 1931. It was first utilized to treat a patient with trigeminal neuralgia, which is a pain condition that affects facial nerves, resulting in severe jolts of pain. Due to the treatment benefits of this procedure, radiofrequency ablation has become increasingly popular for both physicians and patients over the past 15 years",
            "approach": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  unt ut laoreet dolore magna aliquam erat volutpat",
            'important_things': "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming mazim placerat facer possim assum."
        }];
}
let MedServicesComponent = class MedServicesComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.services = getServices();
    }
    ngOnInit() {
        window.scroll(0, 0);
        this.subscriptions.add(this.route.queryParams.subscribe(queryParams => {
            if (queryParams['selectedServiceId']) {
                this.services.forEach(service => {
                    if (service.id === queryParams['selectedServiceId']) {
                        this.selectedService = service.serviceName;
                    }
                });
            }
            else {
                this.selectedService = this.services[0].serviceName;
            }
        }));
    }
    selectService(selection) {
        this.selectedService = selection;
        window.scroll(0, 0);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    contactNav() {
        this.router.navigate(['/' + 'contact-us']);
        window.scroll(0, 0);
    }
};
MedServicesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MedServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-med-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./med-services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/med-services/med-services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./med-services.component.css */ "./src/app/med-services/med-services.component.css")).default]
    })
], MedServicesComponent);



/***/ }),

/***/ "./src/app/scroll-to-top/scroll-to-top.component.css":
/*!***********************************************************!*\
  !*** ./src/app/scroll-to-top/scroll-to-top.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-to-top {\r\n    position: fixed;\r\n    bottom: 1rem;\r\n    right: 1rem;\r\n    opacity: 0;\r\n    transition: all .2s ease-in-out;\r\n    z-index: 9999;\r\n   }\r\n   .show-scrollTop {\r\n    opacity: 1;\r\n    transition: all .2s ease-in-out;\r\n   }\r\n   .scroll-button{\r\n       background-color: #4593ff;\r\n       color: white;\r\n       width: 3rem;\r\n       height: 3rem;\r\n       border-style: none;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsLXRvLXRvcC9zY3JvbGwtdG8tdG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsK0JBQStCO0lBQy9CLGFBQWE7R0FDZDtHQUNBO0lBQ0MsVUFBVTtJQUNWLCtCQUErQjtHQUNoQztHQUVBO09BQ0kseUJBQXlCO09BQ3pCLFlBQVk7T0FDWixXQUFXO09BQ1gsWUFBWTtPQUNaLGtCQUFrQjtHQUN0QiIsImZpbGUiOiJzcmMvYXBwL3Njcm9sbC10by10b3Avc2Nyb2xsLXRvLXRvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC10by10b3Age1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAxcmVtO1xyXG4gICAgcmlnaHQ6IDFyZW07XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgIH1cclxuICAgLnNob3ctc2Nyb2xsVG9wIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICB9XHJcblxyXG4gICAuc2Nyb2xsLWJ1dHRvbntcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTkzZmY7XHJcbiAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/scroll-to-top/scroll-to-top.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/scroll-to-top/scroll-to-top.component.ts ***!
  \**********************************************************/
/*! exports provided: ScrollToTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToTopComponent", function() { return ScrollToTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let ScrollToTopComponent = class ScrollToTopComponent {
    constructor(document) {
        this.document = document;
    }
    onWindowScroll() {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.windowScrolled = true;
        }
        else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.windowScrolled = false;
        }
    }
    scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
    ngOnInit() {
    }
};
ScrollToTopComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", [])
], ScrollToTopComponent.prototype, "onWindowScroll", null);
ScrollToTopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scroll-to-top',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./scroll-to-top.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scroll-to-top/scroll-to-top.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./scroll-to-top.component.css */ "./src/app/scroll-to-top/scroll-to-top.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))
], ScrollToTopComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\owner\Development\med-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map