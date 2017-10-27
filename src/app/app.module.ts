      
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AppModule as TimeModule, TimeComponent } from 'time';
import { WidgetComponent } from './widget/widget.component';
import { WidgetFactory } from './widget/widget.factory';

@NgModule({
  imports:      [ BrowserModule,TimeModule ],
  declarations: [ AppComponent, WidgetComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  entryComponents: [TimeComponent],
  providers: [WidgetFactory]
})
export class AppModule { }