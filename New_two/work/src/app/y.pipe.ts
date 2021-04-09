import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'y'
})
export class YPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.toString().toUpperCase();
  }

}
