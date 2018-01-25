import { Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest,HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/scan';

export class RetryInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log(req.url);

        return next.handle(req).retryWhen(function (errors) {
        
            return errors.delay(1000).scan((errorCount, err) => {
                console.log(errorCount);
                if (errorCount >= 2) {
                    throw err;
                }
                return errorCount + 1;
            }, 0);
        });


    }
}