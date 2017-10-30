      
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
import { InboxWidgetComponent, InboxWidget, AppWidget, AddressWidget, RfrWidget, ScholarshipWidget, InquiryWidget, EdocWidget } from "inbox";
import { Template5Component } from "./portal-templates/template5.component";
import { Template6Component } from "./portal-templates/template6.component";

import { ChartComponent, AppModule as ChartModule } from 'chart';


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
    {
      key: 'template6',
      type: Template6Component
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
    {
      key: 'inbox-widget',
      type: InboxWidget
    },
    {
      key: 'app-widget',
      type: AppWidget
    },
    {
      key: 'address-widget',
      type: AddressWidget
    },
    {
      key: 'rfr-widget',
      type: RfrWidget
    },  
    {
      key: 'scholarship-widget',
      type: ScholarshipWidget
    },   
    {
      key: 'inquiry-widget',
      type: InquiryWidget
    },        
    {
      key: 'edoc-widget',
      type: EdocWidget
    }, 
    {
      key: 'chart-widget',
      type: ChartComponent
    }       
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
    InboxModule,
    ChartModule
  ],
  declarations: [ AppComponent,
    Template1Component, 
    Template2Component,
    Template3Component,
    Template4Component,
    Template5Component,
    Template6Component,
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
    Template6Component,
    MissingWidgetComponent,
    TimeComponent,
    AddressComponent,
    WeatherComponent,
    InboxWidgetComponent,
    InboxWidget,
    InquiryWidget,
    AppWidget,
    RfrWidget,
    AddressWidget,
    ScholarshipWidget,
    EdocWidget,
    ChartComponent
    
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