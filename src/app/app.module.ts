import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValuesPipe } from './pipes/values.pipe';
import { KeysPipe } from './pipes/unique-symbols.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrentFormValuePipe } from './pipes/current-form-value.pipe';
import { SplitPipe } from './pipes/split.pipe';
import { ProperSimulatorComponentComponent } from './components/proper-simulator-component/proper-simulator-component.component';
import { InputResizeDirective } from './input-resize.directive';
import { RangePipe } from './pipes/range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ValuesPipe,
    KeysPipe,
    CurrentFormValuePipe,
    SplitPipe,
    ProperSimulatorComponentComponent,
    InputResizeDirective,
    RangePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
