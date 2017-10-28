import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TimeComponent } from 'time';
import { WeatherComponent } from 'weather';
import { WidgetProvider } from './widget.provider';

@Injectable()
export class WidgetFactory {
    
    constructor(private componentFactoryResolver: ComponentFactoryResolver, private widgetProvider:WidgetProvider) { 

    }

    create(view:ViewContainerRef, key: string) {
        var widget = this.widgetProvider.findWidget(key);            
        var factory = this.componentFactoryResolver.resolveComponentFactory(widget.type);
        var component = view.createComponent(factory);
        component.instance[key] = key;
        return component;
    }
}