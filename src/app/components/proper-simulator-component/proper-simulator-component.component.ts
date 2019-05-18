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

    this.turingMachinePropertiesFormValueChanges = this.turingMachinePropertiesForm.valueChanges.pipe(startWith({
      allowedSymbols: 'ad',
      numberOfStates: 2
    }), filter(({ numberOfStates }) => numberOfStates < 1000))
      .subscribe((values) => {
        this.generateTableOfStatesForm(values);
      });


    this.tapeForm.valueChanges.subscribe(({ tape }: { tape: string }) => {
      this.tableOfStatesForm.patchValue(clearCurrentState(this.tableOfStatesForm.value));

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

    this.tableOfStatesForm.patchValue({
      '#': [{ direction: 'P', nextState: 'q1', symbol: 'a' }, { nextState: 'SK' }],
      a: [{ direction: 'P', nextState: 'q1', symbol: 'd' }, { nextState: 'SK' }],
      d: [{ direction: 'P', nextState: 'q1', symbol: 'a' }, { nextState: 'SK' }]
    });

  }

  ngOnDestroy(): void {
    this.turingMachinePropertiesFormValueChanges.unsubscribe();
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
      direction: ['', Validators.pattern('')],
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
    const { symbol, nextState, direction } = this.currentState;

    if (nextState.toUpperCase() === 'SK') {
      !this.isEnd && window.alert('KONIEC');

      this.isEnd = true;
      return;
    }

    this.tableOfStatesForm.patchValue(clearCurrentState(this.tableOfStatesForm.value));

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

  }



  selectProperSymbol(tapeIndex) {
    if (tapeIndex >= 0 && tapeIndex < this.tapeValue.length) {
      return this.tapeValue[tapeIndex];
    }
    if (tapeIndex < 0) {
      return this.leftAddedSymbols[tapeIndex];
    }
    if (tapeIndex >= this.tapeValue.length) {
      console.log('here man');
      console.log(this.tapeValue.length, tapeIndex);
      return this.rightAddedSymbols[tapeIndex - this.tapeValue.length];
    }
  }

  changeProperSymbol(tapeIndex, symbol): void {
    if (tapeIndex >= 0 && tapeIndex < this.tapeValue.length) {
      this.tapeValue[tapeIndex] = symbol;
    }
    if (tapeIndex < 0) {
      this.leftAddedSymbols[tapeIndex] = symbol;
    }
    if (tapeIndex >= this.tapeValue.length) {
      this.rightAddedSymbols[tapeIndex - this.tapeValue.length] = symbol;
    }
  }
}

function clearCurrentState(state: Record<string, any[]>) {
  return Object.entries(state).reduce((acc, [key, value]) => ({
    ...acc, [key]: value.map((formGroup) => ({
      ...formGroup,
      current: false
    }))
  }));
}


