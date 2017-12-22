import { ComponentFactoryResolver, Type } from "@angular/core";
import { ViewContainerRef } from "@angular/core";
import { ComponentRef } from "@angular/core";
import { Injectable } from "@angular/core";
import { Inject } from "@angular/core";

@Injectable()
export class WidgetFactory {
    constructor(@Inject(ComponentFactoryResolver) private factory: ComponentFactoryResolver) {

    }

    create(view: ViewContainerRef, component: Type<any>) {
        let componentFactory = this.factory.resolveComponentFactory(component);
        
        let ref:ComponentRef<any> = view.createComponent(componentFactory);
    }
}