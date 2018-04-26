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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__ = __webpack_require__(106);
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
    function PrincipalPage(navCtrl, navParams, dbFirebase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbFirebase = dbFirebase;
        this.usuario = navParams.get("usuario");
        this.contraseña = navParams.get("contraseña");
        this.telefono = navParams.get("telefono");
        this.email = navParams.get("email");
        this.nombre = navParams.get("nombre");
        this.apellidos = navParams.get("apellidos");
        this.fecha_nacimiento = navParams.get("fecha_nacimiento");
        console.log(this.usuario);
        console.log(this.nombre);
    }
    // Estas funciones van a agregar usuarios usando el input 
    PrincipalPage.prototype.addClienteEnt = function () {
        this.tipo = "entrenador";
        var datoscliente = new __WEBPACK_IMPORTED_MODULE_4__models_cliente_model__["a" /* Cliente */]();
        // los datos vienen del input de usuario
        // hay que añadir genero
        datoscliente.nombre = this.nombre;
        datoscliente.usuario = this.usuario;
        datoscliente.contraseña = this.contraseña;
        datoscliente.apellidos = this.apellidos;
        datoscliente.email = this.email;
        datoscliente.telefono = this.telefono;
        datoscliente.fecha_nacimiento = this.fecha_nacimiento;
        datoscliente.tipo = this.tipo;
        this.dbFirebase.guardaCliente(datoscliente).then(function (res) {
            alert(datoscliente.nombre + " guardado en FB");
        });
    };
    PrincipalPage.prototype.addClienteDep = function () {
        this.tipo = "deportista";
        var datoscliente = new __WEBPACK_IMPORTED_MODULE_4__models_cliente_model__["a" /* Cliente */]();
        // los datos vienen del input de usuario
        // hay que añadir genero
        datoscliente.nombre = this.nombre;
        datoscliente.apellidos = this.apellidos;
        datoscliente.email = this.email;
        datoscliente.telefono = this.telefono;
        datoscliente.fecha_nacimiento = this.fecha_nacimiento;
        datoscliente.tipo = this.tipo;
        // se puede ver los datos guardados en firebase console -> database por el internet
        this.dbFirebase.guardaCliente(datoscliente).then(function (res) {
            alert(datoscliente.nombre + " guardado en FB");
        });
        this.irPagSiguiente();
    };
    PrincipalPage.prototype.irPagAnterior = function () {
        this.navCtrl.pop();
    };
    PrincipalPage.prototype.irPagSiguiente = function () {
        if (this.tipo == 'entrenador') {
            this.navCtrl.push('HomeEntrenadorPage');
        }
        if (this.tipo == 'deportista') {
            this.navCtrl.push('HomeDeportistaPage');
        }
        else {
            console.log('tipo del usuario no definida');
        }
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
    // No esta en uso
    PrincipalPage.prototype.updateCliente = function (id) {
        var datoscliente = new __WEBPACK_IMPORTED_MODULE_4__models_cliente_model__["a" /* Cliente */]();
        datoscliente.id = id;
        datoscliente.nombre = "Maria";
        datoscliente.apellidos = "de las mercedes";
        this.dbFirebase.guardaCliente(datoscliente);
    };
    PrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-principal',template:/*ion-inline-start:"C:\Users\Geetika\Documents\GitHub\EasyFit\practica03\src\pages\principal\principal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      EasyFit\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-navbar>\n  <ion-title>Crear Cuenta</ion-title>\n</ion-navbar>\n\n<ion-content padding>\n  <button ion-button icon-only (click)="irHome()">\n    <ion-icon name="home"></ion-icon>\n  </button>\n  <button ion-button (click)="irPagAnterior()">\n    <ion-icon name=\'md-arrow-back\'></ion-icon>\n  </button>\n\n  <ion-item>\n      <ion-label>¿Eres entrenador o deportista?</ion-label>\n  </ion-item>\n\n  <button id=\'entrenador\' ion-button (click)=\'addClienteEnt()\'>\n    Entrenador\n  </button>\n  <br/>\n\n  <button id=\'deportista\' ion-button (click)=\'addClienteDep()\'>\n    Deportista\n  </button>\n  <br/>\n\n<!-- NO ES NECESARIO el siguiente, se puede ver \n  los datos guardados en firebase console -> database por el internet -->\n<!--   <h1>LISTADO DE CLIENTES:</h1>\n  <p *ngFor="let cliente of listaClientes ">\n    <button small ion-button (click)="delCliente([cliente.id])">-</button>\n    nombre: {{cliente.nombre}} apellidos: {{cliente.apellidos}} telefono: {{cliente.telefono}} email: {{cliente.email}} fecha_nacimiento:\n    {{cliente.fecha_nacimiento}} tipo: {{cliente.tipo}}\n  </p> -->\n  \n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Geetika\Documents\GitHub\EasyFit\practica03\src\pages\principal\principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_db_firebase_db__["a" /* FirebaseDbProvider */]])
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