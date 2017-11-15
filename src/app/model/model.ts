import { Type } from "@angular/core";

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
