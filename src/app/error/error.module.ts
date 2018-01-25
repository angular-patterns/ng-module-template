import { NgModule, ErrorHandler, InjectionToken } from '@angular/core';

import { Formatter } from './shared/formatter';
import { ERROR_FORMATTERS } from './index';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormatterFactory } from './services/formatter.factory';

export const FormatterToken = new InjectionToken<Formatter[]>("Error Formatters");

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        ERROR_FORMATTERS,
        {
            provide: FormatterFactory, 
            useFactory: (...formatters)=> new FormatterFactory(formatters), 
            deps: ERROR_FORMATTERS
        }
    ]
})
export class ErrorModule { 

}

