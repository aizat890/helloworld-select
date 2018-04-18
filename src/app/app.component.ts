import {Component, ElementRef, HostListener, OnDestroy, ViewChild, ViewChildren} from '@angular/core';
import {FormControl} from '@angular/forms';
import {INgxSelectOption, NgxSelectComponent} from 'ngx-select-ex';
import * as escapeStringNs from 'escape-string-regexp';
import * as $ from 'jquery';
// import {INgxSelectOption} from '../../lib/ngx-select/ngx-select.interfaces';
const escapeString = escapeStringNs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  @ViewChildren('select') mielemento;
  @ViewChildren('select2') mielemento2;
  public items = [
    {id: 1, ds: "uno", selected: true},
    {id: 2, ds: "dos", selected: true},
    {id: 3, ds: "tres", selected: true},
    {id: 4, ds: "cuatro", selected: true},
    {id: 5, ds: "cinco", selected: true},
    {id: 6, ds: "seis", selected: true},
    {id: 7, ds: "siete", selected: true},
    {id: 8, ds: "ocho", selected: true},
    {id: 9, ds: "nueve", selected: true},
    {id: 10, ds: "diez", selected: true}
  ];

  constructor() {
    // let invalid = <FormControl[]>Object.keys(this.form.controls).map(key => this.form.controls[key]).filter(ctl => ctl.invalid);
  }

  isValorSeleccionado(valueSeleccionado: any) {
    console.log("AppComponent | isValorSeleccionado " + valueSeleccionado);
  }

  @HostListener('component:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log($('.form-control'));
    if (event.key === "Enter") {
      // console.log(JSON.stringify(event.key));
      // document.getElementById('select2').focus();
      $('.form-control:eq(2)');
      // $(".form-control").eq( $(".form-control").index( $(':focus') ) + 1 ).focus();
      // console.log(JSON.stringify($(':focus')));
      // console.log('despues de focus');
    } else {
      console.log("else");
    }
  }
}
