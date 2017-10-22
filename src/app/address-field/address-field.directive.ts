import { Observable } from 'rxjs/Observable';
import { EventTargetLike } from 'rxjs/observable/FromEventObservable';
import { Observer } from 'rxjs/Observer';
import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[address-field]'
  })
  export class AddressFieldDirective  {
    public keyevent: Observable<string>;
    public clearEvent: Observable<string>;
    private observer: Observer<string>;
  
    constructor(public elementRef: ElementRef) {
      this.clearEvent = Observable.create(o => {
          this.observer = o;
      });
      this.keyevent = Observable
        .fromEvent<KeyboardEvent>(this.elementRef.nativeElement, "keypress")
        .map(t=> this.elementRef.nativeElement.value  + String.fromCharCode(t.which))
        .debounceTime(300)
    
    }
  
    clear() {
      this.elementRef.nativeElement.value = '';
      this.observer.next('');
    }
  
  }