import { NgModule, ModuleWithProviders } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PortalCoreModule } from '@portal/core';
import { PortalUiModule } from '../portal-ui/portal-ui.module';
import { AppModule as WeatherModule } from 'weather';
import { AppModule as AddressLookupModule } from 'address';
import { AppModule as TimeModule } from 'time';

import { DefaultTemplateComponent } from "./templates/default/default-template.component";
import { ThreeColumnTemplateComponent } from "./templates/three-column/three-column-template.component";
import { AddressWidgetComponent } from "./widgets/address/address-widget.component";
import { InboxWidgetComponent } from "./widgets/inbox/inbox-widget.component";
import { AppWidgetComponent } from "./widgets/app/app-widget.component";
import { EdocWidgetComponent } from "./widgets/edoc/edoc-widget.component";
import { InquiryWidgetComponent } from "./widgets/inquiry/inquiry-widget.component";
import { RfrWidgetComponent } from "./widgets/rfr/rfr-widget.component";
import { ScholarshipWidgetComponent } from "./widgets/scholarship/scholarship-widget.component";
import { WeatherWidgetComponent } from "./widgets/weather/weather-widget.component";
import { AddressLookupWidgetComponent } from "./widgets/address-lookup/address-lookup-widget.component";
import { TimeWidgetComponent } from "./widgets/time/time-widget.component";

export { DefaultTemplateComponent } from "./templates/default/default-template.component";
export { ThreeColumnTemplateComponent } from "./templates/three-column/three-column-template.component";
export { AddressWidgetComponent } from "./widgets/address/address-widget.component";
export { InboxWidgetComponent } from "./widgets/inbox/inbox-widget.component";
export { AppWidgetComponent } from "./widgets/app/app-widget.component";
export { EdocWidgetComponent } from "./widgets/edoc/edoc-widget.component";
export { InquiryWidgetComponent } from "./widgets/inquiry/inquiry-widget.component";
export { RfrWidgetComponent } from "./widgets/rfr/rfr-widget.component";
export { ScholarshipWidgetComponent } from "./widgets/scholarship/scholarship-widget.component";
export { WeatherWidgetComponent } from "./widgets/weather/weather-widget.component";
export { AddressLookupWidgetComponent } from "./widgets/address-lookup/address-lookup-widget.component";
export { TimeWidgetComponent } from "./widgets/time/time-widget.component";

var portalCoreModule:ModuleWithProviders = PortalCoreModule.forRoot({
    portals: [
        { name:'default-template', component: DefaultTemplateComponent },
        { name:'three-column-template', component: ThreeColumnTemplateComponent },
    ],
    widgets: [
        { name: 'address-widget', component: AddressWidgetComponent },
        { name: 'inbox-widget', component: InboxWidgetComponent },
        { name: 'app-widget', component: AppWidgetComponent },
        { name: 'edoc-widget', component: EdocWidgetComponent },
        { name: 'inquiry-widget', component: InquiryWidgetComponent },
        { name: 'rfr-widget', component: RfrWidgetComponent },
        { name: 'scholarship-widget', component: ScholarshipWidgetComponent },
        { name: 'weather-widget', component: WeatherWidgetComponent },
        { name: 'address-lookup-widget', component: AddressLookupWidgetComponent },
        { name: 'time-widget', component: TimeWidgetComponent },
        
    ]
});

@NgModule({
    imports:      [ 
      BrowserModule, 
      WeatherModule,
      TimeModule,
      AddressLookupModule,
      PortalUiModule,
      portalCoreModule,
    ],
    declarations: [ 
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
    ],
    exports: [
        portalCoreModule.ngModule,
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
export class PortalSfsModule { }