import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { PortalProvider } from './portal.provider';


@Injectable()
export class PortalFactory {
    
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private portalProvider:PortalProvider) { 

    }

    create(view:ViewContainerRef, key: string): ComponentRef<any> {
        var widget = this.portalProvider.findPortal(key);            
        var factory = this.componentFactoryResolver.resolveComponentFactory(widget.type);
        var component = view.createComponent(factory);
        component.instance.key = key;
        return component;
    }
}