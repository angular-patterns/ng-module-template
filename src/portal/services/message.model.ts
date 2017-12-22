import { Type } from "@angular/core";

export interface InternalMessage {
    name: string;
    location: number;
    component: Type<any>;
}

export interface Message {
    name: string;
    location: number;
}