import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/publish';
import 'rxjs/add/operator/merge';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/startWith';

import { ErrorInfo } from './error-handler/shared/error.model';
import { GlobalErrorHandler } from './core/global-error.handler';
import { ErrorHandler } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'sa-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  errors: Observable<ErrorInfo[]>;
  clearEvent: Subject<ErrorInfo[]>;
  constructor(private http:HttpClient, @Inject(ErrorHandler) private errorHandler: GlobalErrorHandler) {
    this.clearEvent = new Subject<ErrorInfo[]>();
    this.errors =  Observable.merge(
        this.getErrors(),
        this.errorHandler.lastError.switchMap(t=>this.getErrors()),
        this.clearEvent
           .switchMap(t=> this.getErrors())
           .mergeMap(t=> Observable.forkJoin(t.map(x=>this.http.delete(`http://localhost:3000/errors/${x.id}`))))
           .map(t=>[])   
        );
  }
  simulateError1() {
    throw new Error("this is a general error");
  }
  simulateError2() {
    this.http.get('http://urldoesnotexist').subscribe();
  }
  getErrors() {
    return this.http.get<ErrorInfo[]>('http://localhost:3000/errors?_sort=id&_order=desc');     
  }
  clear() {
    this.clearEvent.next();
  }


}
