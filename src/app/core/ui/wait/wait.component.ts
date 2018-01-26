import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/debounceTime';

import { WaitMonitor } from '../../services/wait.monitor';

@Component({
    selector: 'wait',
    templateUrl: 'wait.component.html',
    styleUrls: [
        'wait.component.css'
    ]
})

export class WaitComponent implements OnInit {

    pending: Observable<boolean>;
    
    constructor(public waitMonitor: WaitMonitor) { 
    }

    ngOnInit() { 
        this.pending = this.waitMonitor.pending;
    }
}