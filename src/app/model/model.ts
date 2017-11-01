import { Type } from "@angular/core";
export declare type Portals = Portal[];
export declare type Widgets = Widget[];

export interface Portal {
    name: string;
    component: Type<any>;
}

export interface Widget {
    name: string;
    component: Type<any>;
}

export interface Message {
    location: number;
    widgetName: string;
}

export interface PortalConfig {
    portals: Portal[],
    widgets: Widget[]
}