import { Component, OnInit } from '@angular/core';
import { DatosService} from '../datos.service';
@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css'], 

})
export class CmpBComponent implements OnInit {
datos=[];
datoRecibido='';
  constructor( private datosService : DatosService) { }

  ngOnInit() {
    this.datos = this.datosService.getDatos();
    this.datosService.emisor.subscribe((dato) => this.datoRecibido= dato );
  }
 guardar(dato){
   this.datosService.guardarDatos(dato);

 }
}
