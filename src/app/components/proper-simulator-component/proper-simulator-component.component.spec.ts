import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperSimulatorComponentComponent } from './proper-simulator-component.component';

describe('ProperSimulatorComponentComponent', () => {
  let component: ProperSimulatorComponentComponent;
  let fixture: ComponentFixture<ProperSimulatorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProperSimulatorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProperSimulatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
