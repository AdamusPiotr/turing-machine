import { Component, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { range } from 'lodash';
import { filter, map, startWith } from 'rxjs/operators';

import { nextStateValidator } from '../../helpers/nextState.validator';
import { stateSymbolValidator } from '../../helpers/stateSymbol.validator';
import { tapeValidator } from '../../helpers/tapeValidator';

@Component({
  selector: 'app-proper-simulator-component',
  templateUrl: './proper-simulator-component.component.html',
  styleUrls: ['./proper-simulator-component.component.scss']
})
export class ProperSimulatorComponentComponent implements OnDestroy {
  private turingMachinePropertiesForm: FormGroup;
  private tableOfStatesForm: FormGroup;
  private tapeForm: FormGroup;

  private allowedSymbolsArray$: Observable<string[]>;
  private numberOfStatesArray$: Observable<number[]>;
  private turingMachinePropertiesFormValueChanges: Subscription;
  private isEnd = false;

  tapeValue: string[];
  tapeIndex = 0;

  leftAddedSymbols: string[] = ['#', '#', '#'];
  rightAddedSymbols: string[] = ['#', '#', '#'];

  currentState;



  constructor(private fb: FormBuilder) {
    this.turingMachinePropertiesForm = this.generateTuringMachinePropertiesForm();
    this.tapeForm = this.generateTapeForm();
    this.allowedSymbolsArray$ = this.getAllowedSymbolsArrayObservable();
    this.numberOfStatesArray$ = this.getNumberOfStatesArrayObservable();
    this.getTuringMachinePropertiesValueChangesSubscription();
    this.getTapeFormValueChanges();
    this.getTableOfStatesValueChanges();
    this.tableOfStatesForm.patchValue({
      '#': [{ direction: 'P', nextState: 'q1', symbol: 'a' }, { nextState: 'SK' }],
      a: [{ direction: 'P', nextState: 'q0', symbol: 'd' }, { nextState: 'SK' }],
      d: [{ direction: 'P', nextState: 'q0', symbol: 'a' }, { nextState: 'SK' }]
    });

  }

  ngOnDestroy(): void {
    this.turingMachinePropertiesFormValueChanges.unsubscribe();
  }

  getTableOfStatesValueChanges() {
    this.tableOfStatesForm.valueChanges.subscribe((val) => {

      if (!this.currentState || this.tableOfStatesForm.invalid) {
        return;
      }

      const { row, column } = this.currentState;

      this.currentState = {
        ...val[row][column],
        current: true,
        row,
        column
      };

    });
  }


  getTapeFormValueChanges(): Subscription {
    return this.tapeForm.valueChanges.subscribe(({ tape }) => {
      this.tableOfStatesForm.patchValue(clearCurrentState(this.tableOfStatesForm.value));
      this.tapeIndex = 0;

      if (this.tapeForm.valid) {
        this.tapeValue = tape.split('');

        const firstTapeSymbol = tape.slice(0, 1);

        const tableOfStatesCopy = this.tableOfStatesForm.value;

        const markedTableOfStatesCopy = {
          ...tableOfStatesCopy,
          [firstTapeSymbol]: [
            {
              ...tableOfStatesCopy[firstTapeSymbol][0],
              current: true
            },
            ...tableOfStatesCopy[firstTapeSymbol].slice(1),
          ]
        };

        this.currentState = {
          ...this.tableOfStatesForm.value[firstTapeSymbol][0],
          row: firstTapeSymbol,
          column: 0
        };

        this.tableOfStatesForm.patchValue(markedTableOfStatesCopy);
      }
    });
  }

  getTuringMachinePropertiesValueChangesSubscription(): Subscription {
    return this.turingMachinePropertiesFormValueChanges = this.turingMachinePropertiesForm.valueChanges.pipe(startWith({
      allowedSymbols: 'ad',
      numberOfStates: 2
    }), filter(({ numberOfStates }) => numberOfStates < 1000))
      .subscribe((values) => {
        this.generateTableOfStatesForm(values);
      });
  }

  getAllowedSymbolsArrayObservable() {
    return this.allowedSymbolsArray$ = this.turingMachinePropertiesForm.get('allowedSymbols').valueChanges.pipe(
      startWith(''),
      map(String.prototype.split)
    );
  }

  getNumberOfStatesArrayObservable() {
    return this.numberOfStatesArray$ = this.turingMachinePropertiesForm.get('numberOfStates').valueChanges.pipe(
      startWith('2'),
      filter(val => val < 1000),
      map(length => range(0, length))
    );
  }

  generateTuringMachinePropertiesForm() {
    return this.fb.group({
      allowedSymbols: ['ad', [Validators.required, Validators.minLength(2)]],
      numberOfStates: [2, [Validators.required, Validators.min(2)]]
    });
  }

  generateTableOfStatesForm({ allowedSymbols, numberOfStates }): void {
    const generateStateSubFormsArray = () => range(numberOfStates).map(() => this.fb.group({
      nextState: ['SK', [nextStateValidator(numberOfStates)]],
      symbol: ['', [stateSymbolValidator(allowedSymbols + '#')]],
      direction: ['', Validators.pattern('[LP]{1}')],
      current: false
    }));

    const tableOfStatesForm: Record<string, FormArray> = ('#' + allowedSymbols).split('').reduce((acc, next) => ({
      ...acc,
      [next]: this.fb.array(generateStateSubFormsArray())
    }), {});

    this.tableOfStatesForm = this.fb.group({ ...tableOfStatesForm });
  }

  generateTapeForm(): FormGroup {
    return this.fb.group({
      tape: ['', [Validators.required, tapeValidator('ad')]]
    });
  }

  goToNextState() {
    const { symbol, nextState, direction, row, column } = this.currentState;
    this.tableOfStatesForm.patchValue(clearCurrentState(this.tableOfStatesForm.value));

    console.log(clearCurrentState(this.tableOfStatesForm.value));


    if (nextState.toUpperCase() === 'SK') {
      !this.isEnd && window.alert('KONIEC');
      const newStateWithCurrent = this.tableOfStatesForm.value;
      newStateWithCurrent[row][column] = this.currentState;
      this.tableOfStatesForm.patchValue(newStateWithCurrent);

      this.isEnd = true;
      return;
    }


    this.changeProperSymbol(this.tapeIndex, symbol);
    direction.toUpperCase() === 'L' ? this.tapeIndex-- : this.tapeIndex++;

    const nextStateSymbol = this.selectProperSymbol(this.tapeIndex);

    this.currentState = {
      ...this.tableOfStatesForm.value[nextStateSymbol][nextState.slice(1)],
      current: true,
      row: nextStateSymbol,
      column: nextState.slice(1)
    };

    const nextStateValue = this.tableOfStatesForm.value;
    nextStateValue[nextStateSymbol][nextState.slice(1)] = this.currentState;
    this.tableOfStatesForm.patchValue(nextStateValue);

    this.generateAdditionalSymbols(this.tapeIndex);
  }



  selectProperSymbol(tapeIndex) {
    if (tapeIndex >= 0 && tapeIndex < this.tapeValue.length) {
      return this.tapeValue[tapeIndex];
    }
    if (tapeIndex < 0) {
      return this.leftAddedSymbols[Math.abs(tapeIndex) - 1];
    }
    if (tapeIndex >= this.tapeValue.length) {
      return this.rightAddedSymbols[tapeIndex - this.tapeValue.length];
    }
  }

  changeProperSymbol(tapeIndex, symbol): void {
    if (tapeIndex >= 0 && tapeIndex < this.tapeValue.length) {
      this.tapeValue[tapeIndex] = symbol;
    }
    if (tapeIndex < 0) {
      this.leftAddedSymbols[Math.abs(tapeIndex) - 1] = symbol;
    }
    if (tapeIndex >= this.tapeValue.length) {
      this.rightAddedSymbols[tapeIndex - this.tapeValue.length] = symbol;
    }
  }

  generateAdditionalSymbols(tapIndex): void {
    if (tapIndex < 0 && this.leftAddedSymbols.length + tapIndex < 3) {
      this.leftAddedSymbols.push('#');
    }

    if (tapIndex > 0 && this.tapeValue.length + this.rightAddedSymbols.length - tapIndex < 3) {
      this.rightAddedSymbols.push('#');
    }
  }
}

function clearCurrentState(state: Record<string, any[]>) {
  console.log(state);
  console.log(Object.entries(state));
  return Object.entries(state).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: value.map((formGroup) => ({
      ...formGroup,
      current: false
    }))
  }), {});
}


