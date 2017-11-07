import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
    PortalSfsModule, 
    DefaultTemplateComponent, 
    ThreeColumnTemplateComponent,
    AddressWidgetComponent, 
    InboxWidgetComponent,
    AppWidgetComponent,
    EdocWidgetComponent,
    InquiryWidgetComponent,
    RfrWidgetComponent,
    ScholarshipWidgetComponent,
    WeatherWidgetComponent,
    AddressLookupWidgetComponent,
    TimeWidgetComponent
    
} 
from "./portal-sfs/portal-sfs.module";

@NgModule({
    imports:      [ 
        BrowserModule, 
        PortalSfsModule,
        BrowserAnimationsModule
    ],
    declarations: [ 
        AppComponent
    ],
    bootstrap:    [ 
        AppComponent 
    ],
    entryComponents: [
        DefaultTemplateComponent,
        ThreeColumnTemplateComponent,
        AddressWidgetComponent,
        InboxWidgetComponent,
        AppWidgetComponent,
        EdocWidgetComponent,
        InquiryWidgetComponent,
        RfrWidgetComponent,
        ScholarshipWidgetComponent,
        WeatherWidgetComponent,
        AddressLookupWidgetComponent,
        TimeWidgetComponent
    ]
  })
  export class SaModule { }