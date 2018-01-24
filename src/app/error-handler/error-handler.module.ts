import { NgModule, ErrorHandler, InjectionToken } from '@angular/core';
import { FormatterFactory } from './formatter.factory';
import { Formatter } from './shared/formatter';
import { ERROR_FORMATTERS } from './index';

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
    ]
})
export class ErrorHandlerModule { 

}

