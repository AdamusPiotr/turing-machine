import { AbstractControl } from '@angular/forms';

export function stateSymbolValidator(allowedSymbols: string,) {
  return (control: AbstractControl): Record<string, string> => {
    const controlValue = control.value as string;

    return allowedSymbols.includes(controlValue) ? null : { stateSymbol: 'Not allowed symbol' };
  };

}
