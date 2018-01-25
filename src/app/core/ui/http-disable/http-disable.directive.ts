import { Directive, OnInit,HostBinding, Input } from '@angular/core';
import { HttpMonitor } from '../../services/http-monitor';

@Directive({
    selector: '[http-disable]'
})

export class HttpDisableDirective implements OnInit {
    @HostBinding('disabled') disabled: boolean;

    constructor(private httpMonitor: HttpMonitor) {

    }

    ngOnInit() {
        this.httpMonitor.pending.subscribe(t=> {
            this.disabled = t;
        });

    }
}