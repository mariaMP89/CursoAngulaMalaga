import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id:string;
  constructor(private activatedR: ActivatedRoute, private usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.activatedR.params.subscribe(
      (params) => this.id = params['id']
    );
  }
  activarUsuario(){
    this.usuarioService.usuarioActivado.next(this.id);
  }
}
