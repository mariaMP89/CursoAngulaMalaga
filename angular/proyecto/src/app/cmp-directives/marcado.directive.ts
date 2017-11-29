import { Directive, HostListener,HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMarcado]'
})
export class MarcadoDirective {
 @Input('appMarcado') colorFondo='green';
 colorMarcado:string;
 colorInicial='white';
  constructor() { }
@HostListener('mouseenter') onMouseEnter(){
  this.colorMarcado =this.colorFondo;
}
@HostListener('mouseout') onMouseOut(){
  this.colorMarcado =this.colorInicial;
}
@HostBinding('style.backgroundColor') get getColor(){
  return this.colorMarcado;
}
}
