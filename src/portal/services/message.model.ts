import { Type } from "@angular/core";

export interface Message {
    name: string;
    location: number;
    component: Type<any>;
}