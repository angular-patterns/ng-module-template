import { Type } from "@angular/core";
import { WidgetComponent } from "../widget/widget.component";
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
    widget: string;
}

export interface PortalConfig {
    portals: Portal[],
    widgets: Widget[]
}
