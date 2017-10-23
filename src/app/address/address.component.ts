import { Component, ViewChild, AfterViewInit, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Address } from '../models/address.model';



@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent  {
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