import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemcicio de Prueba';
  num1='20';
muestraActivo(dato){

  console.log(dato);
}
}
