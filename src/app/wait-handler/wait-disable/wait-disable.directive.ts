import { Directive, OnInit,HostBinding, Input } from '@angular/core';
import { HttpMonitor } from '../http-monitor.service';

@Directive({
    selector: '[wait-disable]'
})

export class WaitDisableDirective implements OnInit {
    @HostBinding('disabled') disabled: boolean;

    constructor(private httpMonitor: HttpMonitor) {

    }

    ngOnInit() {
        this.httpMonitor.pending.subscribe(t=> {
            this.disabled = t;
        });

    }
}