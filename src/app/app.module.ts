import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
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
import { ScholarshipPortalComponent } from "../public_api";

@NgModule({
    imports:      [ 
        BrowserModule, 
        PortalSfsModule
    ],
    declarations: [ 
        AppComponent,
        ScholarshipPortalComponent
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