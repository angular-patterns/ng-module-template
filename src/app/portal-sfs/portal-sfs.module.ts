import { NgModule, ModuleWithProviders } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PortalCoreModule } from '@portal/core';
import { PortalUiModule } from '../portal-ui/portal-ui.module';
import { DefaultTemplateComponent } from "./templates/default/default-template.component";
import { AddressWidgetComponent } from "./widgets/address/address-widget.component";

export { DefaultTemplateComponent } from "./templates/default/default-template.component";
export { AddressWidgetComponent } from "./widgets/address/address-widget.component";
var portalCoreModule:ModuleWithProviders = PortalCoreModule.forRoot({
    portals: [
        { name:'default-template', component: DefaultTemplateComponent }
        
    ],
    widgets: [
        { name: 'address-widget', component: AddressWidgetComponent }
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
      AddressWidgetComponent
    ],
    exports: [
        DefaultTemplateComponent,
        AddressWidgetComponent,
        portalCoreModule.ngModule
    ]  
})
export class PortalSfsModule { }