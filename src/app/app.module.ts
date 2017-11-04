      
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports:      [ 
    BrowserModule,
    SharedModule
  ],
  declarations: [ 
    AppComponent 
  ],
  bootstrap:    [ 
    AppComponent 
  ],
  exports: [
    AppComponent
  ]
})
export class AppModule { }