import { AbstractControl } from '@angular/forms';

export function dontAllowEmptySymbol() {
  return (control: AbstractControl): Record<string, string> => {
    const controlValue = control.value as string;

    return !controlValue.includes('#') ? null : { emptySymbol: 'Not allowed symbol' };
  };

}
