import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oculto'
})
export class OcultoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let resultado = value;
    for (let palabra of args) {
      let regexp = new RegExp(palabra, 'gi');
      resultado = resultado.replace(regexp, '*****');
    } return resultado;
  }

}
