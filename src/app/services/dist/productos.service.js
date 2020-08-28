"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductosService = void 0;
var core_1 = require("@angular/core");
var ProductosService = /** @class */ (function () {
    function ProductosService(http) {
        this.http = http;
        this.cargando = true;
        this.productos = [];
        this.cargarProductos();
    }
    // tslint:disable-next-line: typedef
    ProductosService.prototype.cargarProductos = function () {
        var _this = this;
        this.http.get('https://angular-html-25cf9.firebaseio.com/productos_idx.json')
            .subscribe(function (resp) {
            console.log(resp);
            _this.productos = resp;
            _this.cargando = false;
        });
    };
    ProductosService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductosService);
    return ProductosService;
}());
exports.ProductosService = ProductosService;
