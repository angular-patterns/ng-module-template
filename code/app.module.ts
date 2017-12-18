import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent
    ],
    exports: []
})
export class AppModule {
}
