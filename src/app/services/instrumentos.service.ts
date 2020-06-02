import { Injectable } from '@angular/core';
import  *  as  data  from  'src/assets/datos/instrumentos.json';
@Injectable({
  providedIn: 'root'
})
export class InstrumentosService {
  
  constructor() { 
    console.log("Servicio Listo Para Usar");
  }
  instrumentosFile: any = (data as any).default; 

  public getInstrumentos() : any[]{
    console.log(this.instrumentosFile.instrumentos)
    return this.instrumentosFile.instrumentos;
  }

  public getInstrumentosById(id: string): any[]{
    for (const instrumento of this.instrumentosFile.instrumentos) {
      if (instrumento.id === id) {
        return instrumento;
      }
    }
  }
}
