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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/main/dashboard/dashboard.component */ "./src/components/main/dashboard/dashboard.component.ts");
/* harmony import */ var _components_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/auth-page/auth-page.component */ "./src/components/auth-page/auth-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/get-started', pathMatch: 'full' },
    { path: 'get-started', component: _components_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_3__["AuthPageComponent"] },
    { path: 'dashboard', component: _components_main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'main',
        component: _components_main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        children: [
            { path: 'dashboard', component: _components_main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
            { path: '', redirectTo: '/main/dashboard', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: '/get-started' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light\">\n    <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" *ngIf=\"!isLoggedIn\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"/home\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/features\">Features</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/contact\">Contact</a>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Dropdown\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n        </li> -->\n      </ul>\n      <!-- <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form> -->\n      <div>\n        <a class=\"btn btn-primary my-2 my-sm-0\" href=\"/get-started\">Get Started</a>\n      </div>\n    </div>\n  </nav>\n<div class=\"container p-5\">\n  <router-outlet></router-outlet>\n</div>\n<footer>\n\n</footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].app.name;
        this.isLoggedIn = _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"].isLoggedin;
        console.log('isLoggedIn', this.isLoggedIn);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/main/dashboard/dashboard.component */ "./src/components/main/dashboard/dashboard.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/login/login.component */ "./src/components/login/login.component.ts");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ "./node_modules/ng-otp-input/fesm5/ng-otp-input.js");
/* harmony import */ var angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-password-strength-meter */ "./node_modules/angular-password-strength-meter/fesm5/angular-password-strength-meter.js");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/signup/signup.component */ "./src/components/signup/signup.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/main/main.component */ "./src/components/main/main.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/auth.service */ "./src/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/auth-page/auth-page.component */ "./src/components/auth-page/auth-page.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/page-not-found/page-not-found.component */ "./src/components/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_main_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _components_auth_page_auth_page_component__WEBPACK_IMPORTED_MODULE_13__["AuthPageComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ng_otp_input__WEBPACK_IMPORTED_MODULE_7__["NgOtpInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_password_strength_meter__WEBPACK_IMPORTED_MODULE_8__["PasswordStrengthMeterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/auth-page/auth-page.component.html":
/*!***********************************************************!*\
  !*** ./src/components/auth-page/auth-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container white-bg\">\n  <ibss-login></ibss-login>\n  <div id=\"or\">OR</div>    \n  <ibss-signup></ibss-signup>\n</div>"

/***/ }),

/***/ "./src/components/auth-page/auth-page.component.scss":
/*!***********************************************************!*\
  !*** ./src/components/auth-page/auth-page.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ibss-auth-page .card-signin{border:0;border-radius:1rem;box-shadow:0 0.5rem 1rem 0 rgba(0,0,0,0.1)}ibss-auth-page .card-signin .card-title{margin-bottom:2rem;font-weight:300;font-size:1.5rem}ibss-auth-page .card-signin .card-body{padding:2rem}ibss-auth-page .form-signin{width:100%}ibss-auth-page .form-signin .btn{font-size:80%;border-radius:5rem;letter-spacing:.1rem;font-weight:bold;padding:1rem;transition:all 0.2s}ibss-auth-page .form-label-group{position:relative;margin-bottom:1rem}ibss-auth-page .form-label-group input{height:auto;border-radius:2rem}ibss-auth-page .form-label-group>input,ibss-auth-page .form-label-group>label{padding:var(--input-padding-y) var(--input-padding-x)}ibss-auth-page .form-label-group>label{position:absolute;top:0;left:0;display:block;width:100%;margin-bottom:0;line-height:1.5;color:#495057;border:1px solid transparent;border-radius:.25rem;transition:all .1s ease-in-out}ibss-auth-page .form-label-group input::-webkit-input-placeholder{color:transparent}ibss-auth-page .form-label-group input:-ms-input-placeholder{color:transparent}ibss-auth-page .form-label-group input::-ms-input-placeholder{color:transparent}ibss-auth-page .form-label-group input::-moz-placeholder{color:transparent}ibss-auth-page .form-label-group input::placeholder{color:transparent}ibss-auth-page .form-label-group input:not(:placeholder-shown){padding-top:calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));padding-bottom:calc(var(--input-padding-y) / 3)}ibss-auth-page .form-label-group input:not(:placeholder-shown) ~ label{padding-top:calc(var(--input-padding-y) / 3);padding-bottom:calc(var(--input-padding-y) / 3);font-size:12px;color:#777}ibss-auth-page .btn-google{color:white;background-color:#ea4335}ibss-auth-page .btn-facebook{color:white;background-color:#3b5998}@supports (-ms-ime-align: auto){ibss-auth-page .form-label-group>label{display:none}ibss-auth-page .form-label-group input::-ms-input-placeholder{color:#777}}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){ibss-auth-page .form-label-group>label{display:none}ibss-auth-page .form-label-group input:-ms-input-placeholder{color:#777}}\n"

/***/ }),

