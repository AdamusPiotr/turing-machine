import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss'],

})
export class SimulatorComponent implements OnDestroy {
  private inputDataForm: FormGroup;
  private tapeStringForm: FormGroup;
  private tableOfStatesForm: FormGroup;
  private inputDataFormsValueChangesSubscription: Subscription;
  private currentState;
  private tapeValue = '';
  private currentTapeIndex;
  private activeState;
  private tableOfStates;


  countOfStates;

  set _countOfStates(length: number | string) {
    this.countOfStates = new Array(length).fill('');
  }

  get tableOfStateControls(): Record<string, any> {
    return Object.entries(this.tableOfStates);
  }


  constructor() {
    this.inputDataFormsValueChangesSubscription = this.inputDataForm.valueChanges
      .pipe(
        startWith({ allowedSymbols: '', numberOfStates: 2 })
      )
      .subscribe(({ allowedSymbols, numberOfStates }) => {
        this._countOfStates = numberOfStates;
        this.addSubForm({ allowedSymbols, numberOfStates });
      });

    this.tapeStringForm.valueChanges.pipe(
      startWith()
    ).subscribe(({ tapeString }) => {
      this.tapeValue = '###' + tapeString + '###';
    });

    this.tableOfStates = {
      '#': [{ nextState: 1, symbol: 'a', direction: 'P' }, { nextState: 'SK' }],
      a: [{ nextState: 0, symbol: 'b', direction: 'P' }, { nextState: 'SK' }],
      b: [{ nextState: 0, symbol: 'b', direction: 'P' }, { nextState: 'SK' }]
    };
  }

  ngOnDestroy(): void {
    this.inputDataFormsValueChangesSubscription.unsubscribe();
  }

  nextStep() {
    if (!this.currentState) {
      this.currentTapeIndex = 3;
      const activeSymbol = this.tapeValue.split('')[this.currentTapeIndex];

      console.log(activeSymbol);

      this.currentState = cloneDeep(this.tableOfStates);

      this.currentState[activeSymbol][0].current = true;

      this.activeState = {
        ...this.currentState[activeSymbol][0],
        activeRow: activeSymbol,
        rowIndex: 0,
      };

      return;
    }

    const activeSymbol = this.tapeValue.split('')[this.currentTapeIndex];

    const { activeRow, rowIndex, symbol, nextState, direction } = this.activeState;

    if (nextState === 'SK') {
    }

    this.changeTape(this.currentTapeIndex, symbol);
    this.currentTapeIndex = this.moveTape(direction);
    this.currentState[activeRow][rowIndex].current = false;
    this.currentState[activeSymbol][nextState].current = true;
    console.log(this.currentStates);
    this.activeState = { ...this.currentsState[symbol][nextState], activeRow: activeSymbol, rowIndex: nextState };


  }

  changeTape(index, symbol) {
    const tapeValueCharArray = this.tapeValue.split('');
    tapeValueCharArray[index] = symbol;
    this.tapeValue = tapeValueCharArray.join('');
  }

  moveTape(direction) {
    if (direction.toUpperCase() === 'L') {
      return this.currentTapeIndex - 1;
    } else if (direction.toUpperCase() === 'P') {
      return this.currentTapeIndex + 1;
    }
  }

  addSubForm({ allowedSymbols, numberOfStates }): void {

    const generateStateSubFormsArray = () => new Array(+numberOfStates).fill('').map(() => ({
      nextState: 'SK',
      symbol: '',
      direction: '',
      current: false
    }));

    const tableOfStatesForm = () => ('#' + allowedSymbols).split('').reduce((acc, next, index) => ({
      ...acc,
      [next]: generateStateSubFormsArray()
    }), {});

    this.tableOfStates = tableOfStatesForm();
    // this.tableOfStatesForm = this.formBuilder.group(tableOfStatesForm());
  }

  handleNextStateChange(event, subform) {
    subform.nextState = event.target.value;
  }

  handleSymbolChange(event, subform) {
    subform.symbol = event.target.value;
  }

  handleDirectionChange(event, subform) {
    subform.direction = event.target.value;
  }

}

