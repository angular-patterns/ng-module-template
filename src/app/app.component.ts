import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/forkJoin';
import { ErrorModel } from './error-handler/shared/error.model';

@Component({
  selector: 'sa-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  errors: Observable<ErrorModel[]>;
  constructor(private http:HttpClient) {
    this.refresh();
  }
  error1() {
    try {
      throw new Error("this is a general error");
    }
    finally {
      setTimeout(t=> this.refresh());
    }
  }
  error2() {
    this.http.get('http://urldoesnotexist').finally(()=> setTimeout(t=> this.refresh())).subscribe();
  }
  getErrors() {
    return this.http.get<ErrorModel[]>('http://localhost:3000/errors?_sort=id&_order=desc');     
  }
  refresh() {
    this.errors = this.getErrors();
  }
  clear() {
    this.errors = 
      this.getErrors()
      .mergeMap(t=> Observable.forkJoin(t.map(x=>this.http.delete(`http://localhost:3000/errors/${x.id}`))))
      .map(t=> []);
  }

}
