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
/* harmony import */ var _views_record_record_edit_record_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/record/record-edit/record-edit.component */ "./src/app/views/record/record-edit/record-edit.component.ts");
/* harmony import */ var _views_info_babyinfo_babyinfo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/info/babyinfo/babyinfo.component */ "./src/app/views/info/babyinfo/babyinfo.component.ts");
/* harmony import */ var _views_user_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/user/admin/admin.component */ "./src/app/views/user/admin/admin.component.ts");
/* harmony import */ var _views_info_footprint_footprint_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/info/footprint/footprint.component */ "./src/app/views/info/footprint/footprint.component.ts");
/* harmony import */ var _views_info_babyinfo_babyinfo_edit_babyinfo_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/info/babyinfo/babyinfo-edit/babyinfo-edit.component */ "./src/app/views/info/babyinfo/babyinfo-edit/babyinfo-edit.component.ts");
/* harmony import */ var _views_info_babyinfo_babyinfo_new_babyinfo_new_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/info/babyinfo/babyinfo-new/babyinfo-new.component */ "./src/app/views/info/babyinfo/babyinfo-new/babyinfo-new.component.ts");














var routes = [
    { path: '', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'signup', component: _views_user_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'profile', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'record', component: _views_record_record_list_record_list_component__WEBPACK_IMPORTED_MODULE_7__["RecordListComponent"] },
    { path: 'record/:rid', component: _views_record_record_edit_record_edit_component__WEBPACK_IMPORTED_MODULE_8__["RecordEditComponent"] },
    { path: 'baby', component: _views_info_babyinfo_babyinfo_component__WEBPACK_IMPORTED_MODULE_9__["BabyinfoComponent"] },
    { path: 'baby/new', component: _views_info_babyinfo_babyinfo_new_babyinfo_new_component__WEBPACK_IMPORTED_MODULE_13__["BabyinfoNewComponent"] },
    { path: 'baby/:bid', component: _views_info_babyinfo_babyinfo_edit_babyinfo_edit_component__WEBPACK_IMPORTED_MODULE_12__["BabyinfoEditComponent"] },
    { path: 'footprint', component: _views_info_footprint_footprint_component__WEBPACK_IMPORTED_MODULE_11__["FootprintComponent"] },
    { path: 'admin', component: _views_user_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
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
/* harmony import */ var _views_record_record_edit_record_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/record/record-edit/record-edit.component */ "./src/app/views/record/record-edit/record-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/common/header/header.component */ "./src/app/views/common/header/header.component.ts");
/* harmony import */ var _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/common/footer/footer.component */ "./src/app/views/common/footer/footer.component.ts");
/* harmony import */ var _views_info_babyinfo_babyinfo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/info/babyinfo/babyinfo.component */ "./src/app/views/info/babyinfo/babyinfo.component.ts");
/* harmony import */ var _views_user_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/user/admin/admin.component */ "./src/app/views/user/admin/admin.component.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _views_info_footprint_footprint_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/info/footprint/footprint.component */ "./src/app/views/info/footprint/footprint.component.ts");
/* harmony import */ var _views_record_record_list_record_comment_record_comment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/record/record-list/record-comment/record-comment.component */ "./src/app/views/record/record-list/record-comment/record-comment.component.ts");
/* harmony import */ var _views_info_babyinfo_babyinfo_new_babyinfo_new_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/info/babyinfo/babyinfo-new/babyinfo-new.component */ "./src/app/views/info/babyinfo/babyinfo-new/babyinfo-new.component.ts");
/* harmony import */ var _views_info_babyinfo_babyinfo_edit_babyinfo_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/info/babyinfo/babyinfo-edit/babyinfo-edit.component */ "./src/app/views/info/babyinfo/babyinfo-edit/babyinfo-edit.component.ts");






















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
                _views_record_record_edit_record_edit_component__WEBPACK_IMPORTED_MODULE_10__["RecordEditComponent"],
                _views_common_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _views_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _views_info_babyinfo_babyinfo_component__WEBPACK_IMPORTED_MODULE_15__["BabyinfoComponent"],
                _views_user_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
                _views_info_footprint_footprint_component__WEBPACK_IMPORTED_MODULE_18__["FootprintComponent"],
                _views_record_record_list_record_comment_record_comment_component__WEBPACK_IMPORTED_MODULE_19__["RecordCommentComponent"],
                _views_info_babyinfo_babyinfo_new_babyinfo_new_component__WEBPACK_IMPORTED_MODULE_20__["BabyinfoNewComponent"],
                _views_info_babyinfo_babyinfo_edit_babyinfo_edit_component__WEBPACK_IMPORTED_MODULE_21__["BabyinfoEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDaeHXUOXFH5oc2l0pqYOT2CeWsjUv_PSU'
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17__["GooglePlaceModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = null;
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UserService = /** @class */ (function () {
    function UserService(_http, _sharedService, _router) {
        this._http = _http;
        this._sharedService = _sharedService;
        this._router = _router;
        this.options = {
            withCredentials: false
        };
        // the http REST call urls
        this._findUserByIdUrl = '/api/user/';
        this._findUserByUsernameUrl = '/api/user?username=';
        this._findUserByCredentialsUrl = '/api/user?username=';
        this._updateUserUrl = '/api/user/';
        this._deleteUserUrl = '/api/user/';
        this._createUserUrl = '/api/user';
        this._uploadUrl = '/api/upload';
        this._loginUrl = '/api/login';
        this._logoutUrl = '/api/logout';
        this._registerUrl = '/api/register';
        this._loggedinUrl = '/api/loggedin';
    }
    // login service function
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        var body = {
            username: username,
            password: password
        };
        return this._http.post(this._loginUrl, body, this.options);
    };
    // logout service function
    UserService.prototype.logout = function () {
        console.log('Logging out...');
        this.options.withCredentials = false;
        return this._http.post(this._logoutUrl, '', this.options);
    };
    // register new user service function
    UserService.prototype.register = function (username, password, role, roleName) {
        this.options.withCredentials = true;
        var newUser = {
            username: username,
            password: password,
            email: '',
            role: role,
            roleName: roleName,
            lastLogin: new Date().toLocaleString()
        };
        return this._http.post(this._registerUrl, newUser, this.options);
    };
    // loggedIn function to store the currently logged user in SharedService
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this._http.get(this._loggedinUrl, this.options).map(function (res) {
            var user = JSON.stringify(res);
            if (user !== '0') {
                _this._sharedService.user = JSON.parse(user);
                return true;
            }
            else {
                _this._router.navigate(['login']);
                return false;
            }
        });
    };
    // the http call on CRUD services
    UserService.prototype.createUser = function (user) {
        var new_user = {
            username: user.username,
            password: user.password,
            email: '',
            role: user.role,
            roleName: user.roleName,
            lastLogin: new Date().toLocaleString()
        };
        return this._http.post(this._createUserUrl, new_user);
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this._findUserByIdUrl + userId);
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this._findUserByUsernameUrl + username);
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this._findUserByCredentialsUrl + username + '&password=' + password);
    };
    UserService.prototype.updateUser = function (userId, user) {
        console.log('Updated the user to: ' + JSON.stringify(user));
        return this._http.put(this._updateUserUrl + userId, user);
    };
    UserService.prototype.deleteUser = function (userId) {
        console.log('Deleting the user with Id: ' + userId);
        this.options.withCredentials = false;
        return this._http.delete(this._deleteUserUrl + userId, this.options);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserService);
    return UserService;
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

