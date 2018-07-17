import { Type, InjectionToken } from "@angular/core";

export class Widget {
    component: string;
    options: any;
}

export class WidgetRef {
    name: string;
    component: Type<any>;
    optionsSchema: any;
    defaultOptions: any;
    settingsComponent?: Type<any>
}

export const widgetRefToken = new InjectionToken<WidgetRef>('widget ref');