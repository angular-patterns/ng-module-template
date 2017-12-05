import { Router, NavigationExtras } from '@angular/router';
import { Injectable, Inject } from "@angular/core";

@Injectable()
export class ModalService {
    constructor(@Inject(Router) private router:Router) {

    }
    open(name: string) {
        this.router.navigate([ { outlets: { modal: [name] } }], { skipLocationChange:true});
    }
    close() {
        this.router.navigate([ { outlets: { modal:null } }], { skipLocationChange: true});
    }
}