module.exports = "<!--Header-->\n<nav class=\"navbar mynav navbar-light navbar-expand-md\" style=\"background-color: #f8f9fa;\">\n  <div class=\"container\">\n    <div>\n      <button data-toggle=\"collapse\" class=\"navbar-toggler\" data-target=\"#navcol-1\"><span class=\"sr-only\">Toggle navigation</span><span\n        class=\"navbar-toggler-icon\"></span></button>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"navcol-1\">\n      <ul class=\"nav navbar-nav clearfix\">\n        <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" [routerLink]=\"['/record']\" routerLinkActive=\"active\">Photo Album </a></li>\n        <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" [routerLink]=\"['/baby']\" routerLinkActive=\"active\">Baby Info </a></li>\n        <li class=\"nav-item\" role=\"presentation\"><a class=\"nav-link\" [routerLink]=\"['/footprint']\" routerLinkActive=\"active\">Footprint </a></li>\n      </ul>\n    </div>\n    <div>\n      <a class=\"navbar-text ml-auto\" href=\"javscript:void();\" (click)=\"logout()\">Logout</a>\n      <!-- <a class=\"navbar-text ml-auto\" href=\"#\"><i class=\"fas fa-plus fontawsome_icon\"></i></a> -->\n    </div>\n  </div>\n</nav>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        // TODO
        this.router.navigate(['/']);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/views/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/views/common/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/info/babyinfo/babyinfo-edit/babyinfo-edit.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/views/info/babyinfo/babyinfo-edit/babyinfo-edit.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2luZm8vYmFieWluZm8vYmFieWluZm8tZWRpdC9iYWJ5aW5mby1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/info/babyinfo/babyinfo-edit/babyinfo-edit.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/info/babyinfo/babyinfo-edit/babyinfo-edit.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<!--content-->\n<div class=\"container cl-container-padding\">\n  <form (ngSubmit)=\"onEditBabyInfo()\" #f=\"ngForm\">\n    <div class=\"form-group form-inline\">\n      <label class=\"col-2\">BabyName</label>\n      <input class=\"form-control ml-2\" type=\"text\" name=\"name\" placeholder=\"baby's name\"\n             [(ngModel)]=\"baby.name\" required\n             [class.is-invalid]=\"!bname.valid && bname.touched\" #bname=\"ngModel\">\n      <small class=\"form-text text-danger\" *ngIf=\"!bname.valid && bname.touched\">\n        &nbsp;Please enter baby name.\n      </small>\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"col-2\">Gender</label>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"inlineRadio1\" [(ngModel)]=\"baby.gender\" value=\"Boy\">\n        <label class=\"form-check-label\" for=\"inlineRadio1\">Boy</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"inlineRadio2\" [(ngModel)]=\"baby.gender\" value=\"Girl\">\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Girl</label>\n      </div>\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"col-2\">Birthday</label>\n      <input class=\"form-control\" type=\"date\" name=\"birthday\" [(ngModel)]=\"baby.birthday\">\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"col-2\">Weight(lb)</label>\n      <input class=\"form-control\" type=\"text\" name=\"weight\" placeholder=\"weight\" [(ngModel)]=\"baby.weight\">\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"col-2\">Height(cm)</label>\n      <input class=\"form-control\" type=\"text\" name=\"height\" placeholder=\"height\" [(ngModel)]=\"baby.height\">\n    </div>\n    <div class=\"form-group offset-md-2\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-info\" type=\"submit\">Save</button>\n    </div>\n  </form>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/views/info/babyinfo/babyinfo-edit/babyinfo-edit.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/info/babyinfo/babyinfo-edit/babyinfo-edit.component.ts ***!
  \******************************************************************************/
