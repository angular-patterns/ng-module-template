import { Directive, OnInit,HostBinding, Input, OnDestroy } from '@angular/core';
import { HttpMonitor } from '../../services/http-monitor';
import { Subscription } from 'rxjs/Subscription';
@Directive({
    selector: '[http-disable]'
})

export class HttpDisableDirective implements OnInit, OnDestroy {
    @HostBinding('disabled') disabled: boolean;
    private subscription: Subscription;
    constructor(private httpMonitor: HttpMonitor) {

    }

    ngOnInit() {
        this.subscription = this.httpMonitor.pending.subscribe(t=> {
            this.disabled = t;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}