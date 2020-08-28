"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InfoPaginaService = void 0;
var core_1 = require("@angular/core");
var InfoPaginaService = /** @class */ (function () {
    function InfoPaginaService(http) {
        this.http = http;
        this.info = {};
        this.cargada = false;
        this.equipo = [];
        console.log('Servicio de Pagina');
        this.cargarInfo();
        this.cargarEquipo();
    }
    // tslint:disable-next-line: typedef
    InfoPaginaService.prototype.cargarInfo = function () {
        var _this = this;
        this.http.get('assets/data/data-pagina.json')
            .subscribe(function (resp) {
            _this.cargada = true;
            _this.info = resp;
            // console.log(resp); funciona
        });
    };
    // tslint:disable-next-line: typedef
    InfoPaginaService.prototype.cargarEquipo = function () {
        var _this = this;
        this.http.get('https://angular-html-eb586.firebaseio.com/equipo.json')
            // tslint:disable-next-line: align
            // tslint:disable-next-line: deprecation
            .subscribe(function (resp) {
            _this.equipo = resp;
            // console.log(resp);
        });
    };
    InfoPaginaService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], InfoPaginaService);
    return InfoPaginaService;
}());
exports.InfoPaginaService = InfoPaginaService;
