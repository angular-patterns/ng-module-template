import { NgModule, ErrorHandler, InjectionToken } from '@angular/core';
import { FormatterFactory } from './formatter.factory';
import { Formatter } from './shared/formatter';
import { ERROR_FORMATTERS } from './index';

export const FormatterToken = new InjectionToken<Formatter[]>("Error Formatters");


@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        ERROR_FORMATTERS,
        { provide: FormatterToken, useFactory:(...formatters)=> formatters, deps: ERROR_FORMATTERS},
        { provide: FormatterFactory, useClass: FormatterFactory, deps: [FormatterToken]}
    ]
})
export class ErrorHandlerModule { 

}

