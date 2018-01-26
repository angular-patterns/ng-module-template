import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';

import { HttpMonitor } from '../../services/http-monitor';

@Component({
    selector: 'wait',
    templateUrl: 'wait.component.html',
    styleUrls: [
        'wait.component.css'
    ]
})

export class WaitComponent implements OnInit {

    pending: Observable<boolean>;
    
    constructor(public httpMonitor: HttpMonitor) { 
    }

    ngOnInit() { 
        this.pending = this.httpMonitor.pending;
    }
}