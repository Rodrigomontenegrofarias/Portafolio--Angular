import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: infoPagina = {};
  cargada = false;
  equipo: any[] = [];
  constructor( private http: HttpClient) {
    console.log('Servicio de Pagina');
    this.cargarInfo();
    this.cargarEquipo();


  }
  // tslint:disable-next-line: typedef
  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: infoPagina ) => {
        this.cargada = true;
        this.info = resp;
       // console.log(resp); funciona
    });
  }
  // tslint:disable-next-line: typedef
  private cargarEquipo(){
    this.http.get('https://angular-html-eb586.firebaseio.com/equipo.json')
    // tslint:disable-next-line: align
    // tslint:disable-next-line: deprecation
    .subscribe((resp: any[]) => {

      this.equipo = resp;
     // console.log(resp);

    });
  }
}
