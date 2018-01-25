import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/finally'
import { HttpMonitor } from '../services/http-monitor';



export class RequestInterceptor implements HttpInterceptor {
    constructor(private httpMonitor: HttpMonitor){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       this.httpMonitor.addRequest(req);
        return next.handle(req).finally(() => {
            this.httpMonitor.removeRequest(req);
        })

    }
}