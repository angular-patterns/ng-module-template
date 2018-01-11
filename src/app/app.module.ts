import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core';
import { CommonModule } from './common';
import { Widget } from './shared/widget.model';
import { FooComponent } from './foo-component';

@NgModule({
  imports:      [ 
    BrowserModule,
    CoreModule.forRoot([
     { key: 'test',component: FooComponent}
    ]),
    CommonModule
  ],
  declarations: [ AppComponent, FooComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
