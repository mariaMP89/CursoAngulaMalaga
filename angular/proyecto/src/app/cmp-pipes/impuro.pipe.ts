import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro', 
  pure:false
})
export class ImpuroPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let resultado=[];
    for( let item of value){
      if (item.match(`^.*${args}.*$`)){
        resultado.push(item);
  
      }
    }
    return resultado;
  }

}
