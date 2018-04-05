"use strict";
exports.__esModule = true;
var EstadoCoche;
(function (EstadoCoche) {
    EstadoCoche[EstadoCoche["BUENO"] = 0] = "BUENO";
    EstadoCoche[EstadoCoche["MALO"] = 1] = "MALO";
})(EstadoCoche || (EstadoCoche = {}));
var Coche = /** @class */ (function () {
    function Coche(foto, marca, modelo, fecha_venta, fecha_modelo, precio, estado) {
    }
    Coche.prototype.getPVP = function () { return this.precio * 1.21; };
    return Coche;
}());
exports.Coche = Coche;
