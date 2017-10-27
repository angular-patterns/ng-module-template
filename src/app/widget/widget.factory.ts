import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TimeComponent } from 'time';
import { WeatherComponent } from 'weather';

@Injectable()
export class WidgetFactory {
    
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { 

    }

    create(view:ViewContainerRef, key: string) {
        var type = null;
        if (key == 'time')
            type = TimeComponent;

        if (key == 'weather')
            type = WeatherComponent;
            
        var factory = this.componentFactoryResolver.resolveComponentFactory(type);
;        return view.createComponent(factory);
    }
}