/*! exports provided: BabyinfoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BabyinfoEditComponent", function() { return BabyinfoEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BabyinfoEditComponent = /** @class */ (function () {
    function BabyinfoEditComponent() {
        // TODO
        this.baby = { _id: '888', name: 'Mina', gender: 'Girl', birthday: '2019-01-01', weight: 20, height: 70 };
    }
    BabyinfoEditComponent.prototype.ngOnInit = function () {
    };
    BabyinfoEditComponent.prototype.onEditBabyInfo = function () {
        // TODO
        console.log('update baby');
        console.log(this.baby);
    };
    BabyinfoEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-babyinfo-edit',
            template: __webpack_require__(/*! ./babyinfo-edit.component.html */ "./src/app/views/info/babyinfo/babyinfo-edit/babyinfo-edit.component.html"),
            styles: [__webpack_require__(/*! ./babyinfo-edit.component.css */ "./src/app/views/info/babyinfo/babyinfo-edit/babyinfo-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BabyinfoEditComponent);
    return BabyinfoEditComponent;
}());



/***/ }),

/***/ "./src/app/views/info/babyinfo/babyinfo-new/babyinfo-new.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/views/info/babyinfo/babyinfo-new/babyinfo-new.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2luZm8vYmFieWluZm8vYmFieWluZm8tbmV3L2JhYnlpbmZvLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/info/babyinfo/babyinfo-new/babyinfo-new.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/info/babyinfo/babyinfo-new/babyinfo-new.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<!--content-->\n<div class=\"container cl-container-padding\">\n  <form (ngSubmit)=\"onCreateBabyInfo()\" #f=\"ngForm\">\n    <div class=\"form-group form-inline\">\n      <label class=\"col-2\">BabyName</label>\n      <input class=\"form-control ml-2\" type=\"text\" name=\"name\" placeholder=\"baby's name\"\n             [(ngModel)]=\"baby.name\" required\n             [class.is-invalid]=\"!bname.valid && bname.touched\" #bname=\"ngModel\">\n      <small class=\"form-text text-danger\" *ngIf=\"!bname.valid && bname.touched\">\n        &nbsp;Please enter baby name.\n      </small>\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"col-2\">Gender</label>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"inlineRadio1\" [(ngModel)]=\"baby.gender\" value=\"Boy\">\n        <label class=\"form-check-label\" for=\"inlineRadio1\">Boy</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"gender\" id=\"inlineRadio2\" [(ngModel)]=\"baby.gender\" value=\"Girl\">\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Girl</label>\n      </div>\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"col-2\">Birthday</label>\n      <input class=\"form-control\" type=\"date\" name=\"birthday\" [(ngModel)]=\"baby.birthday\">\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"col-2\">Weight(lb)</label>\n      <input class=\"form-control\" type=\"text\" name=\"weight\" placeholder=\"weight\" [(ngModel)]=\"baby.weight\">\n    </div>\n    <div class=\"form-group form-inline\">\n      <label class=\"col-2\">Height(cm)</label>\n      <input class=\"form-control\" type=\"text\" name=\"height\" placeholder=\"height\" [(ngModel)]=\"baby.height\">\n    </div>\n    <div class=\"form-group offset-md-2\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-info\" type=\"submit\">Save</button>\n    </div>\n  </form>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/views/info/babyinfo/babyinfo-new/babyinfo-new.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/info/babyinfo/babyinfo-new/babyinfo-new.component.ts ***!
  \****************************************************************************/
