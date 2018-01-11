import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/share';

@Component({
    selector: 'time',
    templateUrl: 'time.component.html'
})

export class TimeComponent implements OnInit {
    currentTime: Observable<Date>;
    constructor() { 
        this.currentTime = Observable.interval(1000).map(t=> new Date()).share();
    }

    ngOnInit() { }
}