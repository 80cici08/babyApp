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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/signup/signup.component */ "./src/app/views/user/signup/signup.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_record_record_list_record_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/record/record-list/record-list.component */ "./src/app/views/record/record-list/record-list.component.ts");
/* harmony import */ var _views_record_record_new_record_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/record/record-new/record-new.component */ "./src/app/views/record/record-new/record-new.component.ts");
/* harmony import */ var _views_record_record_edit_record_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/record/record-edit/record-edit.component */ "./src/app/views/record/record-edit/record-edit.component.ts");
/* harmony import */ var _views_info_babyinfo_babyinfo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/info/babyinfo/babyinfo.component */ "./src/app/views/info/babyinfo/babyinfo.component.ts");
/* harmony import */ var _views_user_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/user/admin/admin.component */ "./src/app/views/user/admin/admin.component.ts");
/* harmony import */ var _views_info_footprint_footprint_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/info/footprint/footprint.component */ "./src/app/views/info/footprint/footprint.component.ts");













var routes = [
    { path: '', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _views_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'profile', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'record', component: _views_record_record_list_record_list_component__WEBPACK_IMPORTED_MODULE_7__["RecordListComponent"] },
    { path: 'record/new', component: _views_record_record_new_record_new_component__WEBPACK_IMPORTED_MODULE_8__["RecordNewComponent"] },
    { path: 'record/:rid', component: _views_record_record_edit_record_edit_component__WEBPACK_IMPORTED_MODULE_9__["RecordEditComponent"] },
    { path: 'baby', component: _views_info_babyinfo_babyinfo_component__WEBPACK_IMPORTED_MODULE_10__["BabyinfoComponent"] },
    { path: 'footprint', component: _views_info_footprint_footprint_component__WEBPACK_IMPORTED_MODULE_12__["FootprintComponent"] },
    { path: 'admin', component: _views_user_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<agm-map [latitude]=\"lat\" [longitude]=\"lng\">-->\n  <!--<agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>-->\n<!--</agm-map>-->\n\n\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AppComponent = /** @class */ (function () {
    // lat: Number = 51.678418;
    // lng: Number = 7.809007;
    function AppComponent(_http) {
        this._http = _http;
        this.title = 'BabyApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/signup/signup.component */ "./src/app/views/user/signup/signup.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_record_record_list_record_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/record/record-list/record-list.component */ "./src/app/views/record/record-list/record-list.component.ts");
/* harmony import */ var _views_record_record_new_record_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/record/record-new/record-new.component */ "./src/app/views/record/record-new/record-new.component.ts");
/* harmony import */ var _views_record_record_edit_record_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/record/record-edit/record-edit.component */ "./src/app/views/record/record-edit/record-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/common/header/header.component */ "./src/app/views/common/header/header.component.ts");
/* harmony import */ var _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/common/footer/footer.component */ "./src/app/views/common/footer/footer.component.ts");
/* harmony import */ var _views_info_babyinfo_babyinfo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/info/babyinfo/babyinfo.component */ "./src/app/views/info/babyinfo/babyinfo.component.ts");
/* harmony import */ var _views_user_admin_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/user/admin/admin.component */ "./src/app/views/user/admin/admin.component.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _views_info_footprint_footprint_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/info/footprint/footprint.component */ "./src/app/views/info/footprint/footprint.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _views_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _views_record_record_list_record_list_component__WEBPACK_IMPORTED_MODULE_9__["RecordListComponent"],
                _views_record_record_new_record_new_component__WEBPACK_IMPORTED_MODULE_10__["RecordNewComponent"],
                _views_record_record_edit_record_edit_component__WEBPACK_IMPORTED_MODULE_11__["RecordEditComponent"],
                _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _views_info_babyinfo_babyinfo_component__WEBPACK_IMPORTED_MODULE_16__["BabyinfoComponent"],
                _views_user_admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"],
                _views_info_footprint_footprint_component__WEBPACK_IMPORTED_MODULE_19__["FootprintComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDaeHXUOXFH5oc2l0pqYOT2CeWsjUv_PSU'
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_18__["GooglePlaceModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/views/common/footer/footer.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/common/footer/footer.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbW1vbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/common/footer/footer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/common/footer/footer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<div class=\"navbar navbar-light cl-blue-navbar fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" routerLink=\"/profile\"><i class=\"fas fa-user fontawsome_icon\"></i></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/common/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/common/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/views/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/views/common/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/views/common/header/header.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/common/header/header.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/common/header/header.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/common/header/header.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<nav class=\"navbar mynav navbar-light navbar-expand-md\" style=\"background-color: #f8f9fa;\">\n  <div class=\"container\">\n    <div>\n      <button data-toggle=\"collapse\" class=\"navbar-toggler\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span\n        class=\"navbar-toggler-icon\"></span></button>\n    </div>\n      <div class=\"collapse navbar-collapse\" id=\"navcol-1\">\n        <ul class=\"nav navbar-nav clearfix\">\n          <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link active\" routerLink=\"/record\">Photo Album </a></li>\n          <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" routerLink=\"/baby\">Baby info </a></li>\n          <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" routerLink=\"/footprint\">Footprint </a></li>\n        </ul>\n      </div>\n    <div>\n      <a class=\"navbar-text ml-auto\" href=\"#\">Logout</a>\n    </div>\n  </div>\n\n</nav>\n"

/***/ }),

