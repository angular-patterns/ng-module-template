import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class HttpMonitor {
    public pending: Observable<boolean>;
    private pendingRequests: BehaviorSubject<string[]>;
    private requests: string[];

    constructor() {
        this.requests = [];
        this.pendingRequests = new BehaviorSubject(this.requests);
        this.pending = this.get(t=> true);

    }

    addRequest(url: string) {
        this.requests.push(url);
        this.pendingRequests.next(this.requests)
    }
    removeRequest(url: string) {
        let i = this.requests.indexOf(url);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.pendingRequests.next(this.requests)
    }
    get(predicate: (url: string) => boolean) {
        return this.pendingRequests.map(t=> t.filter(predicate))
            .map(t=> t.length > 0).distinctUntilChanged();
    }
}