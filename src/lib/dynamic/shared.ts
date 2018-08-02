import { Type, InjectionToken } from "@angular/core";

export class Widget {
    component: string;
    options: any;
}

export class WidgetRef {
    name: string;
    component: Type<any>;
}

export const widgetRefToken = new InjectionToken<WidgetRef>('widget ref');

export class Options {
    
}
export interface DropEvent<T> {
    widget: WidgetRef;
    args: T
}