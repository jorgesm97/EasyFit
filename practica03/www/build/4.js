webpackJsonp([4],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearCuenta1PageModule", function() { return CrearCuenta1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crear_cuenta1__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CrearCuenta1PageModule = /** @class */ (function () {
    function CrearCuenta1PageModule() {
    }
    CrearCuenta1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__crear_cuenta1__["a" /* CrearCuenta1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__crear_cuenta1__["a" /* CrearCuenta1Page */]),
            ],
        })
    ], CrearCuenta1PageModule);
    return CrearCuenta1PageModule;
}());

//# sourceMappingURL=crear-cuenta1.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearCuenta1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CrearCuenta1Page = /** @class */ (function () {
    function CrearCuenta1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CrearCuenta1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearCuenta1Page');
    };
    CrearCuenta1Page.prototype.irPagSiguiente = function () {
        this.navCtrl.push('CrearCuenta2Page');
    };
    CrearCuenta1Page.prototype.irHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CrearCuenta1Page.prototype.irPagAnterior = function () {
        this.navCtrl.pop();
    };
    CrearCuenta1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crear-cuenta1',template:/*ion-inline-start:"C:\Users\Geetika\Documents\GitHub\EasyFit\practica03\src\pages\crear-cuenta1\crear-cuenta1.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      EasyFit\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-navbar>\n  <ion-title>Crear Cuenta</ion-title>\n</ion-navbar>\n\n<ion-content padding>\n  <button ion-button icon-only (click)="irHome()">\n    <ion-icon name="home"></ion-icon>\n  </button>\n  <button ion-button (click)="irPagAnterior()">\n    <ion-icon name=\'md-arrow-back\'></ion-icon>\n  </button>\n\n  <h1>Crear tu cuenta</h1>\n  <h5>Consigue una vida saludable</h5>\n  <hr/>\n  \n  <div>\n    <ion-item>\n      <ion-label>Usuario</ion-label>\n    </ion-item>\n    <input type="text" name="usuario">\n\n    <ion-item>\n      <ion-label>Contraseña</ion-label>\n    </ion-item>\n    <input type="password" name="contraseña">\n\n    <ion-item>\n      <ion-label>Telefono</ion-label>\n    </ion-item>\n    <input type="number" name="telefono">\n\n    <ion-item>\n      <ion-label>Email</ion-label>\n    </ion-item>\n    <input type="email" name="email">\n  </div>\n\n<button ion-button color="light" icon-left small (click)="irPagSiguiente()">\n  <ion-icon name="md-arrow-forward"></ion-icon>\n</button>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Geetika\Documents\GitHub\EasyFit\practica03\src\pages\crear-cuenta1\crear-cuenta1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CrearCuenta1Page);
    return CrearCuenta1Page;
}());

//# sourceMappingURL=crear-cuenta1.js.map

/***/ })

});
//# sourceMappingURL=4.js.map