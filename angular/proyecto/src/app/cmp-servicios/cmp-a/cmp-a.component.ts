import { Component, OnInit } from '@angular/core';
import { DatosService} from '../datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css'], 

})
export class CmpAComponent implements OnInit {
datos=[];
  constructor( private datosService : DatosService) { }

  ngOnInit() {
    this.datos = this.datosService.getDatos();
  }
 guardar(dato){
   this.datosService.guardarDatos(dato);

 }
 enviar(dato){
  this.datosService.emiteDatos(dato);

}
}
