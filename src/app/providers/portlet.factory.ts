import { PortalProvider } from "./portal.provider";
import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from "@angular/core";
import { PortletProvider } from "./portlet.provider";
import { PortletComponentRef } from "../model/model";


@Injectable()
export class PortletFactory {
  constructor(private portletProvider:PortletProvider, private componentFactoryResolver: ComponentFactoryResolver) {

  }

  create(view:ViewContainerRef, name: string): ComponentRef<PortletComponentRef> {
      var portlet = this.portletProvider.find(name);
      var factory = this.componentFactoryResolver.resolveComponentFactory(portlet);
    
      return view.createComponent(factory); 
  }
}
