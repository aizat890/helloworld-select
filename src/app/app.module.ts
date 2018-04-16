import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {INgxSelectOptions, NgxSelectModule} from 'ngx-select-ex';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'id',
 optionTextField: 'ds',
  keyCodeToOptionsOpen: 'ArrowDown'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgxSelectModule.forRoot(CustomSelectOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

