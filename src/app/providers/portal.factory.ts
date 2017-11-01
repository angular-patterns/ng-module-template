import { PortalProvider } from "./portal.provider";
import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from "@angular/core";


@Injectable()
export class PortalFactory {
  constructor(private portalProvider:PortalProvider, private componentFactoryResolver: ComponentFactoryResolver) {

  }

  create(view:ViewContainerRef, name: string): ComponentRef<any> {
      var portal = this.portalProvider.find(name);
      var factory = this.componentFactoryResolver.resolveComponentFactory(portal);
      return view.createComponent(factory);
  }
}
