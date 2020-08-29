"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ItemComponent = void 0;
var core_1 = require("@angular/core");
var ItemComponent = /** @class */ (function () {
    function ItemComponent(route, productoService) {
        this.route = route;
        this.productoService = productoService;
    }
    // tslint:disable-next-line: typedef
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (parametros) {
            // console.log(parametros['id']);
            // tslint:disable-next-line: no-string-literal
            _this.productoService.getProducto((parametros['id']))
                .subscribe(function (producto) {
                // tslint:disable-next-line: no-string-literal
                _this.id = parametros['id'];
                _this.producto = producto;
                console.log(producto);
            });
        });
    };
    ItemComponent = __decorate([
        core_1.Component({
            selector: 'app-item',
            templateUrl: './item.component.html',
            styleUrls: ['./item.component.css']
        })
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
