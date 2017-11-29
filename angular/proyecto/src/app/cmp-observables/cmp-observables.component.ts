import { Component, OnInit } from '@angular/core';
import { UsuarioService} from './usuario.service';
@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit {
  usuario1Activado= false;
  usuario2Activado= false;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarioService.usuarioActivado.subscribe(
      (id) => {
        if(id ==1){
          this.usuario1Activado=!this.usuario1Activado;
        }else if(id == 2){
          this.usuario2Activado=!this.usuario2Activado;
        }
      }
    )
  }

}
