(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-home-page-home-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\" data-interval=\"3000\" data-pause=\"hover\">\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item active\">\r\n        <img src=\"assets\\download (1).jpg\" class=\"d-block w-100\" alt=\"...\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img src=\"assets\\download (2).jpg\" class=\"d-block w-100\" alt=\"...\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img src=\"assets\\download.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n  <div class=\"container mt-5\">\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let program of programs\" class=\"col-md-6 col-lg-3\">\r\n        <div class=\"card mt-3 mr-2\">\r\n          <div class=\"programs-grid\">\r\n            <div class=\"programs-grid-icon icon\"></div>\r\n            <div class=\"programs-grid-item\">\r\n              <h6 class=\"bold-text\">{{program.title}}</h6>\r\n            </div>\r\n            <div class=\"programs-grid-item\"></div>\r\n            <div class=\"programs-grid-item\">{{program.description}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n    <app-why-best></app-why-best>\r\n\r\n    <div class=\"container text-center mt30\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"contactNav()\">Contact us</button>\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/why-best/why-best.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/why-best/why-best.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mt-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5 image-container\">\r\n            <img class=\"human-image img-fluid\" src=\"../../../assets/img3.png\">\r\n        </div>\r\n        <div class=\"col-md-7 description\">\r\n            <div class=\"description-content\">\r\n                <h5>Why We Are The Best?</h5>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus\r\n                    sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis\r\n                    accumsan ipsum.</p>\r\n                <div class=\"description-grid\">\r\n                    <div class=\"description-grid-items\">\r\n                        <div class=\"icon\"></div>\r\n                        <h6>Free Medical Councelling</h6>\r\n                    </div>\r\n                    <div class=\"description-grid-items\">\r\n                        <div class=\"icon\"></div>\r\n                        <h6>Well Experienced</h6>\r\n                    </div>\r\n                    <div class=\"description-grid-items\">\r\n                        <div class=\"icon\"></div>\r\n                        <h6>Cashless Payment</h6>\r\n                    </div>\r\n                    <div class=\"description-grid-items\">\r\n                        <div class=\"icon\"></div>\r\n                        <h6>Emergency Departments</h6>\r\n                    </div>\r\n                    <div class=\"description-grid-items\">\r\n                        <div class=\"icon\"></div>\r\n                        <h6>Empaneled Corporates</h6>\r\n                    </div>\r\n                    <div class=\"description-grid-items\">\r\n                        <div class=\"icon\"></div>\r\n                        <h6>Quality & Accreditation</h6>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card{\r\n min-height :11rem;\r\n}\r\n\r\n.programs-grid {\r\n    display : grid;\r\n    grid-template-columns: 20% 80%;\r\n    grid-template-rows: 30% auto;\r\n    padding: 0.75rem;\r\n}\r\n\r\n.icon {\r\n    display: block;\r\n    width: 32px;\r\n    height: 32px;\r\n    background: url('lifeline-in-a-heart-outline.png');\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0RBQStEO0FBQ25FIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiBtaW4taGVpZ2h0IDoxMXJlbTtcclxufVxyXG5cclxuLnByb2dyYW1zLWdyaWQge1xyXG4gICAgZGlzcGxheSA6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSBhdXRvO1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxufVxyXG4uaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvbGlmZWxpbmUtaW4tYS1oZWFydC1vdXRsaW5lLnBuZycpO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let HomePageComponent = class HomePageComponent {
    constructor(router) {
        this.router = router;
        //TODO: Move to appropriate service
        this.programs = [{
                description: 'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
                title: 'Adolescence to  Menopause'
            },
            {
                description: 'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
                title: 'Brest Health Program'
            },
            {
                description: 'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
                title: 'Integrated  Digestive, Liver'
            },
            {
                description: 'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
                title: 'Kidney Transplantation'
            },
            {
                description: 'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
                title: 'Liver Transplantation Surgery'
            },
            {
                description: 'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
                title: 'Total Knee Replacement'
            },
            {
                description: 'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
                title: 'Total Hip Replacement'
            },
            {
                description: 'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
                title: 'Heart Screening Surgery'
            }];
    }
    ngOnInit() {
    }
    contactNav() {
        this.router.navigate(['/' + 'contact-us']);
        window.scroll(0, 0);
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/home-page/home-page.module.ts":
/*!***********************************************!*\
  !*** ./src/app/home-page/home-page.module.ts ***!
  \***********************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_page_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.routing */ "./src/app/home-page/home-page.routing.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _why_best_why_best_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./why-best/why-best.component */ "./src/app/home-page/why-best/why-best.component.ts");






let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _home_page_routing__WEBPACK_IMPORTED_MODULE_1__["HomePageRoutes"]
        ],
        declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], _why_best_why_best_component__WEBPACK_IMPORTED_MODULE_5__["WhyBestComponent"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home-page/home-page.routing.ts":
/*!************************************************!*\
  !*** ./src/app/home-page/home-page.routing.ts ***!
  \************************************************/
/*! exports provided: HomePageRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutes", function() { return HomePageRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', component: _home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"] },
];
const HomePageRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/home-page/why-best/why-best.component.css":
/*!***********************************************************!*\
  !*** ./src/app/home-page/why-best/why-best.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-container {\r\n    background-color: #8d42f5;\r\n  \r\n}\r\n\r\n.human-image {\r\n    padding-left:1rem;\r\n    padding-bottom: 0.2rem\r\n}\r\n\r\n.description {\r\n    /* should be replaced with image */\r\n    background-color: #42b0f5;\r\n}\r\n\r\n.description-content {\r\n    padding: 1rem;\r\n    color: #ffff\r\n}\r\n\r\n.description-content>h5 {\r\n    padding-top: 1rem;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\n.description-grid {\r\n    display: grid;\r\n    margin-top: 2.5rem;\r\n    grid-template-columns: auto auto auto;\r\n    grid-gap: 50px;\r\n}\r\n\r\n@media only screen and (max-width: 1000px) {\r\n    .description-grid {\r\n        grid-template-columns: auto auto;\r\n    }\r\n  }\r\n\r\n@media only screen and (max-width: 370px) {\r\n    .description-grid {\r\n        grid-template-columns: auto;\r\n    }\r\n  }\r\n\r\n.description-grid-items {\r\n padding :30px;\r\n text-align: center;\r\n color: rgba(63, 171, 228, 1);\r\n background-color: #ffff;\r\n}\r\n\r\n.description-grid-items>h6 {\r\n margin-top: 1rem;\r\n text-align: center\r\n}\r\n\r\n.icon {\r\n    display: block;\r\n    width: 32px;\r\n    height: 32px;\r\n    margin: auto;\r\n    background: url('lifeline-in-a-heart-outline.png');\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL3doeS1iZXN0L3doeS1iZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksZ0NBQWdDO0lBQ3BDO0VBQ0Y7O0FBQ0E7SUFDRTtRQUNJLDJCQUEyQjtJQUMvQjtFQUNGOztBQUNGO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQiw0QkFBNEI7Q0FDNUIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCO0FBQ0Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0RBQWtFO0FBQ3RFIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL3doeS1iZXN0L3doeS1iZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZDQyZjU7XHJcbiAgXHJcbn1cclxuXHJcbi5odW1hbi1pbWFnZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW1cclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICAgIC8qIHNob3VsZCBiZSByZXBsYWNlZCB3aXRoIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJiMGY1O1xyXG59XHJcbi5kZXNjcmlwdGlvbi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjb2xvcjogI2ZmZmZcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLWNvbnRlbnQ+aDUge1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICBncmlkLWdhcDogNTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5kZXNjcmlwdGlvbi1ncmlkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xyXG4gICAgLmRlc2NyaXB0aW9uLWdyaWQge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgIH1cclxuICB9XHJcbi5kZXNjcmlwdGlvbi1ncmlkLWl0ZW1zIHtcclxuIHBhZGRpbmcgOjMwcHg7XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBjb2xvcjogcmdiYSg2MywgMTcxLCAyMjgsIDEpO1xyXG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1ncmlkLWl0ZW1zPmg2IHtcclxuIG1hcmdpbi10b3A6IDFyZW07XHJcbiB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2xpZmVsaW5lLWluLWEtaGVhcnQtb3V0bGluZS5wbmcnKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home-page/why-best/why-best.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home-page/why-best/why-best.component.ts ***!
  \**********************************************************/
/*! exports provided: WhyBestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyBestComponent", function() { return WhyBestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WhyBestComponent = class WhyBestComponent {
    constructor() { }
    ngOnInit() {
    }
};
WhyBestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-why-best',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./why-best.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/why-best/why-best.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./why-best.component.css */ "./src/app/home-page/why-best/why-best.component.css")).default]
    })
], WhyBestComponent);



/***/ })

}]);
//# sourceMappingURL=src-app-home-page-home-page-module-es2015.js.map