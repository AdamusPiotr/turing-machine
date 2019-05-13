import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: string[], index: number): string {
    return Object.keys(value)[index];
  }

}
