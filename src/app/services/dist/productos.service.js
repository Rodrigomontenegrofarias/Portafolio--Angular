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
    class ProductosService {
        constructor(http) {
            this.http = http;
            this.cargando = true;
            this.productos = [];
            this.productosFiltrado = [];
            this.cargarProductos();
        }
        // tslint:disable-next-line: typedef
        cargarProductos() {
            var _this = this;
            // tslint:disable-next-line: no-shadowed-variable
            return new Promise(function (resolve, reject) {
                _this.http.get('https://angular-html-25cf9.firebaseio.com/productos_idx.json')
                    .subscribe(function (resp) {
                        _this.productos = resp;
                        _this.cargando = false;
                        resolve();
                    });
            });
        }
        // tslint:disable-next-line: typedef
        getProducto(id) {
            return this.http.get(`https://angular-html-25cf9.firebaseio.com/productos/${id}.json`);
        }
        // tslint:disable-next-line: typedef
        buscarProducto(termino) {
            var _this = this;
            if (this.productos.length === 0) {
                // cargar productos
                this.cargarProductos().then(function () {
                    // ejecutar después de tener los productos
                    // Aplicar filtro
                    _this.filtrarProductos(termino);
                });
            }
            else {
                // aplicar el filtro
                this.filtrarProductos(termino);
            }
        }
        // tslint:disable-next-line: typedef
        filtrarProductos(termino) {
            var _this = this;
            // console.log(this.productos);
            this.productosFiltrado = [];
            termino = termino.toLocaleLowerCase();
            this.productos.forEach(function (prod) {
                var tituloLower = prod.titulo.toLocaleLowerCase();
                if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
                    _this.productosFiltrado.push(prod);
                }
            });
        }
    }
    ProductosService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductosService);
    return ProductosService;
}());
exports.ProductosService = ProductosService;
