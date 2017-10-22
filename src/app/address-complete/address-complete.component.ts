import { Component, ViewChild, AfterViewInit, ElementRef, OnDestroy, Output, EventEmitter, ContentChild, Directive, AfterContentInit, HostListener, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/merge';
import { EventTargetLike } from 'rxjs/observable/FromEventObservable';
import { Observer } from 'rxjs/Observer';
import { Results } from '../models/results.model';
import { AddressFieldDirective } from '../address-field/address-field.directive';
import { Address } from '../models/address.model';
import { Query } from '../models/query.model';
import { Items, Item } from '../models/item.model';

@Component({
  selector: 'address-complete',
  templateUrl: './address-complete.component.html',
  styleUrls: ['./address-complete.component.css']
})
export class AddressCompleteComponent implements AfterContentInit {
  private result: Observable<Results>;
  @Output() selectAddress: EventEmitter<Address>;
  @ContentChild(AddressFieldDirective) addressField: AddressFieldDirective;
  
   constructor(private http:HttpClient) {
     this.selectAddress = new EventEmitter<Address>();
   }

   ngAfterContentInit() {
    this.result = Observable.of('') 
      .merge(this.addressField.keyevent)
      .merge(this.addressField.clearEvent)
      .switchMap(t=>
        t != '' ? 
          this.searchAddresses(t):
          Observable.of({ items: []})
      );
   }

   searchAddresses(s:string) {
     var url = `${process.env.URI}`;
     var params = { params: new Query(s).toParams() };
     var getItems =  this.http.get<Items>(url, params);
     return getItems.map(t=>{ return { items: t.Items } });
   }

   onSelectAddress(item: Item) {
    this.addressField.clear();
    
    var data = item.Description.split(',');
    for(var i = data.length; i < 3; ++i)
      data = ['', ...data];

    var [city, provinceState, postalCode] = data;
    var [postalCode, addressCount] = postalCode.split('-');

    this.selectAddress.emit({
         street: item.Text || '',
         city: city || '',
         provinceState: provinceState || '',
         postalCode: postalCode || '',
         country: 'CAN'
      });

    
   }

}