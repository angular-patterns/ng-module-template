import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';

import { HttpMonitor } from '../../services/http-monitor';

@Component({
    selector: 'spinner',
    templateUrl: 'spinner.component.html',
    styleUrls: [
        'spinner.component.css'
    ]
})

export class SpinnerComponent implements OnInit {

    pending: Observable<boolean>;
    
    constructor(public httpMonitor: HttpMonitor) { 
    }

    ngOnInit() { 
        this.pending = this.httpMonitor.pending;
    }
}