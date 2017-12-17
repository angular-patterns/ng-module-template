import { Router, NavigationExtras } from '@angular/router';
import { Injectable, Inject, Injector } from "@angular/core";
import { DataResolver } from './data.resolver';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';
import { Observer } from 'rxjs/Observer';
import { Result } from '../models/result.model';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ModalService {
    results: Result<any>[];

    constructor(@Inject(Router) private router:Router, private resolver:DataResolver) {
        this.results = [];
    }

    getValue(): any {
        if (this.router.routerState 
            && this.router.routerState.snapshot 
            && this.router.routerState.snapshot.root) {
                var snapshot:ActivatedRouteSnapshot = this.router.routerState.snapshot.root.children.filter(t=>t.outlet == 'modal')[0];
                return snapshot.data.value;
            }
        return undefined;
    }

    open<T>(name: string, data?:Observable<T> | Promise<T> | T) {
        this.resolver.setValue(data);
        this.router.navigate([ { outlets: { modal: [name] } }], { skipLocationChange:true});
        var result = new Result<T>(name);
        this.results.push(result);
        return result;

    }
    close() {
       
        this.router.navigate([ { outlets: { modal:null } }], { skipLocationChange: true});
        this.results.splice(this.results.length-1, 1);
    }

    ok(value?:any) {
        this.results[this.results.length-1].nextOk(value);
        this.close();

    }
    cancel() { 
        this.results[this.results.length-1].nextCancel();
        this.close();
        
    }

    
}