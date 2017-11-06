import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { 
    PortalSfsModule, 
    DefaultTemplateComponent, 
    AddressWidgetComponent, 
    InboxWidgetComponent,
    AppWidgetComponent,
    EdocWidgetComponent,
    InquiryWidgetComponent,
    RfrWidgetComponent,
    ScholarshipWidgetComponent
} 
from "./portal-sfs/portal-sfs.module";

@NgModule({
    imports:      [ 
        BrowserModule, 
        PortalSfsModule
    ],
    declarations: [ 
        AppComponent
    ],
    bootstrap:    [ 
        AppComponent 
    ],
    entryComponents: [
        DefaultTemplateComponent,
        AddressWidgetComponent,
        InboxWidgetComponent,
        AppWidgetComponent,
        EdocWidgetComponent,
        InquiryWidgetComponent,
        RfrWidgetComponent,
        ScholarshipWidgetComponent
    ]
  })
  export class AppModule { }