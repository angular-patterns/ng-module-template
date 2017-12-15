import { Router, NavigationExtras } from '@angular/router';
import { Injectable, Inject, Injector } from "@angular/core";
import { DataResolver } from './data.resolver';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';
import { Observer } from 'rxjs/Observer';


export class Result {
    name: string;
    ok?: (value:any)=>void;
    cancel?: ()=>void;
    constructor(name: string) {
        this.name = name;
    }
    subscribe(ok?: (value:any)=>void, cancel?:()=>void) {
        this.ok = ok;
        this.cancel = cancel;
    }

    nextOk(value: any) {
        if (this.ok)
            this.ok(value);
    }

    nextCancel() {
        if (this.cancel)
            this.cancel();
    }

}


@Injectable()
export class ModalService {
    results: Result[];

    constructor(@Inject(Router) private router:Router, private resolver:DataResolver) {
        this.results = [];
    }

    getValue<T>(injector:Injector):T {
        return <T>injector.get<ActivatedRoute>(ActivatedRoute).snapshot.data.value;
    }

    open(name: string, data?:Observable<any> | Promise<any> | any) {
        this.resolver.setValue(data);
        this.router.navigate([ { outlets: { modal: [name] } }], { skipLocationChange:true});
        var result = new Result(name);
        this.results.push(result);
        return result;

    }
    close() {
       
        this.router.navigate([ { outlets: { modal:null } }], { skipLocationChange: true});
        this.results.splice(this.results.length-1, 1);
    }

    ok(value:any) {
        this.results[this.results.length-1].nextOk(value);
        this.router.navigate([ { outlets: { modal:null } }], { skipLocationChange: true});
        this.results.splice(this.results.length-1, 1);

    }
    cancel() { 
        this.results[this.results.length-1].nextCancel();
        this.router.navigate([ { outlets: { modal:null } }], { skipLocationChange: true});
        this.results.splice(this.results.length-1, 1);
        
    }

    
}