import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public productoService: ProductosService ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {

    const newLocal = 'termino';
    this.route.params
      .subscribe( params => {

        // tslint:disable-next-line: no-string-literal
        console.log(params['termino']);
        // tslint:disable-next-line: no-string-literal
        this.productoService.buscarProducto( params[newLocal] );

      });

  }

}
