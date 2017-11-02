import { Type } from "@angular/core";
import { WidgetComponent } from "../widget/widget.component";
export declare type Portals = Portal[];
export declare type Portlets = Portlet[];
export declare type Widgets = Widget[];

export interface Portal {
    name: string;
    component: Type<any>;
}

export interface Portlet {
    name: string;
    component: Type<any>;
}

export interface Widget {
    name: string;
    component: Type<any>;
}

export interface Message {
    location: number;
    widget: string;
    portlet: string;
}

export interface PortalConfig {
    portals: Portal[],
    portlets: Portlet[],
    widgets: Widget[]
}

export interface PortletComponentRef {
    widget: string;
}