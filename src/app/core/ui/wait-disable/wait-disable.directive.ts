import { Directive, OnInit,HostBinding, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WaitMonitor } from '../../services/wait.monitor';
@Directive({
    selector: '[wait-disable]'
})

export class WaitDisableDirective implements OnInit, OnDestroy {
    @HostBinding('disabled') disabled: boolean;
    private subscription: Subscription;
    constructor(private waitMonitor: WaitMonitor) {

    }

    ngOnInit() {
        this.subscription = this.waitMonitor.pending.subscribe(t=> {
            this.disabled = t;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}