import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  texto ='Feliz Navidad a todos!!';
  num=10;
  fecha=new Date(2017, 10, 29);
  mascotas=['gato','perro','conejo','pajaro'];
  constructor() { }

  ngOnInit() {
  }
addMascota(mascota){
  this.mascotas.push(mascota);
}
}
