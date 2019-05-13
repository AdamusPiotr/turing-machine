import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Pipe({
  name: 'values',
  pure: false
})
export class ValuesPipe implements PipeTransform {
  transform(value: Record<number, AbstractControl>): AbstractControl[] | FormGroup[] {
    console.log(Object.values(value));
    return Object.values(value);
  }

}