/***/ "./src/app/views/common/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/common/header/header.component.ts ***!
  \*********************************************************/
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
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/views/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/views/common/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/info/babyinfo/babyinfo.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/info/babyinfo/babyinfo.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2luZm8vYmFieWluZm8vYmFieWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/info/babyinfo/babyinfo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/info/babyinfo/babyinfo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<!--content-->\n<div class=\"container cl-container-padding\">\n  <div class=\"form-group form-inline\">\n    <label class=\"col-2\" for=\"babyname\">BabyName</label>\n    <input class=\"form-control ml-2\" type=\"text\" id=\"babyname\" placeholder=\"baby's name\">\n  </div>\n  <div class=\"form-group form-inline\">\n    <label class=\"col-2\">Gender</label>\n    <label class=\"ml-3\"><input type=\"radio\" name=\"gender\" checked> Boy</label>\n    <label class=\"ml-3\"><input type=\"radio\" name=\"gender\"> Girl</label>\n  </div>\n  <div class=\"form-group form-inline\">\n    <label class=\"col-2\" for=\"birthday\">Birthday</label>\n    <input class=\"form-control\" type=\"date\" id=\"birthday\">\n  </div>\n  <div class=\"form-group form-inline\">\n    <label class=\"col-2\" for=\"weight\">Weight(lb)</label>\n    <input class=\"form-control\" type=\"text\" id=\"weight\" placeholder=\"weight\">\n  </div>\n  <div class=\"form-group form-inline\">\n    <label class=\"col-2\" for=\"height\">Height(cm)</label>\n    <input class=\"form-control\" type=\"text\" id=\"height\" placeholder=\"height\">\n  </div>\n  <div class=\"form-group offset-md-2\">\n    <a class=\"btn btn-info\" href=\"website-list.html\">Save</a>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/views/info/babyinfo/babyinfo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/info/babyinfo/babyinfo.component.ts ***!
  \***********************************************************/
/*! exports provided: BabyinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BabyinfoComponent", function() { return BabyinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BabyinfoComponent = /** @class */ (function () {
    function BabyinfoComponent() {
    }
    BabyinfoComponent.prototype.ngOnInit = function () {
    };
    BabyinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-babyinfo',
            template: __webpack_require__(/*! ./babyinfo.component.html */ "./src/app/views/info/babyinfo/babyinfo.component.html"),
            styles: [__webpack_require__(/*! ./babyinfo.component.css */ "./src/app/views/info/babyinfo/babyinfo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BabyinfoComponent);
    return BabyinfoComponent;
}());



/***/ }),

