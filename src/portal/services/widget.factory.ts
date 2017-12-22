import { ComponentFactoryResolver, Type, Inject, Injectable, ViewContainerRef, ComponentRef } from "@angular/core";
import { optionsToken } from "../portal.module";
import { PortalOptions } from "./portal-options.model";


@Injectable()
export class WidgetFactory {
    constructor(@Inject(ComponentFactoryResolver) private factory: ComponentFactoryResolver, 
        @Inject(optionsToken) private options:PortalOptions) {
           
    }

    create(view: ViewContainerRef, component: Type<any>) {
        if (component != null) {

            let componentFactory = this.factory.resolveComponentFactory(component);
            let ref:ComponentRef<any> = view.createComponent(componentFactory);
        }
        else {
           
            if (this.options.missing) {
              
                let componentFactory = this.factory.resolveComponentFactory(this.options.missing);
                let ref:ComponentRef<any> = view.createComponent(componentFactory);
            }
        }
    }
}