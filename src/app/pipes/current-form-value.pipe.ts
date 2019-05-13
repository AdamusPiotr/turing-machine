import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentFormValue'
})
export class CurrentFormValuePipe implements PipeTransform {

  transform(value: any, [formIndex, subFormIndex]): any {
    const properIndex = Object.keys(value)[formIndex];

    return value[properIndex][subFormIndex].current;
  }

}
