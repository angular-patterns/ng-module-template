import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';

import { WaitMonitor } from '../../services/wait.monitor';

@Component({
    selector: 'spinner',
    templateUrl: 'spinner.component.html',
    styleUrls: [
        'spinner.component.css'
    ]
})

export class SpinnerComponent implements OnInit {

    pending: Observable<boolean>;
    
    constructor(public waitMonitor: WaitMonitor) { 
    }

    ngOnInit() { 
        this.pending = this.waitMonitor.pending;
    }
}