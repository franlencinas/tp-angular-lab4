import { Component, OnInit } from '@angular/core';
import { InstrumentosService } from './../../services/instrumentos.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  instrumentos : any[]=[];

  constructor(private instrumentosService: InstrumentosService, private router: Router) { }

  ngOnInit(): void {
    this.instrumentos = this.instrumentosService.getInstrumentos();
  }
  verDetalle(id){
    this.router.navigate(['/detalle-producto/' + id]);
  }
}
