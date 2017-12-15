import { Router, NavigationExtras } from '@angular/router';
import { Injectable, Inject, Injector } from "@angular/core";
import { DataResolver } from './data.resolver';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ModalService {
    constructor(@Inject(Router) private router:Router, private resolver:DataResolver) {

    }

    getValue<T>(injector:Injector):T {
        return <T>injector.get<ActivatedRoute>(ActivatedRoute).snapshot.data.value;
    }

    open(name: string, data?:Observable<any> | Promise<any> | any) {
        this.resolver.setValue(data);
        this.router.navigate([ { outlets: { modal: [name] } }], { skipLocationChange:true});
    }
    close() {
        this.router.navigate([ { outlets: { modal:null } }], { skipLocationChange: true});
    }
}