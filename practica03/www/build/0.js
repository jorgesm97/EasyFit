webpackJsonp([0],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPageModule", function() { return PrincipalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrincipalPageModule = /** @class */ (function () {
    function PrincipalPageModule() {
    }
    PrincipalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__principal__["a" /* PrincipalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__principal__["a" /* PrincipalPage */]),
            ],
        })
    ], PrincipalPageModule);
    return PrincipalPageModule;
}());

//# sourceMappingURL=principal.module.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_cliente_model__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrincipalPage = /** @class */ (function () {
    function PrincipalPage(navCtrl, dbFirebase) {
        this.navCtrl = navCtrl;
        this.dbFirebase = dbFirebase;
    }
    // Esta página va a agregar usuarios usando el input
    PrincipalPage.prototype.addCliente = function () {
        var datoscliente = new __WEBPACK_IMPORTED_MODULE_4__models_cliente_model__["a" /* Cliente */]();
        // los datos vienen del input de usuario
        datoscliente.nombre = "Pepe";
        datoscliente.apellidos = "San Juan";
        this.dbFirebase.guardaCliente(datoscliente).then(function (res) {
            alert(datoscliente.id + " guardado en FB");
        });
    };
    PrincipalPage.prototype.updateCliente = function (id) {
        var datoscliente = new __WEBPACK_IMPORTED_MODULE_4__models_cliente_model__["a" /* Cliente */]();
        datoscliente.id = id;
        datoscliente.nombre = "Maria";
        datoscliente.apellidos = "de las mercedes";
        this.dbFirebase.guardaCliente(datoscliente);
    };
    PrincipalPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.dbFirebase.getClientes().subscribe(function (listaClientes) { _this.listaClientes = listaClientes; });
    };
    PrincipalPage.prototype.delCliente = function (id) {
        this.dbFirebase.delCliente(id);
    };
    PrincipalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrincipalPage');
    };
    PrincipalPage.prototype.irHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PrincipalPage.prototype.irPagAnterior = function () {
        this.navCtrl.pop();
    };
    PrincipalPage.prototype.irPagSiguienteEnt = function () {
        this.navCtrl.push('HomeEntrenadorPage');
    };
    PrincipalPage.prototype.irPagSiguienteDep = function () {
        this.navCtrl.push('HomeDeportistaPage');
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"C:\Users\Geetika\Documents\GitHub\EasyFit\practica03\src\pages\principal\principal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      EasyFit\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-navbar>\n  <ion-title>Crear Cuenta</ion-title>\n</ion-navbar>\n\n<ion-content padding>\n  <button ion-button icon-only (click)="irHome()">\n    <ion-icon name="home"></ion-icon>\n  </button>\n  <button ion-button (click)="irPagAnterior()">\n    <ion-icon name=\'md-arrow-back\'></ion-icon>\n  </button>\n\n  <ion-item>\n      <ion-label>¿Eres entrenador o deportista?</ion-label>\n  </ion-item>\n\n  <button ion-button (click)="addCliente()">\n    Entrenador\n  </button>\n  <br/>\n\n  <button ion-button (click)="addCliente()">\n      Deportista\n  </button>\n  <br/>\n\n  <button ion-button (click)="irPagSiguienteEnt()">\n    Acceder a tu cuenta (Entrenador)\n  </button>\n  <br/>\n\n  <button ion-button (click)="irPagSiguienteDep()">\n    Acceder a tu cuenta (Deportista)\n  </button>\n  <br/>\n\n  <h1>LISTADO DE CLIENTES:</h1>\n  <p *ngFor="let cliente of listaClientes ">\n  <button small ion-button (click)="delCliente([cliente.id])">-</button>\n  <button small ion-button (click)="updateCliente([cliente.id])">u</button>\n  {{cliente.nombre}} {{cliente.apellidos}}\n  </p>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Geetika\Documents\GitHub\EasyFit\practica03\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
    ], PrincipalPage);
    return PrincipalPage;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.id = "";
    }
    return Cliente;
}());

//# sourceMappingURL=cliente.model.js.map

/***/ })

});
//# sourceMappingURL=0.js.map