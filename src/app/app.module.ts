import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PortalSfsModule, DefaultTemplateComponent, AddressWidgetComponent } from "./portal-sfs/portal-sfs.module";

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
        AddressWidgetComponent
    ]
  })
  export class AppModule { }