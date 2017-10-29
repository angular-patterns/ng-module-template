      
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { PortalCoreModule, PortalProvider, WidgetProvider } from '@portal/core';
import { Template1Component } from './portal-templates/template1.component';
import { Template2Component } from './portal-templates/template2.component';
import { Template3Component } from './portal-templates/template3.component';
import { Template4Component } from './portal-templates/template4.component';

import { AppModule as TimeModule, TimeComponent } from 'time';
import { AppModule as AddressModule, AddressComponent } from 'address';
import { AppModule as WeatherModule, WeatherComponent } from 'weather';
import { MissingWidgetComponent } from './widgets/missing-widget.component';
import { AppModule as InboxModule } from 'inbox';
import { InboxWidgetComponent } from "inbox";
import { Template5Component } from "./portal-templates/template5.component";


export var portalProvider = PortalProvider.register(
  [
    {
      key: 'template1',
      type: Template1Component
    },
    {
      key: 'template2',
      type: Template2Component
    },
    {
      key: 'template3',
      type: Template3Component
    },
    {
      key: 'template4',
      type: Template4Component
    },
    {
      key: 'template5',
      type: Template5Component
    },

  ]
);

export var widgetProvider = WidgetProvider.register(
  [
    {
      key: 'time',
      type: TimeComponent
    },
    {
      key: 'weather',
      type: WeatherComponent
    },
    {
      key: 'address',
      type: AddressComponent
    },
    {
      key: 'inbox',
      type: InboxWidgetComponent
    },
    
  ], {
    missingComponent: MissingWidgetComponent
  }
);



@NgModule({
  imports:      [ 
    BrowserModule, 
    PortalCoreModule,
    TimeModule,
    WeatherModule,
    AddressModule,
    InboxModule
  ],
  declarations: [ AppComponent,
    Template1Component, 
    Template2Component,
    Template3Component,
    Template4Component,
    Template5Component,
    MissingWidgetComponent
  ],
  bootstrap:    [ AppComponent ],
  exports: [AppComponent],
  entryComponents: [
    Template1Component, 
    Template2Component,
    Template3Component,
    Template4Component,
    Template5Component,
    MissingWidgetComponent,
    TimeComponent,
    AddressComponent,
    WeatherComponent,
    InboxWidgetComponent
  ],
  providers: [
    {
      provide:PortalProvider,
      useValue: portalProvider
    },
    {
      provide: WidgetProvider,
      useValue: widgetProvider
    }
  ]
})
export class AppModule { 

}