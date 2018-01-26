import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable } from "rxjs/Observable";

import { WaitMonitor } from '../services/wait.monitor';

import 'rxjs/add/operator/finally'



export class WaitInterceptor implements HttpInterceptor {
    constructor(private waitMonitor: WaitMonitor){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(!req.headers.has('__wait'))
            return next.handle(req);
            
        this.waitMonitor.addRequest(req);
        return next.handle(req).finally(() => {
            this.waitMonitor.removeRequest(req);
        });

    }
}