/*! exports provided: BabyinfoNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BabyinfoNewComponent", function() { return BabyinfoNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BabyinfoNewComponent = /** @class */ (function () {
    function BabyinfoNewComponent() {
        // TODO
        this.baby = { _id: '888', name: 'Mina', gender: 'Girl', birthday: '2019-01-01', weight: 20, height: 70 };
    }
    BabyinfoNewComponent.prototype.ngOnInit = function () {
    };
    BabyinfoNewComponent.prototype.onCreateBabyInfo = function () {
        console.log(this.baby);
    };
    BabyinfoNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-babyinfo-new',
            template: __webpack_require__(/*! ./babyinfo-new.component.html */ "./src/app/views/info/babyinfo/babyinfo-new/babyinfo-new.component.html"),
            styles: [__webpack_require__(/*! ./babyinfo-new.component.css */ "./src/app/views/info/babyinfo/babyinfo-new/babyinfo-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BabyinfoNewComponent);
    return BabyinfoNewComponent;
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

module.exports = "<app-header></app-header>\n<div class=\"col-md-12 search-table-col container cl-container-padding\">\n  <span class=\"counter pull-right\"></span>\n  <div class=\"form-group\">\n    <button class=\"btn btn-info\" [routerLink]=\"['/baby/new']\">Add Baby</button>\n  </div>\n  <div class=\"table-responsive table-bordered table table-hover results\">\n    <table class=\"table table-bordered table-hover\">\n      <thead class=\"bill-header cs\">\n      <tr class=\"d-flex\">\n        <th id=\"trs-hd\" class=\"col-2\">Baby's Name</th>\n        <th id=\"trs-hd\" class=\"col-2\">Gender</th>\n        <th id=\"trs-hd\" class=\"col-2\">Birthday</th>\n        <th id=\"trs-hd\" class=\"col-2\">Weight(lb)</th>\n        <th id=\"trs-hd\" class=\"col-2\">Height(cm)</th>\n        <th id=\"trs-hd\" class=\"col-2\">Action</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let baby of babys\" class=\"d-flex\">\n        <td class=\"col-2\">{{baby.name}}</td>\n        <td class=\"col-2\">{{baby.gender}}</td>\n        <td class=\"col-2\">{{baby.birthday}}</td>\n        <td class=\"col-2\">{{baby.weight}}</td>\n        <td class=\"col-2\">{{baby.height}}</td>\n        <td class=\"col-2\">\n          <button class=\"btn btn-success\" style=\"margin-left: 5px;\" type=\"submit\">\n            <i [routerLink]=\"['/baby', baby._id]\" class=\"fa fa-edit\" style=\"font-size: 15px;\"></i>\n          </button>\n          <button class=\"btn btn-danger\" style=\"margin-left: 5px;\" type=\"submit\">\n            <i (click)=\"onRemoveBaby()\" class=\"fa fa-trash\" style=\"font-size: 15px;\"></i>\n          </button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<app-footer></app-footer>\n"

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
        this.babys = [{ _id: '888', name: 'Mina', gender: 'Girl', birthday: '2019-01-01', weight: 20, height: 70 },
            { _id: '888', name: 'Mina', gender: 'Girl', birthday: '2019-01-01', weight: 20, height: 70 }];
    }
    BabyinfoComponent.prototype.ngOnInit = function () {
    };
    BabyinfoComponent.prototype.onRemoveBaby = function () {
        // TODO
        console.log('remove baby...');
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

module.exports = "<app-header></app-header>\n\n<div class=\"container cl-container-padding\">\n  <form (ngSubmit)=\"onEditRecord()\" #f=\"ngForm\">\n    <div class=\"form-group\" required>\n      <label for=\"image-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\" name=\"name\"\n             [(ngModel)]=\"name\"\n             required\n             [class.is-invalid]=\"!rname.valid && rname.touched\"\n             #rname=\"ngModel\">\n      <small class=\"form-text text-danger\" *ngIf=\"!rname.valid && rname.touched\">\n        Please enter name.\n      </small>\n    </div>\n\n    <div class=\"form-group\" required>\n      <div>\n        <label>Type</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"type\" id=\"inlineRadio1\" [(ngModel)]=\"type\" value=\"Image\">\n        <label class=\"form-check-label\" for=\"inlineRadio1\">Image</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"type\" id=\"inlineRadio2\" [(ngModel)]=\"type\" value=\"Video\">\n        <label class=\"form-check-label\" for=\"inlineRadio2\">Video</label>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder=\"URL\" name=\"url\" [(ngModel)]=\"url\">\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"type==='Image'\">\n      <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n        <label>Upload</label>\n        <div class=\"form-inline\">\n          <input name=\"myFile\" type=\"file\" class=\"form-control\"/>\n          <input name=\"widgetId\" value=\"{{recordId}}\" style=\"display: none\"/>\n          <input name=\"userId\" value=\"{{userId}}\" style=\"display: none\"/>\n          <button type=\"submit\" class=\"btn btn-info ml-2\">Upload Image</button>\n        </div>\n      </form>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Location</label>\n      <!--<input type=\"text\" class=\"form-control\" id=\"location\">-->\n      <div>\n        <input class=\"search form-control\" ngx-google-places-autocomplete #placesRef=\"ngx-places\"\n               (onAddressChange)=\"handleAddressChange($event)\"/>\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" (mapClick)=\"onChoseLocation($event)\">\n          <agm-marker *ngIf=\"locationChosen\" [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n        </agm-map>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"recordTime\">Record time or Upload time</label>\n      <input type=\"date\" class=\"form-control\" id=\"recordTime\" name=\"date\" [(ngModel)]=\"date\">\n    </div>\n    <button [disabled]=\"!f.valid\" class=\"btn btn-info mr-2\" type=\"submit\">Save</button>\n    <a class=\"btn btn-danger\" [routerLink]=\"['/record']\">Cancle</a>\n  </form>\n</div>\n\n<app-footer></app-footer>\n"

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
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





var RecordEditComponent = /** @class */ (function () {
    function RecordEditComponent(mapsAPILoader, ngZone) {
        var _this = this;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.userId = '123';
        this.recordId = '123';
        this.type = 'Image';
        this.date = new Date().toISOString().substr(0, 10);
        this.locationChosen = false;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (data) {
                _this.latitude = data.coords.latitude;
                _this.longitude = data.coords.longitude;
            }, function (err) { return console.log(err); });
        }
    }
    RecordEditComponent.prototype.ngOnInit = function () {
    };
    RecordEditComponent.prototype.onChoseLocation = function (event) {
        this.latitude = event.coords.lat;
        this.longitude = event.coords.lng;
        this.locationChosen = true;
    };
    RecordEditComponent.prototype.handleAddressChange = function (address) {
        console.log(address.geometry.location.lng());
        console.log(address.geometry.location.lat());
        console.log(address.geometry.location.toJSON());
        console.log(address.geometry.viewport.getNorthEast());
        this.longitude = address.geometry.location.lng();
        this.latitude = address.geometry.location.lat();
        this.locationChosen = true;
    };
    RecordEditComponent.prototype.onEditRecord = function () {
        console.log(this.name);
        console.log(this.url);
        console.log(this.type);
        console.log(this.latitude);
        console.log(this.date);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('places'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_2__["GooglePlaceDirective"])
    ], RecordEditComponent.prototype, "places", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RecordEditComponent.prototype, "searchElement", void 0);
    RecordEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-record-edit',
            template: __webpack_require__(/*! ./record-edit.component.html */ "./src/app/views/record/record-edit/record-edit.component.html"),
            styles: [__webpack_require__(/*! ./record-edit.component.css */ "./src/app/views/record/record-edit/record-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_3__["MapsAPILoader"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], RecordEditComponent);
    return RecordEditComponent;
}());



/***/ }),

/***/ "./src/app/views/record/record-list/record-comment/record-comment.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/record/record-list/record-comment/record-comment.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JlY29yZC9yZWNvcmQtbGlzdC9yZWNvcmQtY29tbWVudC9yZWNvcmQtY29tbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/record/record-list/record-comment/record-comment.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/record/record-list/record-comment/record-comment.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <strong>{{comment.username}}</strong>\n      <p>{{comment.text}}<i class=\"icon-delete\" aria-hidden=\"true\" (click)=\"onDeleteComment()\" style=\"cursor: pointer\"></i></p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/record/record-list/record-comment/record-comment.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/record/record-list/record-comment/record-comment.component.ts ***!
  \*************************************************************************************/
/*! exports provided: RecordCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordCommentComponent", function() { return RecordCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecordCommentComponent = /** @class */ (function () {
    function RecordCommentComponent() {
    }
    RecordCommentComponent.prototype.ngOnInit = function () {
    };
    RecordCommentComponent.prototype.onDeleteComment = function () {
        console.log('delete comment...');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecordCommentComponent.prototype, "comment", void 0);
    RecordCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-record-comment',
            template: __webpack_require__(/*! ./record-comment.component.html */ "./src/app/views/record/record-list/record-comment/record-comment.component.html"),
            styles: [__webpack_require__(/*! ./record-comment.component.css */ "./src/app/views/record/record-list/record-comment/record-comment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecordCommentComponent);
    return RecordCommentComponent;
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

module.exports = "<app-header></app-header>\n<!--添加按钮-->\n<!--<div class=\"plus-box\"><a class=\"navbar-text ml-auto\" [routerLink]=\"['./','new']\"><i-->\n  <!--class=\"fas fa-plus fontawsome_icon\"></i></a></div>-->\n\n<div class=\"plus-box navbar-text mr-auto\">\n  <button class=\"btn btn-info\" [routerLink]=\"['/record', '123']\">Add Record</button>\n</div>\n\n<!--Content-->\n<div class=\"container cl-container-padding\">\n  <div *ngFor=\"let record of records, let i = index\">\n    <!--config按钮-->\n    <div class=\"jga-widget-tool float-right\">\n      <a [routerLink]=\"['./',record._id]\">\n        <span class=\"fas fa-cog\"> </span>\n      </a>\n    </div>\n\n    <!--Image or Video-->\n    <div [ngSwitch]=\"record.type\">\n      <div *ngSwitchCase=\"'Image'\">\n        <img class=\"img-responsive img-rounded cl-widget-images\" [src]=\"record.url\" width=\"100%\"/>\n      </div>\n      <div *ngSwitchCase=\"'Video'\">\n        <div class=\"embed-responsive embed-responsive-16by9 youtube-widget\">\n          <iframe width=\"100%\" height=\"360\" [src]='sanitizer.bypassSecurityTrustResourceUrl(record.url)'\n                  frameborder=\"0\" allowfullscreen></iframe>\n        </div>\n      </div>\n    </div>\n\n    <!--点赞区-->\n    <div>\n      <a *ngIf=\"!record.thumbUps.includes('Mom')\" (click)=\"addThumbUp(i)\" class=\"icon-like fontawsome_icon\"></a>\n      <a *ngIf=\"record.thumbUps.includes('Mom')\" (click)=\"removeThumbUp(i)\" class=\"icon-likefill fontawsome_icon\"></a>\n      <span>{{record.thumbUps}} </span>\n      <span>赞了一个</span>\n    </div>\n\n    <!--评论区-->\n    <app-record-comment *ngFor=\"let comment of record.comments\" [comment]=\"comment\"></app-record-comment>\n    <!--添加评论-->\n    <div>\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\">\n        <span class=\"input-group-btn col-6\">\n              <button class=\"float-right btn btn-primary btn-sm\" (click)=\"onAddComment()\">Add Comment</button>\n          </span>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"null-box\"></div>\n<app-footer></app-footer>\n"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RecordListComponent = /** @class */ (function () {
    function RecordListComponent(router, sanitizer) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.records = [
            {
                _id: '123', name: 'baby1', type: 'Image', url: 'http://lorempixel.com/400/200/',
                latitude: -41, longitude: 40,
                comments: [{ _id: '012', username: 'Mom', text: 'So gorgeous and remind me of the backyard of Hogwarts！' },
                    { _id: '013', username: 'Grandma', text: 'So gorgeous and remind me of the backyard of Hogwarts！' }],
                thumbUps: ['Mom', 'Dad'],
                date: '2019-04-19'
            },
            {
                _id: '234', name: 'baby2', type: 'Video', url: 'https://www.youtube.com/embed/ZwKhufmMxko',
                latitude: -41, longitude: 40,
                comments: [{ _id: '012', username: 'Mom', text: 'So gorgeous and remind me of the backyard of Hogwarts！' },
                    { _id: '013', username: 'Grandma', text: 'So gorgeous and remind me of the backyard of Hogwarts！' }],
                thumbUps: ['Dad', 'Grandma'],
                date: '2019-04-19'
            },
        ];
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    RecordListComponent.prototype.ngOnInit = function () {
        console.log('init');
    };
    RecordListComponent.prototype.addThumbUp = function (recordIndex) {
        // console.log(this.records[recordIndex].thumbUps);
        this.records[recordIndex].thumbUps = ['Dad', 'Grandma', 'Mom'];
        // console.log(this.records[recordIndex].thumbUps);
        // this.router.navigate(['/record']);
    };
    RecordListComponent.prototype.removeThumbUp = function (recordIndex) {
        console.log(this.records[recordIndex].thumbUps);
        var index = this.records[recordIndex].thumbUps.indexOf('Mom');
        if (index !== -1) {
            this.records[recordIndex].thumbUps.splice(index, 1);
        }
        console.log(this.records[recordIndex].thumbUps);
        // this.router.navigate(['/record']);
    };
    RecordListComponent.prototype.onAddComment = function () {
        // TODO
        console.log("add comment");
    };
    RecordListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-record-list',
            template: __webpack_require__(/*! ./record-list.component.html */ "./src/app/views/record/record-list/record-list.component.html"),
            styles: [__webpack_require__(/*! ./record-list.component.css */ "./src/app/views/record/record-list/record-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], RecordListComponent);
    return RecordListComponent;
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

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text ml-auto\" href=\"/login\">Logout</a>\n  </div>\n</div>\n\n<!--content-->\n<div class=\"col-md-12 search-table-col\">\n  <!--search-->\n  <div class=\"form-group pull-right col-lg-4\"><input type=\"text\" class=\"search form-control\"\n                                                     placeholder=\"Search by typing here..\"></div>\n  <span class=\"counter pull-right\"></span>\n  <div class=\"table-responsive table-bordered table table-hover table-bordered results\">\n    <table class=\"table table-bordered table-hover\">\n      <thead class=\"bill-header cs\">\n      <tr class=\"d-flex\">\n        <th id=\"trs-hd\" class=\"col-2\">Username</th>\n        <th id=\"trs-hd\" class=\"col-2\">Relation to Baby</th>\n        <th id=\"trs-hd\" class=\"col-2\">Latest login time</th>\n        <th id=\"trs-hd\" class=\"col-2\">Uploads</th>\n        <th id=\"trs-hd\" class=\"col-2\">Comments</th>\n        <th id=\"trs-hd\" class=\"col-1\">ThumbUP</th>\n        <th id=\"trs-hd\" class=\"col-1\">Action</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr class=\"warning no-result\">\n        <td colspan=\"12\"><i class=\"fa fa-warning\"></i>&nbsp; No Result !!!</td>\n      </tr>\n      <tr *ngFor=\"let user of users\" class=\"d-flex\">\n        <td class=\"col-2\">{{user.username}}</td>\n        <td class=\"col-2\">{{user.roleName}}</td>\n        <td class=\"col-2\">{{user.username}}</td>\n        <td class=\"col-2\">{{user.username}}</td>\n        <td class=\"col-2\">{{user.username}}</td>\n        <td class=\"col-1\">{{user.username}}</td>\n        <td class=\"col-1\">\n          <button class=\"btn btn-danger\" style=\"margin-left: 5px;\" (click)=\"onDeleteUser(user._id)\"><i class=\"fa fa-trash\"\n                                                                                    style=\"font-size: 15px;\"></i>\n          </button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

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
        this.users = [{ _id: '123', username: 'Alice', role: 'Mom', roleName: 'Mom' },
            { _id: '123', username: 'Tom', role: 'Dad', roleName: 'Dad' }];
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.onDeleteUser = function (userId) {
        // TODO
        console.log('delete user...');
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

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row mh-100vh\">\n    <div\n      class=\"col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0\"\n      id=\"login-block\">\n      <div class=\"m-auto w-lg-75 w-xl-50\">\n        <h2 class=\"text-info font-weight-light mb-5\"><i class=\"fa fa-smile-o\"></i>&nbsp;Lovely Baby</h2>\n        <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n          <div class=\"form-group\">\n            <label class=\"text-secondary\">Username</label>\n            <input class=\"form-control\" type=\"text\" name=\"username\" required ngModel\n                   [class.is-invalid]=\"!username.valid && username.touched\"\n                   #username=\"ngModel\">\n            <small class=\"form-text text-danger\" *ngIf=\"!username.valid && username.touched\">\n              Please enter username.\n            </small>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"text-secondary\">Password</label>\n            <input class=\"form-control\" type=\"password\" name=\"password\" required ngModel\n                   [class.is-invalid]=\"!password.valid && password.touched\"\n                   #password=\"ngModel\">\n          </div>\n          <small class=\"form-text text-danger\" *ngIf=\"!password.valid && password.touched\">\n            Please enter password.\n          </small>\n\n          <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n\n          <button [disabled]=\"!f.valid\" class=\"btn btn-info mt-2\" type=\"submit\">Log In</button>\n        </form>\n        <p class=\"mt-3 mb-0\"><a class=\"text-info small\" routerLink=\"/signup\">Not a user? Sign up</a></p>\n      </div>\n    </div>\n    <div class=\"col-lg-6 d-flex align-items-end\" id=\"bg-block\"\n         style=\"background-image:url(&quot;assets/img/cute-wallpaper-flowerdrop-teen-titans-vs-young-justice.jpg&quot;);background-size:cover;background-position:center center;\">\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var user = this.userService.findUserByCredentials(this.username, this.password);
        if (!!user) {
            this.sharedService.user = user;
            this.router.navigate(['/record']);
        }
        else {
            this.errorFlag = true;
        }
        // this.router.navigate(['/profile']);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
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

module.exports = "<!--Header-->\n<div class=\"navbar navbar-light bg-light fixed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-text\" [routerLink]=\"['/record']\"><i\n      class=\"fas fa-angle-left fontawsome_icon\"></i></a>\n    <span class=\"navbar-brand\">&nbsp;Profile</span>\n    <a class=\"navbar-text ml-auto\" href=\"/login\">Logout</a>\n  </div>\n</div>\n\n<div class=\"container cl-container-padding\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n  <form (ngSubmit)=\"onUpdateProfile()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input class=\"form-control\"\n             [class.is-invalid]=\"!username.valid && username.touched\"\n             type=\"text\"\n             id=\"username\"\n             name=\"username\"\n             placeholder=\"Username\"\n             [(ngModel)]=\"user.username\"\n             required #username=\"ngModel\">\n      <small class=\"form-text text-danger\" *ngIf=\"!username.valid && username.touched\">\n        Please enter username.\n      </small>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input class=\"form-control\"\n             [class.is-invalid]=\"!email.valid && email.touched\"\n             type=\"email\"\n             id=\"email\"\n             name=\"email\"\n             placeholder=\"sample@google.com\"\n             [(ngModel)]=\"user.email\"\n             email #email=\"ngModel\">\n      <small class=\"form-text text-danger\" *ngIf=\"!email.valid && email.touched\">\n        Please enter correct email.\n      </small>\n    </div>\n\n    <div class=\"form-group form-inline\">\n      <label class=\"mr-2\">Relation to Baby: </label>\n      <label *ngIf=\"user.role!='other'\">{{user.roleName}}</label>\n      <input *ngIf=\"user.role=='other'\" [(ngModel)]=\"user.roleName\"\n             class=\"form-control\"\n             type=\"text\"\n             name=\"relation\" required>\n    </div>\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-info\" type=\"submit\">Save</button>\n      <a class=\"btn btn-success ml-2\" [routerLink]=\"['/record']\">Go to Baby's photo album</a>\n    </div>\n  </form>\n</div>\n\n<app-footer></app-footer>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRouter, sharedService, router) {
        this.userService = userService;
        this.activatedRouter = activatedRouter;
        this.sharedService = sharedService;
        this.router = router;
        this.errorMsg = 'Invalid input, please check!';
        this.errorFlag = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // TODO
        this.user = { _id: '123', username: 'Alice', role: 'Mom', roleName: 'Mom' };
        // this.user = this.sharedService.user;
    };
    ProfileComponent.prototype.onUpdateProfile = function () {
        if (!!this.profileForm.valid) {
            this.userService.updateUser(this.user._id, this.user);
            this.router.navigate(['/profile']);
        }
        else {
            this.errorFlag = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row mh-100vh\">\n    <div\n      class=\"col-10 col-sm-8 col-md-6 col-lg-6 offset-1 offset-sm-2 offset-md-3 offset-lg-0 align-self-center d-lg-flex align-items-lg-center align-self-lg-stretch bg-white p-5 rounded rounded-lg-0 my-5 my-lg-0\"\n      id=\"login-block\">\n      <div class=\"m-auto w-lg-75 w-xl-50\">\n        <h2 class=\"text-info font-weight-light mb-5\"><i class=\"fa fa-smile-o\"></i>&nbsp;Sign up</h2>\n        <form (ngSubmit)=\"signup()\" #f=\"ngForm\">\n          <div class=\"form-group\">\n            <label class=\"text-secondary\">Username</label>\n            <input class=\"form-control\" type=\"text\" name=\"username\" ngModel required\n                   [class.is-invalid]=\"!username.valid && username.touched\"\n                   #username=\"ngModel\">\n            <small class=\"form-text text-danger\" *ngIf=\"!username.valid && username.touched\">\n              Please enter username.\n            </small>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"text-secondary\">Password</label>\n            <input class=\"form-control\" type=\"password\" name=\"password\" ngModel required\n                   [class.is-invalid]=\"!password.valid && password.touched\"\n                   #password=\"ngModel\">\n            <small class=\"form-text text-danger\" *ngIf=\"!password.valid && password.touched\">\n              Please enter password.\n            </small>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"text-secondary\">Verify Password</label>\n            <input class=\"form-control\" type=\"password\" name=\"verifyPassword\" ngModel required\n                   [class.is-invalid]=\"!verifyPassword.valid && verifyPassword.touched\"\n                   #verifyPassword=\"ngModel\">\n            <small class=\"form-text text-danger\" *ngIf=\"!verifyPassword.valid && verifyPassword.touched\">\n              Please enter verify password.\n            </small>\n          </div>\n\n          <div class=\"form-group\" required>\n            <div><label class=\"text-secondary\">Relation to Baby</label></div>\n            <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"role\" id=\"inlineRadio1\" [(ngModel)]=\"role\" value=\"Mom\">\n              <label class=\"form-check-label\" for=\"inlineRadio1\">Mom</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"role\" id=\"inlineRadio2\" [(ngModel)]=\"role\" value=\"Dad\">\n              <label class=\"form-check-label\" for=\"inlineRadio2\">Dad</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"role\" id=\"inlineRadio3\" [(ngModel)]=\"role\" value=\"Other\">\n              <label class=\"form-check-label\" for=\"inlineRadio3\">Other&nbsp;&nbsp;</label>\n              <input class=\"form-control col-6\" type=\"text\" name=\"roleName\" [(ngModel)]=\"roleName\"\n                     [required]=\"role==='Other'\">\n            </div>\n          </div>\n\n          <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">{{ errorMsg }}</div>\n\n          <div class=\"form-group form-inline\">\n            <button [disabled]=\"!f.valid\" class=\"btn btn-info mt-2\" type=\"submit\">Sign up</button>\n            &nbsp;&nbsp;&nbsp;&nbsp;\n            <a class=\"btn btn-danger mt-2\" routerLink=\"/login\">Cancel</a>\n          </div>\n\n        </form>\n\n      </div>\n    </div>\n    <div class=\"col-lg-6 d-flex align-items-end\" id=\"bg-block\"\n         style=\"background-image:url(&quot;assets/img/cute-wallpaper-flowerdrop-teen-titans-vs-young-justice.jpg&quot;);background-size:cover;background-position:center center;\">\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");






var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.role = 'Other'; // this is the default checked value for the radio buttons
        this.errorMsg = 'Passwords are not the same!';
        this.errorFlag = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.verifyPassword = this.loginForm.value.verifyPassword;
        this.role = this.loginForm.value.role;
        if (this.role !== 'Other') {
            this.roleName = this.role;
        }
        if (this.password !== this.verifyPassword) {
            this.errorFlag = true;
        }
        else {
            this.errorFlag = false;
            this.user = {
                username: this.username,
                password: this.password,
                role: this.role,
                roleName: this.roleName
            };
            this.user = this.userService.createUser(this.user);
            // 这句最后要去掉，在Loggedin中实现
            // TODO
            this.sharedService.user = this.user;
            // this.userService.register(this.user.username, this.user.password)
            //   .subscribe((data: any) => {
            //     this.router.navigate(['/profile']);
            //   }, (error: any) => {
            //     this.errorMsg = error._body;
            //   });
            this.router.navigate(['/record']);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
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
    production: false,
    baseUrl: 'http://localhost:4200',
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