/***/ "./src/components/auth-page/auth-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/components/auth-page/auth-page.component.ts ***!
  \*********************************************************/
/*! exports provided: AuthPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageComponent", function() { return AuthPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthPageComponent = /** @class */ (function () {
    function AuthPageComponent() {
    }
    AuthPageComponent.prototype.ngOnInit = function () {
    };
    AuthPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ibss-auth-page',
            template: __webpack_require__(/*! ./auth-page.component.html */ "./src/components/auth-page/auth-page.component.html"),
            styles: [__webpack_require__(/*! ./auth-page.component.scss */ "./src/components/auth-page/auth-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthPageComponent);
    return AuthPageComponent;
}());



/***/ }),

/***/ "./src/components/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/components/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12 col-lg-12 mx-auto\">\n    <div class=\"card card-signin my-5\">\n      <h5 class=\"card-title text-center\">Already have an account?</h5>\n      <div class=\"card-body\">\n        <form class=\"form-signin\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-4 col-lg-5\">\n              <div class=\"form-label-group\">\n                <label for=\"inputEmail\">Email address</label>\n                <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n              </div>\n            </div>\n            <div class=\"col-sm-12 col-md-4 col-lg-5\">\n              <div class=\"form-label-group\">\n                <label for=\"inputPassword\">Password</label>\n                <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n              </div>\n            </div>\n            <div class=\"col-sm-12 col-md-4 col-lg-2\">\n              <label for=\"submit\">&nbsp;</label>\n              <button class=\"btn btn-primary btn-block text-uppercase\" type=\"submit\" (click)=\"onLogin()\">Login&nbsp;<i class=\"fas fa-sign-in-alt\"></i></button>\n              <a class=\"text-primary pwd-reset\" href=\"javascript:void(0)\" (click)=\"onForgotPwd()\">Forgot password?</a>\n            </div>\n          </div>\n        </form>  \n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Forgot Password -->\n<div class=\"modal fade\" id=\"forgotPasswordModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"forgotPasswordModalTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Forgot Password?</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <ng-container *ngIf=\"!canChangePassword\">\n          <ng-container *ngIf=\"!canEnterOTP\">\n            <div class=\"form-label-group\">\n              <label for=\"inputEmail\">Registered Email address</label>\n              <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus [(ngModel)]=\"registeredEmail\">\n            </div>\n            <br/>\n            <button class=\"btn btn-primary text-uppercase\" type=\"submit\" [disabled]=\"!registeredEmail || registeredEmail.trim() === ''\" (click)=\"onGetOPT()\">Get OTP</button>\n          </ng-container>\n          <ng-container *ngIf=\"canEnterOTP\">\n            <div class=\"row\">\n              <div class=\"col-12\">\n                <label for=\"inputEmail\">Enter OTP sent to {{registeredEmail}}</label>\n                <ng-otp-input #ngOtpInput (onInputChange)=\"onOtpChange($event)\" *ngIf=\"showOtpComponent\" [config]=\"config\"></ng-otp-input>\n                <span *ngIf=\"otp\" class=\"o-t-p\">Entered otp :-{{otp}}</span>\n              </div>\n            </div>  \n          </ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"canChangePassword\">\n          <div class=\"form-label-group\">\n            <label for=\"inputEmail\">New Password</label>\n            <input type=\"password\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus [(ngModel)]=\"password.new\">\n          </div>\n          <div class=\"form-label-group\">\n            <label for=\"inputEmail\">Confirm Password</label>\n            <input type=\"password\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus [(ngModel)]=\"password.confirm\">\n          </div>\n          <password-strength-meter [password]=\"password.new\"></password-strength-meter>\n          <br/>\n          <button class=\"btn btn-primary text-uppercase\" type=\"submit\" [disabled]=\"!registeredEmail || registeredEmail.trim() === ''\" (click)=\"onChangePassword()\">Change</button>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/components/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/components/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/config */ "./src/config.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, activatedRoute, authService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.registeredEmail = "";
        this.canEnterOTP = false;
        this.canChangePassword = false;
        this.password = {
            new: "",
            confirm: "",
        };
        this.showOtpComponent = true;
        this.config = {
            allowNumbersOnly: false,
            length: 5,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
                'width': '50px',
                'height': '50px'
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onForgotPwd = function () {
        $('#forgotPasswordModal').modal('show');
    };
    LoginComponent.prototype.onGetOPT = function () {
        this.canEnterOTP = true;
    };
    LoginComponent.prototype.onOtpChange = function (otp) {
        this.otp = otp;
        if (this.otp.length > 4) {
            this.canChangePassword = true;
        }
    };
    LoginComponent.prototype.setVal = function (val) {
        this.ngOtpInput.setValue(val);
    };
    LoginComponent.prototype.onChangePassword = function () {
        $('#forgotPasswordModal').modal('hide');
    };
    LoginComponent.prototype.onLogin = function () {
        console.log(this.activatedRoute);
        src_config__WEBPACK_IMPORTED_MODULE_2__["CONFIG"].isLoggedin = true;
        var username = "abc@gmail.com";
        var password = "Thameem@123";
        this.authService.login(username, password)
            .subscribe(function (res) {
            console.log('Login success', res);
        }, function (error) {
            console.log('Login failure', error);
        });
        //this.router.navigate(['/dashboard']);
    };
    LoginComponent.prototype.onSignup = function () {
        this.router.navigate(['/signup']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ngOtpInput', { read: false }),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "ngOtpInput", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ibss-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/components/login/login.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/components/main/dashboard/dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/components/main/dashboard/dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Welcome to IBSS App\n</p>\n"

/***/ }),

/***/ "./src/components/main/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/components/main/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/components/main/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/components/main/main.component.html":
/*!*************************************************!*\
  !*** ./src/components/main/main.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" id=\"mainApp\">\n  <router-outlet name='sub'></router-outlet>\n</div> -->\n"

/***/ }),