/***/ "./src/app/views/info/footprint/footprint.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/info/footprint/footprint.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 600px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaW5mby9mb290cHJpbnQvZm9vdHByaW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9pbmZvL2Zvb3RwcmludC9mb290cHJpbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/info/footprint/footprint.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/info/footprint/footprint.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container cl-container-padding\">\n  <div class=\"form-group\">\n    <div>\n      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\">\n        <agm-marker [latitude]=\"47.5390978\" [longitude]=\"-112.02743450000001\"></agm-marker>\n        <agm-marker [latitude]=\"47.5390978\" [longitude]=\"-122.02743450000001\"></agm-marker>\n      </agm-map>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/views/info/footprint/footprint.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/info/footprint/footprint.component.ts ***!
  \*************************************************************/
/*! exports provided: FootprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FootprintComponent", function() { return FootprintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FootprintComponent = /** @class */ (function () {
    function FootprintComponent() {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (data) {
                _this.latitude = data.coords.latitude;
                _this.longitude = data.coords.longitude;
                console.log(data.coords);
            }, function (err) { return console.log(err); });
        }
    }
    FootprintComponent.prototype.ngOnInit = function () {
    };
    FootprintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footprint',
            template: __webpack_require__(/*! ./footprint.component.html */ "./src/app/views/info/footprint/footprint.component.html"),
            styles: [__webpack_require__(/*! ./footprint.component.css */ "./src/app/views/info/footprint/footprint.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FootprintComponent);
    return FootprintComponent;
}());



/***/ }),

