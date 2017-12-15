import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  constructor(private http:HttpClient) {
    this.title = 'Hello World!';
  }

  throwError() {
    this.http.get('asdfsdfsdfsd').subscribe(t=> {

    });
    //throw new Error("Something went wrong!");
  }


}
