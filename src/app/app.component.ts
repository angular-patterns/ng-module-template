import { Component, ViewChild, AfterViewInit, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Item, Items } from './models/item.model';
import { Observable } from 'rxjs/Observable';
import { Address } from './models/address.model';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  address:Address;
  constructor() {
    this.address = {
      street: '',
      provinceState: '',
      postalCode: '',
      country: '',
      city: ''
    }
  }

  onAddress(address:Address) {
    console.log(address);
    this.address = address;
  }

}