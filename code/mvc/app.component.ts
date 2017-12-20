import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('search') search: ElementRef;
  keypress$: Observable<string>;
  results$: Observable<any>;

  title = 'Wikipedia!';

  constructor(private http: HttpClient) {
  }

  searchTerm(term: string) {
    let base = 'https://en.wikipedia.org/w/api.php';
    let params = new HttpParams()
      .append('action', 'opensearch')
      .append('search', term)
      .append('format', 'json');
    return `${base}?${params.toString()}`;

  }

  ngOnInit() {
    this.keypress$ = Observable.fromEvent(this.search.nativeElement, 'input')
      .debounceTime(300).map((t: KeyboardEvent) => this.search.nativeElement.value);

    this.results$ = Observable.of([]).merge(this.keypress$.switchMap(t => {
      return this.http.jsonp<any[]>(this.searchTerm(t), 'callback');
    }));

    this.results$ = this.results$.filter(t => t.length == 4).map(t => {
      return {
        query: t[0],
        items: t[1].map((x, i) => {
          return {
            title: t[1][i],
            description: t[2][i],
            link: t[3][i]
          }

        })
      }
    });

  }
}
