import { WidgetProvider } from "./widget.provider";
import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from "@angular/core";


@Injectable()
export class WidgetFactory {
  constructor(private widgetProvider:WidgetProvider, private componentFactoryResolver: ComponentFactoryResolver) {

  }

  create(view:ViewContainerRef, name: string): ComponentRef<any> {
      
      var widget = this.widgetProvider.find(name);
      var factory = this.componentFactoryResolver.resolveComponentFactory(widget);
      return view.createComponent(factory);
  }
}
