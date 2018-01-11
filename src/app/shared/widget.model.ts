import { Type } from "@angular/core";

export interface Widget {
    key: string;
    component: Type<any>;
}