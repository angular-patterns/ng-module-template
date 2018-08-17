import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule,BrowserAnimationsModule, GridModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule {
}
