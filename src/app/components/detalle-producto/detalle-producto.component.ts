import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstrumentosService } from './../../services/instrumentos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private instrumentoService: InstrumentosService) { }
  instrumentoEncontrado : any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      if (data.id !== 0) {
        this.instrumentoEncontrado = this.instrumentoService.getInstrumentosById(data.id);
      }
    });
  }


}
