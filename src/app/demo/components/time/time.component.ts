import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/startWith';


@Component({
    selector: 'time',
    templateUrl: 'time.component.html'
})

export class TimeComponent implements OnInit {
    currentTime: Observable<Date>;
    constructor() { 
        this.currentTime = Observable.interval(1000).startWith(0).map(t=> new Date()).shareReplay(1);
    }

    ngOnInit() { }
}