import { LogService } from './log.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class DatosService {
datos: Array<string> = ['dato1','dato2'];
emisor= new EventEmitter<string>();
constructor(private logService: LogService){

}
getDatos(){
  return this.datos;
}
emiteDatos(dato){
this.emisor.emit(dato);
}
guardarDatos(nuevoDato){
 this.logService.escribirEnConsola('Se escribe un nuevo dato : ' + nuevoDato);
  this.datos.push(nuevoDato);

}
}
