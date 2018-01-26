import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class WaitMonitor {
    public pending: Observable<boolean>;
    private pendingRequests: BehaviorSubject<number>;
    public count: number;
    constructor() {
        this.count = 0;
        this.pendingRequests = new BehaviorSubject(this.count);
        this.pending = this.pendingRequests.map(t=>t > 0).distinctUntilChanged();

    }

    addRequest(request: HttpRequest<any>) {
        this.pendingRequests.next(++this.count);
    }
    removeRequest(request: HttpRequest<any>) {
        this.pendingRequests.next(--this.count);
    }
}