/***/ "./src/app/views/record/record-edit/record-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/record/record-edit/record-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlY29yZC9yZWNvcmQtZWRpdC9yZWNvcmQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/record/record-edit/record-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/record/record-edit/record-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container cl-container-padding\">\n  <form>\n    <div class=\"form-group\" required>\n      <label for=\"image-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\">\n    </div>\n\n    <div class=\"form-group\" required>\n      <div>\n        <label>Type</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"value\" id=\"inlineRadio1\" [(ngModel)]=\"type\" value=\"Image\">\n        <label class=\"form-check-label\" for=\"inlineRadio1\">Image</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"value\" id=\"inlineRadio2\" [(ngModel)]=\"type\" value=\"Video\">\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Video</label>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder=\"URL\">\n    </div>\n    <div *ngIf=\"type=='Image'\" class=\"form-group\">\n      <label for=\"exampleInputFile\">Upload</label>\n      <div class=\"form-inline\">\n        <input type=\"file\" class=\"form-control\" id=\"exampleInputFile\">\n        <a class=\"btn btn-info ml-2\" href=\"#\">Upload Image</a>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Location</label>\n      <!--<input type=\"text\" class=\"form-control\" id=\"location\">-->\n      <div>\n        <input class=\"search form-control\" ngx-google-places-autocomplete  #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" (mapClick)=\"onChoseLocation($event)\">\n          <agm-marker *ngIf=\"locationChosen\" [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n        </agm-map>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"recordTime\">Record time or Upload time</label>\n      <input type=\"date\" class=\"form-control\" id=\"recordTime\">\n    </div>\n  </form>\n\n  <a class=\"btn btn-info mr-2\" href=\"widget-list.html\">Save</a>\n  <a class=\"btn btn-danger\" href=\"widget-list.html\">Delete</a>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/views/record/record-edit/record-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/record/record-edit/record-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: RecordEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordEditComponent", function() { return RecordEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecordEditComponent = /** @class */ (function () {
    function RecordEditComponent() {
    }
    RecordEditComponent.prototype.ngOnInit = function () {
    };
    RecordEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-record-edit',
            template: __webpack_require__(/*! ./record-edit.component.html */ "./src/app/views/record/record-edit/record-edit.component.html"),
            styles: [__webpack_require__(/*! ./record-edit.component.css */ "./src/app/views/record/record-edit/record-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecordEditComponent);
    return RecordEditComponent;
}());



/***/ }),

/***/ "./src/app/views/record/record-list/record-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/record/record-list/record-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jga-widget-tool {\n  position: absolute;\n  right: 15px;\n  background-color: white;\n  padding-right: 0.5rem;\n  padding-left: 5px;\n  padding-bottom: 5px;\n  border-bottom-left-radius: 8px;\n  opacity: 0.7;\n  z-index: 2;\n}\n\n\n.youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n\n\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcmVjb3JkL3JlY29yZC1saXN0L3JlY29yZC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLFdBQVc7Q0FDWjs7O0FBR0Q7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCLENBQUMsVUFBVTtFQUNsQyxVQUFVO0NBQ1g7OztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlY29yZC9yZWNvcmQtbGlzdC9yZWNvcmQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpnYS13aWRnZXQtdG9vbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gIG9wYWNpdHk6IDAuNztcbiAgei1pbmRleDogMjtcbn1cblxuXG4ueW91dHViZS13aWRnZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7IC8qIDE2OjkgKi9cbiAgaGVpZ2h0OiAwO1xufVxuXG4ueW91dHViZS13aWRnZXQgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/record/record-list/record-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/record/record-list/record-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!--添加按钮-->\n<div class=\"plus-box\"><a class=\"navbar-text ml-auto\" [routerLink]=\"['./','new']\"><i\n  class=\"fas fa-plus fontawsome_icon\"></i></a></div>\n\n<!--Content-->\n<div class=\"container cl-container-padding\">\n  <div>\n    <div class=\"jga-widget-tool float-right\">\n      <a [routerLink]=\"['./','123']\">\n        <span class=\"fas fa-cog\"> </span>\n      </a>\n    </div>\n\n    <div>\n      <img class=\"img-responsive img-rounded cl-widget-images\" src=\"http://lorempixel.com/400/200/\" width=\"100%\"/>\n    </div>\n    <!--<div class=\"babyimg\">-->\n    <!--&lt;!&ndash;<a class=\"edit-btn\" href=\"#\">Edit</a>&ndash;&gt;-->\n    <!--<a class=\"float-right\" [routerLink]=\"['./','123']\"><span class=\"fas fa-cog nudge-right-10px fontawsome_icon\"></span></a>-->\n\n    <!--<img align=\"middle\" class=\"img-responsive img-rounded cl-widget-images\"-->\n    <!--src=\"http://lorempixel.com/400/200/\">-->\n    <!--</div>-->\n\n    <small class=\"form-text\">by Mom，1 hour ago</small>\n    <small class=\"form-text float-right\"><i class=\"icon-location\"></i>Seattle</small>\n    <div><span><i class=\"icon-like fontawsome_icon\"></i>爷爷，奶奶赞了一个！</span></div>\n    <!--icon-likefill 是实心的红心-->\n    <!--评论区-->\n    <div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <strong>grandfather</strong>\n          <span class=\"float-right\">a few seconds ago</span>\n          <p>So gorgeous and remind me of the backyard of Hogwarts！<i class=\"icon-delete\" aria-hidden=\"true\"></i></p>\n        </div>\n        <div class=\"col-md-12\">\n          <strong>mother</strong>\n          <span class=\"float-right\">a few seconds ago</span>\n          <p>So gorgeous and remind me of the backyard of Hogwarts！<i class=\"icon-delete\" aria-hidden=\"true\"></i></p>\n        </div>\n      </div>\n      <div>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\">\n          <span class=\"input-group-btn col-6\">\n              <a class=\"float-right btn btn-primary btn-sm\" href=\"#\">Add Comment</a>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div>\n    <div class=\"jga-widget-tool float-right\">\n      <a [routerLink]=\"['./','123']\">\n        <span class=\"fas fa-cog\"> </span>\n      </a>\n    </div>\n    <div class=\"embed-responsive embed-responsive-16by9 youtube-widget\">\n      <iframe width=\"widget.width\" height=\"360\" src=\"https://www.youtube.com/embed/ZwKhufmMxko\"\n              frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n    <small class=\"form-text\">by Mom，1 hour ago</small>\n    <small class=\"form-text float-right\"><i class=\"icon-location\"></i>Seattle</small>\n    <div><span><i class=\"icon-like fontawsome_icon\"></i>爷爷，奶奶赞了一个！</span></div>\n    <!--icon-likefill 是实心的红心-->\n    <!--评论区-->\n    <div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <strong>grandfather</strong>\n          <span class=\"float-right\">a few seconds ago</span>\n          <p>So gorgeous and remind me of the backyard of Hogwarts！<i class=\"icon-delete\" aria-hidden=\"true\"></i></p>\n        </div>\n      </div>\n      <div>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\">\n          <span class=\"input-group-btn col-6\">\n              <a class=\"float-right btn btn-primary btn-sm\" href=\"#\">Add Comment</a>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"null-box\"></div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/views/record/record-list/record-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/record/record-list/record-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: RecordListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordListComponent", function() { return RecordListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecordListComponent = /** @class */ (function () {
    function RecordListComponent() {
    }
    RecordListComponent.prototype.ngOnInit = function () {
    };
    RecordListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-record-list',
            template: __webpack_require__(/*! ./record-list.component.html */ "./src/app/views/record/record-list/record-list.component.html"),
            styles: [__webpack_require__(/*! ./record-list.component.css */ "./src/app/views/record/record-list/record-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecordListComponent);
    return RecordListComponent;
}());



/***/ }),

/***/ "./src/app/views/record/record-new/record-new.component.css":
/*!******************************************************************!*\
  !*** ./src/app/views/record/record-new/record-new.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlY29yZC9yZWNvcmQtbmV3L3JlY29yZC1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/record/record-new/record-new.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/views/record/record-new/record-new.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"container cl-container-padding\">\n  <form>\n    <div class=\"form-group\" required>\n      <label for=\"image-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\">\n    </div>\n\n    <div class=\"form-group\" required>\n      <div>\n        <label>Type</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"value\" id=\"inlineRadio1\" [(ngModel)]=\"type\" value=\"Image\">\n        <label class=\"form-check-label\" for=\"inlineRadio1\">Image</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"value\" id=\"inlineRadio2\" [(ngModel)]=\"type\" value=\"Video\">\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Video</label>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder=\"URL\">\n    </div>\n    <div *ngIf=\"type=='Image'\" class=\"form-group\">\n      <label for=\"exampleInputFile\">Upload</label>\n      <div class=\"form-inline\">\n        <input type=\"file\" class=\"form-control\" id=\"exampleInputFile\">\n        <a class=\"btn btn-info ml-2\" href=\"#\">Upload Image</a>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Location</label>\n      <!--<input type=\"text\" class=\"form-control\" id=\"location\">-->\n      <div>\n        <input class=\"search form-control\" ngx-google-places-autocomplete  #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\"/>\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" (mapClick)=\"onChoseLocation($event)\">\n          <agm-marker *ngIf=\"locationChosen\" [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n        </agm-map>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"recordTime\">Record time or Upload time</label>\n      <input type=\"date\" class=\"form-control\" id=\"recordTime\">\n    </div>\n  </form>\n\n  <a class=\"btn btn-info mr-2\" href=\"widget-list.html\">Save</a>\n  <a class=\"btn btn-danger\" href=\"widget-list.html\">Delete</a>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/views/record/record-new/record-new.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/record/record-new/record-new.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecordNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordNewComponent", function() { return RecordNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_google_places_autocomplete_ngx_google_places_autocomplete_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive */ "./node_modules/ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");




var RecordNewComponent = /** @class */ (function () {
    function RecordNewComponent(mapsAPILoader, ngZone) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.type = 'Image';
        this.locationChosen = false;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (data) {
                _this.latitude = data.coords.latitude;
                _this.longitude = data.coords.longitude;
            }, function (err) { return console.log(err); });
        }
    }
    RecordNewComponent.prototype.ngOnInit = function () {
    };
    RecordNewComponent.prototype.onChoseLocation = function (event) {
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
        this.locationChosen = true;
    };
    RecordNewComponent.prototype.handleAddressChange = function (address) {
        console.log(address.geometry.location.lng());
        console.log(address.geometry.location.lat());
        console.log(address.geometry.location.toJSON());
        console.log(address.geometry.viewport.getNorthEast());
        this.longitude = address.geometry.location.lng();
        this.latitude = address.geometry.location.lat();
        this.locationChosen = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('places'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete_ngx_google_places_autocomplete_directive__WEBPACK_IMPORTED_MODULE_2__["GooglePlaceDirective"])
    ], RecordNewComponent.prototype, "places", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RecordNewComponent.prototype, "searchElement", void 0);
    RecordNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-record-new',
            template: __webpack_require__(/*! ./record-new.component.html */ "./src/app/views/record/record-new/record-new.component.html"),
            styles: [__webpack_require__(/*! ./record-new.component.css */ "./src/app/views/record/record-new/record-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], RecordNewComponent);
    return RecordNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bill-header {\n  font-size: 12px;\n  text-align: center;\n}\n\n.form-control:focus {\n  border-color: #25476a;\n  outline: 0;\n  box-shadow: none;\n}\n\n#trs-hd {\n  text-align: center;\n}\n\n.bill-header.cs {\n  background-color: rgba(37,71,106,0.56);\n  color: #fff;\n}\n\n.counter {\n  padding: 8px;\n  color: #ccc;\n}\n\n.results tr[visible='false'], .no-result {\n  display: none;\n}\n\n.results tr[visible='false'], .no-result {\n  display: none;\n}\n\n.counter {\n  padding: 8px;\n  color: #ccc;\n}\n\n.fa.fa-warning {\n  font-size: 18px;\n  color: #ff0000;\n}\n\n.warning.no-result {\n  text-align: center;\n}\n\n.search.form-control {\n  border-radius: 0px !important;\n}\n\n.search-table-col {\n  margin-top: 100px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdXNlci9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBRVgsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsdUNBQXVDO0VBQ3ZDLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLGFBQWE7RUFDYixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtDQUNiOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQ7RUFDRSw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy91c2VyL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmlsbC1oZWFkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzI1NDc2YTtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4jdHJzLWhkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmlsbC1oZWFkZXIuY3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LDcxLDEwNiwwLjU2KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb3VudGVyIHtcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogI2NjYztcbn1cblxuLnJlc3VsdHMgdHJbdmlzaWJsZT0nZmFsc2UnXSwgLm5vLXJlc3VsdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yZXN1bHRzIHRyW3Zpc2libGU9J2ZhbHNlJ10sIC5uby1yZXN1bHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY291bnRlciB7XG4gIHBhZGRpbmc6IDhweDtcbiAgY29sb3I6ICNjY2M7XG59XG5cbi5mYS5mYS13YXJuaW5nIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cblxuLndhcm5pbmcubm8tcmVzdWx0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VhcmNoLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLXRhYmxlLWNvbCB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/user/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 search-table-col\">\n  <!--search-->\n  <div class=\"form-group pull-right col-lg-4\"><input type=\"text\" class=\"search form-control\"\n                                                     placeholder=\"Search by typing here..\"></div>\n  <span class=\"counter pull-right\"></span>\n  <div class=\"table-responsive table-bordered table table-hover table-bordered results\">\n    <table class=\"table table-bordered table-hover\">\n      <thead class=\"bill-header cs\">\n      <tr class=\"d-flex\">\n        <th id=\"trs-hd\" class=\"col-1\">Username</th>\n        <th id=\"trs-hd\" class=\"col-1\">Relation to Baby</th>\n        <th id=\"trs-hd\" class=\"col-2\">Latest login time</th>\n        <th id=\"trs-hd\" class=\"col-2\">Uploads</th>\n        <th id=\"trs-hd\" class=\"col-2\">Comments</th>\n        <th id=\"trs-hd\" class=\"col-2\">ThumbUP</th>\n        <th id=\"trs-hd\" class=\"col-2\">Action</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr class=\"warning no-result\">\n        <td colspan=\"12\"><i class=\"fa fa-warning\"></i>&nbsp; No Result !!!</td>\n      </tr>\n      <tr class=\"d-flex\">\n        <td class=\"col-1\">Alice</td>\n        <td class=\"col-1\">Mom</td>\n        <td class=\"col-2\">2019-04-12 23:00:00</td>\n        <td class=\"col-2\">10</td>\n        <td class=\"col-2\">10</td>\n        <td class=\"col-2\">10</td>\n        <td class=\"col-2\">\n          <button class=\"btn btn-success\" style=\"margin-left: 5px;\" type=\"submit\"><i class=\"fa fa-check\"\n                                                                                     style=\"font-size: 15px;\"></i>\n          </button>\n          <button class=\"btn btn-danger\" style=\"margin-left: 5px;\" type=\"submit\"><i class=\"fa fa-trash\"\n                                                                                    style=\"font-size: 15px;\"></i>\n          </button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/views/user/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/views/user/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row mh-100vh\">\n    <div\n      class=\"col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0\"\n      id=\"login-block\">\n      <div class=\"m-auto w-lg-75 w-xl-50\">\n        <h2 class=\"text-info font-weight-light mb-5\"><i class=\"fa fa-smile-o\"></i>&nbsp;Lovely Baby</h2>\n        <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n          <div class=\"form-group\">\n            <label class=\"text-secondary\">Username</label>\n            <input class=\"form-control\" type=\"text\" name=\"username\" required ngModel\n                   [class.is-invalid]=\"!username.valid && username.touched\"\n                   #username=\"ngModel\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"text-secondary\">Password</label>\n            <input class=\"form-control\" type=\"password\" name=\"password\" required ngModel\n                   [class.is-invalid]=\"!password.valid && password.touched\"\n                   #password=\"ngModel\">\n          </div>\n\n          <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n\n          <button [disabled]=\"!f.valid\" class=\"btn btn-info mt-2\" type=\"submit\">Log In</button>\n        </form>\n        <p class=\"mt-3 mb-0\"><a class=\"text-info small\" routerLink=\"/signup\">Not a user? Sign up</a></p>\n      </div>\n    </div>\n    <div class=\"col-lg-6 d-flex align-items-end\" id=\"bg-block\"\n         style=\"background-image:url(&quot;assets/img/cute-wallpaper-flowerdrop-teen-titans-vs-young-justice.jpg&quot;);background-size:cover;background-position:center center;\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.router.navigate(['/profile']);
        // this.userService.login(this.username, this.password).subscribe((data: any) => {
        //   this.errorFlag = false;
        //   this.sharedService.user = data;
        //   this.router.navigate(['/profile']);
        // }, (error: any) => {
        //   this.errorFlag = true;
        //   console.log(error);
        // });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Header-->\n<div class=\"navbar mynav navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" routerLink=\"/record\"><i\n      class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <a class=\"navbar-brand\" href=\"javascript:void(0);\"> Profile</a>\n    <a class=\"navbar-text ml-auto\" href=\"#\">Logout</a>\n  </div>\n</div>\n\n<div class=\"container cl-container-padding\">\n  <form (ngSubmit)=\"onUpdateProfile()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input class=\"form-control\"\n             [class.is-invalid]=\"!username.valid && username.touched\"\n             type=\"text\"\n             id=\"username\"\n             name=\"username\"\n             placeholder=\"Username\"\n             [(ngModel)]=\"user.username\"\n             required #username=\"ngModel\">\n      <small class=\"form-text text-danger\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username.\n      </small>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input class=\"form-control\"\n             [class.is-invalid]=\"!email.valid && email.touched\"\n             type=\"email\"\n             id=\"email\"\n             name=\"email\"\n             placeholder=\"sample@google.com\"\n             [(ngModel)]=\"user.email\"\n             email #email=\"ngModel\">\n      <small class=\"form-text text-danger\" *ngIf=\"!email.valid && email.touched\">\n        Please enter correct email.\n      </small>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"firstname\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\"\n             class=\"form-control\"\n             type=\"text\"\n             id=\"firstname\"\n             name=\"firstname\"\n             placeholder=\"FirstName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"lastname\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\"\n             class=\"form-control\"\n             type=\"text\"\n             id=\"lastname\"\n             name=\"lastname\"\n             placeholder=\"LastName\">\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"mr-2\">Relation to Baby</label>\n      <p *ngIf=\"user.type!='others'\">Mom</p>\n      <input *ngIf=\"user.type=='others'\" [(ngModel)]=\"user.relation\"\n             class=\"form-control\"\n             type=\"text\"\n             name=\"relation\">\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-info\" type=\"submit\">Save</button>\n    </div>\n  </form>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/views/user/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/user/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/views/user/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row mh-100vh\">\n    <div\n      class=\"col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0\"\n      id=\"login-block\">\n      <div class=\"m-auto w-lg-75 w-xl-50\">\n        <h2 class=\"text-info font-weight-light mb-5\"><i class=\"fa fa-smile-o\"></i>&nbsp;Sign up</h2>\n        <form (ngSubmit)=\"signup()\" #f=\"ngForm\">\n          <div class=\"form-group\">\n            <label class=\"text-secondary\">Username</label>\n            <input class=\"form-control\" type=\"text\" name=\"username\" ngModel required\n                   [class.is-invalid]=\"!username.valid && username.touched\"\n                   #username=\"ngModel\">\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"text-secondary\">Password</label>\n            <input class=\"form-control\" type=\"password\" name=\"password\" ngModel required\n                   [class.is-invalid]=\"!password.valid && password.touched\"\n                   #password=\"ngModel\">\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"text-secondary\">Verify Password</label>\n            <input class=\"form-control\" type=\"password\" name=\"verifyPassword\" ngModel required\n                   [class.is-invalid]=\"!verifyPassword.valid && verifyPassword.touched\"\n                   #verifyPassword=\"ngModel\">\n          </div>\n\n          <div class=\"form-group\" required>\n            <div><label class=\"text-secondary\">Relation to Baby</label></div>\n            <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"value\" id=\"inlineRadio1\" [(ngModel)]=\"value\" value=\"mom\">\n              <label class=\"form-check-label\" for=\"inlineRadio1\">Mom</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"value\" id=\"inlineRadio2\" [(ngModel)]=\"value\" value=\"dad\">\n              <label class=\"form-check-label\" for=\"inlineRadio2\">Dad</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"value\" id=\"inlineRadio3\" [(ngModel)]=\"value\" value=\"other\">\n              <label class=\"form-check-label\" for=\"inlineRadio3\">Other&nbsp;&nbsp;</label>\n              <input class=\"form-control col-6\" type=\"text\" name=\"otherRelation\" [(ngModel)]=\"otherRelation\"\n                     [required]=\"value==='other'\">\n            </div>\n          </div>\n\n          <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n\n          <div class=\"form-group form-inline\">\n            <button [disabled]=\"!f.valid\" class=\"btn btn-info mt-2\" type=\"submit\">Sign up</button>\n            &nbsp;&nbsp;&nbsp;&nbsp;\n            <a class=\"btn btn-danger mt-2\" routerLink=\"/login\">Cancel</a>\n          </div>\n\n        </form>\n\n      </div>\n    </div>\n    <div class=\"col-lg-6 d-flex align-items-end\" id=\"bg-block\"\n         style=\"background-image:url(&quot;assets/img/cute-wallpaper-flowerdrop-teen-titans-vs-young-justice.jpg&quot;);background-size:cover;background-position:center center;\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/user/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var SignupComponent = /** @class */ (function () {
    function SignupComponent(router) {
        this.router = router;
        this.value = 'other'; // this is the default checked value for the radio buttons
        this.errorMsg = 'Passwords are not the same!';
        this.errorFlag = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.verifyPassword = this.loginForm.value.verifyPassword;
        // this.role = this.loginForm.value.role;
        console.log(this.value);
        if (this.value === 'other') {
            console.log(this.otherRelation);
        }
        if (this.password !== this.verifyPassword) {
            this.errorFlag = true;
        }
        else {
            this.errorFlag = false;
            // this.userService.register(this.user.username, this.user.password)
            //   .subscribe((data: any) => {
            //     this.router.navigate(['/profile']);
            //   }, (error: any) => {
            //     this.errorMsg = error._body;
            //   });
            this.router.navigate(['/profile']);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], SignupComponent.prototype, "loginForm", void 0);
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/views/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/views/user/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
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

module.exports = __webpack_require__(/*! /Users/victorwang/Documents/cs5610/finalProject/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map