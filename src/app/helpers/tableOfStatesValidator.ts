import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const oneStateValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const nextState = control.get('nextState').value;
  const symbol = control.get('symbol').value;
  const direction = control.get('direction').value;

  console.log(nextState, symbol, direction);

  if (nextState === 'SK') {
    return (symbol === '' && direction === '') ? null : { tableValidator: true };
  }

  if (nextState !== 'SK') {
    return (symbol !== '' && direction !== '') ? null : { tableValidator: true };
  }

  // return nextState !== 'SK' && symbol !== '' || direction !== '' ? { tableValidator: true } : null;
};
