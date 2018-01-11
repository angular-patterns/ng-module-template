import { Injectable, ViewContainerRef, Type, ComponentFactoryResolver, Inject, ComponentRef } from "@angular/core";
import { Widget } from "../shared/widget.model";
import { WidgetToken } from "./core.module";

@Injectable()
export class WidgetFactory {
    widgetMap: { [key: string]: Widget };
    constructor(
        @Inject(WidgetToken) private widgets: Widget[], 
        @Inject(ComponentFactoryResolver) private factory: ComponentFactoryResolver) {
        this.widgetMap = this.convertToMap(this.widgets);
    }
    private convertToMap(widgets: Widget[]) {
        return widgets.reduce((p:any,c:Widget)=> { p[c.key] = c; return p; },{})
    }

    resolve(key: string): Widget {
        return this.widgetMap[key];
    }

    create(view: ViewContainerRef, component: Type<any>) {
        let componentFactory = this.factory.resolveComponentFactory(component);
        let ref:ComponentRef<any> = view.createComponent(componentFactory);
    }
}