import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

export class DataResolver implements Resolve<any> {
    value:  Observable<any> | Promise<any> | any;
    constructor() {
        
    }

    setValue(value:  Observable<any> | Promise<any> | any) {
        this.value = value;
    }
    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        return this.value;
    }

}