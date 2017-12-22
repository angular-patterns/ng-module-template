import { ComponentFactoryResolver, Type } from "@angular/core";
import { ViewContainerRef } from "@angular/core";
import { ComponentRef } from "@angular/core";

export class WidgetFactory {
    constructor(private factory: ComponentFactoryResolver) {

    }

    create(view: ViewContainerRef, component: Type<any>) {
        let componentFactory = this.factory.resolveComponentFactory(component);
        
        let ref:ComponentRef<any> = view.createComponent(componentFactory);
    }
}