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

            return errors.scan((errorCount, err) => {
                if (errorCount >= retryCount) {
                    throw err;
                }
                console.log(`Retry ${errorCount+1}...`);
                return errorCount + 1;
            }, 0).delay(1000);
        });


    }
}