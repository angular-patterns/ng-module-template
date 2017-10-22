import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
    selector: 'time',
    templateUrl: 'time.component.html'
})

export class TimeComponent implements OnInit {
    date: Date;
    timer: Observable<number>;
    constructor() {
        this.date = new Date();
        this.timer =  Observable.timer(100,100);
    
     }

    ngOnInit() { 
        this.timer.subscribe(t=> {
            this.date = new Date();
        });
    }
}