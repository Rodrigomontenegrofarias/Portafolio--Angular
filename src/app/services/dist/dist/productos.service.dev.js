"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.ProductosService = void 0;

var core_1 = require("@angular/core");

var ProductosService =
/** @class */
function () {
  var ProductosService =
  /*#__PURE__*/
  function () {
    function ProductosService(http) {
      _classCallCheck(this, ProductosService);

      this.http = http;
      this.cargando = true;
      this.productos = [];
      this.productosFiltrado = [];
      this.cargarProductos();
    } // tslint:disable-next-line: typedef


    _createClass(ProductosService, [{
      key: "cargarProductos",
      value: function cargarProductos() {
        var _this = this; // tslint:disable-next-line: no-shadowed-variable


        return new Promise(function (resolve, reject) {
          _this.http.get('https://angular-html-25cf9.firebaseio.com/productos_idx.json').subscribe(function (resp) {
            _this.productos = resp;
            _this.cargando = false;
            resolve();
          });
        });
      } // tslint:disable-next-line: typedef

    }, {
      key: "getProducto",
      value: function getProducto(id) {
        return this.http.get("https://angular-html-25cf9.firebaseio.com/productos/".concat(id, ".json"));
      } // tslint:disable-next-line: typedef

    }, {
      key: "buscarProducto",
      value: function buscarProducto(termino) {
        var _this = this;

        if (this.productos.length === 0) {
          // cargar productos
          this.cargarProductos().then(function () {
            // ejecutar después de tener los productos
            // Aplicar filtro
            _this.filtrarProductos(termino);
          });
        } else {
          // aplicar el filtro
          this.filtrarProductos(termino);
        }
      } // tslint:disable-next-line: typedef

    }, {
      key: "filtrarProductos",
      value: function filtrarProductos(termino) {
        var _this = this; // console.log(this.productos);


        this.productosFiltrado = [];
        termino = termino.toLocaleLowerCase();
        this.productos.forEach(function (prod) {
          var tituloLower = prod.titulo.toLocaleLowerCase();

          if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
            _this.productosFiltrado.push(prod);
          }
        });
      }
    }]);

    return ProductosService;
  }();

  ProductosService = __decorate([core_1.Injectable({
    providedIn: 'root'
  })], ProductosService);
  return ProductosService;
}();

exports.ProductosService = ProductosService;