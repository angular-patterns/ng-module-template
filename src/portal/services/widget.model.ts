import { Type } from "@angular/core";

export interface Widget{
    name: string;
    component: Type<any>;
}