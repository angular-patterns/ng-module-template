import { NgModule, ModuleWithProviders } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PortalCoreModule } from '@portal/core';
import { PortalUiModule } from '../portal-ui/portal-ui.module';
import { DefaultTemplateComponent } from "./templates/default/default-template.component";
import { AddressWidgetComponent } from "./widgets/address/address-widget.component";
import { InboxWidgetComponent } from "./widgets/inbox/inbox-widget.component";
import { AppWidgetComponent } from "./widgets/app/app-widget.component";
import { EdocWidgetComponent } from "./widgets/edoc/edoc-widget.component";
import { InquiryWidgetComponent } from "./widgets/inquiry/inquiry-widget.component";
import { RfrWidgetComponent } from "./widgets/rfr/rfr-widget.component";
import { ScholarshipWidgetComponent } from "./widgets/scholarship/scholarship-widget.component";

export { DefaultTemplateComponent } from "./templates/default/default-template.component";
export { AddressWidgetComponent } from "./widgets/address/address-widget.component";
export { InboxWidgetComponent } from "./widgets/inbox/inbox-widget.component";
export { AppWidgetComponent } from "./widgets/app/app-widget.component";
export { EdocWidgetComponent } from "./widgets/edoc/edoc-widget.component";
export { InquiryWidgetComponent } from "./widgets/inquiry/inquiry-widget.component";
export { RfrWidgetComponent } from "./widgets/rfr/rfr-widget.component";
export { ScholarshipWidgetComponent } from "./widgets/scholarship/scholarship-widget.component";

var portalCoreModule:ModuleWithProviders = PortalCoreModule.forRoot({
    portals: [
        { name:'default-template', component: DefaultTemplateComponent }
        
    ],
    widgets: [
        { name: 'address-widget', component: AddressWidgetComponent },
        { name: 'inbox-widget', component: InboxWidgetComponent },
        { name: 'app-widget', component: AppWidgetComponent },
        { name: 'edoc-widget', component: EdocWidgetComponent },
        { name: 'inquiry-widget', component: InquiryWidgetComponent },
        { name: 'rfr-widget', component: RfrWidgetComponent },
        { name: 'scholarship-widget', component: ScholarshipWidgetComponent },
        
    ]
});

@NgModule({
    imports:      [ 
      BrowserModule, 
      PortalUiModule,
      portalCoreModule,
    ],
    declarations: [ 
      DefaultTemplateComponent,
      AddressWidgetComponent,
      InboxWidgetComponent,
      AppWidgetComponent,
      EdocWidgetComponent,
      InquiryWidgetComponent,
      RfrWidgetComponent,
      ScholarshipWidgetComponent
    ],
    exports: [
        portalCoreModule.ngModule,
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
export class PortalSfsModule { }