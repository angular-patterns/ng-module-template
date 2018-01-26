import { Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest,HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/scan';

export class RetryInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log(req.url);
        return !req.headers.has('__retry') ?
            next.handle(req) : 
            next.handle(req).retryWhen(function (errors) {
            let retryCount: number = 1;
            try { retryCount = parseInt(req.headers.get('__retry')); }
            catch(err) { console.log(err); }
            
            return errors.delay(1000).scan((errorCount, err) => {
                console.log(`Retry ${errorCount}...`);
                if (errorCount >= retryCount) {
                    throw err;
                }
                return errorCount + 1;
            }, 0);
        });


    }
}