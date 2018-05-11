import { Type } from "@angular/core";

export interface LayoutRef {
    key: string,
    name: string,
    component: Type<any>;
}