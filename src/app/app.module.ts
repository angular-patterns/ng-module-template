      
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { InboxWidget } from "./widgets/inbox.widget";
import { WidgetComponent } from "./widget/widget.component";
import { InboxWidgetComponent } from "./inbox/inbox-widget.component";
import { EdocWidget } from "./widgets/edoc.widget";
import { InquiryWidget } from "./widgets/inquiry.widget";
import { AddressWidget } from "./widgets/address.widget";
import { AppWidget } from "./widgets/app.widget";
import { RfrWidget } from "./widgets/rfr.widget";
import { ScholarshipWidget } from "./widgets/scholarship.widget";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent, 
    InboxWidgetComponent,
    WidgetComponent,
    InboxWidget ,
    EdocWidget,
    InquiryWidget,
    AddressWidget,
    AppWidget,
    RfrWidget,
    ScholarshipWidget
  ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent]
})
export class AppModule { }