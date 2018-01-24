import { Component, OnInit, Input } from '@angular/core';
import { HttpMonitor } from '../http-monitor.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'wait',
    templateUrl: 'wait.component.html',
    styleUrls: [
        'wait.component.css'
    ]
})

export class WaitComponent implements OnInit {

    private pending: Observable<boolean>;
    
    constructor(private httpMonitor: HttpMonitor) { 
    }

    ngOnInit() { 
        this.pending = this.httpMonitor.pending;
    }
}