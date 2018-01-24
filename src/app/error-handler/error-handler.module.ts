import { NgModule, ErrorHandler, InjectionToken } from '@angular/core';
import { FormatterFactory } from './formatter.factory';
import { Formatter } from './shared/formatter';
import { ERROR_FORMATTERS } from './index';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RetryInterceptor } from './retry.interceptor';

export const FormatterToken = new InjectionToken<Formatter[]>("Error Formatters");

export class Test {

}

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        ERROR_FORMATTERS,
        { provide: FormatterFactory, useFactory: (...formatters)=> new FormatterFactory(formatters), deps: ERROR_FORMATTERS},
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RetryInterceptor,
            multi: true,
        }
  
    ]
})
export class ErrorHandlerModule { 

}

