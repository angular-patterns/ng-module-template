      
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { InboxWidgetComponent } from "./widget/inbox-widget.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, InboxWidgetComponent ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule { }