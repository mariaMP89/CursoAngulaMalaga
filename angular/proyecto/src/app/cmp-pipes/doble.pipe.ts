import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'doble'
 
})
export class DoblePipe implements PipeTransform {

   transform(value: any, args?: any): any {
     return value*2;
  }

  }
