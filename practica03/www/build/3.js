webpackJsonp([3],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearCuenta2PageModule", function() { return CrearCuenta2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crear_cuenta2__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CrearCuenta2PageModule = /** @class */ (function () {
    function CrearCuenta2PageModule() {
    }
    CrearCuenta2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__crear_cuenta2__["a" /* CrearCuenta2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__crear_cuenta2__["a" /* CrearCuenta2Page */]),
            ],
        })
    ], CrearCuenta2PageModule);
    return CrearCuenta2PageModule;
}());

//# sourceMappingURL=crear-cuenta2.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearCuenta2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CrearCuenta2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CrearCuenta2Page = /** @class */ (function () {
    function CrearCuenta2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuario = navParams.get("usuario");
        this.contraseña = navParams.get("contraseña");
        this.telefono = navParams.get("telefono");
        this.email = navParams.get("email");
        console.log("second page " + this.usuario);
    }
    CrearCuenta2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearCuenta2Page');
    };
    // manda datos del input usuario a la siguente pagina
    CrearCuenta2Page.prototype.irPagSiguiente = function () {
        var nombre = document.getElementById("nombre").value;
        var apellidos = document.getElementById("apellidos").value;
        var fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
        console.log("sending 2 " + this.usuario);
        console.log("sending 2 " + this.nombre);
        this.navCtrl.push('PrincipalPage', { usuario: this.usuario, contraseña: this.contraseña,
            telefono: this.telefono, email: this.email, nombre: nombre,
            apellidos: apellidos, fecha_nacimiento: fecha_nacimiento });
    };
    CrearCuenta2Page.prototype.irHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CrearCuenta2Page.prototype.irPagAnterior = function () {
        this.navCtrl.pop();
    };
    CrearCuenta2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crear-cuenta2',template:/*ion-inline-start:"C:\Users\Geetika\Documents\GitHub\EasyFit\practica03\src\pages\crear-cuenta2\crear-cuenta2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      EasyFit\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-navbar>\n  <ion-title>Crear Cuenta</ion-title>\n</ion-navbar>\n\n<ion-content padding>\n  <button ion-button icon-only (click)="irHome()">\n    <ion-icon name="home"></ion-icon>\n  </button>\n  <button ion-button (click)="irPagAnterior()">\n    <ion-icon name=\'md-arrow-back\'></ion-icon>\n  </button>\n\n  <h1>Crear tu cuenta</h1>\n  <h5>Consigue una vida saludable</h5>\n  <hr/>\n\n  <div>\n    <ion-item>\n      <ion-label>Nombre</ion-label>\n    </ion-item>\n    <input type="text" id="nombre">\n\n    <ion-item>\n      <ion-label>Apellidos</ion-label>\n    </ion-item>\n    <input type="text" id="apellidos">\n\n    <ion-item>\n      <ion-label>Fecha de nacimiento</ion-label>\n    </ion-item>\n    <input type="date" id="fecha_nacimiento">\n\n    <ion-item>\n      <ion-label>Genero</ion-label>\n    </ion-item>\n    <input type="radio" name="genero" value="hombre">Hombre<br>\n    <input type="radio" name="genero" value="mujer">Mujer<br>\n    <input type="radio" name="genero" value="otro">Otro\n  </div>\n\n<button ion-button color="light" icon-left small (click)="irPagSiguiente()">\n  <ion-icon name="md-arrow-forward"></ion-icon>\n</button>  \n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Geetika\Documents\GitHub\EasyFit\practica03\src\pages\crear-cuenta2\crear-cuenta2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CrearCuenta2Page);
    return CrearCuenta2Page;
}());

//# sourceMappingURL=crear-cuenta2.js.map

/***/ })

});
//# sourceMappingURL=3.js.map