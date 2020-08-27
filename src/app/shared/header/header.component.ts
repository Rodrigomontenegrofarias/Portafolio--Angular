import { Component, OnInit } from '@angular/core';
import { infoPagina } from '../../interfaces/infoPagina.1';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line: no-shadowed-variable
  // tslint:disable-next-line: variable-name
  constructor(public _servicio: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