/***/ "./src/components/main/main.component.scss":
/*!*************************************************!*\
  !*** ./src/components/main/main.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{background:#ffffff}\n"

/***/ }),

/***/ "./src/components/main/main.component.ts":
/*!***********************************************!*\
  !*** ./src/components/main/main.component.ts ***!
  \***********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/components/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/components/page-not-found/page-not-found.component.html":
/*!*********************************************************************!*\
  !*** ./src/components/page-not-found/page-not-found.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/components/page-not-found/page-not-found.component.scss":
/*!*********************************************************************!*\
  !*** ./src/components/page-not-found/page-not-found.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/components/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/components/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/components/signup/signup.component.html":
/*!*****************************************************!*\
  !*** ./src/components/signup/signup.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 mx-auto\">\n    <div class=\"card card-signin my-5\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title text-center\">Create an Account</h5>\n        <div class=\"progress\" style=\"height: 3px;\" *ngIf=\"totalStep > 1\">\n          <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\"stepPercent\"  aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n        <br/>\n        <!-- Step -1 -->\n        <div id=\"Step1\" *ngIf=\"currentStep === 1\">\n          <div class=\"form-label-group\">\n            <label for=\"inputEmail\">First Name</label>\n            <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n          </div>\n          \n          <div class=\"form-label-group\">\n            <label for=\"inputEmail\">Last Name</label>\n            <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n          </div>\n          \n          <div class=\"form-label-group\">\n            <label for=\"inputEmail\">Email</label>\n            <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n          </div>\n\n          <div class=\"form-label-group\">\n            <label for=\"inputPassword\">Password</label>\n            <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n          </div>\n        </div>\n        <!-- Step - 2 -->\n        <div id=\"Step2\" *ngIf=\"currentStep === 2\">\n          Step - 2\n        </div>\n        <!-- Step - 3 -->\n        <div id=\"Step3\" *ngIf=\"currentStep === 3\">\n          Step - 3\n        </div>\n        <!-- Step - 4 -->\n        <div id=\"Step4\" *ngIf=\"currentStep === 4\">\n          Step - 4\n        </div>\n          \n        <div class=\"row text center\">\n          <div class=\"col-12 \">\n            <button class=\"btn btn-primary text-uppercase float-left\" type=\"button\" (click)=\"gotToStep('prev')\" *ngIf=\"currentStep > 1\"><i class=\"far fa-arrow-alt-circle-left\"></i>&nbsp;Previous</button>\n            <button class=\"btn btn-primary text-uppercase float-right\" type=\"button\" (click)=\"gotToStep('next')\" *ngIf=\"currentStep < totalStep\">Next&nbsp;<i class=\"far fa-arrow-alt-circle-right\"></i></button>\n            <button class=\"btn btn-primary text-uppercase float-right\" type=\"button\" (click)=\"onSignup()\" *ngIf=\"currentStep === totalStep\">Create</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/components/signup/signup.component.scss":
/*!*****************************************************!*\
  !*** ./src/components/signup/signup.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/components/signup/signup.component.ts":
/*!***************************************************!*\
  !*** ./src/components/signup/signup.component.ts ***!
  \***************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(router) {
        this.router = router;
        this.currentStep = 1;
        this.totalStep = 1;
        this.stepPercent = "25%";
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.gotToStep = function (action) {
        if (action === 'prev') {
            this.currentStep--;
        }
        else {
            this.currentStep++;
        }
        this.stepPercent = ((this.currentStep / this.totalStep) * 100) + "%";
    };
    SignupComponent.prototype.onSignup = function () {
        this.router.navigate(['/login']);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ibss-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/components/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
var CONFIG = /** @class */ (function () {
    function CONFIG() {
    }
    CONFIG.isLoggedin = false;
    CONFIG.app = {
        name: "Top-Secret",
        tag: "Expand yourself!!!"
    };
    return CONFIG;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/services/auth.service.ts":
/*!**************************************!*\
  !*** ./src/services/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this._loginUrl = "http://208.109.8.60:8081/oauth/token";
    }
    AuthService.prototype.login = function (username, password) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.append('Accept', 'application/x-www-form-urlencoded');
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers = headers.append('Authorization', 'Basic aW1wYWlyYml0OmltcGFpcmJpdEAyMDIw');
        headers = headers.append("X-HTTP-Method", "POST");
        // var body =  {
        //     "grant_type": "password",
        //     "username": username,
        //     "password": password
        //   };
        var formData = new FormData();
        formData.append("grant_type", "password");
        formData.append("username", username);
        formData.append("password", password);
        return this.http.post(this._loginUrl, formData, { headers: headers });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Lithesh\Impairbit\Products\top_secret\02_dev\top-secret\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map