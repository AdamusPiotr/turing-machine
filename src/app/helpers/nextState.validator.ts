import { AbstractControl, ValidatorFn } from '@angular/forms';

export function nextStateValidator(highestState: number): ValidatorFn {
  return (control: AbstractControl): Record<string, any> => {
    const controlValue = control.value as string;

    const isLastState = controlValue.toUpperCase() === 'SK';
    const nextStateNumber = +controlValue.slice(1);

    const isNextStateLowerThanMaxState = controlValue.slice(1) !== '' && !isNaN(nextStateNumber) && nextStateNumber < highestState;

    const isValidNextState = controlValue.charAt(0) === 'q' && isNextStateLowerThanMaxState;

    if (isValidNextState || isLastState) {
      return null;
    }

    return { notValidState: controlValue };

  };
}
