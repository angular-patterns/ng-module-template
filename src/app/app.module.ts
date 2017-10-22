      
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightComponent } from './highlight/highlight.component';
import { AddressCompleteComponent } from './address-complete/address-complete.component';
import { AddressFieldDirective } from './address-field/address-field.directive';

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpClientModule 
  ],
  declarations: [ 
    AppComponent, 
    HighlightComponent, 
    AddressCompleteComponent, 
    AddressFieldDirective 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }