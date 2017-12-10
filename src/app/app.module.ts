import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneralComponent } from './general/general.component';
import { AngularComponent } from './angular/angular.component';


@NgModule({
  imports:      [ BrowserModule, HttpClientModule],
  declarations: [ AppComponent, GeneralComponent, AngularComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
