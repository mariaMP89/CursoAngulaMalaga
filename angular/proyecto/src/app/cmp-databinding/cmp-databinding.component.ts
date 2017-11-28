import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cmp-databinding',
  templateUrl: './cmp-databinding.component.html',
  styleUrls: ['./cmp-databinding.component.css']
})
export class CmpDatabindingComponent implements OnInit {
  nombre='Maria';
  activo=false;

  @Input() num=5;

  @Output() miEvento = new EventEmitter<string>();
  constructor() { }
  
  ngOnInit() {
  }
  
  cambiarActivo(){
    this.activo = !this.activo;
    this.miEvento.emit(this.activo?'activo':'inactivo');
  }
}
