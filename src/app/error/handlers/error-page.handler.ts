import { ErrorHandler, Injectable, Injector, ChangeDetectorRef, NgZone } from "@angular/core";
import { ErrorInfo } from "../error-info";
import { ModalService } from "ng-bootstrap-modal";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/of';

@Injectable()
export class ErrorPageHandler implements ErrorHandler{
    constructor(private injector:Injector){
        
    }
    handleError(info: ErrorInfo): void {
        this.injector.get(NgZone).run(t=> {
            this.injector.get(ModalService).open('error');
        });
        //this.injector.get(Router).navigate(['error']);
    }

}