webpackJsonp(["main"],{

/***/ "./client/src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./client/src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./client/src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".manual-input {\n    text-align: center;\n    margin: 10px auto 10px auto;\n}\n\n.text-center {\n    text-align: center;\n}\n\n.loading {\n    color: white !important;\n    text-shadow: none !important;\n    min-height: 50px;\n    position: relative;\n}\n\n.loading:active,\n.loading:focus,\n.loading:hover {\n    cursor: default;\n    color: transparent;\n    outline: none !important\n}\n\n.loading:after {\n    content: '';\n    display: inline-block;\n    position: absolute;\n    background: transparent;\n    border: 2px solid #2196f3;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n    border-radius: 50%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    top: 50%;\n    left: 50%;\n    margin-top: -10px;\n    margin-left: -10px;\n    width: 20px;\n    height: 20px;\n    -webkit-animation: loading-animation 1s ease-in-out infinite;\n            animation: loading-animation 1s ease-in-out infinite\n}\n\n@-webkit-keyframes loading-animation {\n    0% {\n        -webkit-transform: rotate(0deg) scale(1);\n                transform: rotate(0deg) scale(1)\n    }\n    50% {\n        -webkit-transform: rotate(180deg) scale(1.1);\n                transform: rotate(180deg) scale(1.1)\n    }\n    to {\n        -webkit-transform: rotate(1turn) scale(1);\n                transform: rotate(1turn) scale(1)\n    }\n}\n\n@keyframes loading-animation {\n    0% {\n        -webkit-transform: rotate(0deg) scale(1);\n                transform: rotate(0deg) scale(1)\n    }\n    50% {\n        -webkit-transform: rotate(180deg) scale(1.1);\n                transform: rotate(180deg) scale(1.1)\n    }\n    to {\n        -webkit-transform: rotate(1turn) scale(1);\n                transform: rotate(1turn) scale(1)\n    }\n}\n\n.num-input {\n    width: 50px;\n}"

/***/ }),

/***/ "./client/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12 manual-input\">\n    View Top\n    <input type=\"number\"  class=\"num-input\" [(ngModel)]=\"count\"> Words\n    <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"loading\" (click)=\"getData()\"> Get'em </button>\n  </div>\n</div>\n<section class=\"content\" *ngIf=\"!init && !loading\">\n  <div class=\"col-md-12 manual-input\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">#</th>\n          <th class=\"text-center\">Word</th>\n          <th class=\"text-center\">Count</th>\n          <th class=\"text-center\">Pos</th>\n          <th class=\"text-center\">Syn</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let word of data, let i = index;\">\n          <td>{{ i+1 }}</td>\n          <td>{{word.word || 'NA'}}</td>\n          <td>{{word.count || 'NA' }}</td>\n          <td>{{word.pos || 'NA'}}</td>\n          <td>{{word.syn[0] || 'NA'}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n<div class=\"loading\" *ngIf=\"loading\"></div>"

/***/ }),

/***/ "./client/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dataservice__ = __webpack_require__("./client/src/app/dataservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(serv) {
        this.serv = serv;
        this.title = 'app';
    }
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.loading = true;
        if (this.count <= 0) {
            alert('Please enter a higher value than 0');
            return;
        }
        this.serv.getData(this.count)
            .subscribe(function (response) {
            console.log(response, 'resp');
            return _this.data = response.data;
        }, function (error) {
            alert('Something Went Wrong! Please Try Again.');
            console.log('Error :: ' + error);
        }, function () {
            _this.init = false;
            _this.loading = false;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.init = true;
        this.count = null;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./client/src/app/app.component.html"),
            styles: [__webpack_require__("./client/src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dataservice__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./client/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dataservice__ = __webpack_require__("./client/src/app/dataservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./client/src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__dataservice__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./client/src/app/dataservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function (count) {
        return this.http
            .get('http://127.0.0.1:3000/api/getwords/' + count)
            .map(function (response) {
            return response.json();
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./client/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./client/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./client/src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./client/src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./client/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map