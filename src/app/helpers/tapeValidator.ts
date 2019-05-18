import { AbstractControl } from '@angular/forms';

export function tapeValidator(allowedSymbols: string) {
  return (control: AbstractControl) => {
    const controlValue = control.value as string;

    const isAllowedSymbolsContaintAllLetters = controlValue.split('').every(char => allowedSymbols.includes(char));

    return isAllowedSymbolsContaintAllLetters ? null : { tape: 'Has don\'t allowed characters' };
  };
}
